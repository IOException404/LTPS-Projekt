import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LPIsimService } from '../shared/lpisim.service';
import { mcQuestion, scQuestion } from '../shared/questions';

type ViewState = 'default' | 'Lernmodus' | 'Single Choice' | 'Fill-In' | 'Alle Fragen' | 'Multiple Choice' | 'Statistik'

@Component({
  selector: 'lpic-lern-modus',
  templateUrl: './lern-modus.component.html',
  styleUrls: ['./lern-modus.component.css']
})

export class LernModusComponent implements OnInit {
  viewState: ViewState = "default"; // Menü Nagivationsvariable, default ist das Home-menü des jeweiligen Modies
  mcFragen: mcQuestion[]; // Alle Multiple-Choice-Fragen
  scFragen: scQuestion[]; // Alle Single-Choice-Fragen
  mcQuest: mcQuestion; // Einzelne  Frage
  currentArrayId: number = 0  // Klick prev und next Variable
  info: boolean = false; // Info und Inhalt Variable
  falsch: number; // Variable zur Auswertung der Statistik
  richtig: number = 0; // Variable zur Auswertung der Statistik

  constructor(private fs: LPIsimService, public router: Router) {} // Routerfunktion für das Navigieren innerhalb von Typescript und LPIsimService für die Fragenliste

  ngOnInit(): void {
    this.mcFragen = this.fs.getAll(); // Service Variable für alle Fragen, fs wird vom Constructor übergeben
    this.currentArrayId = 0; // Varibale zum setzen der Array Position
    this.mcQuest = this.mcFragen[this.currentArrayId]; // Variable zum Auslesen der einzelnen Fragen
    }

  changeMode(eingabe: ViewState) { // Funktion zum navigieren des Menüs
    this.viewState = eingabe; // Die Wertübergabe der 'eingabe' erfolgt durch das Klicken der Navigationsbuttons
  }

  reload() { // Restart-Funktion
    window.location.reload(); // Alle Werte werden auf default gesetzt indem die Seite komplett neu geladen wird!
  }

  // Nächste Frage-Button
  truelies: boolean; // Globale Variable für den Zurück-Button innerhalb der Fragestellungen, er erscheint erst wenn bereits eine Frage beantwortet wurde!
  targetReached: boolean = false; // Anfangs sind nicht alle Fragen beantwortet, daher 'false'
  nextFrage() {
    this.truelies = true; // <-- Zurück-Button erzeugen
    if(this.currentArrayId < this.mcFragen.length-1) { // Zähler ist nicht größer als ArrayAnzahl/Position der Fragen und muss gleich gestellt werden! [0-9] = 1-10
      this.currentArrayId += 1; // Frage hochzählen
      this.mcQuest = this.mcFragen[this.currentArrayId]; // Die höchgezählten Fragen werden der Position des mcFragenArrays übergeben
      this.info = false; // Info Text ausblenden, Tipps gibt es nur bei Bedarf :)
    }
    if(this.currentArrayId >= this.mcFragen.length-1) { // Die currentID wird mit dem Wert der ArrayPosition 1zu1 gleich gestellt
      this.targetReached = true; // sobald die höchst ID aller Fragen erreicht ist, ist das Ziel erreicht und es kann kalkuliert werden
    }
  }

  // Vorherige Frage-Button
  prevFrage() {
    // Solange der Zähler der Array Position nicht kleiner ist als die Positionen
    // der vorhanden Array-Fragen-Liste [0-9]
    if(this.currentArrayId > 0) { // Unter Null gibt es keine Fragen!!!
      this.currentArrayId -= 1; // Frage zurück zählen
      this.mcQuest = this.mcFragen[this.currentArrayId]; // Id der mcFragen werden gleichgesetzt
      this.info = false; // Info Text zurück setzen
      this.richtig -= 1; // Variable rechnet richtige Antworten ab, ansonsten drohen zuviele richtige Antworten die nicht sein können!!!
    }
    if(this.currentArrayId < 1){ // <-- Zurück-Button wieder löschen
      this.truelies = false;  // <-- Zurück-Button wieder löschen
    }
  }

  infoText() { // Info Text für die richtigen Antworten ein- und ausschalten
    this.info = !this.info;
  }

  checkAnswers() { // Richtig- oder Falsch-Funktion der Fragen
    let fehler:boolean = false; // Am Anfang gibt es weder richtig, noch falsch!
    for(let ele of this.mcQuest.ans) { // Hier wird eine künstliche Liste der Antworten erstellt, szsgn. als Maske!
      if((ele.choosen && !ele.right) || (!ele.choosen && ele.right)) // Wenn die gewählte Antwort ungleich der Richtigen und die falsche Antwort ungleich der Richtigen ist, dann...
      {
        fehler = true; // Falsche Antwort!!!
      }
    }
    if(fehler) { // Die 'fehler'-Variable='false' wird hier übergeben!
      alert('Sie haben eine oder mehrere Antworten geraten!');
    } else { // Andererseits ist alles richtig!
      window.confirm('Super, die Antwort war richtig!'); // Popup nach Aufgabenstellung
      fehler = false; // Der Wert wird standardmäßig zurück gesetzt um ihn nochmals auslösen zu können!
      this.richtig += 1; // Variable rechnet für die Statistik die richtigen Antworten hoch
      this.nextFrage(); // Die Funktion wiederholt sich, ich aber mich nicht ;)
    }
  }

  toggleChoosen(answer: any){ // Hier werden in der Checkbox die Boolean-Werte beim auswählen ausgetauscht
    answer.choosen = !answer.choosen; // Beim Auswählen und abwählen werden die Werte jeweil auf 'true' oder 'false'
  }

  exit() { // Wenn mitten in der Fragestellung abgebrochen wird, wird diese Funktion aufgerufen!
    let yes = window.confirm('Sind Sie sicher?'); // Popup für eine 'true'- oder 'false'-Eingabe
    if (yes == true) { // Sobald 'Ok' geklickt wird!
      this.router.navigate(['../home']); // Nachdem 'Ok'-Klick wird zum Home-Template Navigiert, wenn nicht passiert nichts...
      alert('Ihr Fortschritt wurde verworfen'); // Hinweis für die Verwerfung aller bisher eingebenen Antworten
      window.location.reload(); // Template wird neu geladen und alle Werte auf default gesetzt!!!
    }
  }

  calc() { // Funktion für die Berechnung der Ergebnisse
    let prozent = this.richtig * 100 / this.mcFragen.length; // Prozentsatz der richtig beantworteten Fragen!
    return prozent; // Wert muss zurückgeben werden um diese im Template zu realisieren!
  }
}
