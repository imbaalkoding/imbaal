import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @Input('iniHp')
  public isMobile :any

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  panelOpenState = false;
  constructor() { }
  ngOnInit(): void {
  }
  


}
