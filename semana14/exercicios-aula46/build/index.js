"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const storage_1 = require("./storage");
const services_1 = require("./services");
const event1 = {
    name: "São João em Caruaru",
    description: "Vai ter comida típica de milho, fogueira e forrózim pra rala-bucho até o dia raiar!",
    startAt: moment("23/06/2020 18:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("24/06/2020 06:00", "DD/MM/YYYY HH:mm")
};
const event2 = {
    name: "Carnaval no Recife Antigo",
    description: "O melhor e maior carnaval do mundo, com direito a show de Lenine, Alceu, Marrom Brasileiro e arrastão de frevo.",
    startAt: moment("28/02/2021 18:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("01/03/2021 05:00", "DD/MM/YYYY HH:mm")
};
const event3 = {
    name: "Forró da Budega do Véio",
    description: "Dançar forró pé de serra autêntico na budega mais querida do mundo, que fica em Bezerros/PE.",
    startAt: moment("25/06/2020 18:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("26/06/2020 06:00", "DD/MM/YYYY HH:mm")
};
const event4 = {
    name: "Show de Otto na Praça do Arsenal",
    description: 'Venha assistir ao show de um dos artistas mais excentricos de Pernambuco e do Brasil na histórica Praça do Arsenal.',
    startAt: moment("28/02/2021 22:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("01/03/2021 01:00", "DD/MM/YYYY HH:mm")
};
services_1.getEventsInfos(storage_1.storageFile);
//# sourceMappingURL=index.js.map