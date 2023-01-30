import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environment/environment'
import { FormGroup,FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  appConstant: any;
  fg : FormGroup;
  constructor(private fb:FormBuilder){
    this.fg=fb.group({
      name:['']
    })
  }
  ngOnInit(): void { this.appConstant = environment}
}
