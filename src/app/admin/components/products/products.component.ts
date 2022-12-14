import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from 'app/base/base.component';
import { HttpClientService } from 'app/services/common/http-client.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService) {
    super(spinner)
  }

  ngOnInit(): void {
  }

}
