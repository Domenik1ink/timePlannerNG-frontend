import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {NgbNav, NgbNavItem, NgbNavLinkBase} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        RouterLinkActive,
        RouterLink,
        NgbNav,
        NgbNavItem,
        NgbNavLinkBase
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    active:number = 1;
    constructor(private router: Router) {
    }

    doLogout() {
        sessionStorage.removeItem("username");
        this.router.navigate(['/login']);
    }
}
