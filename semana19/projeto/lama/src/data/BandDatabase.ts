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
  
  public async getBandByIdOrName(input: string): Promise<Band> {
    const result = await this.getConnection()
      .select("*")
      .from(this.tableName)
      .where('id', '=', input)
      .orWhere('name', '=', input);

    return Band.toBandModel(result[0]);
  }

}
