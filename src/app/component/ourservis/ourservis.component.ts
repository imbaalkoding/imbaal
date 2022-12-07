import { Component, OnInit,Input, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'ourservis',
  templateUrl: './ourservis.component.html',
  styleUrls: ['./ourservis.component.scss']
})
export class OurservisComponent implements OnInit{
@Input('iniHp')
public isMobile:any
showNavigationArrows = true;
showNavigationIndicators = false;
images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
   }
  



  ngOnInit(): void { 
    
  }



}
