import { Component, OnInit,Input} from '@angular/core';


@Component({
  selector: 'ourservis',
  templateUrl: './ourservis.component.html',
  styleUrls: ['./ourservis.component.scss']
})
export class OurservisComponent implements OnInit {
@Input('iniHp')
public isMobile:any
  constructor() { }

  ngOnInit(): void {
    
  }


}
