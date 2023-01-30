import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BaseComponent } from './base/base.component'
import { HomeComponent } from './base/home/home/home.component'

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren:()=>
        import('./base/home/home.module').then(m=>m.HomeModule)
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}
