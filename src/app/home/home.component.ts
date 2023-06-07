import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  imageUrl: SafeUrl;
  constructor(private sanitizer: DomSanitizer, private router: Router) {

    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('assets/homesofa.png');

  }

  redirectToProductPage() {
    this.router.navigate(['/product']); // Replace '/product' with the actual route path of your product page
  }

}
