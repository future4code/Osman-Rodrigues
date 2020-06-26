"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageFile = exports.storageFilePath = void 0;
const fs = require("fs");
exports.storageFilePath = 'events.json';
const storageFileBuffer = fs.readFileSync(exports.storageFilePath);
const storageFileString = storageFileBuffer.toString();
exports.storageFile = JSON.parse(storageFileString);
//# sourceMappingURL=storage.js.map