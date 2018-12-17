import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { UserEditorComponent } from './modules/user-editor/user-editor.component';
import { ListWithSearchComponent } from './modules/partial/list-with-search/list-with-search.component';
import { UserListComponent } from './modules/user-list/user-list.component';
import { CrudButtonsComponent } from './modules/partial/crud-buttons/crud-buttons.component';
import { MentorListComponent } from './modules/mentor-list/mentor-list.component';
import { ClientListComponent } from './modules/client-list/client-list.component';
import { MentorViewComponent } from './modules/views/mentor-view/mentor-view.component';
import { ClientViewComponent } from './modules/views/client-view/client-view.component';
import { UserViewComponent } from './modules/views/user-view/user-view.component';
import { MentorClientManagerComponent } from './modules/mentor-client-manager/mentor-client-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserEditorComponent,
    ListWithSearchComponent,
    UserListComponent,
    CrudButtonsComponent,
    MentorListComponent,
    ClientListComponent,
    MentorViewComponent,
    ClientViewComponent,
    UserViewComponent,
    MentorClientManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    //NgbModule.forRoot() what is this?
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
