import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'angular-monorepo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output()
  onSuccess = new EventEmitter<string>();

  value = '';

  complete = false;

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.onSuccess.emit(this.value);
    setTimeout(() => {
      this.complete = true;
    }, 500);
    setTimeout(() => {
      this.complete = false;
    }, 1500);
  }
}
