import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./header/navbar/navbar.component";
import {CalendarComponent} from "./calendarView/calendar/calendar.component";
import {HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, CalendarComponent, RouterLink, RouterLinkActive, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    title:string = 'timePlannerNG-frontend';



}
