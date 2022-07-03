import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  alerta:string="alert-danger";
  propiedades={
    danger:true,
    texto: 'Danger',

  }
  loading:boolean=false;
  
  constructor() { }

  ngOnInit(): void {
  }
  ejecutarProceso(){
    this.loading=true;
    setTimeout( ()=>this.loading=false, 3000)
  }

}
