import {Component, Input} from '@angular/core';
import {CalendarMonthComponent} from "../calendar-month/calendar-month.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-calendar-monthRow',
  standalone: true,
    imports: [
        CalendarMonthComponent,
        NgIf
    ],
  templateUrl: './calendar-month-row.component.html',
  styleUrl: './calendar-monthRow.component.css'
})
export class CalendarMonthRowComponent {
    @Input() startMonth: number = 0;
    @Input() yearJSON: any = null;


    year:number = 2023;
}
