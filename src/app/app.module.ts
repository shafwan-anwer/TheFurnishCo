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
import { MatChipsModule } from '@angular/material/chips';
import { RatingComponent } from './Components/rating/rating.component';
import { FooterComponent } from './Components/footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { FloatNavComponent } from './Components/float-nav/float-nav.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { CartComponent } from './cart/cart.component';
import { StoreDataBlockComponent } from './Components/store-data-block/store-data-block.component';
import { AccountComponent } from './account/account.component';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FeaturedItemComponent,
    ProductDetailpageComponent,
    ProductPageComponent,
    RatingComponent,
    FooterComponent,
    ContactUsComponent,
    FloatNavComponent,
    LoginComponent,
    CartComponent,
    StoreDataBlockComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
