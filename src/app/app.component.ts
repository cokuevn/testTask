import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGeneratorComponent } from './components/form-generator/form-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
