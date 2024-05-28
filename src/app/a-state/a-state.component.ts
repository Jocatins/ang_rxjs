import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/assets/state.service';

@Component({
  selector: 'app-a-state',
  templateUrl: './a-state.component.html',
  styleUrls: ['./a-state.component.css'],
})
export class AStateComponent {
  counter: number;

  constructor(private stateService: StateService) {
    this.counter = stateService.getCounter();
  }

  increment() {
    this.stateService.increment();
    this.counter = this.stateService.getCounter();
  }
}
