import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  count = signal(0);

  // greetingFromParent = computed('Hello from Parent'+this.count())

  greetingFromParent = computed(() => `Hello from Parent ${this.count()}`);

  increment() {
    this.count.set(this.count()+1);
  }
}
