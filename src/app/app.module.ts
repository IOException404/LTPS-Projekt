import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { LernModusComponent } from './lern-modus/lern-modus.component';
import { TestModusComponent } from './test-modus/test-modus.component';
import { ExamModusComponent } from './exam-modus/exam-modus.component';
import { OptionsComponent } from './options/options.component';
import { StatistikComponent } from './statistik/statistik.component';
import { StartAppComponent } from './start-app/start-app.component';
import { McFragenListeComponent } from './mc-fragen-liste/mc-fragen-liste.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMenuComponent,
    LernModusComponent,
    TestModusComponent,
    ExamModusComponent,
    OptionsComponent,
    StatistikComponent,
    StartAppComponent,
    McFragenListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
