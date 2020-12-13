import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    // CR: redundent property
    title = 'shoppingcard';

    // CR: specify type for array
    card = [];

    // CR: Naming - use more specific names for funciton shoppingCartChanged($event: ShopItem[]): void
    wasChange($event:any){
      // console.log($event);
      this.card = $event;
      console.log(this.card);
    }
}
