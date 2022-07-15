import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return( control: AbstractControl): ValidationErrors | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? {forbiddenName: {value: control.value}} : null
    }
}

@Component({
    selector: 'pokemon-add',
    templateUrl: './pokemon-add.component.html',
    styleUrls: []
})

export class PokemonAddComponent implements OnInit {
    profileForm = this.fb.group({
        pokemonName: ['',
    [
        Validators.required,
        Validators.minLength(4),
    ]
],
pokemonDescription: ['', Validators.required],
address: this.fb.group({
    street: ['', [
        forbiddenNameValidator(/\w+/g)
    ]],
    city: [''],
    state: [''],
    zip: ['']
}),
types: this.fb.array([
    this.fb.control('')
])
    })
    profileForm2 = new FormGroup({
        pokemonName: new FormControl(''),
        pokemonDescription: new FormControl(''),    
    });

    constructor(private fb: FormBuilder) {}
    
    ngOnInit(): void {
    }

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