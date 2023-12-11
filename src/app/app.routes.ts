import { Routes } from '@angular/router';
import {CalendarComponent} from "./calendarView/calendar/calendar.component";
import {MonthViewComponent} from "./MonthView/month-view/month-view.component";
import {TimeTrackingComponent} from "./timeTrackingView/time-tracking/time-tracking.component";

export const routes: Routes = [
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
        redirectTo: "calendar"
    }
];
