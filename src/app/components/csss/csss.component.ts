import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csss',
  template: `
    <p>
      csss works!
    </p>
  `,
  styles: [`
  p{
    color:red;
    font-size:20px;
  }

  `
  ]
})
export class CsssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
