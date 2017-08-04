import { Pipe, PipeTransform, IterableDiffers } from '@angular/core';

/**
 * Generated class for the ReversePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipe implements PipeTransform {

  differs: any
  cashed: any
  constructor(private _differs: IterableDiffers) {
    this.differs = this._differs.find([]).create(null);
  }
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, ...args) {
    const changes = this.differs.diff(value)
    if (changes && value) {
      this.cashed = value.slice().reverse();;
    };
    return this.cashed
  }
}
