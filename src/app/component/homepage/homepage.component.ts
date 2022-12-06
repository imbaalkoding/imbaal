import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @Input('iniHp')
  public isMobile :any
  panelOpenState = false;
  constructor() { }
  ngOnInit(): void {

  }

  


}
