import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environment/environment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  appConstant: any
  ngOnInit(): void {
    this.appConstant = environment
  }
}
