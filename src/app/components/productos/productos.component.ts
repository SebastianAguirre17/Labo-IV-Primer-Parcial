import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/models/models.model';
import { DataService } from 'src/app/services/data.service';
import { productosData } from 'src/app/shared/data';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

    productos: ProductoModel[] = [];
    producto: ProductoModel;
    index: number;

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

    tomarIndex(index: number) {
        this.index = index;
    }

    borrarProducto(producto: ProductoModel) {
        Swal.fire({
            icon: 'question',
            title: 'Borrar Producto',
            text: '¿Está seguro de que desea borrar el producto?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: 'red' 
        }).then((result) => {
            if (result.isConfirmed) {
                this.productos.splice(this.index, 1);
                this.producto = null;
                this.dataSrv.deleteRegistro('productos', producto.id).subscribe();
            }
        })
    }
}
