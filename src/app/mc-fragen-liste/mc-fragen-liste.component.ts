import { Component, OnInit } from '@angular/core';
import { Questions } from '../shared/questions';

@Component({
  selector: 'lpic-mc-fragen-liste',
  templateUrl: './mc-fragen-liste.component.html',
  styleUrls: ['./mc-fragen-liste.component.css']
})
export class McFragenListeComponent implements OnInit {
  mcFragen: Questions[];

  constructor() { }

  ngOnInit(): void {
    this.mcFragen = [
      {
        mcFrage: "QUESTION 7: Which of the following connection types, as seen in nmcli connection show, may exist in NetworkManager? (Choose three.)",
        mcAntwort: ['A. tcp', 'B. ethernet', 'C. wifi', 'D. ipv6', 'E. bridge']
      }
    ];
  }
}
