import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   gold: boolean = true;
   silver: boolean = true;
   copper: boolean = true;

   constructor() { }

   ngOnInit() { }

   activateAll() {
      this.gold = true;
      this.silver = true;
      this.copper = true;
   }

}
