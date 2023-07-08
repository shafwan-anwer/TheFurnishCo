import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-store-data-block',
  templateUrl: './store-data-block.component.html',
  styleUrls: ['./store-data-block.component.scss']
})
export class StoreDataBlockComponent {
  quantity: number = 0;
  imageUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {

    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('assets/Backboard.png');

  }
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
