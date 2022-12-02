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
    if (window.innerWidth<700){
      return true
    }else{
      return false
    }
  }

  sosmed(target:string){
    if(target=='phone'){
      window.open('https://wa.me/+62811111111')
    }else if (target== 'location'){
      window.open('https://www.google.com/maps/place/Jl.+Kp.+Pabuaran,+Jagabita,+Kec.+Parung+Panjang,+Kabupaten+Bogor,+Jawa+Barat+16360/@-6.3338842,106.537327,55m/data=!3m1!1e3!4m5!3m4!1s0x2e4208240a8d1ed7:0xb6c57b593ea5852f!8m2!3d-6.3336699!4d106.5335337')
    }else if (target=='mail'){
      window.open('https://mail.google.com/mail/u/0/')
    }
  }
}
