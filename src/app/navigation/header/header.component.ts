import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environment/environment'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  appConstant: any
  ngOnInit(): void { this.appConstant = environment}
}
