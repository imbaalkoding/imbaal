import { Component, OnInit,HostListener, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  overlaypage=0
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  panelOpenState = false;
  constructor() { }
  ngOnInit(): void {
    this.overlaypage =0
  }
  
  homepageSlide(comand:string){
    if(comand =='sebelum'){
      if(this.overlaypage==0){
        this.overlaypage = 4
      }else {
        this.overlaypage --
      }
    }else if (comand=='berikut'){
      if(this.overlaypage==4){
        this.overlaypage =0
      }else{
        this.overlaypage++
      }
    }
    console.log(this.overlaypage)
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
