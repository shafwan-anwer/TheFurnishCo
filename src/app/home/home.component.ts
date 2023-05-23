import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  imageUrl: SafeUrl;
  constructor(private sanitizer: DomSanitizer) {

    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('assets/homesofa.png');

  }

}
