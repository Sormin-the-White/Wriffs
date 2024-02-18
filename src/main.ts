import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import other necessary modules and dependencies

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
