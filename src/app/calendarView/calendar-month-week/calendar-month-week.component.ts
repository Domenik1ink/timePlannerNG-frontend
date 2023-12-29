import {Component, inject, Input, TemplateRef} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ModalDismissReasons, NgbInputDatepicker, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EventDto, WeekDto} from "../../api-handler.service";
import {DatePipe, NgClass, NgIf} from "@angular/common";

@Component({
  selector: '[app-calendar-month-week]',
  standalone: true,
    imports: [HttpClientModule, NgbInputDatepicker, NgIf, DatePipe, NgClass],
  templateUrl: './calendar-month-week.component.html',
  styleUrl: './calendar-month-week.component.scss'
})

export class CalendarMonthWeekComponent {
    @Input() week:WeekDto | null = null;
    @Input() eventsData:EventDto[] = [];
    selectedDateString:string = "";

    eventForDay(day:Date):EventDto|null {
        // @ts-ignore
        return this.eventsData.find(event => this.isSameDay(event.event_date, day))
    }

    isSameDay(dateString1: string, dateString2: string): boolean {
        const date1 = new Date (Date.parse(dateString1));
        const date2 = new Date (Date.parse(dateString2));
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    }

    isVacation(date:Date):boolean {
        const eventToday = this.eventForDay(date);
        if(eventToday) {
            return eventToday.event_category === 'vacation';
        } else {
            return false;
        }
    }

    isHoliday(date:Date):boolean {
        const eventToday = this.eventForDay(date);
        if(eventToday) {
            return eventToday.event_category === 'holiday';
        } else {
            return false;
        }
    }

    isIll(date:Date):boolean {
        const eventToday = this.eventForDay(date);
        if(eventToday) {
            return eventToday.event_category === 'ill';
        } else {
            return false;
        }
    }

    isPlannedVacation(date:Date):boolean {
        const eventToday = this.eventForDay(date);
        if(eventToday) {
            return eventToday.event_category === 'planned_vacation';
        } else {
            return false;
        }
    }

    isToday(date:Date):boolean {
        const today = new Date().toISOString();
        const strDate = date.toString();
        return this.isSameDay(today, strDate);
    }

    /**
     * MODAL
     */
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

