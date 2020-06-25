import api from '../services';
import {User} from '../storage';

//1.
//a) 'subcribers/all'
//b) const funcAsync = async(): any[] =>
//2. a) Na arrow function é preciso atribuí-la à uma const e após o seu nome aplicar a sintaxe 
//=()=>, tipando normalmente os parametros e retorno.
//1. c) e 2. b) 
const getAllSubs = async (): Promise<any> =>{
  const r = await api.get('subscribers/all');
  console.log('Success in get all subscribers! Check list:');
  
  return r.data.map((subs: User)=> { //3. c)
    console.log(subs)
    return {
      id: subs.id,
      name: subs.name,
      email: subs.email,
    }
  })
};
getAllSubs()