import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StringCountResponse } from '../model/string-count-response.interface';
import { StringService } from './string.service';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.scss']
})
export class StringComponent implements OnInit {
  form!: FormGroup;
  stringCountResponse: StringCountResponse = {
    stringCountRequest: { text: "Mock de Text" },
    caracters: 0,
    caractersWithoutSpaces: 0,
    words: 0,
    spaces: 0,
    vowels: 0,
    numbers: 0,
    lines: 0
  };

  constructor(private fb: FormBuilder, private stringService: StringService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      text: ['', Validators.required]
    })
  }

  handleSubmit() {
    this.stringService.post(this.form.getRawValue()).subscribe(data => this.syncResponseWithStringCountResponse(data), error => console.error("error"), () => console.log('request completo'));
  }

  syncResponseWithStringCountResponse(data: any){
    this.stringCountResponse.stringCountRequest = data.stringCountRequest;
    this.stringCountResponse.caracters = data.caracters;
    this.stringCountResponse.caractersWithoutSpaces = data.caractersWithoutSpaces;
    this.stringCountResponse.lines = data.lines;
    this.stringCountResponse.numbers = data.numbers;
    this.stringCountResponse.spaces = data.spaces;
    this.stringCountResponse.vowels = data.vowels;
    this.stringCountResponse.words = data.words;
  }
}
