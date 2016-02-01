import {Component, OnInit} from 'angular2/core'
import {D3GraphComponent} from './D3GraphComponent.ts'
import {TimesService} from './TimesService.ts'
import TimesGraphDatum from './interfaces/TimesGraphDatum.ts'

@Component({
  directives: [D3GraphComponent],
  selector: 'times-graph',
  template: `
    <d3-graph [data]="times"></d3-graph>
  `
})
export class TimesGraphComponent implements OnInit {
  constructor (private _timesService: TimesService) {}

  times: TimesGraphDatum[];

  ngOnInit() {
    // TODO: use Rx.interval
      setInterval(() => {
      this._timesService.getTimes().subscribe(times => this.times = times)
    }, 10*1000)
  }

}