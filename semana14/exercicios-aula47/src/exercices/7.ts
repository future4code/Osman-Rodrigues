import api from '../services';
import{newSubs, Subscriber} from '../storage';
import {createNews} from './4';
import {nofityAllSubs} from './5';
import {getAllSubs} from './1';
import { info } from 'console';
//7.
//a)
const createNewSubs = async (
  name: string, email: string
  ): Promise<void> =>{
    let body: newSubs;

    const r = await api.put('subscribers', body={
      name:`${name}`,
      email:`${email}`
    })
    console.log(r.status === 200 && `Usuário(a) ${name} criado(a) com sucesso!`);
};

//b)
const createNewsWithNotification = async (
  newsTitle: string, newsContent: string, notificationMsg: string
): Promise<void> =>{

  await createNews(`${newsTitle}`, `${newsContent}`);
  await nofityAllSubs(`${notificationMsg}`);
  console.log('Conteúdo criado e espalhado com sucesso!');
};
//c)
const getAllUsersNotifications = async (): Promise<void>=>{
  const promisesArr: Promise<any>[] = [];
  const subsList: Subscriber[] = await getAllSubs();
  for(let subs of subsList){
    promisesArr.push(api.get(`subscribers/${subs.id}/notifications/all`));
    console.log(`Recebendo as notificações de ${subs.name}...`);
  };
  const allNotifications = await Promise.all(promisesArr);
  console.log('Todas as notificações recebidas com sucesso: ');
  allNotifications.forEach((subsNotfications: any)=>{
    const subsNotifyInfos = subsNotfications.data;
    const subsId = subsNotifyInfos[0].subscriberId;
    const currentSubs = subsList.filter(subs => subs.id === subsId );
    console.log(`[---------- Veja as notificações de ${currentSubs[0].name} ----------]`)
    subsNotifyInfos.map((infos: any)=>{
      console.log(infos.message)
    });
    console.log(`[---------- Fim das notificações de ${currentSubs[0].name} ----------]`)
  });
};

//createNewSubs('Menino do Clube', 'menino@branco.com');
/* createNewsWithNotification(
  'Um girassol diferente?',
  'A música "Girassol da cor do seu cabelo" - 1972, de Lô Borges em parceria com Milton Nascimento trata, com muita ternura, das lembranças de um amor inesquecível.',
  'Tem notícia músical pra você também! Vem conhecer uma bela canção do Lô Borges.'
); */
//getAllUsersNotifications();