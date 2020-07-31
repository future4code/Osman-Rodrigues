class Show{
  constructor(
    private id: string,
    private week_day: string,
    private startTime: number ,
    private endTime: number ,
    private bandId: string
  ){}

  getId = (): string => this.id
  getWeekDay = (): string => Show.stringToShowWeekDay(this.week_day)
  getStartTime = (): number => this.startTime
  getEndTime = (): number => this.endTime
  getBandId = (): string => this.bandId

  setId = (id:string):void =>{
    this.id = id
  }
  setWeekDay = (weekDay: string):void =>{
    this.week_day = weekDay
  }
  setStartTime = (startTime: number):void =>{
    this.startTime = startTime
  }
  setEndTime = (endTime: number):void =>{
    this.endTime = endTime
  }
  setBandId = (bandId: string):void =>{
    this.bandId = bandId
  }

  static stringToShowWeekDay(input: string): ShowWeekDay{
    switch (input.toUpperCase()) {
        case "FRIDAY":
          return ShowWeekDay.FRIDAY;
        case "SATURDAY":
          return ShowWeekDay.SATURDAY;
        case "SUNDAY":
          return ShowWeekDay.SUNDAY;
        default:
          throw new Error("Invalid user role");
    }
  }

  static toShowModel(show: any): Show {
    return show && new Show(show.id, this.stringToShowWeekDay(show.week_day), show.startTime, show.endTime, show.bandId);
  }
}

interface CreateShowInputDTO{
  weekDay: string,
  startTime: number,
  endTime: number,
  bandId: string
}

enum ShowWeekDay{
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

//TODO: interface para input do getallshows
export{Show, CreateShowInputDTO, ShowWeekDay}