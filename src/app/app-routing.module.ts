import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserListsComponent } from './components/user-lists/user-lists.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
const routes: Routes = [
  { path: '', component: UserListsComponent},
  { path: 'add', component: AddUserComponent },
  { path: 'edit', component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
