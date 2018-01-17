import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MarkdownModule} from 'angular2-markdown';


import {AppComponent} from './app.component';
import {MkdComponent} from './mkd/mkd.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        MkdComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        MarkdownModule.forRoot(),
    ],
    providers: [HttpClientModule,],
    bootstrap: [AppComponent]
})
export class AppModule {
}
