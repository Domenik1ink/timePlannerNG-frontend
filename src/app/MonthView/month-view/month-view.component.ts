import { Component } from '@angular/core';
import {NavbarComponent} from "../../header/navbar/navbar.component";

@Component({
  selector: 'app-month-view',
  standalone: true,
    imports: [
        NavbarComponent
    ],
  templateUrl: './month-view.component.html',
  styleUrl: './month-view.component.scss'
})
export class MonthViewComponent {

}
