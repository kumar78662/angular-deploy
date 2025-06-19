import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterLink } from '@angular/router';
import { CardComponent } from './components/dashboard/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { AddDataDialogComponent } from './components/dashboard/add-data-dialog/add-data-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { AuthInterceptor } from './auth.interceptor';
import { OneComponent } from './components/view-encapsulation/one/one.component';
import { InternationalizationComponent } from './components/internationalization/internationalization/internationalization.component';
import { ParentComponent } from './components/parent-child-comm/parent/parent.component';
import { ChildComponent } from './components/parent-child-comm/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    CardComponent,
    TableComponent,
    AddDataDialogComponent,
    RxjsOperatorsComponent,
    OneComponent,
    InternationalizationComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterLink,
    MatCardModule, 
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
