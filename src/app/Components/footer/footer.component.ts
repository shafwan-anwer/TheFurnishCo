import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router) {}


  redirectToProductPage() {
    this.router.navigate(['/product']); // Replace '/product' with the actual route path of your product page
  }
  redirectToHomePage() {
    this.router.navigate(['/']); // Replace '/product' with the actual route path of your product page
  }
  redirectToContactusPage() {
    this.router.navigate(['/contact-us']);
  }
}
