import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CalendarMonthRowComponent} from "../calendar-monthRow/calendar-monthRow.component";
import {ApiHandlerService, EventDto} from "../../api-handler.service";
import {NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {NavbarComponent} from "../../header/navbar/navbar.component";
import {Router} from "@angular/router";

@Component({
    selector: 'app-calendar',
    standalone: true,
    imports: [
        CalendarMonthRowComponent,
        NgForOf,
        NgbInputDatepicker,
        NavbarComponent
    ],
    providers: [ApiHandlerService],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.scss'
})

export class CalendarComponent {
    yearJSON:any;
    events:EventDto[] = [];
    username:string = "";

    constructor(private apiHandler: ApiHandlerService, private router: Router) {
        this.initCalendar();
    }

    initCalendar() {
        if(!sessionStorage.getItem("username")) {
            this.router.navigate(['/login']);
        } else {
            this.username = sessionStorage.getItem("username") || "";
            this.apiHandler.getCalendar(2023).subscribe(value => {
                this.yearJSON = value;
            });

            this.apiHandler.getCalendarEvents(this.username, 2023).subscribe(value => {
                this.events = value;
            });
        }
    }
}
