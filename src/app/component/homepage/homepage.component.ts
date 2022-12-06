import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @Input('iniHp')
  public isMobile :any
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  // images = [1, 2, 3].map((n) => `../../../assets/frame${n}`);
  panelOpenState = false;
  constructor() { }
  ngOnInit(): void {

  }

  


}
