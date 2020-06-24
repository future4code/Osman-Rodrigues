import * as moment from 'moment';
import * as fs from 'fs';
//1.
//a)

type myEvent = {
  name: string,
  description: string,
  startAt: moment.Moment,
  endAt: moment.Moment
}
type eventsJSON = {
  eventsList: [],
}

//b)
const storageFilePath: string = 'events.json';
const storageFileBuffer: Buffer = fs.readFileSync(storageFilePath);
const storageFileString: string = storageFileBuffer.toString();

const events: eventsJSON = JSON.parse(storageFileString);

const postEvent=(event: myEvent): void=>{
  const eventsList: myEvent[] = events.eventsList;
  eventsList.push(event);

  const toStringEventsList: string = JSON.stringify({eventsList: eventsList})

  fs.writeFileSync(storageFilePath, toStringEventsList)
};

const event1: myEvent ={
  name: "São João em Caruaru",
  description: "Vai ter comida típica de milho, fogueira e forrózim pra rala-bucho até o dia raiar!",
  startAt: moment("23/06/2020 18:00", "DD/MM/YYYY HH:mm"),
  endAt: moment("24/06/2020 06:00", "DD/MM/YYYY HH:mm")
};
const event2: myEvent = {
  name: "Carnaval no Recife Antigo",
  description: "O melhor e maior carnaval do mundo, com direito a show de Lenine, Alceu, Marrom Brasileiro e arrastão de frevo.",
  startAt: moment("01/02/2021 18:00", "DD/MM/YYYY HH:mm"),
  endAt: moment("01/03/2020 05:00", "DD/MM/YYYY HH:mm")
};

postEvent(event2);