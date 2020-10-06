import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-buscador',
    templateUrl: './buscador.component.html',
    styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

    @Output() eventoBuscarProducto = new EventEmitter();
    
    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    buscarProducto(terminoDeBusqueda: string) {
        if(terminoDeBusqueda.length < 2)
            return;
        this.router.navigate(['/buscados', terminoDeBusqueda])
    }
}
