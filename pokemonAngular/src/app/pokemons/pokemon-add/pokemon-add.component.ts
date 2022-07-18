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
    pokemonImgLink: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(70)]],
    pokemonDescription: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    pokemonImg: [''],
  });
  pokemons: any;
  data: any = {};
  srcResult: any;

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

  saveData() {
    this.data = this.profileForm.value;
    localStorage.setItem('pokemonAPI', JSON.stringify(this.data))
  }

  loadData() {
    let data = localStorage.getItem('pokemonAPI');
    if(data)
    this.pokemons = JSON.parse(data)
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
        console.log('tenemos: ',inputNode.files[0].name)
        console.log('form: ', this.profileForm.value)
        this.srcResult = inputNode.files[0].name;
        const result = inputNode.files[0].name;
        this.profileForm.value.pokemonImg = `D:/${result}`;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
  //https://assets.pokemon.com/assets/cms2/img/pokedex/detail/251.png
}
