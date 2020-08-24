import { Request, Response } from 'express';
import { Authenticator } from '../services/utils/Authenticator';
import { PostsDatabase } from '../data/PostsDatabase';

export class FeedController {
    async showFeed(request: Request, response: Response) {
        try {
            const { authorization } = request.headers;
            const { type } = request.query;
            const auth = new Authenticator();
            const payload = auth.getData(authorization);
            const postsDb = new PostsDatabase();

            const feedData = await postsDb.showFeed(payload.id);

            await postsDb.destroyConnection();

            return response.send({ feed: feedData });
        } catch(e) {
            response.status(400).send({ error: e.message})
        }
    }

    async showFeedByType(request: Request, response: Response) {
        try {
            const { authorization } = request.headers;
            const { type } = request.query;
            const auth = new Authenticator();
            auth.getData(authorization);
            const postsDb = new PostsDatabase();
    
            const feedData = await postsDb.showFeedByType(type as string);
    
            await postsDb.destroyConnection();
    
            return response.send({ feed: feedData });
        } catch(e) {
            response.status(400).send({ error: e.message });
        }
    }
}