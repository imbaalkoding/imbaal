import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  overlaypage=0
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
}
