import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  car1 = 'assets/img/car1.jpg';
  car2 = 'assets/img/car2.jpg';
  car3 = 'assets/img/car3.jpg';
  car4 = 'assets/img/car4.jpg';
  car5 = 'assets/img/car5.jpg';
  car6 = 'assets/img/car6.jpg';
  about = 'assets/img/about.png';
  part1 = 'assets/img/part1.png';
  part2 = 'assets/img/part2.png';
  part3 = 'assets/img/part3.png';
  part4 = 'assets/img/part4.png';
  part5 = 'assets/img/part5.png';
  part6 = 'assets/img/part6.png';

  title = 'LavaSoft';
  modalRef?: BsModalRef;
  disabledDates: Date[] = [];

  constructor(private modalService: BsModalService) {
    const currentDate = new Date();
    const currentDateTime = new Date();
    currentDateTime.setHours(currentDate.getHours());
    currentDateTime.setMinutes(currentDate.getMinutes());
    this.disabledDates.push(currentDateTime);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onValueChange(value: Date): void {
    console.log('onValueChange: ', value);
  }

}
