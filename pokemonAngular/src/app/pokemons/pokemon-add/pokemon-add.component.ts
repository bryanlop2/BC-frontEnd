import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Component({
  selector: 'pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.css'],
})
export class PokemonAddComponent implements OnInit {
  profileForm = this.fb.group({
    pokemonNumber: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
    pokemonName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    pokemonType: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    pokemonGeneration: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(14)]],
    pokemonDescription: ['', Validators.required, Validators.minLength(10), Validators.maxLength(50)],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get types() {
    return this.profileForm.get('types') as FormArray;
  }

  addType() {
    this.types.push(this.fb.control(''));
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}