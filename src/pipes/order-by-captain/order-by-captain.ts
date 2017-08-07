import { MyTeamDB } from "./../../helpers/myTeamDB";
import { Pipe, PipeTransform, IterableDiffers, KeyValueDiffers } from '@angular/core';

/**
 * Generated class for the OrderByCaptainPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'orderByCaptain',
  pure: false
})
export class OrderByCaptainPipe implements PipeTransform {

  differs: any
  cashed: any
  objDiffer = {}
  constructor(private keyDiffer: KeyValueDiffers, private _differs: IterableDiffers, private teamDB: MyTeamDB) {
    this.differs = this._differs.find([]).create(null);
  }
  /**
   * Takes a value and makes it lowercase.
   */
  transform(arr, currentUID) {
    const changes = this.differs.diff(arr)

    if (changes && arr) {
      this.cashed = arr.sort((a, b) => {
        const AisCaptain = (a.captain == currentUID);
        const BisCaptain = (b.captain == currentUID);
        console.log('a:', a);
        console.log('a captain:', AisCaptain);
        console.log('b:', b);
        console.log('b captain:', BisCaptain);


        if (AisCaptain && !BisCaptain) return -1;
        else if (BisCaptain && !AisCaptain) return 1;
        return 0;
      })
    };
    return this.cashed
  }
}

