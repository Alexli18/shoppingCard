import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // CR: Naming - always name the Output or any Event property as: onSomethingHappened
  // Here the reader cannot understand what happend when this event fires
  @Output() shoppingCard = new EventEmitter();

  // CR: Define an interface for ShopItem in models directory in a separate file, and then import it.
  card: Array<{id:number, name:string, price:number, count:number}> = [];

  // CR: specify a type for arr. Avoid using "any"
  // CR: specify function return type (boolean)
  isExist(arr: any, id: number){
    // CR: if you are on ES6 use arrow function:  return arr.some(el => el.id === id)
    return arr.some(function(el: any) {
      return el.id === id;
    });
  }

  // CR: Avoid using "any", specify function return type
  // CR: Naming - function must have a descriptive name - here the reader cannot understand what this function does
  // unless he is reading the function code.
  // I guess the right name here would be addItem($event: ShopItem): void
  bag($event: any){
    // console.log($event);
    const {id, name, price} = $event;
    if(this.isExist(this.card, id)){
      const elementIndex = this.card.findIndex(element=>element.id==id);
      let newCard = [...this.card];
      newCard[elementIndex].count++;
      this.card = newCard;
      // console.log(this.card);
      this.shoppingCard.emit(this.card);
    }else{
      let item = {
        id,
        name,
        price,
        count: 1
      };
      this.card.push(item);
      // console.log(this.card);
      this.shoppingCard.emit(this.card);
    }
  }

  items = [{
    id: 0,
    img: 'https://cdn11.bigcommerce.com/s-22x7u9zexi/images/stencil/1280x1280/products/118/439/Plumbus__90204.1571958027.500.659__13295.1583022659.png?c=1',
    name: 'Plumbus 10',
    price: '99'
  },{
    id: 1,
    img: 'https://manofmany.com/wp-content/uploads/2015/06/Plumbus-X.jpg',
    name: 'Plumbus X',
    price: '199'
  }]



}
