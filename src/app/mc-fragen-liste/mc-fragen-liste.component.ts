import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { element } from 'protractor';
import { LPIsimService } from '../shared/lpisim.service';
import { mcQuestion } from '../shared/questions';


@Component({
  selector: 'lpic-mc-fragen-liste',
  templateUrl: './mc-fragen-liste.component.html',
  styleUrls: ['./mc-fragen-liste.component.css']
})
export class McFragenListeComponent implements OnInit {
  // Alle Fragen
  mcFragen: mcQuestion[];
  // Einzelne Frage
  frage: mcQuestion;
  // Klick prev und next Variable
  currentArrayId: number = 0
  showEinzel: boolean = true;

  // Info und Inhalt Variable
  info: boolean = false;


  // Antworten richtig oder falsch
  solution: boolean;

  constructor(private fs: LPIsimService) {

  }

  ngOnInit(): void {
    // Service Variable für alle Fragen
    this.mcFragen = this.fs.getAll();
    // Varibale zum setzen der Array Position
    this.currentArrayId = 0
    // Variable zum Auslesen der einzelnen Fragen
    this.frage = this.mcFragen[this.currentArrayId]

  }

  // Nächste Frage Button
  nextFrage() {
    // Solange der Zähler der Array Position nicht größer ist als die Positionen
    // der vorhanden Array-Fragen-Liste [0-9]
    if(this.currentArrayId < this.mcFragen.length-1) {
      // Frage hochzählen
      this.currentArrayId += 1
      this.frage = this.mcFragen[this.currentArrayId]
      // Info Text zurück setzen
      this.info = false;
    }
  }

  // Vorherige Frage Button
  prevFrage() {
    // Solange der Zähler der Array Position nicht kleiner ist als die Positionen
    // der vorhanden Array-Fragen-Liste [0-9]
    if(this.currentArrayId > 0) {
      // Frage zurück zählen
      this.currentArrayId -= 1
      this.frage = this.mcFragen[this.currentArrayId]
      // Info Text zurück setzen
      this.info = false;
    }
  }

  // Info Text für die richtigen Antworten
  infoText() {
    this.info = !this.info;
  }

  CheckAnswers(){
    for(let ele of this.frage.ans)
      if(ele.choosen == true && ele.right == true){
        if(ele.choosen != ele.right) {
        console.log("Sie haben die Antwort " + ele.txt + "  korrekt angeklickt " + ele.choosen);
        }
      } else {
        console.log("Sie haben die Antwort " + ele.txt + "  gerraten " + ele.choosen);
      }

  }

  toggleChoosen($event, answer){
    answer.choosen = !answer.choosen;
  }
}

// pop und push array
