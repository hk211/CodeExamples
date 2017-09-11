import { Component } from '@angular/core';
// import { ngModel }  from '@angular/core';

@Component({
  selector: 'my-app', // selector name <my-app> in index.html it puts template html
  template: `
    <h1>Customers</h1>
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

      <input #namebox [value]="name" (input)="name=$event.target.value">
      
      Fire on enter: 
      <input #namebox [value]="name" (keyup.enter)="name=$event.target.value">

      Fire on enter and blur: 
      <input #namebox [value]="name" (keyup.enter)="name=$event.target.value"
                                     (blur)="name=$event.target.value">

      Two way data-binding recommending:
      <input [(ngModel)]="name">
    </div>

    <button (click)="addressClick()">Show/Hide address</button>
  `,
})
// we need to export it so it can be imported
export class AppComponent  {
  city = 'London';
  name = 'Angular';
  region = 'North';
  street = 'Albatross Close';
  hideAddress = false;

  addressClick() {
    console.log(this.hideAddress);
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string) {
    this.region = region;
  }
}


