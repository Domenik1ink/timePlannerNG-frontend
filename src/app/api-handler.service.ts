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

    async getCalenderForMonth(year:number, month:number):Promise<MonthDto> {
        return new Promise(resolve => {
            this.getCalendar(year).subscribe(data => {
                console.log(data);
                resolve(data[month]);
            });
        });

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
