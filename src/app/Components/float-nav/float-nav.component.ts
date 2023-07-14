import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-float-nav',
  templateUrl: './float-nav.component.html',
  styleUrls: ['./float-nav.component.scss']
})
export class FloatNavComponent {
  public showSearchBar = false;

  constructor(private router: Router) {}

  redirectToPage(path:string) {
    this.router.navigate([path]); // Replace '/product' with the actual route path of your product page
  }

  // component.ts
public openSearch(): void {
 this.showSearchBar = true;
}

public closeSearchBar(): void {
  this.showSearchBar = false;
}


}
