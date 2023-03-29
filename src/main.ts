import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { Counter2Component } from './app/pages/counter-2.component';
import { CounterComponent } from './app/pages/counter.component';
import { LandingComponent } from './app/pages/landing.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'counter-2', component: Counter2Component },
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
