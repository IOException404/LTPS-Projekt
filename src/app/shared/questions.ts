export interface mcQuestion{
  id: number;
  txt:string;
  ans:Answer[];
  info?:string;
  art?:string;
}

export interface scQuestion{
  id: number;
  txt:string;
  ans:Answer[];
  info?:string;
  art?:string;
}

export interface fillQuestion{
  id: number;
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
