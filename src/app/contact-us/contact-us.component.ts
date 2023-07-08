import { Component, OnInit } from '@angular/core';
declare const google: any;


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // Initialize map
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 }, // Specify the initial center of the map
      zoom: 8 // Specify the initial zoom level
    });

    // Add additional map functionality (e.g., markers, controls) as needed
  }
}
