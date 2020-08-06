import express from 'express';
import { FeedController } from '../controller/FeedController';

export const feedRouter = express.Router();

feedRouter.get('/', new FeedController().showFeed);
feedRouter.get('/filter', new FeedController().showFeedByType);