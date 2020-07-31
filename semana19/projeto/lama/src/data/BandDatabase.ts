import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {

  private tableName: string = process.env.DB_BANDS_NAME as string;

  public async createBand(
    id: string,
    name: string,
    music_genre: string,
    responsible: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          music_genre,
          responsible
        })
        .into(this.tableName);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  //TODO: implementar endpoint do getBand
  public async getBandById(id: string): Promise<Band> {
    const result = await this.getConnection()
      .select("*")
      .from(this.tableName)
      .where({ id });

    return Band.toBandModel(result[0]);
  }

}
