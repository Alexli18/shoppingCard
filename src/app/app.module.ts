import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BagComponent } from './bag/bag.component';
import { ShopComponent } from './shop/shop.component';
import { ShopitemComponent } from './shopitem/shopitem.component';

@NgModule({
  declarations: [
    AppComponent,
    BagComponent,
    ShopComponent,
    ShopitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
