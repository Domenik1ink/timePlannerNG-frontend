import {Component} from '@angular/core';
import {NavbarComponent} from "../../header/navbar/navbar.component";
import {Router} from "@angular/router";
import {ApiHandlerService, TimeTrackPosDto} from "../../api-handler.service";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-time-tracking',
    standalone: true,
    imports: [
        NavbarComponent,
        NgForOf
    ],
    providers: [ApiHandlerService],
    templateUrl: './time-tracking.component.html',
    styleUrl: './time-tracking.component.scss'
})
export class TimeTrackingComponent {
    standardPositions: TimeTrackPosDto[] = [];

    constructor(private apiHandler: ApiHandlerService, private router: Router) {
        if (!sessionStorage.getItem("username")) {
            this.router.navigate(['/login']);
        } else {
            this.apiHandler.getStandardPositions().subscribe(result => {
                console.log(result);
                this.standardPositions = result;
            });
        }
    }

}
