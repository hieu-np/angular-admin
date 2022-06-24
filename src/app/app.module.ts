import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ButtonGroupModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  NavbarModule,
  SharedModule,
  UtilitiesModule,
  GridModule, 
  ButtonModule, 
  NavModule, 
  CardModule,
  TableModule,
  BadgeModule 
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { MenuComponent } from './components/menu/menu.component';
import { UserListsComponent } from './components/user-lists/user-lists.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './components/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { FormAddUserComponent } from './components/form-add-user/form-add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListsComponent,
    AddUserComponent,
    FormAddUserComponent,
    EditUserComponent,
    SearchUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    GridModule,
    IconModule,
    ButtonModule,
    NavModule,
    CardModule,
    ButtonGroupModule,
    CollapseModule,
    DropdownModule,
    FormModule,
    NavbarModule,
    SharedModule,
    UtilitiesModule,
    TableModule,
    BadgeModule 
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
