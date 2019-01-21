import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-maps-project';
  lat: number = 28.571347;
  lng: number = 77.386467;
  zoomVal: number = 15;
  iconTitle = "Active"
  infoWindowStatus = "STATUS: Working fine";
  infoWindowReport = "REPORT: Error msg";
  
  iconUrlRed = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Outside-Pink-icon.png';
  iconUrlGreen = 'https://i.ibb.co/HTZCWJ7/Gear-1s-36px.gif';
  iconUrlInUse = this.iconUrlGreen;


  markerClick(){
    this.iconUrlInUse = this.iconUrlRed;
  }
}
