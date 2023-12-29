import {Component, Input} from '@angular/core';
import {CalendarMonthWeekComponent} from "../calendar-month-week/calendar-month-week.component";
import {CalendarMonthWeekHeaderComponent} from "../calendar-month-week-header/calendar-month-week-header.component";
import {NgForOf, NgIf} from "@angular/common";
import {ApiHandlerService, EventDto, MonthDto} from "../../api-handler.service";

@Component({
  selector: 'app-calendar-month',
  standalone: true,
    imports: [
        CalendarMonthWeekComponent,
        CalendarMonthWeekHeaderComponent,
        NgForOf,
        NgIf
    ],
  templateUrl: './calendar-month.component.html',
  styleUrl: './calendar-month.component.scss'
})
export class CalendarMonthComponent {
    @Input() monthData:MonthDto | null = null;
    @Input() eventsData:EventDto[] = [];
}
