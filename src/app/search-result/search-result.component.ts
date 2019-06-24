import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {companies} from './CompanySAMPLE'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor() {

  }

  typeahead: FormControl = new FormControl();
  companys: string[];
  suggestions: string[];

  allCompanies: any[];

  ngOnInit() {
    // TODO: always make GET for company and populate dropdown
    this.allCompanies = companies;
    this.allCompanies = this.allCompanies.map(function (x){return x.toLowerCase()});
    console.log(this.allCompanies);

  }


  suggest() {
    this.suggestions = this.allCompanies
      .filter(c => c.startsWith(this.typeahead.value))
      .slice(0, 5);
  }


  clearSuggest(){

  }


}
