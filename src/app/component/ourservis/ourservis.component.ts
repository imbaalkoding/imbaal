import { Component, OnInit,HostListener } from '@angular/core';


@Component({
  selector: 'app-ourservis',
  templateUrl: './ourservis.component.html',
  styleUrls: ['./ourservis.component.scss']
})
export class OurservisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  @HostListener('window:resize',['$event'])
  onWindowResize(){
  }

isMobileMenu(){
    if (window.innerWidth<700){
      return true
    }else{
      return false
    }
  }

}
