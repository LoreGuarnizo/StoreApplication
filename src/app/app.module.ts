import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApplicationListComponent } from './application-list/application-list.component';

import { DataService } from './data.service';
import { TransformationService } from './transformation.service';

import { MdButtonModule, MdToolbarModule,MdInputModule,MdCardModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'app-welcome', component: WelcomeComponent },
  { path: 'app-application-list', component: ApplicationListComponent },
  { path: 'app-root', component: AppComponent },
  { path: '',
    redirectTo: '/app-welcome',
    pathMatch: 'full'
  }/*,
  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ApplicationListComponent
  ],
  imports: [ RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } // <-- debugging purposes only
  ),
    BrowserModule,
    HttpClientModule,
    MdButtonModule, 
    MdToolbarModule,
    MdInputModule,
    MdCardModule
  ],
  providers: [DataService,TransformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
