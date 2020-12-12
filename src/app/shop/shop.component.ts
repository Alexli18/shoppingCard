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
  @Output() shoppingCard = new EventEmitter();
  card: Array<{id:number, name:string, price:number, count:number}> = [];


  isExist(arr: any, id: number){
    return arr.some(function(el: any) {
      return el.id === id;
    }); 
  }


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
