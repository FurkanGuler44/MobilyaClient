import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LoginComponent } from './admin/components/login/login.component';
import { LayoutComponent } from './admin/layout/layout.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: DashboardComponent },//ana sayfa niteliğinde olduğu için doğrudan componenti veriyoruz
      { path: "products", loadChildren: () => import("./admin/components/products/products.module").then(module => module.ProductsModule) }
    ]
  },
  //deneme amaçlıdır
  { path: "login", component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
