import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LPIsimService } from '../shared/lpisim.service';
import { fillQuestion, mcQuestion, scQuestion } from '../shared/questions';

type ViewState = 'default' | 'Prüfmodus' | 'Single Choice' | 'Fill-In' | 'Alle Fragen' | 'Multiple Choice' | 'Statistik' | 'Fragenliste'

@Component({
  selector: 'lpic-lern-modus',
  templateUrl: './exam-modus.component.html',
  styleUrls: ['./exam-modus.component.css']
})

export class ExamModusComponent implements OnInit {
  viewState: ViewState = "default"; // Menü Nagivationsvariable, default ist das Home-menü des jeweiligen Modies
  mcFragen: mcQuestion[]; // Alle Multiple-Choice-Fragen
  scFragen: scQuestion[]; // Alle Single-Choice-Fragen
  fillFragen: fillQuestion[]; // Alle Fill-In-Fragen
  mcQuest: mcQuestion; // Einzelne Multiple-Choice-Frage
  scQuest: scQuestion; // Einzelne Single-Choice-Frage
  fillQuest: fillQuestion; // Einzelne Fill-In-Frage
  currentArrayId: number = 0;  // Klick prev und next Variable
  bewertung = [];
  tooMuchFalse: number; // Abbruch-Variable, bei 20% wird der Prüfmodus beendet
  totalTrue = 0;
  totalFalse = 0;
  totalSkip = 0;
  trueProzent: string;
  falseProzent: string;
  skipProzent: string;


  allQuest = []; // Leeres Alle Fragen Array
  pushAll() { // Push-Funktion
    for (let ele of this.mcFragen) {
      this.allQuest.push(ele);
    }
    for (let ele of this.scFragen) {
      this.allQuest.push(ele);
    }
    for (let ele of this.fillFragen) {
      this.allQuest.push(ele);
    }
  }

  constructor(private fs: LPIsimService, public router: Router) { } // Routerfunktion für das Navigieren innerhalb von Typescript und LPIsimService für die Fragenliste

  ngOnInit(): void {
    this.mcFragen = this.fs.mcAll(); // Service Callback-Funktion Multiple-Choice
    this.scFragen = this.fs.scAll(); // Service Callback-Funktion Single-Choice
    this.fillFragen = this.fs.fillAll(); // Service Callback-Funktion Fill-In
    this.currentArrayId = 0; // Varibale zum setzen der Array Position
    this.tooMuchFalse = 0; // Variable zur Berechnung des Abbruchskriteriums
    this.mcQuest = this.mcFragen[this.currentArrayId]; // Variable zum Auslesen der einzelnen mcFragen
    this.scQuest = this.scFragen[this.currentArrayId];  // Variable zum Auslesen der einzelnen scFragen
    this.fillQuest = this.fillFragen[this.currentArrayId]; // Variable zum Auslesen der einzelnen fillFragen
  }

  single: boolean = false; // Navigations-Status
  multi: boolean = false; // Navigations-Status
  fill: boolean = false; // Navigations-Status
  all: boolean = false; // Navigations-Status
  changeMode(eingabe: ViewState) { // Funktion zum Navigieren des Menüs
    this.viewState = eingabe; // Die Wertübergabe der 'eingabe' erfolgt durch das Klicken der Navigationsbuttons
    if (eingabe == 'Single Choice') { this.single = true; }
    if (eingabe == 'Multiple Choice') { this.multi = true; }
    if (eingabe == 'Fill-In') { this.fill = true; }
    if (eingabe == 'Alle Fragen') { this.all = true }
  }

  reload() { // Restart-Funktion
    window.location.reload(); // Alle Werte werden auf default gesetzt indem die Seite komplett neu geladen wird!
  }

  youFailed() {
    let percent: number;
    if (this.viewState == 'Multiple Choice') {
      percent = this.tooMuchFalse * 100 / this.mcFragen.length;
      if (percent >= 20) {
        let reload = window.confirm('Du hast mehr als 20% der Fragen geraten. Du solltest mehr üben');
        this.reload();
      }
    }
    if (this.viewState == 'Single Choice') {
      percent = this.tooMuchFalse * 100 / this.scFragen.length;
      if (percent >= 20) {
        let reload = window.confirm('Du hast mehr als 20% der Fragen gerate. Du solltest mehr üben');
        this.reload();
      }
    }
    if (this.viewState == 'Fill-In') {
      percent = this.tooMuchFalse * 100 / this.fillFragen.length;
      if (percent >= 20) {
        let reload = window.confirm('Du hast mehr als 20% der Fragen geraten. Du solltest mehr üben');
        this.reload();
      }
    }
    if (this.viewState == 'Fill-In') {
      percent = this.tooMuchFalse * 100 / this.allQuest.length;
      if (percent >= 20) {
        let reload = window.confirm('Du hast mehr als 20% der Fragen geraten. Du solltest mehr üben');
        this.reload();
      }
    }
    console.log('Fehler: ', percent, '%')
  }


  back: boolean; // Globale Variable für den Zurück-Button innerhalb der Fragestellungen, er erscheint erst wenn bereits eine Frage beantwortet wurde!
  targetReached: boolean = false; // Anfangs sind nicht alle Fragen beantwortet, daher 'false'
  nextFrage() {  // Nächste Frage-Button
    this.back = true; // <-- Zurück-Button erzeugen
    if (this.multi == true && this.currentArrayId < this.mcFragen.length - 1) {
      this.currentArrayId += 1; this.mcQuest = this.mcFragen[this.currentArrayId];
      if (this.currentArrayId >= this.mcFragen.length - 1) {
        this.targetReached = true; // sobald die höchst ID aller Fragen erreicht ist, ist das Ziel erreicht und es kann kalkuliert werden
      }
    }
    if (this.single == true && this.currentArrayId < this.scFragen.length - 1) {
      this.currentArrayId += 1; this.scQuest = this.scFragen[this.currentArrayId];
      if (this.currentArrayId >= this.scFragen.length - 1) {
        this.targetReached = true;  // sobald die höchst ID aller Fragen erreicht ist, ist das Ziel erreicht und es kann kalkuliert werden
      }
    }
    if (this.fill == true && this.currentArrayId < this.fillFragen.length - 1) {
      this.currentArrayId += 1; this.fillQuest = this.fillFragen[this.currentArrayId];
      if (this.currentArrayId >= this.fillFragen.length - 1) {
        this.targetReached = true;
      }
    }
    if (this.all == true && this.currentArrayId < this.allQuest.length - 1) {
      this.currentArrayId += 1;
      if (this.currentArrayId >= this.allQuest.length - 1) {
        this.targetReached = true;
      }
    }
    console.log(this.bewertung);
  }

  prevFrage() { // Vorherige Frage-Button
    if (this.currentArrayId > 0) { // Unter Null gibt es keine Fragen!!!
      this.currentArrayId -= 1; // Frage zurück zählen
      if (this.viewState == "Multiple Choice") { this.mcQuest = this.mcFragen[this.currentArrayId]; }
      if (this.viewState == "Single Choice") { this.scQuest = this.scFragen[this.currentArrayId]; }
      if (this.viewState == "Fill-In") { this.fillQuest = this.fillFragen[this.currentArrayId]; }
      if (this.viewState == "Alle Fragen") { this.allQuest[this.currentArrayId]; }
      this.bewertung.pop(); // Variable rechnet richtige Antwort weg, ansonsten drohen zuviele richtige Antworten die nicht sein können!!!
    }
    if (this.currentArrayId < 1) { // <-- Zurück-Button wieder löschen
      this.back = false;  // <-- Zurück-Button wieder löschen
    }
    this.targetReached = false;
  }

  toggleChoosen(answer: any) { // Hier werden in der Checkbox die Boolean-Werte beim auswählen ausgetauscht
    answer.choosen = !answer.choosen; // Beim Auswählen und abwählen werden die Werte jeweils auf 'true' oder 'false' gesetzt
  }

  wasMcSkipped(quest: mcQuestion) {
    let wasSkipped: boolean = true;
    for (let ele of quest.ans) {
      if (ele.choosen == true) {
        wasSkipped = false;
      }
    }
    return wasSkipped;
  }

  wasMcRight(quest: mcQuestion) {
    let isRight: boolean = true;
    for (let ele of quest.ans) {
      if ((ele.choosen && !ele.right) || (!ele.choosen && ele.right)) {
        isRight = false
      }
    }
    return isRight;
  }

  mcAnswersCheck() { // Richtig oder Falsch-Funktion der Fragen
    let qAnswered: boolean = false;
    let qCorrect: boolean = false;

    qAnswered = !this.wasMcSkipped(this.mcQuest);

    if (qAnswered) {
      qCorrect = this.wasMcRight(this.mcQuest);
    }

    //Stand hier
    //qAnswered = true => Frage wurde beantwortet
    //qAnswered=false => Frage wurde uebersprungen
    //qCorrect= true => alle MC Antworten dieser Frage richtig gegeben
    //qCorrect= false => mindestens eine Antwort war falsch

    if (qAnswered == true) {
      if (qCorrect == true) {
        this.bewertung.push('Richtig');
      } else {
        this.bewertung.push('Falsch');
        this.tooMuchFalse += 1;
      }
    } else {
      this.bewertung.push('Skip');
    }

    this.nextFrage();
  }

  scAnswer: string; // Zusätzliche Public-Variable für die SC Antwortenabfrage, war im MC nicht nötig!
  checkRadio(answer: any) { // Funktion zum überprüfen von Wahrheitswerten der Antworten
    if (answer.right && !answer.choosen) { // Wenn die Antwort aus right und choosen ungleich ist, ist es automatisch wahr!
      this.scAnswer = "richtig"; // Schalter für die scAnswersCheck-Funktion
    } else {
      this.scAnswer = "falsch";
    }
  }

  scAnswersCheck() { // Richtig oder Falsch-Funktion der Fragen
    let qAnswered: boolean = false;
    let qCorrect: boolean = true;

    if (this.scAnswer == "richtig" || this.scAnswer == "falsch") {
      qAnswered = true
      if (this.scAnswer == "falsch") {
        qCorrect = false;
      }
    }

    if (qAnswered) {
      qAnswered = false;
      this.scAnswer = " ";
      if (qCorrect) {
        this.bewertung.push('Richtig');
      } else {
        this.bewertung.push('Falsch');
        this.tooMuchFalse += 1;
      }
    } else {
      this.bewertung.push('Skip');
    }
    this.nextFrage();
  }

  fillAnswerCheck(answerText: string) {
    let qAnswered: boolean = false;
    let qCorrect: boolean = true;
    if (answerText) {
      qAnswered = true;
      if (answerText != this.fillQuest.ans) {
        qCorrect = false;
      }
    }

    if (qAnswered) {
      if (qCorrect) {
        this.bewertung.push('Richtig');
      } else {
        this.bewertung.push('Falsch');
        this.tooMuchFalse += 1;
      }
    } else {
      this.bewertung.push('Skip');
    }
    this.nextFrage();
  }

  allAnswersCheck(answerText: string) { // Richtig oder Falsch-Funktion der Fragen
    // All-MC-Fragen
    if (this.allQuest[this.currentArrayId].art == 'mc') {
      let qAnswered: boolean = false;
      let qCorrect: boolean = false;

      qAnswered = !this.wasMcSkipped(this.allQuest[this.currentArrayId]);

      if (qAnswered) {
        qCorrect = this.wasMcRight(this.allQuest[this.currentArrayId]);
      }

      if (qAnswered == true) {
        if (qCorrect == true) {
          this.bewertung.push('Richtig');
        } else {
          this.bewertung.push('Falsch');
          this.tooMuchFalse += 1;
        }
      } else {
        this.bewertung.push('Skip');
      }
      this.nextFrage();
    }
    // All-SC-Fragen
    if (this.allQuest[this.currentArrayId].art == 'sc') {
      this.scAnswersCheck();
    }
    // All-Fill-Fragen
    if (this.allQuest[this.currentArrayId].art == 'fill') {
      let qAnswered: boolean = false;
      let qCorrect: boolean = true;

      if (answerText) {
        qAnswered = true;
        if (answerText != this.allQuest[this.currentArrayId].ans) {
          qCorrect = false;
        }
      }
      if (qAnswered) {
        if (qCorrect) {
          this.bewertung.push('Richtig');
        } else {
          this.bewertung.push('Falsch');
          this.tooMuchFalse += 1;
        }
      } else {
        this.bewertung.push('Skip');
      }
      this.nextFrage();
    }
  }

  exit() { // Wenn mitten in der Fragestellung abgebrochen wird, wird diese Funktion aufgerufen!
    let yes = window.confirm('Sind Sie sicher?'); // Popup für eine 'true'- oder 'false'-Eingabe
    if (yes == true) { // Sobald 'Ok' geklickt wird!
      this.router.navigate(['../home']); // Nachdem 'Ok'-Klick wird zum Home-Template Navigiert, wenn nicht passiert nichts...
      alert('Ihr Fortschritt wurde verworfen'); // Hinweis für die Verwerfung aller bisher eingebenen Antworten
      window.location.reload(); // Template wird neu geladen und alle Werte auf default gesetzt!!!
    }
  }

  calc() { // Funktion für die Berechnung der Ergebnisse in Prozent
    if (this.multi == true) {
      this.trueProzent = (this.totalTrue * 100 / this.mcFragen.length).toFixed(2);
      this.falseProzent = (this.totalFalse * 100 / this.mcFragen.length).toFixed(2);
      this.skipProzent = (this.totalSkip * 100 / this.mcFragen.length).toFixed(2);
    }
    if (this.single == true) {
      this.trueProzent = (this.totalTrue * 100 / this.scFragen.length).toFixed(2);
      this.falseProzent = (this.totalFalse * 100 / this.scFragen.length).toFixed(2);
      this.skipProzent = (this.totalSkip * 100 / this.scFragen.length).toFixed(2);
    }
    if (this.fill == true) {
      this.trueProzent = (this.totalTrue * 100 / this.fillFragen.length).toFixed(2);
      this.falseProzent = (this.totalFalse * 100 / this.fillFragen.length).toFixed(2);
      this.skipProzent = (this.totalSkip * 100 / this.fillFragen.length).toFixed(2);
    }
    if (this.all == true) {
      this.trueProzent = (this.totalTrue * 100 / this.allQuest.length).toFixed(2);
      this.falseProzent = (this.totalFalse * 100 / this.allQuest.length).toFixed(2);
      this.skipProzent = (this.totalSkip * 100 / this.allQuest.length).toFixed(2);
    }
  }

  results() {
    this.bewertung.forEach(check => {
      if (check == "Richtig") {
        this.totalTrue++;
      }
      if (check == "Falsch") {
        this.totalFalse++;
      }
      if (check == "Skip") {
        this.totalSkip++;
      }
    });
  }
}
