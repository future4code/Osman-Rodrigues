class Band{
  constructor(
    private id: string,
    private name: string,
    private musicGenre: string,
    private responsible: string
  ){}
  
  public getId =(): string => this.id
  public getName =(): string => this.name
  public getGenre =(): string => this.musicGenre
  public getResponsible =(): string => this.responsible
  
  public setId =(id: string): void =>{
    this.id = id
  }
  public setName =(name: string): void =>{
    this.name = name
  }
  public setGenre =(musicGenre: string): void =>{
    this.musicGenre = musicGenre
  }
  public setResponsible =(responsible: string): void =>{
    this.responsible = responsible
  }

  static toBandModel(band: any): Band {
    return new Band(band.id, band.name, band.music_genre, band.responsible);
  }
}

interface CreateBandInputDTO{
  name: string,
  musicGenre: string,
  responsible: string
}

export {Band, CreateBandInputDTO}