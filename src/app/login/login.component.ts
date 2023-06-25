import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  imageUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer, private router: Router) {

    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('assets/homesofa.png');

  }

}
