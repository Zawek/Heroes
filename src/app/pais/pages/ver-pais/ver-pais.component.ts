import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {


  pais!: Country;

  constructor( 
    private activateRoute: ActivatedRoute,
    private PaisService: PaisService
    ) { }

  ngOnInit(): void {

    // this.activateRoute.params
    //   .subscribe(({id}) => {
    //     this.PaisService.getPaisPorAlpha(id)
    //       .subscribe( pais => {
    //         console.log(pais);
    //       });
    //   });

    this.activateRoute.params
      .pipe(
        switchMap(({id}) => this.PaisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais[0]);

  }

}
