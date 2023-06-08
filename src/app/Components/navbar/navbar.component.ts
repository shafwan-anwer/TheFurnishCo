import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

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
