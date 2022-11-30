import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
img1:string
img2:string
img3:string
img4:string
constructor(){
this.img1='../../../assets/images/4.jpg'
this.img2='../../../assets/images/2.jpg'
this.img3='../../../assets/images/3.jpg'
this.img4='../../../assets/images/1.jpg'

}
}
