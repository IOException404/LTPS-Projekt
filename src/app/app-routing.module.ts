import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { LernModusComponent } from './lern-modus/lern-modus.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeMenuComponent},
  {path: 'lernen', component: LernModusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
