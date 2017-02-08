import {Component} from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl:'app/Navbar/template.html',
styleUrls:['app/Navbar/styles.css']
})
export class NavbarComponent { 
  clicked(event) {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }
}