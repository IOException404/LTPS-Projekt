import { Injectable } from '@angular/core';
import { mcQuestion } from '../shared/questions';

@Injectable({
  providedIn: 'root'
})

export class LPIsimService {
  mcFragen: mcQuestion[];

  constructor() {
    // this.mcFragen = [
    //   {
    //     mcFrage: "QUESTION 7: Which of the following connection types, as seen in nmcli connection show, may exist in NetworkManager? (Choose three.)",
    //     mcAntwort: ['A. tcp', 'B. ethernet', 'C. wifi', 'D. ipv6', 'E. bridge'],
    //     solution: "BCE"
    //   },
    //   {
    //     mcFrage: "QUESTION 10: Which of the following nmcli subcommands exist? (Choose two.)",
    //     mcAntwort: ['A. nmcli ethernet', 'B. nmcli device', 'C. nmcli wifi', 'D. nmcli address', 'E. nmcli connection'],
    //     solution: "B E"
    //   }
    // ];

    this.mcFragen = [
      {
        id:1,
        txt:"QUESTION 7: Which of the following connection types, as seen in nmcli connection show, may exist in NetworkManager? (Choose three.)",
        ans: [ {txt:"A. tcp", right: false, choosen:false }, {txt:"B. ethernet", right: true, choosen:false }, {txt:"C. wifi", right: true, choosen:false }, {txt:"D. ipv6", right: false, choosen:false }, {txt:"E. bridge", right: true, choosen:false }],
        info: "info"
      },
      {
        id:2,
        txt:"QUESTION 10: Which of the following nmcli subcommands exist? (Choose two.)",
        ans: [{txt:'A. nmcli ethernet', right:false, choosen:false  },  { txt:'B. nmcli device', right: true, choosen:false }, { txt:'C. nmcli wifi', right: false, choosen:false  }, { txt:'D. nmcli address', right: false, choosen:false  }, { txt:'E. nmcli connection', right:true, choosen:false  }],
        info: "info"
      }
    ]
   }
   getAll(): mcQuestion[] {
    return this.mcFragen;
   }
}
