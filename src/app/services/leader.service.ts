import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';

import {baseURL} from '../shared/baseurl';
import {HttpClient} from '@angular/common/http';
import {Observable , of} from 'rxjs';
import {delay , map} from 'rxjs/operators';
import {Dish} from '../shared/dish';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http:HttpClient) { }

  // getLeaders():Promise<Leader[]>{
  //   return new Promise(resolve =>{
  //     setTimeout(()=>resolve(LEADERS),2000);
  //   });
  // }

  // getFeaturedLeader():Promise <Leader>{
  //   return new Promise(resolve =>{
  //     setTimeout(()=>resolve(LEADERS.filter((leader)=>(leader.featured))[0]),2000);
  //   });
  // }
  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership');
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership/' + id);
  }

  getFeaturedleader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leadership?featured=true').pipe(map(leaders => leaders[0]));
  }

  getleaderIds(): Observable<number[] | any> {
    return this.getLeaders().pipe(map(leaders => leaders.map(leader => leader.id)));
  }
}
