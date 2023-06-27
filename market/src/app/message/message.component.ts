import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';
import { IProductDetails } from '../interfaces/IProductDetails';
import { IResponse } from '../interfaces/IResponse';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
})
export class MessageComponent {
  private platform = inject(Platform);
  private service:DataService = inject(DataService);

  @Input() message?: IProductDetails;
  isIos() {
    return this.platform.is('ios')
  }
}
