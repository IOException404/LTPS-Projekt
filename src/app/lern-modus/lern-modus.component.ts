import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LPIsimService } from '../shared/lpisim.service';
import { mcQuestion } from '../shared/questions';

type ViewState = 'default' | 'Lernmodus' | 'Single Choice' | 'Fill-In' | 'Alle Fragen' | 'Multiple Choice' | 'Statistik'

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


  constructor(private fs: LPIsimService, public router: Router) {

  }

  // Funktion zum navigieren des Menüs
  changeMode(eingabe: ViewState) {
    this.viewState = eingabe;
  }

  ngOnInit(): void {
    // Service Variable für alle Fragen
    this.mcFragen = this.fs.getAll();
    // Varibale zum setzen der Array Position
    this.currentArrayId = 0;
    // Variable zum Auslesen der einzelnen Fragen
    this.frage = this.mcFragen[this.currentArrayId];
  }

  // Nächste Frage-Button
  truelies: boolean; // <-- Variable für den Zurück-Button
  nextFrage() {
    this.truelies = true; // <-- Zurück-Button erzeugen
    // Solange der Zähler der Array Position nicht größer ist als die Positionen
    // der vorhanden Array-Fragen-Liste [0-9]
    if(this.currentArrayId < this.mcFragen.length-1) {
      // Frage hochzählen
      this.currentArrayId += 1;
      this.frage = this.mcFragen[this.currentArrayId];
      this.info = false; // Info Text zurücksetzen
    }
  }

  // Vorherige Frage-Button
  prevFrage() {
    // Solange der Zähler der Array Position nicht kleiner ist als die Positionen
    // der vorhanden Array-Fragen-Liste [0-9]
    if(this.currentArrayId > 0) {
      this.currentArrayId -= 1; // Frage zurück zählen
      this.frage = this.mcFragen[this.currentArrayId];
      this.info = false; // Info Text zurück setzen
    }
    if(this.currentArrayId < 1){ // <-- Zurück Button wieder verstecken
      this.truelies = false;
    }
  }

  // Info Text für die richtigen Antworten
  infoText() {
    this.info = !this.info;
  }
  // Fragen richtig oder falsch Funktion
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

  // Hier werden in der Checkbox die Boolean-werte beim auswählen ausgetauscht
  toggleChoosen(answer: any){
    answer.choosen = !answer.choosen;
  }

  // Wenn mitten in der Fragestellung abgebrochen wird
  sure() {
    let yes = window.confirm('Sind Sie sicher?');
    if (yes == true) {
      this.router.navigate(['../home']);
      alert('Ihr Fortschritt wurde verworfen');
    }
  }

  // Werte berechnen
}
