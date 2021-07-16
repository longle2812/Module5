import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1?: number;
  number2?: number;
  result = 0;

  add() {
    return this.result = this.number1 + this.number2;
  }

  sub() {
    return this.result = this.number1 - this.number2;
  }

  mul() {
    return this.result = this.number1 * this.number2;
  }

  div() {
    return this.result = this.number1 / this.number2;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
