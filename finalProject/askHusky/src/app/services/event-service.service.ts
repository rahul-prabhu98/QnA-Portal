import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {EventRequest} from '../classes/eventRequest';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  eventRequestOrganizerList: Array<EventRequest>;
  eventRequestAttendees: Array<EventRequest>;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
  }

  public createRequest(form: object): Observable<EventRequest> {
    return this.http.post<EventRequest>(environment.apiHostUrl + '/events/requests', form, {headers: this.headers});
  }

  public listOrganizer(id: string): Observable<Array<EventRequest>> {
    // tslint:disable-next-line:max-line-length
    const organizerList$ = this.http.get<EventRequest[]>(environment.apiHostUrl + '/events/requests/organizers/' + id, {headers: this.headers});
    return organizerList$;
  }

  public listAttendee(id: string): Observable<Array<EventRequest>> {
    // tslint:disable-next-line:max-line-length
    const attendeesList = this.http.get<EventRequest[]>(environment.apiHostUrl + '/events/requests/attendees/' + id, {headers: this.headers});
    return attendeesList;
  }

  public update(eventObj: EventRequest): Observable<EventRequest> {
    // tslint:disable-next-line:max-line-length
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    const updateObj$ = this.http.put<EventRequest>(environment.apiHostUrl + '/events/requests/' + eventObj.id, eventObj, {headers: this.headers});
    return updateObj$;
  }

  public changeRequestReason(eventObj: EventRequest, reqReason: string): Observable<EventRequest> {
    eventObj.requestStatus = reqReason;
    return this.update(eventObj);
  }


}
