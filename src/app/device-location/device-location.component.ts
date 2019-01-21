import { Component, OnInit, NgModule, ElementRef, NgZone,Input  } from '@angular/core';

@Component({
  selector: 'app-device-location',
  templateUrl: './device-location.component.html',
  styleUrls: ['./device-location.component.css']
})
export class DeviceLocationComponent implements OnInit {

  title = 'my-maps-project';
  lat: number = 28.571347;
  lng: number = 77.386467;
  zoomVal: number = 15;
  iconTitle = "Current Location"
  infoWindowStatus = "STATUS: Working fine";
  infoWindowReport = "REPORT: Error msg";
  
  polyline: Point[] = [
    {latVal :28.575003, longVal :77.393721},
    {latVal :28.573637, longVal :77.393834},
    {latVal :28.572183, longVal :77.393964},
    {latVal :28.572070, longVal :77.393835},
    {latVal :28.571938, longVal :77.393503},
    {latVal :28.571816, longVal :77.390993},
    {latVal :28.571599, longVal :77.386927},
    {latVal :28.571439, longVal :77.384117},
    {latVal :28.571192, longVal :77.379109}
  ];
  
  iconUrlRed = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Outside-Pink-icon.png';
  iconUrlGreen = 'https://i.ibb.co/HTZCWJ7/Gear-1s-36px.gif';
  iconUrlInUse = this.iconUrlGreen;

  constructor() { }

  ngOnInit() {
      
  }


  markerClick(){
    this.iconUrlInUse = this.iconUrlRed;
  }

  convertString(value){
    return parseInt(value);
  }

}

interface Point {
     latVal: number;
     longVal: number;
}
