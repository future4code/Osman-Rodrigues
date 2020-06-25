"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventsInfos = exports.postEvent = void 0;
const moment = require("moment");
const fs = require("fs");
const storage_1 = require("./storage");
moment.locale('pt-br');
exports.postEvent = (name, description, startAt, finishAt) => {
    if (!name || !description || !startAt || !finishAt) {
        console.log('Insert all event informations: name, descripton, start date and finish date.');
    }
    else if (moment(startAt, "DD/MM/YYYY HH:mm").diff(moment(), 'milliseconds') < 0) {
        console.log('No past dates accepted. Inform future dates only.');
    }
    else {
        const newEvent = {
            name: name,
            description: description,
            startAt: moment(startAt, "DD/MM/YYYY HH:mm"),
            finishAt: moment(finishAt, "DD/MM/YYYY HH:mm")
        };
        const newEventsList = storage_1.storageFile.eventsList;
        newEventsList.push(newEvent);
        const toStringEventsList = JSON.stringify({ eventsList: newEventsList });
        fs.writeFileSync(storage_1.storageFilePath, toStringEventsList);
        console.log(`${newEvent.name} criado com sucesso!`);
    }
};
exports.getEventsInfos = (storageFile) => {
    storageFile.eventsList.forEach(event => {
        const start = moment(event.startAt);
        const finish = moment(event.finishAt);
        const eventDurationInMinutes = finish.diff(start, 'minutes');
        const today = moment();
        const daysUntilEvent = start.diff(today, 'days');
        console.log(`
    Nome: ${event.name}
    Horário de início: ${start.format('dddd, DD [de] MMMM [de] YYYY, HH:mm [h]')}
    Horário de fim: ${finish.format('DD [de] MMMM [de] YYYY, HH:mm [h]')}
    Descrição: ${event.description}.
    Duração: ${eventDurationInMinutes}
    Dias até evento: ${daysUntilEvent}
    `);
    });
};
//# sourceMappingURL=services.js.map