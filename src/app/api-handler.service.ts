import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ApiHandlerService {
    domain:string = "localhost";
    port:number = 4201;
    endpoint:string = '';


    constructor(private httpClient:HttpClient, @Inject(DOCUMENT) private document:any) {
        this.domain = this.document.location.hostname;
        if(this.domain === 'localhost') {
            this.domain = 'http://' + this.domain;
        } else{
            this.domain = 'https://'  + this.domain;
        }
        this.endpoint = this.domain + ':' + this.port;
    }

    getCalendar(year:number):Observable<MonthDto[]> {
        return this.httpClient.request<MonthDto[]>("GET", `${this.endpoint}/getCalendar?year=${year}`);
    }

    getCalendarEvents(year:number):Observable<EventDto> {
        return this.httpClient.request<EventDto>("GET", `${this.endpoint}/getYearEvents?year=${year}`)
    }
}


export interface MonthDto{
    monthName:string;
    weeks:WeekDto[]
}

export interface WeekDto {
    weekName:string,
    dates:Date[]
}

export interface EventDto {
    eventDate:Date;
    eventName:string,
    category:string,
    createdDate:Date
}
