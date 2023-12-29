import { Routes } from '@angular/router';
import {CalendarComponent} from "./calendarView/calendar/calendar.component";
import {MonthViewComponent} from "./monthView/month-view/month-view.component";
import {TimeTrackingComponent} from "./timeTrackingView/time-tracking/time-tracking.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "calendar",
        component: CalendarComponent
    },
    {
        path: "month",
        component: MonthViewComponent
    },
    {
        path: "timeTracking",
        component: TimeTrackingComponent
    },
    {
        path: "**",
        redirectTo: "login"
    }
];
