import {Component, ElementRef, Inject, Input} from 'angular2/core'
import {TimesGraphDatum} from './interfaces/TimesGraphDatum'
import * as d3 from 'd3'

@Component({
  selector: 'd3-graph',
  template: ``
})
export class D3GraphComponent {
  // data;

  private state = {
    data: [],
    elementRef: null
  };

  constructor(
      @Inject(ElementRef) elementRef: ElementRef
  ) {
      this.state.elementRef = elementRef
  }

  @Input() get data() {
      return this.state.data
  }

  set data(data: TimesGraphDatum[]) {
    if (!data) {
      return
    }
    this.state.data = data
    console.log('data', data)

    const element = this.state.elementRef.nativeElement
    const CHART_HEGHT = element.offsetHeight
    const BAR_WIDTH = element.offsetWidth/data.length - 1
    const downs = data.map(a => a.speed_down)
    const x = d3.scale.linear()
      .domain([0, downs.length])
      .range([d3.min(downs), d3.max(downs)])

    const svg = d3.select(element)
      .append('svg')

    svg.selectAll('g')
        .data(data)
        .enter()
        .append('rect')
        .attr('y', d => CHART_HEGHT - x(d.speed_down))
        .attr('transform', (_, i) => `translate(${i*BAR_WIDTH + i}, 0)`)
        .attr('height', d => `${100*x(d.speed_down)/CHART_HEGHT - 20}%`)
        .attr('width', BAR_WIDTH)

    svg.selectAll('g')
        .data(data)
        .enter()
        .append('text')
        .attr('x', (_, i) => i * BAR_WIDTH + i)
        .attr('y', d => CHART_HEGHT - x(d.speed_down) - 5)
        .text(d => d.speed_down)
  }
}