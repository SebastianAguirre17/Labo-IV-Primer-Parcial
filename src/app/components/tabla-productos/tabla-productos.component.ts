import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductoModel } from 'src/app/models/models.model';

@Component({
    selector: 'app-tabla-productos',
    templateUrl: './tabla-productos.component.html',
    styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {

    @Input() productos: ProductoModel[] = [];
    indexSeleccionado: number;
    productoSeleccionado: ProductoModel;

    @Output() eventoBorrarProducto = new EventEmitter<ProductoModel>();
    @Output() eventoIndexBorrarProducto = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

    tomarProductoDesdeBoton(producto: ProductoModel) {
        this.productoSeleccionado = producto;
        this.eventoBorrarProducto.emit(this.productoSeleccionado);
    }

    tomarIndexDesdeBoton(index: number) {
        this.indexSeleccionado = index;
        this.eventoIndexBorrarProducto.emit(this.indexSeleccionado);
    }

}
