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
        return this.httpClient.request<MonthDto[]>("GET", `${this.endpoint}/cal/getCalendar?year=${year}`);
    }

    getCalendarEvents(username:string, year:number):Observable<EventDto[]> {
        return this.httpClient.request<EventDto[]>("GET", `${this.endpoint}/cal/getYearEvents?year=${year}&username=${username}`);
    }

    validateLogin(username:string, password:string):Observable<LoginDto> {
        return this.httpClient.request<LoginDto>("GET", `${this.endpoint}/login/validate?username=${username}&password=${password}`);
    }

    getUserFromDB():Observable<string> {
        return this.httpClient.request<string>("GET", `${this.endpoint}/testDB`);
    }
}


export interface MonthDto{
    monthName:string;
    weeks:WeekDto[];
}

export interface WeekDto {
    weekName:string;
    dates:Date[];
}

export interface EventDto {
    event_date:Date;
    event_name:string;
    event_category:string;
    created_date:Date;
}

export interface LoginDto {
    code:number;
    status:string;
    error:string;
}
