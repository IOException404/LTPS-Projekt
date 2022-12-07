export interface mcQuestion{
  id:number;
  txt:string;
  ans:Answer[];
  info:string;
}

export interface scQuestion{
  id:number;
  txt:string;
  ans:Answer[];
  info:string;
}

export interface Answer{
  txt:string;
  right:boolean;
  choosen:boolean;
}
