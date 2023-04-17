
import { Component } from '@angular/core';

@Component({
    selector: 'app-modal-test',
    templateUrl: './modal-test.component.html'
})
export class ModalTestComponent {
    visible: boolean;

    showDialog() {
        this.visible = true;
    }
}
