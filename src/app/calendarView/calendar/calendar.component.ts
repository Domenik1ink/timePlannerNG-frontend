import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {CalendarMonthRowComponent} from "../calendar-monthRow/calendar-monthRow.component";


@Component({
  selector: 'app-calendar',
  standalone: true,
    imports: [
        CalendarMonthRowComponent,
        NgForOf
    ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

}
