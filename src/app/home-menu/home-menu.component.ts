import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'lpic-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {

  lernHandler() {
    alert('Lernmodus wurde geklickt');
  }

  testHandler() {
    alert('Testmodus wurde geklickt');
  }

  examHandler() {
    alert('Prüfmodus wurde geklickt');
  }

  constructor() { }

  ngOnInit(): void {
  }
}
