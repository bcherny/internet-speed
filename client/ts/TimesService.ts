import {Injectable} from 'angular2/core'
import {Http}       from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import {TimesGraphDatum} from './interfaces/TimesGraphDatum'

@Injectable()
export class TimesService {
  constructor(private http: Http) {}

  pollForTimes() {
    Observable
      .interval(60*1000)
      .flatMapLatest(this.getTimes)
  }

  getTimes() {
    return this.http
      .get('/times')
        .map(_ => <TimesGraphDatum[]> _.json().data.sort((a,b) => a.date < b.date))
      .catch(this.error)
  }

  error(e: Error) {
    console.error(e)
    return Observable.throw(e)
  }
}