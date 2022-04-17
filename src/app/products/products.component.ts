import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DatatransferService } from '../Services/datatransfer.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private router: Router, public _dataTransfer: DatatransferService) { }
  
  ngOnInit(): void {
    
  }

  // isAddCart:boolean =false ;
  // cart: { category : string, id: string, qty: number, image: string, price: number }[] = [];

    

  // ngOnInit(): void {
  // }

  // products: any[] = [
  //   { category: 'T-Shirt', id: 'KC26032022001', qty: 1, image: 'https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPGALATEA-COTTASHU666381250EF854/1563002047477_0..jpg', price: 1000 },
  //   { category: 'T-Shirt', id: 'KC26032022002', qty: 1, image: 'https://looksgud.com/blog/wp-content/uploads/2016/11/ajio.jpg', price: 2000 },
  //   { category: 'T-Shirt', id: 'KC26032022003', qty: 1, image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/2/6/1a340c1e-d6e0-4430-8b35-717ba5426f511580945402271-1.jpg', price: 3000 },
  //   { category: 'T-Shirt', id: 'KC26032022004', qty: 1, image: 'https://rukminim1.flixcart.com/image/332/398/kfoapow0-0/t-shirt/z/h/l/l-am-1021m-aelomart-original-imafw2jwmdmz3ayz.jpeg?q=50', price: 4000 },
  //   { category: 'T-Shirt', id: 'KC26032022005', qty: 1, image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10862262/2020/6/17/b27dbe74-a154-4f0e-93ce-57a819c5b2821592386647823-Nautica-Men-Maroon-Solid-Polo-Collar-T-shirt-325159238664605-1.jpg', price: 5000 },
  //   { category: 'T-Shirt', id: 'KC26032022006', qty: 1, image: 'https://img3.junaroad.com/uiproducts/18276105/pri_175_p-1645704151.jpg', price: 1000 },
  //   { category: 'T-Shirt', id: 'KC26032022007', qty: 1, image: 'https://looksgud.com/blog/wp-content/uploads/2016/11/fila.jpg', price: 2000 },
  //   { category: 'T-Shirt', id: 'KC26032022008', qty: 1, image: 'https://static.connect2india.com/c2icd/company_resources/6096070/images/products/product-mens-branded-round-neck---collar-neck-t-shirts.jpg', price: 3000 },
  //   { category: 'T-Shirt', id: 'KC26032022009', qty: 1, image: 'https://5.imimg.com/data5/HH/DS/MY-4585683/mens-branded-t-shirt-500x500.jpg', price: 4000 },
  //   { category: 'T-Shirt', id: 'KC26032022010', qty: 1, image: 'https://5.imimg.com/data5/TU/UV/SB/SELLER-55585817/branded-tshirt-500x500.jpg', price: 5000 }
  
  // ];


  // onAddCart(product)
  // {
  //   this.isAddCart = true;
  //   this.cart.push({
  //     category: product.category,
  //     id: product.id,
  //     qty: product.qty,
  //     image: product.image,
  //     price: product.price
  //   });
  
  // }

  // productToBillings() {
  //   this.router.navigate(['billings']);
  // }

 
   
  // public grandTotal() {
  //   let total: number = 0;
  //   for (let product of this.cart) {
  //     total += (product.price * product.qty);
  //   }
  //   return total;
  // }
 
  // public plusQty(productid: string) {
  //   this.cart = this.cart.map((product) => {
  //     if (product.id === productid) {
  //       return {
  //         ...product,
  //         qty: product.qty + 1
  //       }
  //     }
  //     return product;
  //   })
  // }
  // public minusQty(productid: string) {
  //   this.cart = this.cart.map((product) => {
  //     if (product.id === productid) {
  //       return {
  //         ...product,
  //         qty: product.qty - 1
  //       }
  //     }
  //     return product;
  //   })
  // }

  // itemRemoved(product)
  // {
  //   console.log('product is : ',product);
  //   this.cart.splice(this.cart.indexOf(product), 1);
  // }

  //Using Service .................................................

  onAddCart(product)
  {
    this._dataTransfer.onAddCartFinal(product);
  }

}





