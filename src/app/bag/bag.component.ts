import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  @Input() items = [];

  // CR: declare an interface (model) for the ShopItem in a separate file in models directory
  card:Array<{name:string, price:number, count:number, id:number}> = [];
  total = 0;
  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(){
    this.card = this.items;
    // CR: If possible, whe submitting code remove console.log
    console.log(this.card);
    this.updateTotal();
  }

  // CR: updateTotal(): void
  updateTotal(){
    let totalPrices = this.card.map((item)=>{
      return item.price*item.count // CR: try not to forget ;
    })
    console.log(totalPrices);
    this.total = totalPrices.reduce((a, b) => a + b, 0)
  }

  // CR: specify type for item. Avoid using "any".
  deleteFromBag(item:any){
    const { id } = item;
    const elementIndex = this.card.findIndex(element=>element.id==id);
    this.card.splice(elementIndex, 1);
    this.updateTotal();
  }



}
