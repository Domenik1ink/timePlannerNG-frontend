import {Component, Input} from '@angular/core';
import {CalendarMonthComponent} from "../calendar-month/calendar-month.component";
import {NgIf} from "@angular/common";
import {EventDto} from "../../api-handler.service";

@Component({
  selector: 'app-calendar-monthRow',
  standalone: true,
    imports: [
        CalendarMonthComponent,
        NgIf
    ],
  templateUrl: './calendar-month-row.component.html',
  styleUrl: './calendar-monthRow.component.scss'
})
export class CalendarMonthRowComponent {
    @Input() startMonth: number = 0;
    @Input() yearJSON: any = null;
    @Input() eventsData:EventDto[] = [];
}
