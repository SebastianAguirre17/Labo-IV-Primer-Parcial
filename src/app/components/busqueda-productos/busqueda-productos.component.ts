import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoModel } from 'src/app/models/models.model';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-busqueda-productos',
    templateUrl: './busqueda-productos.component.html',
    styleUrls: ['./busqueda-productos.component.css']
})
export class BusquedaProductosComponent implements OnInit {

    totalProductos: ProductoModel[] = [];
    productos: ProductoModel[] = [];
    producto: ProductoModel;
    index: number;

    constructor(private actRoute: ActivatedRoute, private dataSrv: DataService) { }

    ngOnInit(): void {
        this.getProductos();
    }

    getProductos() {
        this.dataSrv.getColeccion('productos').subscribe(
            resp => {
                this.totalProductos = this.dataSrv.crearArrDeproductos(resp);
                this.actRoute.params.subscribe(params => {
                    this.productos = this.dataSrv.buscarProducto(this.totalProductos, params['termino'])
                })
            } 
        )
    }

}
