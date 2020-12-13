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

    /* CR: In General looks great.
     * Keep strong typing.
     * Decalre interfaces.
     * Use descriptive names for parameters, methods, components ... for everything. From my experience
     * naming is one of most important things when reading your code.
     * I should only read the name of your function to understand what it does.
     *
     * Also I always suggest to use 4 spaces indentation and more spaces in your code.
     *
     * For Interview exam, I'd suggest you to:
     * 1. Refactor your project structure, add components, services, models directories.
     * 2. Add services. API service and Products service You should put your mock ShopItems in API service and work with Observables.
     * 3. Try to move all possible business logic to the services, and leave the components as stupid as possible.
     * 4. Add routing.
     */

}
