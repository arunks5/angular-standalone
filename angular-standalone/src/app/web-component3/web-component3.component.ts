import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import '@shoelace-style/shoelace/dist/components/button/button.js'

@Component({
  selector: 'app-web3',
  templateUrl: './web-component3.component.html',
  styleUrls: ['./web-component3.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlertComponent3 implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}