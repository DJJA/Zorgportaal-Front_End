import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { UserEditorComponent } from './modules/user-editor/user-editor.component';
import { UserListComponent } from './modules/user-list/user-list.component';
import { MentorListComponent } from './modules/mentor-list/mentor-list.component';
import { ClientListComponent } from './modules/client-list/client-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },          // Default route
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: UserEditorComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'mentor-list', component: MentorListComponent },
  { path: 'client-list', component: ClientListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
