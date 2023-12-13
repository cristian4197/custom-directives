import { Component, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', router: 'counter' },
    { title: 'Usuario', router: 'user-info' },
    { title: 'Mutaciones', router: 'properties' }
  ]);
  // public menuItems: MenuItem [] = [
  //   { title: 'Contador', router: 'counter' },
  //   { title: 'Usuario', router: 'user-info' },
  //   { title: 'Mutaciones', router: 'properties' }
  // ];
}
