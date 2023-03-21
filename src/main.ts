import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CounterComponent } from './app/pages/counter.component';
import { LandingComponent } from './app/pages/landing.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
