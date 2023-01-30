import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base/base.component';
import { NavigationModule } from '../navigation/navigation.module';


@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    NavigationModule
  ]
})
export class BaseModule { }
