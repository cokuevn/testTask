import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestCheckboxComponent } from '../test-checkbox/test-checkbox.component';
import { TestInputComponent } from '../test-input/test-input.component';
import { TestNumberComponent } from '../test-number/test-number.component';
import { TestSelectComponent } from '../test-select/test-select.component';

interface FieldConfig {
  type: string;
  label: string;
  model: string;
  choices?: string[];
}

@Component({
  selector: 'app-form-generator',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TestCheckboxComponent,
    TestInputComponent,
    TestNumberComponent,
    TestSelectComponent,
  ],
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss'],
})
export class FormGeneratorComponent implements OnInit {
  form!: FormGroup;
  config: FieldConfig[] = [
    { type: 'input', label: 'Имя', model: 'name' },
    { type: 'number', label: 'Возраст', model: 'age' },
    {
      type: 'select',
      label: 'Семейное положение',
      model: 'familyStatus',
      choices: ['Не женат / не замужем', 'Женат / замужем'],
    },
    { type: 'input1', label: 'ВУЗ', model: 'universities' },
    {
      type: 'select',
      label: 'Место рождения',
      model: 'birthPlace',
      choices: ['Не важно', 'Город 1', 'Город 2'],
    },
    {
      type: 'checkbox',
      label: 'Навыки',
      model: 'skills',
      choices: [
        'Общение',
        'Языкм',
        'Программирование',
        'Вождение',
        'Самозащита',
        'Чтение',
        'Управление',
        'Пение',
      ],
    },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      universities: this.fb.array([new FormControl('')]),
      skills: this.fb.array([]), // создаем FormArray для навыков
    });
  }

  ngOnInit() {
    this.config.forEach((field) => {
      if (field.model !== 'universities' && field.model !== 'skills') {
        const control = new FormControl('', Validators.required);
        this.form.addControl(field.model, control);
      }
    });

    this.config
      .find((field) => field.model === 'skills')
      ?.choices?.forEach(() =>
        (this.form.get('skills') as FormArray).push(new FormControl(false))
      );
  }

  get universities(): FormArray {
    return this.form.get('universities') as FormArray;
  }

  addUniversity() {
    this.universities.push(new FormControl(''));
  }

  removeUniversity(index: number) {
    this.universities.removeAt(index);
  }

  getFormControl(model: string): FormControl {
    return this.form.get(model) as FormControl;
  }

  getFormArray(model: string): FormArray {
    return this.form.get(model) as FormArray;
  }

  onSubmit() {
    console.log(this.form.value);
  }

  isFormValid(): boolean {
    const name = this.form.get('name')?.value;
    const age = this.form.get('age')?.value;
    const familyStatus = this.form.get('familyStatus')?.value;

    return name && age && familyStatus; // Вернет true, если все три поля заполнены
  }
}
