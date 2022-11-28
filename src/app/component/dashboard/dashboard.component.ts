import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     
    
  }

  isMobileMenu(){
    if (window.innerWidth<991){
      return true
    }else{
      return false
    }
  }

}
