import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnChanges {
  @Input() greeting: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes['greeting']);
    //
  }
}
