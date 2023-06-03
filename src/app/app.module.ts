import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FeaturedItemComponent } from './Components/featured-item/featured-item.component';
import { ProductDetailpageComponent } from './product-detailpage/product-detailpage.component';
import {MatIconModule} from '@angular/material/icon';
import { ProductPageComponent } from './product-page/product-page.component';
import {MatChipsModule} from '@angular/material/chips';
import { RatingComponent } from './Components/rating/rating.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FeaturedItemComponent,
    ProductDetailpageComponent,
    ProductPageComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
