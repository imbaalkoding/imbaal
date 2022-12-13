import { Component, OnInit,Input} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'ourservis',
  templateUrl: './ourservis.component.html',
  styleUrls: ['./ourservis.component.scss']
})
export class OurservisComponent implements OnInit{
@Input('iniHp')
public isMobile:any;
panelOpenState =false
showNavigationArrows = true;
showNavigationIndicators = false;
images = [1,2,3,4,5,6,7].map((n) => `../../../assets/foto/bor${n}.jpg `);
videos = [1,2,3,4,5,6,7].map((n)=>  `../../../assets/video/bor${n}.mp4`)
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
   }
  
  ngOnInit(): void {
    console.log(this.images[1]) 
  }

}
