import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'LavaSoft';
  // modalRef?: BsModalRef;
  // disabledDates: Date[] = [];

  // constructor(private modalService: BsModalService) {
  //   const currentDate = new Date();
  //   const currentDateTime = new Date();
  //   currentDateTime.setHours(currentDate.getHours());
  //   currentDateTime.setMinutes(currentDate.getMinutes());
  //   this.disabledDates.push(currentDateTime);
  // }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }

  // onValueChange(value: Date): void {
  //   console.log('onValueChange: ', value);
  // }
}
