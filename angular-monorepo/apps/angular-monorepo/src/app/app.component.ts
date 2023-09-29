import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MaterialModule } from './material.module';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MaterialModule],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-monorepo';
}
