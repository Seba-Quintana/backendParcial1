import { Injectable } from '@angular/core';
import { IResponse } from '../interfaces/IResponse';
import { IProductDetails } from '../interfaces/IProductDetails';


export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

	url: string = "http://localhost:3000"
  constructor() { }

  public async getMessages(): Promise<IResponse<IProductDetails>> {
    return (await (await fetch(`${this.url}/products/getAllProducts`)).json()) ?? [];
  }

  public async getMessageById(id: number): Promise<IResponse<IProductDetails>> {
    return (await (await fetch(`${this.url}/products/getProductById/${id}`)).json()) ?? {};
  }
}
