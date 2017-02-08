import {Component} from '@angular/core';

@Component({
    selector: 'sideNav',
    templateUrl:'app/SideNav/template.html',
styleUrls:['app/SideNav/styles.css']
})
export class SideNavComponent { 
  openNav(event) {
    document.getElementById("mySidenav").style.display = "block";
}

closeNav(event) {
    document.getElementById("mySidenav").style.display = "none";
}
}