// export interface Question {
//   mcFrage: string;
//   mcAntwort: string[];
//   solution: string;
// }

export interface mcQuestion{
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
