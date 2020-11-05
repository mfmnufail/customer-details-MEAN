import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Contestent } from './contestent.model';

@Injectable()
export class ContestentService {
  selectedContestent: Contestent;
  contestents: Contestent[];
  readonly baseURL = 'http://localhost:3000/contestents';

  constructor(private http: HttpClient) { }

  postContestent(contes: Contestent) {
    return this.http.post(this.baseURL, contes);
  }

  getContestentList() {
    return this.http.get(this.baseURL);
  }

  putContestent(contes: Contestent) {
    return this.http.put(this.baseURL + `/${contes._id}`, contes);
  }

  deleteContestent(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
