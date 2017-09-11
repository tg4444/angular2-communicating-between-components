import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { QueueService } from './_services/index';
import { HomeComponent } from './home/index';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [
        QueueService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }