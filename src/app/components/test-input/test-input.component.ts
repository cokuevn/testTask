import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './test-input.component.html',
  styleUrl: './test-input.component.scss',
})
export class TestInputComponent {
  @Input() label!: string;
  @Input() control!: FormControl;
}
