import { Injectable } from '@angular/core';
import {ProcessHttpmsgService} from'../services/process-httpmsg.service'
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseURL} from '../shared/baseurl';
import {catchError} from 'rxjs/operators';
import {FeedBack} from '../shared/feedback';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient ,
    private processHTTPMsgService: ProcessHttpmsgService) {
}
submitFeedback(feedback: FeedBack): Observable<FeedBack> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.post<FeedBack>(baseURL + 'feedbacks/' , feedback , httpOptions)
    .pipe(catchError(this.processHTTPMsgService.handleError));
}
}
