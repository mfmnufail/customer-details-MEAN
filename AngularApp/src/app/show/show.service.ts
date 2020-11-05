import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Contestent } from '../../app/shared/contestent.model';

@Injectable()
export class ShowService {
  selectedContestent: Contestent;
  contestents: Contestent[];
  readonly baseURL = 'http://localhost:3000/contestents';

  constructor(private http: HttpClient) { }

  getContestentList() {
    return this.http.get(this.baseURL);
  }



}
