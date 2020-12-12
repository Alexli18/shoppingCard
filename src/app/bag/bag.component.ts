import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  @Input() items = [];
  card:Array<{name:string, price:number, count:number, id:number}> = [];
  total = 0;
  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges(){
    this.card = this.items;
    console.log(this.card);
    this.updateTotal();
  }

  updateTotal(){
    let totalPrices = this.card.map((item)=>{
      return item.price*item.count
    })
    console.log(totalPrices);
    this.total = totalPrices.reduce((a, b) => a + b, 0)
  }

  deleteFromBag(item:any){
    const { id } = item;
    const elementIndex = this.card.findIndex(element=>element.id==id);
    this.card.splice(elementIndex, 1);
    this.updateTotal();
  }

  

}
