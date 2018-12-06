import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})

export class AppComponent {
	title = 'Cards Exercise';
  cardMax = 0;
  status = [];
  cardStyle = {};
  constructor() {
    this.cardMax = Array(4).fill(0).map((x,i)=>i+1);
  }

  showCard(num){
    for (let i of this.cardMax){
      this.status[i] = false;
    }
    this.status[num] = true;
  }
  addCard(){
    this.cardMax.push(this.cardMax.length + 1);
  }
  changeBG(){
    this.cardStyle = {
      "background-image":"url(https://cdn.shibe.online/shibes/f81aa11370b1789a4129e7d5ada54d761a344259.jpg)",
      "background-size":"100% 100%"
    }

  }
}
