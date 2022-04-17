import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingsComponent } from './billings/billings.component';
import { BookinfoComponent } from './bookinfo/bookinfo.component';
import { KidsComponent } from './kids/kids.component';
import { LogininfoComponent } from './logininfo/logininfo.component';
import { ProductsComponent } from './products/products.component';
import { RegisterinfoComponent } from './registerinfo/registerinfo.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  { path:'',component: LogininfoComponent},
 { path:'home',component: LogininfoComponent},
 { path:'bookinfo',component: BookinfoComponent},
 { path:'register',component: RegisterinfoComponent},
 { path:'men',component: ProductsComponent },
 { path:'billings',component: BillingsComponent},
 { path:'women',component: WomenComponent},
 { path:'kids',component: KidsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
