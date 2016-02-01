import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http'
import {TimesGraphComponent} from './TimesGraphComponent'
import {TimesService} from './TimesService'

@Component({
  selector: 'internet-speed',
  template: `
    <times-graph></times-graph>
  `,
  directives: [
    TimesGraphComponent
  ],
  providers: [
    HTTP_PROVIDERS,
    TimesService
  ]
})
export class App {

  // Declaring the variable for binding with initial value
  yourName: string = '';
}