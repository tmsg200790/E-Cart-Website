import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BookinfoComponent } from './bookinfo/bookinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { BooktransferService } from './Services/booktransfer.service';
import { LogininfoComponent } from './logininfo/logininfo.component';
import { RegisterinfoComponent } from './registerinfo/registerinfo.component';
import { AuthService } from './Services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodorderComponent } from './foodorder/foodorder.component';
import { AngularMaterialModule } from './Modules/angular-material/angular-material.module';
import { ProductsComponent } from './products/products.component';
import { BillingsComponent } from './billings/billings.component';
import { DatatransferService } from './Services/datatransfer.service';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';



@NgModule({
  declarations: [
    AppComponent,
    BookinfoComponent,
    LogininfoComponent,
    RegisterinfoComponent,
    FoodorderComponent,
    ProductsComponent,
    BillingsComponent,
    WomenComponent,
    KidsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [ BooktransferService,AuthService,DatatransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
