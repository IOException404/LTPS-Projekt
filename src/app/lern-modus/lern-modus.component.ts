import { Component, OnInit } from '@angular/core';
import { LPIsimService } from '../shared/lpisim.service';
import { mcQuestion } from '../shared/questions';

type ViewState = 'default' | 'Lernmodus' | 'Single Choice' | 'Fill-In' | 'Alle Fragen' | 'Multiple Choice'

@Component({
  selector: 'lpic-lern-modus',
  templateUrl: './lern-modus.component.html',
  styleUrls: ['./lern-modus.component.css']
})

export class LernModusComponent implements OnInit {
  // viewState
  viewState: ViewState = "default";

  // Alle Fragen
  mcFragen: mcQuestion[];
  // Einzelne Frage
  frage: mcQuestion;
  // Klick prev und next Variable
  currentArrayId: number = 0

  // Info und Inhalt Variable
  info: boolean = false;

  // Antworten richtig oder falsch
  solution: boolean;

  constructor(private fs: LPIsimService) {

  }

  changeMode(eingabe: ViewState) {
    this.viewState = eingabe;
    console.log(this.viewState);
  }

  ngOnInit(): void {
    // Service Variable für alle Fragen
    this.mcFragen = this.fs.getAll();
    // Varibale zum setzen der Array Position
    this.currentArrayId = 0;
    // Variable zum Auslesen der einzelnen Fragen
    this.frage = this.mcFragen[this.currentArrayId];
  }

  // Nächste Frage Button
  nextFrage() {
    // Solange der Zähler der Array Position nicht größer ist als die Positionen
    // der vorhanden Array-Fragen-Liste [0-9]
    if(this.currentArrayId < this.mcFragen.length-1) {
      // Frage hochzählen
      this.currentArrayId += 1;
      this.frage = this.mcFragen[this.currentArrayId];
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
      this.currentArrayId -= 1;
      this.frage = this.mcFragen[this.currentArrayId];
      // Info Text zurück setzen
      this.info = false;
    }
  }

  // Info Text für die richtigen Antworten
  infoText() {
    this.info = !this.info;
  }

  checkAnswers() {
    let fehler:boolean = false;
    for(let ele of this.frage.ans) {
      if((ele.choosen && !ele.right) || (!ele.choosen && ele.right))
      {
        fehler = true;
      }
    }
    if(fehler) {
      alert('Sie haben eine oder mehrere Antworten geraten!');
    } else {
      window.confirm('Super, die Antwort war richtig!');
      fehler = false;

      this.nextFrage();
    }
  }

  toggleChoosen(answer: any){
    answer.choosen = !answer.choosen;
  }
}
