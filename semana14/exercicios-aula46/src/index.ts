import * as moment from 'moment';

import{storageFilePath, storageFile} from './storage'
import {myEvent, postEvent, getEventsInfos} from './services'

const event1: myEvent ={
  name: "São João em Caruaru",
  description: "Vai ter comida típica de milho, fogueira e forrózim pra rala-bucho até o dia raiar!",
  startAt: moment("23/06/2020 18:00", "DD/MM/YYYY HH:mm"),
  finishAt: moment("24/06/2020 06:00", "DD/MM/YYYY HH:mm")
};
const event2: myEvent = {
  name: "Carnaval no Recife Antigo",
  description: "O melhor e maior carnaval do mundo, com direito a show de Lenine, Alceu, Marrom Brasileiro e arrastão de frevo.",
  startAt: moment("28/02/2021 18:00", "DD/MM/YYYY HH:mm"),
  finishAt: moment("01/03/2021 05:00","DD/MM/YYYY HH:mm")
};
const event3: myEvent = {
  name: "Forró da Budega do Véio",
  description: "Dançar forró pé de serra autêntico na budega mais querida do mundo, que fica em Bezerros/PE.",
  startAt: moment("25/06/2020 18:00", "DD/MM/YYYY HH:mm"),
  finishAt: moment("26/06/2020 06:00", "DD/MM/YYYY HH:mm")
};
const event4: myEvent = {
  name: "Show de Otto na Praça do Arsenal",
  description: 'Venha assistir ao show de um dos artistas mais excentricos de Pernambuco e do Brasil na histórica Praça do Arsenal.',
  startAt: moment("28/02/2021 22:00", "DD/MM/YYYY HH:mm"),
  finishAt: moment("01/03/2021 01:00", "DD/MM/YYYY HH:mm")
};

//postEvent(
//  'Culinária bananinha', 
//  'Vamos fazer comidas salgadas e doces com bananinhas.', 
//  '24/06/2020 22:00', 
//  '25/06/2020 22:00');
getEventsInfos(storageFile)