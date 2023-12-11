import { Component } from '@angular/core';
import {CalendarMonthRowComponent} from "../calendar-monthRow/calendar-monthRow.component";
import {NgForOf} from "@angular/common";

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
