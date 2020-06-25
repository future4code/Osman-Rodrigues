import api from '../services';
import {notificationBody, Subscriber} from '../storage';
import {getAllSubs} from './1'
//5.
//a) A assincronicidade ficaria bagunçada e não conseguiriamos receber e enviar notificações
//na ordem desejada, por tanto, não é recomendável.
//b)
export const nofityAllSubs = async (noficationMsg: string
): Promise<void>=>{
  const allSubsList: Subscriber[] = await getAllSubs();
  /* 
    5.b)

    for(let subs of allSubsList){
    let body: notificationBody;
    await api.post(`notifications/send`, body = {
      subscriberId:`${subs.id}`, message: `${noficationMsg}`
    });
    console.log(`Notificação para ${subs.name} enviada!`)
    } 
  */

  //6.c)
    const promisesArr: Promise<any>[] = [];

    for(let subs of allSubsList){
      console.log(`Enviado notificações para ${subs.name}...`)
      let body: notificationBody;
      promisesArr.push(
        api.post(`notifications/send`, body = {
        subscriberId:`${subs.id}`, message: `${noficationMsg}`
        })
      )
    };

    await Promise.all(promisesArr);
    console.log('Todas as notificações foram enviadas!');
};
/* nofityAllSubs(
  'Vê só que notícia arretada, value!'
); */