import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { AppModule } from '../app.module';

@Component({
  selector: '[button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [RouterModule,AppModule, MaterialModule],
})
export class ButtonComponent {
  @Input() label!: string;
}
