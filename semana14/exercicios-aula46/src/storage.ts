import * as fs from 'fs';

type eventsJSON = {
  eventsList: [],
}

export const storageFilePath: string = 'events.json';
const storageFileBuffer: Buffer = fs.readFileSync(storageFilePath);
const storageFileString: string = storageFileBuffer.toString();
export const storageFile: eventsJSON = JSON.parse(storageFileString);