import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopitem',
  templateUrl: './shopitem.component.html',
  styleUrls: ['./shopitem.component.css']
})
export class ShopitemComponent implements OnInit {
  url = '';
  name = '';
  price = '';
  constructor() { }
  // CR: Use ShopItem interface. Avoid using "any"
  @Input() shopItem: any;
  // CR: specify type for EventEmitter - new EventEmitter<ShopItem>()
  @Output() addToBag = new EventEmitter();

  ngOnInit(): void {
    this.url = this.shopItem.img;
    this.name = this.shopItem.name;
    this.price = this.shopItem.price;
  }

  addToCard(){
    this.addToBag.emit(this.shopItem);
  }

}
