import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

import { ProjectRoutingModule } from './project.routing.module';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { Error404Component } from './components/error-404/error-404.component';


@NgModule({
  declarations: [
    Error404Component,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    ProjectRoutingModule
  ],
  exports: [
    Error404Component,
    HeaderComponent,
    FooterComponent,
    ModalModule,
    BsDatepickerModule,
    TooltipModule
  ]
})
export class ProjectModule { }
