import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamModusComponent } from './exam-modus/exam-modus.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { LernModusComponent } from './lern-modus/lern-modus.component';
import { TestModusComponent } from './test-modus/test-modus.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeMenuComponent},
  {path: 'lernen', component: LernModusComponent},
  {path: 'test', component: TestModusComponent},
  {path: 'exam', component: ExamModusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
