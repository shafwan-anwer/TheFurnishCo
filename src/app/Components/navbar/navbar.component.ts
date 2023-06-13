import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isSearchExpanded: boolean = false;
  searchQuery: string = '';

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

  toggleSearchBar() {
    this.isSearchExpanded = !this.isSearchExpanded;
    if (!this.isSearchExpanded) {
      this.searchQuery = ''; // Clear the search query when hiding the search bar
    }
  }

  search() {
    // Implement your search functionality here
    console.log('Performing search with query:', this.searchQuery);
    // You can replace the console.log statement with your search logic
  }
}
