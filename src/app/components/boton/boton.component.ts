import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductoModel } from 'src/app/models/models.model';

@Component({
    selector: 'app-boton',
    templateUrl: './boton.component.html',
    styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

    @Input() producto: ProductoModel;
    @Input() index: number;

    @Output() eventoBorrarProducto = new EventEmitter<ProductoModel>();
    @Output() eventoIndexBorrarProducto = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

    borrarProducto() {
        this.eventoBorrarProducto.emit(this.producto);
        this.eventoIndexBorrarProducto.emit(this.index);
    }
}
