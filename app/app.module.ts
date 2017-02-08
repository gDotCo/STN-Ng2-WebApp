
import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {NavbarComponent} from './Navbar/navbar.component';
import {SideNavComponent} from './SideNav/sideNav.component';
import {CoursesComponent} from './Courses/courses.component';   
import {ChooseCasinoComponent} from './ChooseCasino/chooseCasino.component';
import {BoardingPassComponent} from './BoardingPass/boardingPass.component';
import {DineComponent} from './Dine/dine.component';
import {AppRoutingModule} from './app-routing.module'

@NgModule({
  imports:[ 
    BrowserModule,
    AppRoutingModule
  ],

  declarations: [ 
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    CoursesComponent,
    ChooseCasinoComponent,
    BoardingPassComponent,
    DineComponent
  ],
  
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }