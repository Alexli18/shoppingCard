import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingcard';

  card = [];

  wasChange($event:any){
    // console.log($event);
    this.card = $event;
    console.log(this.card);
  }
}
