import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.scss'],
})
export class FeaturedItemComponent {


  imageUrl1: SafeUrl;
  imageUrl2: SafeUrl;
  imageUrl3: SafeUrl;
  
  constructor(private sanitizer: DomSanitizer) {

    this.imageUrl1 = this.sanitizer.bypassSecurityTrustUrl('assets/BrunaCush.png');
    this.imageUrl2 = this.sanitizer.bypassSecurityTrustUrl('assets/DropType.png');
    this.imageUrl3 = this.sanitizer.bypassSecurityTrustUrl('assets/Backboard.png');

  }

  
}
