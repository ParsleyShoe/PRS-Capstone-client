import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserSearchPipe } from './user/user-search.pipe';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorSearchPipe } from './vendor/vendor-search.pipe';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductSearchPipe } from './product/product-search.pipe';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestSearchPipe } from './request/request-search.pipe';
import { RequestLineListComponent } from './request-line/request-line-list/request-line-list.component';
import { RequestLineDetailComponent } from './request-line/request-line-detail/request-line-detail.component';
import { RequestLineCreateComponent } from './request-line/request-line-create/request-line-create.component';
import { RequestLineEditComponent } from './request-line/request-line-edit/request-line-edit.component';
import { RequestLineSearchPipe } from './request-line/request-line-search.pipe';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { SortPipe } from './sort.pipe';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './home/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserSearchPipe,
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    VendorSearchPipe,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,
    ProductSearchPipe,
    RequestListComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestSearchPipe,
    RequestLineListComponent,
    RequestLineDetailComponent,
    RequestLineCreateComponent,
    RequestLineEditComponent,
    RequestLineSearchPipe,
    MenuComponent,
    MenuItemComponent,
    SortPipe,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
