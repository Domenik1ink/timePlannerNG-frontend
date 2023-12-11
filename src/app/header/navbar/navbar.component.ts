import { Component } from '@angular/core';
import {NavitemComponent} from "../navitem/navitem.component";
import {RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        NavitemComponent,
        RouterLinkActive
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
