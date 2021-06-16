import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Centro } from '../centros/centros.component';

@Component({
  selector: 'app-centro',
  template: `
    {{centro?.nombre}}
  `,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  @Input()
  centro? : Centro;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(x => console.log(x));
   }

  ngOnInit(): void {
  }

}
