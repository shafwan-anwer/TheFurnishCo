import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent {
  googleMapsUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15840.89771644062!2d79.9011516!3d6.9828211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259815817ad93%3A0x47929bf4e7212f41!2sSmart%20Shoppers!5e0!3m2!1sen!2slk!4v1689175743670!5m2!1sen!2slk';

  googleMapsIframe: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) {
    this.googleMapsIframe = this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleMapsUrl);
  }

}
