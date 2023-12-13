import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.scss']
})
export class PropertiesPageComponent implements OnInit ,OnDestroy{
  public counter = signal(10);

  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  });

  // propiedad computada(signal) que no se puede modificar
  public fullName = computed( () => `${ this.user().first_name } ${ this.user().last_name }`);

  // Se emite solo cuando las señales dentro cambian sea user o counter
  public userChangedEffect = effect( () => {
    console.log(`${ this.user().first_name } -${ this.counter() }`);
    
  });

  ngOnInit(): void {
    setInterval(() => {
      this.counter.update(current => current + 1);

      if(this.counter() === 15) {
        this.userChangedEffect.destroy();
      }
    }, 1000);
  }

  onFieldUpdated( field: keyof User, value: string ):void {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // });

    // this.user.update( current => ({
    //   ...current,
    //   [field]: value
    // }));

    this.user.update( current => {
      switch( field ) {
        case 'email':
          current.email = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'id':
          current.id = Number(value);
          break;
      }
      
      return current;
    })
  }

  increasedBy(value: number) {
    this.counter.update(current => current + value);
  }

  ngOnDestroy(): void {
    this.userChangedEffect.destroy();
  }
}
