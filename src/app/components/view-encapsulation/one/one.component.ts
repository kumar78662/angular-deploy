import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  // encapsulation: ViewEncapsulation.None, --all the css writing in this components scss will be considered globally
  // encapsulation: ViewEncapsulation.Emulated, this is default behaviour
  // encapsulation: ViewEncapsulation.ShadowDom -- only css written in this components css file will be Applied global css has no effect on this component
})
export class OneComponent {

}
