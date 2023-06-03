import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  imageUrl: SafeUrl;
  imageUrl1: SafeUrl;
  constructor(private sanitizer: DomSanitizer) {

    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('assets/BrunaCush.png');
    this.imageUrl1 = this.sanitizer.bypassSecurityTrustUrl('assets/product1.png');

  }

}
