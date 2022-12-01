import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:resize',['$event'])
  onWindowResize(){
  }

isMobileMenu(){
    if (window.innerWidth<991){
      return true
    }else{
      return false
    }
  }

  sosmed(target:string){
    if(target=='phone'){
      window.open('https://wa.me/+62811111111')
    }else if (target== 'location'){
      window.open('https://www.google.com/maps/place/Kebun+Raya+Bogor/@-6.5976289,106.7973811,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69c5c412a67abb:0x75f23c6b45a37ee5!8m2!3d-6.5976289!4d106.7995698')
    }else if (target=='mail'){
      window.open('https://mail.google.com/mail/u/0/')
    }
  }
}
