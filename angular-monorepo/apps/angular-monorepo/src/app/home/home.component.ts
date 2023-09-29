import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';

@Component({
  selector: 'angular-monorepo-home',
  standalone: true,
  imports: [CommonModule, AppModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
