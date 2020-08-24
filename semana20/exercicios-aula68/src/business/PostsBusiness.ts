import {PostsDatabase} from '../data/PostsDatabase';
import {IdGenerator} from '../services/utils/IdGenerator';
import {CustomError} from '../error/CustomError';

export class PostsBusiness{
  
  async createPost(
    img_url: string,
    type?:string,
    create_at?: string,
    description?:string
  ){
    //TODO: validar criação de post mediante access token
    if(! img_url || img_url.trim() === ''){
      throw new CustomError(416,'Missing post image url.');
    }else if(! img_url.includes('http')){
      throw new CustomError(406,'Invalid post image url.');
    };

    const usePostsDb = new PostsDatabase();
    const idGen = new IdGenerator();

    await usePostsDb.createPost({
      id: idGen.generate(),
      img_url,
      type,
      create_at,
      description
    });
  };

  async getPostById(id:string): Promise<any>{
    //TODO: validar consulta de post mediante access token
    if(id.length != 36){
      throw new CustomError(416,'Invalid post id.');
    };
    try{
      const usePostsDb = new PostsDatabase();
      const dbResponse = await usePostsDb.getPostById(id);

      if(! dbResponse){
        throw new CustomError(416,'Post not found.');
      };

      return dbResponse;
    }catch(e){
      throw new CustomError(400, e.message);
    };
  };
};