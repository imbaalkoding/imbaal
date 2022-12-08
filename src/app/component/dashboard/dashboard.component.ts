import { Component, OnInit,HostListener, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  // @Output() lebarJendela = new EventEmitter<any>();
  constructor() { }
 lebarJendela =0
  ngOnInit(): void {
  }

  @HostListener('window:resize',['$event'])
  onWindowResize(){
  }

  isMobileMenu(){
    if (window.innerWidth<900){
      return true
    }else{
      return false
    }
  }
  wa(){
    console.log('1')
    window.open('https://wa.me/+6281282606922') 
  }
  
}
