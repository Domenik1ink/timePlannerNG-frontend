import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-month-week',
  standalone: true,
  imports: [],
  templateUrl: './calendar-month-week.component.html',
  styleUrl: './calendar-month-week.component.css'
})
export class CalendarMonthWeekComponent {
    date:string[] = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
    ];
    kw:string = "KW 01"

}
