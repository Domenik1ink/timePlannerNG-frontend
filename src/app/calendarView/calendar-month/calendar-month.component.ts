import {Component, Input} from '@angular/core';
import {CalendarMonthWeekComponent} from "../calendar-month-week/calendar-month-week.component";
import {CalendarMonthWeekHeaderComponent} from "../calendar-month-week-header/calendar-month-week-header.component";

@Component({
  selector: 'app-calendar-month',
  standalone: true,
    imports: [
        CalendarMonthWeekComponent,
        CalendarMonthWeekHeaderComponent
    ],
  templateUrl: './calendar-month.component.html',
  styleUrl: './calendar-month.component.css'
})
export class CalendarMonthComponent {
    @Input()
    monthName:string = "";

    kw_0:string = "KW 01"
    kw_1:string = "KW 02"
    kw_2:string = "KW 03"
    kw_3:string = "KW 04"
}
