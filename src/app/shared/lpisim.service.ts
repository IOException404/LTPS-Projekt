import { Injectable } from '@angular/core';
import { Question } from '../shared/questions';

@Injectable({
  providedIn: 'root'
})

export class LPIsimService {
  mcFragen: Question[];

  constructor() {
    this.mcFragen = [
      {
        mcFrage: "QUESTION 7: Which of the following connection types, as seen in nmcli connection show, may exist in NetworkManager? (Choose three.)",
        mcAntwort: ['A. tcp', 'B. ethernet', 'C. wifi', 'D. ipv6', 'E. bridge'],
        solution: "Answer: B C E"
      },
      {
        mcFrage: "QUESTION 10: Which of the following nmcli subcommands exist? (Choose two.)",
        mcAntwort: ['A. nmcli ethernet', 'B. nmcli device', 'C. nmcli wifi', 'D. nmcli address', 'E. nmcli connection'],
        solution: "Answer: B E"
      }
    ];
   }
   getAll(): Question[] {
    return this.mcFragen;
   }
}
