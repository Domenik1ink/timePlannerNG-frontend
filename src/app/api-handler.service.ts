import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiHandlerService {

    constructor(private httpClient:HttpClient) {}

    getCalendar(year:number):Observable<MonthDto[]> {
        return this.httpClient.request<MonthDto[]>("GET", "http://localhost:8080/getCalendar?year=" + year);
    }

    getCalendarEvents(year:number):Observable<EventDto> {
        return this.httpClient.request<EventDto>("GET", "http://localhost:8080/getYearEvents?year=" + year)
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
