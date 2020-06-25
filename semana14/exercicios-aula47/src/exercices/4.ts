import api from '../services';
import {newsBody} from '../storage';
import * as moment from 'moment';
//4. 
//a) Uma async, pois também lida com uma request(PUT) 
//b)
const createNews = async (
  title: string, content: string,
  ): Promise<any> =>{
  const body: newsBody = {
    title: title,
    content: content,
    date: moment().unix(),
  }
  const r = await api.put('news', body);
  console.log(r.data)
  console.log(`News "${r.data}" criada com sucesso!`)
};

createNews(
  'A volta dos que não foram',
  'Alguns jovens foram vistos desrespeitando a quarentena para ir a festas. Porém, ao tentarem ir à balada, a polícia autuou os mesmos alegando que não foram vacinados e assim voltaram para suas casas.' 
);
