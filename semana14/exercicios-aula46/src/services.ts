import * as moment from 'moment';
import * as fs from 'fs';
import{storageFile, storageFilePath} from './storage';

moment.locale('pt-br');
//1.
//a)
export type myEvent = {
  name: string,
  description: string,
  startAt: moment.Moment,
  finishAt: moment.Moment
};
//b)
export const postEvent=(
    name: string,
    description: string,
    startAt: string,
    finishAt: string
  ): void=>{
    if(
      //4. a)
      ! name || ! description || !startAt || !finishAt
      ){
      console.log('Insert all event informations: name, descripton, start date and finish date.')
    }else if(
      //4. b)
      moment(startAt, "DD/MM/YYYY HH:mm").diff(moment(), 'milliseconds') < 0
    ){
      console.log('No past dates accepted. Inform future dates only.')
    }else{
      const newEvent: myEvent = {
        name: name,
        description: description,
        startAt: moment(startAt, "DD/MM/YYYY HH:mm"),
        finishAt: moment(finishAt, "DD/MM/YYYY HH:mm")
      };
      const newEventsList: myEvent[] = storageFile.eventsList;
      newEventsList.push(newEvent);
      const toStringEventsList: string = JSON.stringify({eventsList: newEventsList});
      fs.writeFileSync(storageFilePath, toStringEventsList);
      console.log(`${newEvent.name} criado com sucesso!`);
    }
};
//2. 
//a)
export const getEventsInfos =(storageFile:{eventsList:myEvent[]}):void=>{
 
  storageFile.eventsList.forEach(event=>{
    //3.
    const start = moment(event.startAt)
    const finish = moment(event.finishAt)
    const eventDurationInMinutes = finish.diff(start, 'minutes')
    const today = moment();
    const daysUntilEvent = start.diff(today, 'days');

    console.log(
    `
    Nome: ${event.name}
    Horário de início: ${start.format('dddd, DD [de] MMMM [de] YYYY, HH:mm [h]')}
    Horário de fim: ${finish.format('DD [de] MMMM [de] YYYY, HH:mm [h]')}
    Descrição: ${event.description}.
    Duração: ${eventDurationInMinutes}
    Dias até evento: ${daysUntilEvent}
    `
    )
  })
};
//b)
// O locale e format seria adpatado ao 'en-uk' e '"ddd" ao invés de "dddd" no startAt',
// já no finishAt a ordem entre dia e mes seria invertida.
