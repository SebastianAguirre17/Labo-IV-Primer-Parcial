import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/models/models.model';
import { DataService } from 'src/app/services/data.service';
import { productosData } from 'src/app/shared/data';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

    productos: ProductoModel[] = [];
    producto: ProductoModel;

    constructor(private dataSrv: DataService) { }

    ngOnInit(): void {
        this.getProductos();
        // this.dataSrv.createColection(productosData, 'productos');
    }

    getProductos() {
        this.dataSrv.getColeccion('productos').subscribe(
            resp => this.productos = this.dataSrv.crearArrDeproductos(resp)
        )
    }
}
