import './polyfills';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app/app.component';
import {WelcomeComponent} from './welcome/welcome.component';

import {enableProdMode} from '@angular/core';

import { UserComponent } from './app/user/user.component';
import { UserListComponent } from './app/user-list/user-list.component';
import { UserInsertComponent } from './app/user-insert/user-insert.component';
import { PromiseTestComponent } from './app/promise-test/promise-test.component';
enableProdMode();

const routing = RouterModule.forRoot([
    { path: '',      component: WelcomeComponent },
    { path: 'userlist', component:UserComponent},
    { path: 'promisetest', component: PromiseTestComponent }
]);

@NgModule({
    imports: [BrowserModule,
    		  routing,
    		  HttpModule,
    		  FormsModule,
    		  ReactiveFormsModule],
    declarations: [AppComponent,
    			   WelcomeComponent,
                   UserComponent,
                   UserListComponent,
                   UserInsertComponent,
                   PromiseTestComponent
             ],
    //providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}