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
  info: boolean = false; // Info und Inhalt Variable
  bewertung = [];
  tooMuchFalse: number; // Abbruch-Variable, bei 20% wird der Prüfmodus beendet


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
    this.info = false; // Info Text ausblenden, Tipps gibt es nur bei Bedarf :)
    console.log(this.bewertung);
  }

  prevFrage() { // Vorherige Frage-Button
    if (this.currentArrayId > 0) { // Unter Null gibt es keine Fragen!!!
      this.currentArrayId -= 1; // Frage zurück zählen
      if (this.viewState == "Multiple Choice") { this.mcQuest = this.mcFragen[this.currentArrayId]; }
      if (this.viewState == "Single Choice") { this.scQuest = this.scFragen[this.currentArrayId]; }
      if (this.viewState == "Fill-In") { this.fillQuest = this.fillFragen[this.currentArrayId]; }
      if (this.viewState == "Alle Fragen") { this.allQuest[this.currentArrayId]; }
      this.info = false; // Info Text zurück setzen
      this.bewertung.pop(); // Variable rechnet richtige Antwort weg, ansonsten drohen zuviele richtige Antworten die nicht sein können!!!
    }
    if (this.currentArrayId < 1) { // <-- Zurück-Button wieder löschen
      this.back = false;  // <-- Zurück-Button wieder löschen
    }
    this.targetReached = false;
  }

  infoText() { // Info Text für die richtigen Antworten ein- und ausschalten
    this.info = !this.info;
  }

  toggleChoosen(answer: any) { // Hier werden in der Checkbox die Boolean-Werte beim auswählen ausgetauscht
    answer.choosen = !answer.choosen; // Beim Auswählen und abwählen werden die Werte jeweils auf 'true' oder 'false' gesetzt
  }

  mcAnswersCheck() { // Richtig oder Falsch-Funktion der Fragen
    let qAnswered: boolean = false;
    let qCorrect: boolean = true;

    // 2. Flags bestimmen
    for (let antwort of this.mcQuest.ans) {
      // default ist alle choosen sind false
      if (antwort.choosen) {
        // anwort wurde gegeben --> frage wurde beantwortet
        qAnswered = true
        if (antwort.right != antwort.choosen) {
          // antwort ist falsch --> frage ist falsch
          qCorrect = false;
        }
      }
    }
    // 3. aufgrund der Flags Actions durchführen
    if(qAnswered) {
      if(qCorrect) {
        this.bewertung.push('Richtig');
        this.nextFrage();
      } else {
        this.bewertung.push('Falsch');
        this.nextFrage();
      }
    } else {
      this.bewertung.push('Skip');
      this.nextFrage();
    }
  }

  scAnswer: any; // Zusätzliche Public-Variable für die SC Antwortenabfrage, war im MC nicht nötig!
  checkRadio(answer: any) { // Funktion zum überprüfen von Wahrheitswerten der Antworten
    if (answer.right && !answer.choosen) { // Wenn die Antwort aus right und choosen ungleich ist, ist es automatisch wahr!
      this.scAnswer = answer; // Schalter für die scAnswersCheck-Funktion
    }
  }

  scAnswersCheck(answer: any) { // Richtig oder Falsch-Funktion der Fragen
    console.log(answer);
    let qAnswered: boolean = false;
    let qCorrect: boolean = true;

    for (let antwort of this.scQuest.ans) {
      if (antwort.choosen) {
        qAnswered = true
        if (antwort.right) {
          qCorrect = false;
        }
      }
    }

    if(qAnswered) {
      if(qCorrect) {
        this.bewertung.push('Richtig');
      } else {
        this.bewertung.push('Falsch');
      }
    } else {
      this.bewertung.push('Skip');
    }
   }

  fillAnswerCheck(answerText: string) {
    let qAnswered: boolean = false;
    let qCorrect: boolean = true;
    if (answerText) {
        qAnswered = true;
        console.log('nichts eingetragen')
      if (answerText != this.fillQuest.ans) {
          qCorrect = false;
      }
    }

    if(qAnswered) {
      if(qCorrect) {
        this.bewertung.push('Richtig');
        this.nextFrage();
      } else {
        this.bewertung.push('Falsch');
        this.nextFrage();
      }
    } else {
      this.bewertung.push('Skip');
      this.nextFrage();
    }
  }

  allAnswersCheck(answerText: string) { // Richtig oder Falsch-Funktion der Fragen
    let fehler: boolean = false;
    if (this.allQuest[this.currentArrayId].art == 'mc') {
      for (let ele of this.allQuest[this.currentArrayId].ans) { // Hier wird eine künstliche Liste der Antworten erstellt, szsgn. als Maske!
        if ((ele.choosen && !ele.right) || (!ele.choosen && ele.right)) // Wenn die gewählte Antwort ungleich der Richtigen und die falsche Antwort ungleich der Richtigen ist, dann...
        {
          fehler = true; // Falsche Antwort!!!
        }
      }
    }

    if (this.allQuest[this.currentArrayId].art == 'sc') {
      if (!this.scAnswer) { // Wenn die Antwort falsch ist, dann...
        fehler = true;
      }
    }

    if (this.allQuest[this.currentArrayId].art == 'fill') {
      if (answerText != this.allQuest[this.currentArrayId].ans) {
        fehler = true;
      }
    }

    if (fehler) { // Die 'fehler'-Variable='false' wird hier übergeben!
      this.bewertung.push('Falsch');
      this.nextFrage();
    } else { // Andererseits ist alles richtig!
      fehler = false; // Der Wert wird standardmäßig zurück gesetzt um ihn nochmals auslösen zu können!
      this.scAnswer = false;
      this.bewertung.push('Richtig');
      this.nextFrage(); // Die Funktion wiederholt sich, ich aber mich nicht ;)
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

  mcProzent: string;
  scProzent: string;
  fillProzent: string;
  allProzent: string;
  //   calc() { // Funktion für die Berechnung der Ergebnisse
  //     if (this.multi == true) { this.mcProzent = (this.richtig * 100 / this.mcFragen.length).toFixed(2); } // Berechnug der richtigen Fragen in Prozent Multiple Choice
  //     if (this.single == true) { this.scProzent = (this.richtig * 100 / this.scFragen.length).toFixed(2); } // Berechnug der richtigen Fragen in Prozent Single Choice
  //     if (this.fill == true) { this.fillProzent = (this.richtig * 100 / this.fillFragen.length).toFixed(2); } // Berechnug der richtigen Fragen in Prozent Fill-In
  //     if (this.all == true) { this.allProzent = (this.richtig * 100 / this.allQuest.length).toFixed(2); } // Berechnung der richtigen Fragen in Prozent Alle Fragen
  //   }
  // }
}
