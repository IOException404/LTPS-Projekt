import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { LernModusComponent } from './lern-modus/lern-modus.component';
import { McFragenListeComponent } from './mc-fragen-liste/mc-fragen-liste.component';
import { StartAppComponent } from './start-app/start-app.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeMenuComponent},
  {path: 'lernen', component: LernModusComponent},
  {path: 'starten', component: StartAppComponent},
  {path: 'mcFragen', component: McFragenListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
