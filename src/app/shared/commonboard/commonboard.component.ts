import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductInfo} from '../../core/model/productInfo';
import {ProductService} from '../../core/service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ProductInOrder} from '../../core/model/ProductInOrder';
import {CartService} from '../../core/service/cart.service';

@Component({
  selector: 'app-commonboard',
  templateUrl: './commonboard.component.html'
})
export class CommonboardComponent implements OnInit, OnDestroy {

  productInfo: ProductInfo;
  count: number;
  baseResponse: any;
  private paramSub: Subscription;
  private querySub: Subscription;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(() => {
      this.update();
    });
    this.paramSub = this.route.params.subscribe(() => {
      this.update();
    });
    this.getProduct();
  }

  ngOnDestroy(): void {
    this.querySub.unsubscribe();
    this.paramSub.unsubscribe();
  }

  update() {
      this.getProds();
  }

  getProds() {
    //  /category/:id
    const type = this.route.snapshot.url[1].path;
    console.log('type -->', type);
    this.productService.getCategoryInPage(+type)
      .subscribe(categoryPage => {
        console.log('category :', categoryPage);
        console.log('page :', categoryPage.baseResponse);
        this.baseResponse = categoryPage.baseResponse;
      });
  }


  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getDetail(id).subscribe(
      prod => {
        this.productInfo = prod;
      },
      _ => console.log('Get Cart Failed')
    );
  }

  validateCount() {
    console.log('Validate');
    const max = this.productInfo.productStock;
    if (this.count > max) {
      this.count = max;
    } else if (this.count < 1) {
      this.count = 1;
    }
  }

  addToCart() {
    this.cartService
      .addItem(new ProductInOrder(this.productInfo, this.count))
      .subscribe(
        res => {
          if (!res) {
            console.log('Add Cart failed' + res);
            throw new Error();
          }
          this.router.navigateByUrl('/cart');
        },
        _ => console.log('Add Cart Failed')
      );
  }
}
