import { Component, OnInit } from '@angular/core';
import { StringCountResponse } from '../model/string-count-response.interface';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.scss']
})
export class StringComponent implements OnInit {

  stringCountResponse: StringCountResponse = {
    stringCountRequest: { text: "Mock de Text"},
    caracters: 0,
    caractersWithoutSpaces: 0,
    words: 0,
    spaces: 0,
    vowels: 0,
    numbers: 0,
    lines: 0
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(){
  }

}
