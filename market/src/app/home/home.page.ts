import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';
import { IResponse } from '../interfaces/IResponse';
import { IProductDetails } from '../interfaces/IProductDetails';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, MessageComponent],
})
export class HomePage {
  private data = inject(DataService);
  response!: IResponse<IProductDetails>;
  productList!: IProductDetails[];

  constructor() {
	this.data.getMessages().then((data:IResponse<IProductDetails>) => {
		console.log(data.data)
		data.data.forEach(elem => {
			this.productList.push(elem)
		})
	})
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }
}
