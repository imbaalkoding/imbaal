import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:resize',['$event'])
  onWindowResize(){
  }

isMobileMenu(){
    if (window.innerWidth<991){
      return true
    }else{
      return false
    }
  }
}
