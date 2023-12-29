import {Component, TemplateRef} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ApiHandlerService} from "../api-handler.service";
import {NgbModal, NgbToast} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        FormsModule,
        NgbToast
    ],
    providers: [ApiHandlerService],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    backgroundImageUrl: string = '/assets/calendar_bg.jpg';
    username: string = '';
    password: string = '';
    hiddenClass:string = 'hidden';
    toastBody:string = '';
    toastType:string = 'text-bg-danger';
    show = false;
    autoHide = true;

    constructor(private apiHandler: ApiHandlerService, private modalService: NgbModal) {}

    login() {
        this.hiddenClass = '';
        this.apiHandler.validateLogin(this.username, this.password).subscribe(response => {
            console.log(this.username);
            console.log(this.password);
            if (response.code === 200) {
                this.toastType = 'text-bg-success';
                this.toastBody = 'Correct!';
                this.show = true;
            } else {
                this.toastType = 'text-bg-danger';
                this.toastBody = 'Wrong credentials!';
                this.show = true;
            }
            this.hiddenClass = 'hidden';
        })
    }
}
