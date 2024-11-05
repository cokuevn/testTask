import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-select',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './test-select.component.html',
  styleUrl: './test-select.component.scss',
})
export class TestSelectComponent {
  @Input() label!: string;
  @Input() choices: string[] = [];
  @Input() control!: FormControl;
}
