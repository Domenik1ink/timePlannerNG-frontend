import { Component } from '@angular/core';
import {NavbarComponent} from "../../header/navbar/navbar.component";

@Component({
  selector: 'app-time-tracking',
  standalone: true,
    imports: [
        NavbarComponent
    ],
  templateUrl: './time-tracking.component.html',
  styleUrl: './time-tracking.component.scss'
})
export class TimeTrackingComponent {

}
