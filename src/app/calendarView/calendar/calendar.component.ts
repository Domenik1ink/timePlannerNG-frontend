import {Component, TemplateRef} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CalendarMonthRowComponent} from "../calendar-monthRow/calendar-monthRow.component";
import {ApiHandlerService, EventDto} from "../../api-handler.service";
import {ModalDismissReasons, NgbInputDatepicker, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NavbarComponent} from "../../header/navbar/navbar.component";

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

    constructor(private apiHandler: ApiHandlerService) {
        this.initCalendar();
    }

    initCalendar() {
        this.apiHandler.getCalendar(2023).subscribe(value => {
            this.yearJSON = value;
        });
        this.apiHandler.getCalendarEvents('domenik', 2023).subscribe(value => {
            this.events = value;
        });
    }
}
