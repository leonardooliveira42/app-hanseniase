import { Injectable, EventEmitter } from '@angular/core';

/*
  Generated class for the NavChangeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class NavChangeProvider {
  navchange: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
  emitNavChangeEvent(number) {
    this.navchange.emit(number);
  }
  getNavChangeEmitter() {
    return this.navchange;
  }
}
