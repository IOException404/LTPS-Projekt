export interface mcQuestion{
  txt:string;
  ans:Answer[];
  info?:string;
  art?:string;
}

export interface scQuestion{
  txt:string;
  ans:Answer[];
  info?:string;
  art?:string;
}

export interface fillQuestion{
  txt:string;
  ans:string;
  info?:string;
  art?: string;
}

export interface Answer{
  txt:string;
  right?:boolean;
  choosen?:boolean;
}
