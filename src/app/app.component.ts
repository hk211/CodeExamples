import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // selector name <my-app> in index.html it puts template html
  template: `
    <fieldset [style.display.block]="hideAddress">
      <img [src]="image"/><h1>{{name}}</h1>

      <label [style.color]="color">Fav colour:</label>
      <button (click)="clicked()">Change colour</button>
      
      <select (change)="changeColor($event.target.value)">
        <option>Red</option>
        <option>Blue</option>
        <option>Green</option> 
      </select>
    </fieldset>

    <div [hidden]="hideAddress">
      <legend>Address</legend>
      <label for="city">City:</label>
      <input id="city" type="text" value={{city}}/>

      <label for="street">Street:</label>
      <input id="street" type="text" value={{street}}/>

      <label for="region">Region:</label>
      <select (change)="regionChange($event.target.value)">
        <option>East</option>
        <option>North</option>
        <option>South</option>
        <option>West</option>
      </select>
      <p>{{name}} is in the {{region}} region</p>
    </div>

    <button (click)="addressClick()">Show/Hide address</button>
  `,
})
// we need to export it so it can be imported
export class AppComponent  {
  image = 'favicon.ico';
  city = 'London';
  color = 'red';
  name = 'Angular';
  region = 'North';
  street = 'Albatross Close';
  hideAddress = false;

  // Event bindings go down to the properties
  clicked() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  changeColor(color: string) {
    console.log(color);
    this.color = color;
  }

  addressClick() {
    console.log(this.hideAddress);
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string) {
    this.region = region;
  }
}


