import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss']
})
export class CounterPageComponent {
  // Señal que si se puede modificar
  public counter = signal(10);
  // Señal solo de lectura
  public squareCounter = computed( () => this.counter() * this.counter() );

  increseBy(value: number) {
    this.counter.update(current => current + value);
  }
}
