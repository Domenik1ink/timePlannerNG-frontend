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
    styleUrl: './calendar.component.css'
})

export class CalendarComponent {
    yearJSON:any;
    editDayModal_title:string = "default";
    editDayModal_body:string = "default";

    constructor(private apiHandler: ApiHandlerService, private modalService:NgbModal) {
        this.initCalendar();
    }

    initCalendar() {
        this.apiHandler.getCalendar(2023).subscribe(value => {
            this.yearJSON = value;
        })
    }

}
