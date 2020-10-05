import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-buscador',
    templateUrl: './buscador.component.html',
    styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

    @Output() eventoBuscarProducto = new EventEmitter();
    
    constructor() { }

    ngOnInit(): void {
    }

    buscarProducto(terminoDeBusqueda: string) {
        console.log(terminoDeBusqueda);
    }
}
