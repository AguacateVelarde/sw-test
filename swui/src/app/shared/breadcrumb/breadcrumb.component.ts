import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  evalRoute(){
    return this.router.url.split('/')[1]
  }

}
