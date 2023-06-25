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

  toggleSearch(): void {
    this.isSearchExpanded = !this.isSearchExpanded;
  }

  redirectToPage(path: string) {
    this.router.navigate([path]); // Replace '/product' with the actual route path of your product page
  }

  search() {
    // Implement your search functionality here
    console.log('Performing search with query:', this.searchQuery);
    // You can replace the console.log statement with your search logic
  }
}
