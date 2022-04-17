import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { billObject } from './billObject.Model';


@Injectable({
  providedIn: 'root'
})



export class DatatransferService {

  constructor(private router: Router, private http: HttpClient) { }

  public isAddCart: boolean = false;
  public cart: { gender: string, category: string, id: string, qty: number, image: string, price: number }[] = [];
  public bill: billObject[] = [];
  public showAllBillEnable: boolean = false;
  public overAllBills;

 
  ngOnInit(): void {
  }

  products: any[] = [
    { gender: 'female', category: 'Saree', id: 'KCF001', qty: 1, image: 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-satin-georgette-saree-in-shaded-blue-v1-sfva2199.jpg', price: 500 },
    { gender: 'female', category: 'Saree', id: 'KCF002', qty: 1, image: 'https://www.loomfolks.com/wp-content/uploads/2020/06/Formal-_-Nice-Looking-Peacock-Blue-Plain-Khadi-Cotton-Saree.jpg', price: 500 },
    { gender: 'female', category: 'Saree', id: 'KCF003', qty: 1, image: 'https://m.media-amazon.com/images/I/91Y6XOj82YL._UY550_.jpg', price: 300 },
    { gender: 'female', category: 'Saree', id: 'KCF004', qty: 1, image: 'https://n3.sdlcdn.com/imgs/j/m/s/Ofline-Selection-Orange-and-Blue-SDL772828676-1-02c13.jpg', price: 500 },
    { gender: 'female', category: 'Saree', id: 'KCF005', qty: 1, image: 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/w/o/woven-art-silk-saree-in-maroon-v1-stka25.jpg', price: 400 },
    { gender: 'male', category: 'T-Shirt', id: 'KCM001', qty: 1, image: 'https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPGALATEA-COTTASHU666381250EF854/1563002047477_0..jpg', price: 400 },
    { gender: 'male', category: 'T-Shirt', id: 'KCM002', qty: 1, image: 'https://looksgud.com/blog/wp-content/uploads/2016/11/ajio.jpg', price: 2000 },
    { gender: 'male', category: 'T-Shirt', id: 'KCM003', qty: 1, image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/2/6/1a340c1e-d6e0-4430-8b35-717ba5426f511580945402271-1.jpg', price: 3000 },
    { gender: 'male', category: 'T-Shirt', id: 'KCM004', qty: 1, image: 'https://rukminim1.flixcart.com/image/332/398/kfoapow0-0/t-shirt/z/h/l/l-am-1021m-aelomart-original-imafw2jwmdmz3ayz.jpeg?q=50', price: 1500 },
    { gender: 'male', category: 'T-Shirt', id: 'KCM005', qty: 1, image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10862262/2020/6/17/b27dbe74-a154-4f0e-93ce-57a819c5b2821592386647823-Nautica-Men-Maroon-Solid-Polo-Collar-T-shirt-325159238664605-1.jpg', price: 5000 },
    { gender: 'male', category: 'T-Shirt', id: 'KC2M006', qty: 1, image: 'https://img3.junaroad.com/uiproducts/18276105/pri_175_p-1645704151.jpg', price: 1000 },
    { gender: 'male', category: 'T-Shirt', id: 'KC2M007', qty: 1, image: 'https://looksgud.com/blog/wp-content/uploads/2016/11/fila.jpg', price: 2000 },
    { gender: 'male', category: 'T-Shirt', id: 'KCM008', qty: 1, image: 'https://static.connect2india.com/c2icd/company_resources/6096070/images/products/product-mens-branded-round-neck---collar-neck-t-shirts.jpg', price: 2500 },
    { gender: 'male', category: 'T-Shirt', id: 'KCM009', qty: 1, image: 'https://5.imimg.com/data5/HH/DS/MY-4585683/mens-branded-t-shirt-500x500.jpg', price: 4000 },
    { gender: 'male', category: 'T-Shirt', id: 'KCM010', qty: 1, image: 'https://5.imimg.com/data5/TU/UV/SB/SELLER-55585817/branded-tshirt-500x500.jpg', price: 5000 },
    { gender: 'kids', category: 'Baby-dress', id: 'KCK001', qty: 1, image: 'https://5.imimg.com/data5/OJ/OO/MY-26694604/designer-baby-dress-500x500.jpg', price: 5000 },
    { gender: 'kids', category: 'Baby-dress', id: 'KCK002', qty: 1, image: 'https://5.imimg.com/data5/PC/PM/MY-38900969/baby-party-wear-dress-500x500.jpg', price: 5000 },
    { gender: 'kids', category: 'Baby-dress', id: 'KCK003', qty: 1, image: 'data:image/jpeg;base64,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', price: 2000 },
    { gender: 'kids', category: 'Baby-dress', id: 'KCK004', qty: 1, image: 'https://i.pinimg.com/originals/e1/3f/44/e13f44306d8c8d773113a71d0a1ba662.jpg', price: 5000 },
    { gender: 'kids', category: 'Baby-dress', id: 'KCK005', qty: 1, image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11903152/2020/6/3/ebae542f-c073-472f-ae10-d2d796a3e9de1591169785243PantaloonsBabyGirlsNavyBluePrintedFitandFlareDress1.jpg', price: 400 },
  ];


  public onAddCartFinal(product) {
    this.isAddCart = true;
    this.cart.push({
      gender: product.gender,
      category: product.category,
      id: product.id,
      qty: product.qty,
      image: product.image,
      price: product.price
    });

  }


  public grandTotal() {
    let total: number = 0;
    for (let product of this.cart) {
      total += (product.price * product.qty);
    }
    return total;
  }

  public plusQty(productid: string) {
    this.cart = this.cart.map((product) => {
      if (product.id === productid) {
        return {
          ...product,
          qty: product.qty + 1
        }
      }
      return product;
    })
  }
  public minusQty(productid: string) {
    this.cart = this.cart.map((product) => {
      if (product.id === productid) {
        return {
          ...product,
          qty: product.qty - 1
        }
      }
      return product;
    })
  }

  public onRemoveItemFinal(product) {
    console.log('product is : ', product);
    this.cart.splice(this.cart.indexOf(product), 1);
  }


  public billData() {
    this.bill.push({
      id: Math.random() * 100000000000000000000,
      billDate: new Date().toLocaleDateString(),
      billTime: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }),
      billtotal: this.grandTotal(),
      billdiscount: -0.1 * this.grandTotal(),
      billgst: 0.18 * 0.90 * this.grandTotal(),
      billgrand: 1.18 * 0.9 * this.grandTotal()
    });

    this.http.post('http://localhost:3000/kevellcartBills',
      {
        id: Math.random() * 100000000000000000,
        billDate: new Date().toLocaleDateString(),
        billTime: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }),
        billtotal: this.grandTotal(),
        billdiscount: -0.1 * this.grandTotal(),
        billgst: 0.18 * 0.90 * this.grandTotal(),
        billgrand: 1.18 * 0.9 * this.grandTotal()
      })
      .subscribe((response) => {
        console.log('Final Bill : ', response);
        console.log('Bill Added Successfully');
      })
    this.cart = [];
  }

  public billEntire() {
    this.http.get('http://localhost:3000/kevellcartBills')
      .subscribe((response) => {
        this.overAllBills = response;
        console.log('OVER ALL BILL ENTIRE : ', response);
        console.log('OVER ALL BILL GENERATED SUCCESSFULLY');
      })
  }

  public overAllBillAmount() {
    let overAlltotal: number = 0;
    for (let billSingle of this.overAllBills) {
      overAlltotal += billSingle.billgrand;
    }
    return overAlltotal;
  }




}
