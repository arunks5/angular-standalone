import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@shoelace-style/shoelace/dist/components/button/button.js'
import { AlertComponent1 } from './web-component/web-component.component';
import { AlertComponent2 } from './web-component2/web-component2.component';
import { AlertComponent3 } from './web-component3/web-component3.component';
import { AlertComponent4 } from './web-component4/web-component4.component';

@Component({
  selector: 'app-root',
  imports: [AlertComponent1,AlertComponent2,AlertComponent3,AlertComponent4],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'angular-standalone';
}
