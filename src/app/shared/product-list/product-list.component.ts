import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';
import {ProductListService} from '../../core/service/productList.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  title: string;
  count: string;
  baseResponse: any;
  private paramSub: Subscription;
  constructor(private productServicesList: ProductListService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.paramSub = this.route.params.subscribe(params => {
        this.count = params.id;
        this.title = 'Products currently we are serving';
        this.getProductServicesList();
      });
      console.log(this.count);
  }

  getProductServicesList(): void{
    const productType = this.route.snapshot.paramMap.get('id');
    this.productServicesList.getProductServicesList(productType).subscribe( resp => {

      console.log('resp :', resp);
      this.baseResponse = resp.baseResponse;
    });
  }



  }
