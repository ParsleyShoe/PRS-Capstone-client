import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './home/about/about.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';

import { RequestLineListComponent } from './request-line/request-line-list/request-line-list.component';
import { RequestLineDetailComponent } from './request-line/request-line-detail/request-line-detail.component';
import { RequestLineEditComponent } from './request-line/request-line-edit/request-line-edit.component';
import { RequestLineCreateComponent } from './request-line/request-line-create/request-line-create.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },

  { path: "users/list", component: UserListComponent },
  { path: "users/detail/:id", component: UserDetailComponent },
  { path: "users/edit/:id", component: UserEditComponent },
  { path: "users/create", component: UserCreateComponent },

  { path: "vendors/list", component: VendorListComponent },
  { path: "vendors/detail/:id", component: VendorDetailComponent },
  { path: "vendors/edit/:id", component: VendorEditComponent },
  { path: "vendors/create", component: VendorCreateComponent },

  { path: "products/list", component: ProductListComponent },
  { path: "products/detail/:id", component: ProductDetailComponent },
  { path: "products/edit/:id", component: ProductEditComponent },
  { path: "products/create", component: ProductCreateComponent },

  { path: "requests/list", component: RequestListComponent },
  { path: "requests/detail/:id", component: RequestDetailComponent },
  { path: "requests/edit/:id", component: RequestEditComponent },
  { path: "requests/create", component: RequestCreateComponent },
  { path: "requests/review/:id", component: RequestReviewComponent },

  { path: "requestlines/list", component: RequestLineListComponent },
  { path: "requestlines/detail/:id", component: RequestLineDetailComponent },
  { path: "requestlines/edit/:id", component: RequestLineEditComponent },
  { path: "requestlines/create", component: RequestLineCreateComponent },

  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
