import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductAreaComponent } from './product-area/product-area.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShopComponent,
    HeaderComponent,
    MobileNavComponent,
    ProductAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    // library.add(faCoffee,faWindowClose,faFilm,faFish);
  }
}
