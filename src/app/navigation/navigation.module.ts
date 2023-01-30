import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule,ReactiveFormsModule,ReactiveFormsModule],
  exports:[HeaderComponent]
})
export class NavigationModule {}
