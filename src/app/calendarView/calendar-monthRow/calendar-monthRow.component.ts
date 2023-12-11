import {Component, Input} from '@angular/core';
import {CalendarMonthComponent} from "../calendar-month/calendar-month.component";

@Component({
  selector: 'app-calendar-monthRow',
  standalone: true,
    imports: [
        CalendarMonthComponent
    ],
  templateUrl: './calendar-month-row.component.html',
  styleUrl: './calendar-monthRow.component.css'
})
export class CalendarMonthRowComponent {
}
