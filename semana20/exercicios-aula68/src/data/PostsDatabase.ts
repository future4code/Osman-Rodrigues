import {BaseDatabase} from './BaseDatabase';
import {createPostInput} from '../model/PostsModels';
import { response } from 'express';

export class PostsDatabase extends BaseDatabase{
  private tableName: string = process.env.POSTS_DB_NAME;

  public async createPost(input: createPostInput){
    try{
      await this.getConnection()
      .insert({
        id: input.id,
        img_url: input.img_url,
        description: input.description,
        create_at: input.create_at,
        type: input.type
      })
      .into(this.tableName);

    }catch(e){
      throw {message: e.sqlMessage || e.message}
    };
  };
  
  public async getPostById(id:string): Promise<any>{
    try{
      const response = await this.getConnection()
      .select('*')
      .from(this.tableName)
      .where({id});
      
      return response.length === 1 && response[0]
    }catch(e){
      throw {message: e.sqlMessage || e.message}
    };
  }

  public async showFeed(id: string): Promise<any> {
    const usersDbName = process.env.USERS_DB_NAME;
    const postsDbName = process.env.POSTS_DB_NAME;
    const friendshipsDbName = process.env.FRIENDSHIPS_DB_NAME;

    const feedData = await this.getConnection()
      .raw(`
        SELECT post.image_url, post.description, creatorPost.name FROM ${postsDbName} post
        JOIN ${friendshipsDbName} friendship
        ON (post.creator_id = friendship.friend_id OR post.creator_id = friendship.user_id)
        JOIN ${usersDbName} user
        ON (friendship.user_id = user.id OR friendship.friend_id = user.id)
        JOIN ${usersDbName} creatorPost
        ON creatorPost.id = post.creator_id
        WHERE (user.id = '${id}' AND post.creator_id != '${id}')
        ORDER BY post.created_at DESC;
      `)

    return feedData[0];
  }

  public async showFeedByType(postType: string): Promise<any> {
    const usersDbName = process.env.USERS_DB_NAME;
    const postsDbName = process.env.POSTS_DB_NAME;

    const feedData = await this.getConnection()
      .raw(`
        SELECT post.image_url, post.description, creatorPost.name FROM ${postsDbName} post
        JOIN ${usersDbName} creatorPost
        ON post.creator_id = creatorPost.id
        WHERE post.type = '${postType}'
      `)

    return feedData[0];
  }

}