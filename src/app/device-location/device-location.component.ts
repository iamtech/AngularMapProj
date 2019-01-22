import { Component, OnInit, AfterViewInit, NgModule, ElementRef, NgZone, Input  } from '@angular/core';
import {Observable} from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


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

  locationDataRequestUrl ='http://localhost:8055/getdata';
  newLocationRequestUrl = 'http://localhost:8055/getnextdata';
  newData: Point[];
  polyline: Point[];

  lastMarker: Point;
  newmarker: Point;
  
  iconUrlRed = 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Outside-Pink-icon.png';
  iconUrlGreen = 'https://i.ibb.co/HTZCWJ7/Gear-1s-36px.gif';
  iconUrlInUse = this.iconUrlGreen;
  iconDevice = 'https://i.ibb.co/qWp6Y8R/Car-1.png';

  constructor(private http: HttpClient) { 
    console.log('polyline from constructor: '+this.polyline);
  }

  ngOnInit() {
    let obs = this.http.get(this.locationDataRequestUrl);
    obs.pipe(map(data => data))
        .subscribe((data) => {
          this.newData=data as Point[];
          this.polyline = this.newData;
          
           console.log(data);
           if(this.polyline != undefined){
            this.lastMarker = this.polyline[this.polyline.length-1];
            console.log('polyline: '+this.polyline);
          }  
           //this.myLineChart.update();
        });
    
    interval(5000).subscribe((counter) => {
      let obsd = this.http.get(this.newLocationRequestUrl).subscribe(posts => {
        this.newmarker = posts as Point;
        this.polyline.push(this.newmarker);
      //  if(this.polyline.length > 12){
     //     this.polyline.shift();
     //   }
        if(this.polyline != undefined){
          this.lastMarker = this.polyline[this.polyline.length-1];
          console.log('polyline: '+this.polyline);
        }  
          console.log('updated data: '+this.newmarker);
      });
      console.log(counter + ': read restItems');
    });
    
  }



  markerClick(){
    this.iconUrlInUse = this.iconUrlRed;
  }

  convertString(value){
    return parseInt(value);
  }

}

interface Point {
    latitude: number;
    longitude: number;
}
