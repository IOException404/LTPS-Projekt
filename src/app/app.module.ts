import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { TestModusComponent } from './test-modus/test-modus.component';
import { ExamModusComponent } from './exam-modus/exam-modus.component';
import { StatistikComponent } from './statistik/statistik.component';
import { LernModusComponent } from './lern-modus/lern-modus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMenuComponent,
    TestModusComponent,
    ExamModusComponent,
    StatistikComponent,
    LernModusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
