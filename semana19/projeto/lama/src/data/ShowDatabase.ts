import { BaseDatabase } from "./BaseDatabase";
import { Show } from "../model/Show";

export class ShowDatabase extends BaseDatabase{

  private tableName: string = process.env.DB_SHOWS_NAME as string;

  public async createShow(
    id: string,
    weekDay: string,
    startTime: number,
    endTime: number,
    bandId: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          week_day: weekDay,
          start_time: startTime,
          end_time: endTime,
          band_id: bandId
        })
        .into(this.tableName);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getByTime(day: string ,start: number, end: number): Promise<Show>{
    try{
      const result = await this.getConnection()
      .select('*')
      .from(this.tableName)
      .where('week_day', '=', day)
      .andWhere('start_time', '=', start)
      .andWhere('end_time', '=', end)
      
      return Show.toShowModel(result[0])

    }catch(error){
      throw new Error(error.sqlMessage || error.message);
    }
  }
}