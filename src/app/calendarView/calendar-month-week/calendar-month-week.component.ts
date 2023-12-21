import {Component, inject, Input, TemplateRef} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ModalDismissReasons, NgbInputDatepicker, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {WeekDto} from "../../api-handler.service";
import {DatePipe, NgIf} from "@angular/common";

@Component({
  selector: '[app-calendar-month-week]',
  standalone: true,
    imports: [HttpClientModule, NgbInputDatepicker, NgIf, DatePipe],
  templateUrl: './calendar-month-week.component.html',
  styleUrl: './calendar-month-week.component.scss'
})

export class CalendarMonthWeekComponent {
    @Input()
    week:WeekDto|null = null;
    selectedDateString:string = "";

    private modalService:NgbModal = inject(NgbModal);
    closeResult:string = '';

    openMenu(editDayModal: TemplateRef<any>, selectedDate:Date) {
        const dateVal:number = Date.parse(selectedDate.toString());
        const currentDate:Date = new Date(dateVal);

        this.selectedDateString = currentDate.toLocaleDateString("de-DE", {day: '2-digit', month: '2-digit', year: 'numeric'});

        this.modalService.open(editDayModal, { ariaLabelledBy: 'modal-basic-title' }).result.then(
            (result) => {
                this.closeResult = `Closed with: ${result}`;
            },
            (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            },
        );
    }

    private getDismissReason(reason: any): string {
        switch (reason) {
            case ModalDismissReasons.ESC:
                return 'by pressing ESC';
            case ModalDismissReasons.BACKDROP_CLICK:
                return 'by clicking on a backdrop';
            default:
                return `with: ${reason}`;
        }
    }
}

