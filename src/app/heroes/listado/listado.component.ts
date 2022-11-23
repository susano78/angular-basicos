import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

 heroes:string[]=['spiderman','iroman','hulk','thor','batman'];
 heroeborrado:string='';
 borrarHeroe(){

  //this.heroeborrado=this.heroes.shift()?.toString();
  this.heroeborrado=this.heroes.shift() || '';
  //console.log(this.heroeborrado);
 }

}
