import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiHandlerService {
    isDev:boolean = true;
    endpoint:string = '';


    constructor(private httpClient:HttpClient) {
        if(this.isDev) {
            this.endpoint = 'http://localhost:4201';
        } else {
            this.endpoint = 'https://dark1ink.de:4201';
        }
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
