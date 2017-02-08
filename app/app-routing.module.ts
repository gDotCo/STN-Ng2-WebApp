import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import {NavbarComponent} from './Navbar/navbar.component';
import {SideNavComponent} from './SideNav/sideNav.component';
import {CoursesComponent} from './Courses/courses.component';   
import {ChooseCasinoComponent} from './ChooseCasino/chooseCasino.component';
import {BoardingPassComponent} from './BoardingPass/boardingPass.component'
import {DineComponent} from './Dine/dine.component'

const routes: Routes = [
  { path: 'home',  component: AppComponent },
  { path: 'cc', component: ChooseCasinoComponent },
   { path: 'courses', component: CoursesComponent },
   { path: 'BoardingPass', component: BoardingPassComponent },
   { path: 'Dine', component: DineComponent }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}