import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Personne } from './Personne'

@Injectable ({
    providedIn :'root'
})

export class PersonneService {
    private baseURL= 'http://localhost:8080/api/v1/personnes';
    constructor (private httpClient : HttpClient  ) {}
      getEmployeesList(): Observable <Personne[]> {
      return this.httpClient.get <Personne[]> (`${this.baseURL}`)
    }
}