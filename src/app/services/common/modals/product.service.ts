import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProduct } from 'app/contracts/product/create_product';
import { DeleteProduct } from 'app/contracts/product/delete_product';
import { ListProduct } from 'app/contracts/product/list_product';
import { UpdateProduct } from 'app/contracts/product/update_product';
import { catchError, firstValueFrom, Observable, of } from 'rxjs';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  errorMessage:String;

   async create(product:CreateProduct,successCallBack?:()=>void,errorCallBack?:(error)=>void):Promise<CreateProduct>{
    const observable:Observable<any|CreateProduct>= this.httpClientService.post<CreateProduct>({
      controller:"products",
    },product)
    const addedProduct:CreateProduct= await firstValueFrom(observable) as CreateProduct;
    //successCallBack();
    //errorCallBack(this.errorMessage);
    return addedProduct;
  }

  async list(page:number=0, size:number=5,successCallBack?:()=>void,errorCallBack?:(error)=>void):Promise<ListProduct>{
    const observable:Observable<ListProduct>=this.httpClientService.get({
      controller:"products",
      queryString:`page=${page}&pageSize=${size}`
    })
    return await firstValueFrom(observable) as ListProduct;
  }

  async update(product:UpdateProduct,successCallBack?:()=>void,errorCallBack?:(error)=>void):Promise<UpdateProduct>{
    //console.log(product)
    const observable:Observable<any|UpdateProduct>= this.httpClientService.put<UpdateProduct>({
      controller:"products",
    },product)
    const updatedProduct:UpdateProduct= await firstValueFrom(observable) as UpdateProduct;
    //successCallBack();
    //errorCallBack(this.errorMessage);
    return updatedProduct;
  }

  async delete(id:string,successCallBack?:()=>void,errorCallBack?:(error)=>void):Promise<DeleteProduct>{
    const observable:Observable<any|DeleteProduct>= this.httpClientService.delete({
      controller:"products",
    },id);
    const deletedProduct:DeleteProduct= await firstValueFrom(observable) as DeleteProduct;
    //successCallBack();
    //errorCallBack(this.errorMessage);
    return deletedProduct;
  }
}
