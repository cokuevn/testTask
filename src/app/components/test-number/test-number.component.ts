import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-number',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './test-number.component.html',
  styleUrl: './test-number.component.scss',
})
export class TestNumberComponent {
  @Input() label!: string; // Метка для инпута
  @Input() control!: FormControl; // Переданный FormControl

  // Метод для уменьшения значения
  decrement() {
    const currentValue = this.control.value; // Получаем текущее значение из FormControl
    this.control.setValue(Math.max(0, currentValue - 1)); // Не допускаем отрицательных значений
  }

  // Метод для увеличения значения
  increment() {
    const currentValue = this.control.value; // Получаем текущее значение из FormControl
    this.control.setValue(+currentValue + 1);
  }
}
