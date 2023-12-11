import {Component, Input} from '@angular/core';

@Component({
  selector: '[app-calendar-month-week-header]',
  standalone: true,
  imports: [],
  templateUrl: './calendar-month-week-header.component.html',
  styleUrl: './calendar-month-week-header.component.css'
})
export class CalendarMonthWeekHeaderComponent {
    @Input()
    monthName:string = "";

}
