import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private route: ActivatedRoute) { 
    this.route.parent?.params.subscribe(param => {
      console.log('ruta hija usuario nuevo');
      console.log(param);
      
    })

  }

  ngOnInit(): void {
  }

}
