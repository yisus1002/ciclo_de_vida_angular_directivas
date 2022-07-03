import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': tamano +'px'}">
      ng-style works! Jesus Garcia
    </p>
    <button class="btn btn-primary m-1" (click)="tamano= tamano + 5"> <i class="fa fa-solid fa-plus"></i></button>
    <button class=" btn btn-success m-1" (click)="tamano= tamano -5"><i class="fa fa-solid fa-minus"></i></button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano:number=20;

  constructor() { }

  ngOnInit(): void {
  }

}
