import { OrderByCaptainPipe } from "./order-by-captain/order-by-captain";
import { ReversePipe } from "./reverse/reverse";
import { NgModule } from '@angular/core';
@NgModule({
	declarations: [
		ReversePipe,
		OrderByCaptainPipe
	],
	imports: [],
	exports: [
		ReversePipe,
		OrderByCaptainPipe
	]
})
export class PipesModule { }
