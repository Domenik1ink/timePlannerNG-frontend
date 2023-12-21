import {Component, TemplateRef} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CalendarMonthRowComponent} from "../calendar-monthRow/calendar-monthRow.component";
import {ApiHandlerService} from "../../api-handler.service";
import {ModalDismissReasons, NgbInputDatepicker, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-calendar',
    standalone: true,
    imports: [
        CalendarMonthRowComponent,
        NgForOf,
        NgbInputDatepicker
    ],
    providers: [ApiHandlerService],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.scss'
})

export class CalendarComponent {
    yearJSON:any;

    constructor(private apiHandler: ApiHandlerService) {
        this.initCalendar();
    }

    initCalendar() {
        this.apiHandler.getCalendar(2023).subscribe(value => {
            this.yearJSON = value;
        })
        this.apiHandler.getCalendarEvents(2023).subscribe(value => {
            console.log(value);
        })
    }

}
