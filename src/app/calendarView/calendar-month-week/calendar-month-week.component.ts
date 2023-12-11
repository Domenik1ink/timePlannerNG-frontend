import { Component } from '@angular/core';

@Component({
  selector: '[app-calendar-month-week]',
  standalone: true,
  imports: [],
  templateUrl: './calendar-month-week.component.html',
  styleUrl: './calendar-month-week.component.css'
})
export class CalendarMonthWeekComponent {
    date:string[] = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07"
    ];
    kw:string = "KW 01"

    protected readonly openMenu = openMenu;
}

function openMenu() {
    alert("success");
}
