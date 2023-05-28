import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detailpage',
  templateUrl: './product-detailpage.component.html',
  styleUrls: ['./product-detailpage.component.scss']
})
export class ProductDetailpageComponent {

  imageUrl: SafeUrl;
  smallImage1: SafeUrl;
  smallImage2: SafeUrl;
  smallImage3: SafeUrl;
  constructor(private sanitizer: DomSanitizer) {

    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('assets/product-pagebig.png');
    this.smallImage2 = this.sanitizer.bypassSecurityTrustUrl('assets/small-productimg2.png');
    this.smallImage1 = this.sanitizer.bypassSecurityTrustUrl('assets/small-productimg1.png');
    this.smallImage3 = this.sanitizer.bypassSecurityTrustUrl('assets/small-productimg3.png');

  }
}
