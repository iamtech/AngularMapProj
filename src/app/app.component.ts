import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-maps-project';
  lat: number = 28.5734;
  lng: number = 77.3712;
  iconUrlRed = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Outside-Pink-icon.png';
  iconUrlGreen = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Outside-Chartreuse-icon.png';
  iconUrlInUse = this.iconUrlGreen;

  markerClick(){
    this.iconUrlInUse = this.iconUrlRed;
  }
}
