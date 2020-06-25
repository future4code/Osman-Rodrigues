"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postEvent = void 0;
const fs = require("fs");
exports.postEvent = (event, storageFile, filePath) => {
    const newEventsList = storageFile.eventsList;
    newEventsList.push(event);
    const toStringEventsList = JSON.stringify({ eventsList: newEventsList });
    fs.writeFileSync(filePath, toStringEventsList);
    console.log(`${event.name} criado com sucesso!`);
};
//# sourceMappingURL=utils.js.map