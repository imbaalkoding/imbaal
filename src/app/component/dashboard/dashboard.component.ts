import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
