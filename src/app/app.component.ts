import { Component } from '@angular/core';
import { latLng, LatLngBounds, tileLayer, imageOverlay } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'leaflet-tile-test';

  bounds =  new LatLngBounds([0 , 0], [600, 400]);
  imageOverlay = imageOverlay('/assets/images/big-tree.jpg', this.bounds);
  base = tileLayer('', {
    maxZoom: 8,
    detectRetina: true
  });

  options = {
    layers: [
      this.imageOverlay, this.base
    ],
    zoom: 0 ,
    center: this.bounds.getCenter()
  };

}
