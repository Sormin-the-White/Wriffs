import { Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'test', component: TestComponent },
      // { path: 'about', component: AboutComponent },
      // { path: 'contact', component: ContactComponent },
      // // Add more routes as needed
    ]
  }
];
