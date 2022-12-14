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
lokasi = [{ tempat:"Perumahan \nSerpong green paradise",
            foto: "../../../assets/foto/bor1.jpg" },
          {tempat:"Perumahan \nPuri harmoni 8",
          foto: "../../../assets/foto/bor2.jpg"},
          {tempat:"Perumahan \nPuri harmoni 8",
          foto: "../../../assets/foto/bor3.jpg"},
          {tempat:"Perumahan \nmetro parungpanjang 1",
          foto: "../../../assets/foto/bor4.jpg"},
          {tempat:"Perumahan \nmetro parungpanjang 2",
          foto: "../../../assets/foto/bor5.jpg"},
          {tempat:"Tangerang Selatan",
          foto: "../../../assets/foto/bor6.jpg"},
          {tempat:"Tengerang kota",
          foto: "../../../assets/foto/bor7.jpg"} ]
showNavigationArrows = true;
showNavigationIndicators = false;
images = [1,2,3,4,5,6,7].map((n) => `../../../assets/foto/bor${n}.jpg `);
videos = [1,2,3,4,5,6,7].map((n)=>  `../../../assets/video/bor${n}.mp4`);


  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
   }
 
  ngOnInit(): void {
    console.log(this.lokasi) 
  }

}
