import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './test-checkbox.component.html',
  styleUrl: './test-checkbox.component.scss',
})
export class TestCheckboxComponent {
  @Input() label!: string;
  @Input() choices!: string[];
  @Input() control!: FormArray;

  // Method to get a specific FormControl from the FormArray
  getFormControl(index: number): FormControl {
    return this.control.at(index) as FormControl;
  }
}
