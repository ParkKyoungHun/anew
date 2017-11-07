import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {WelcomeComponent} from './welcome/welcome.component';
import { UserComponent } from './app/user/user.component';
import { UserListComponent } from './app/user-list/user-list.component';
import { UserInsertComponent } from './app/user-insert/user-insert.component';
import { PromiseTestComponent } from './app/promise-test/promise-test.component';
import { ArrowFunctionComponent } from './app/arrow-function/arrow-function.component';
import { FunctionTestComponent } from './app/function-test/function-test.component';

const routing = RouterModule.forRoot([
  { path: '',      component: WelcomeComponent },
  { path: 'userlist', component:UserComponent},
  { path: 'promisetest', component: PromiseTestComponent },
  { path: 'arrowtest', component: ArrowFunctionComponent },
  { path: 'functiontest', component: FunctionTestComponent }
]);
@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [WelcomeComponent,
  UserComponent,
  UserListComponent,
  UserInsertComponent,
  PromiseTestComponent,
  ArrowFunctionComponent,
  FunctionTestComponent];
