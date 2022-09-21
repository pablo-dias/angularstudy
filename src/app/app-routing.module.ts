import { AuthGuard } from './auth/account/shared/auth.guard';
import { CreateAccountComponent } from './auth/account/create-account/create-account.component';
import { LoginComponent } from './auth/account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LandingPageComponent } from './views/landing-page/landing-page/landing-page.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "products",
        component: ProductCrudComponent
      },
      {
        path: "products/create",
        component: ProductCreateComponent
      },
      {
        path: "products/update/:id",
        component: ProductUpdateComponent
      },
      {
        path: "products/delete/:id",
        component: ProductDeleteComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'create-account',
        component: CreateAccountComponent
      },
    ]
  }


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
