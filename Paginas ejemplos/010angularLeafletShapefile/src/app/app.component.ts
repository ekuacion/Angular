import { Component, OnInit } from "@angular/core";
import "leaflet";

import * as shp from "shpjs";
declare let L;

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
	
	ngOnInit() {


		const m = L.map("map").setView([34.74161249883172, 18.6328125], 3);

		/* const tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
          maxZoom: 19,
          minZoom: 3
        });  
        m.zoomControl.setPosition('topright');
        tiles.addTo(m); */ 

		var CanvasLayer = L.GridLayer.extend({
			createTile: function(coords){
				// create a <canvas> element for drawing
				var tile = L.DomUtil.create('canvas', 'leaflet-tile');		
				// setup tile width and height according to the options
				var size = this.getTileSize();
				tile.width = size.x;
				tile.height = size.y;		
				// get a canvas context and draw something on it using coords.x, coords.y and coords.z
				var ctx = tile.getContext('2d');		
				// return the tile so it can be rendered on screen
				return tile;
			}
		});			

		const geo = L.geoJson(
			{ features: [] },
			{ style:function (feature){ return {fillColor: "#090E13", color: "#1FFF0F", weight: 1}},
				/* onEachFeature: function popUp(f:any, l:any) {
					const out = [];
					if (f.properties) {
						for (const key of Object.keys(f.properties)) {
							out.push(key + " : " + f.properties[key]);
						}
					l.bindPopup(out.join("<br />"));
					l.setStyle({fillColor: "#090E13", color: "#1FFF0F", weight: 1});
					}
				} */
			}
			
		).addTo(m);	
		
		const base = "assets/limites_internacionales.zip";
		shp(base).then(function(data:any) {
			geo.addData(data);
		});
	}
}
