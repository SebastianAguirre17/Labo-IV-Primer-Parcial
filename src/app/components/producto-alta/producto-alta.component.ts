import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoModel } from 'src/app/models/models.model';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-producto-alta',
    templateUrl: './producto-alta.component.html',
    styleUrls: ['./producto-alta.component.css']
})
export class ProductoAltaComponent implements OnInit {

    forma: FormGroup;

    constructor(private fb: FormBuilder, private dataSrv: DataService) {
        this.crearFormulario();
    }

    ngOnInit(): void { 

    }

    get descripcionNoValida() {
        return this.forma.get('descripcion').invalid && this.forma.get('descripcion').touched;
    }

    get fechaNoValida() {
        return this.forma.get('fecha').invalid && this.forma.get('fecha').touched;
    }

    get precioNoValido() {
        return this.forma.get('precio').invalid && this.forma.get('precio').touched;
    }

    crearFormulario() {
        this.forma = this.fb.group({
            descripcion: ['', [Validators.required, Validators.minLength(2)]],
            tipo: ['solido', [Validators.required]],
            fecha: ['', [Validators.required]],
            precio: ['', [Validators.required]],
        });
    }

    guardar() {
        if (this.forma.invalid) {
            return Object.values(this.forma.controls).forEach(control => {
                if (control instanceof FormGroup)
                    Object.values(control.controls).forEach(control => control.markAsTouched());
                else
                    control.markAsTouched();
            });
        }

        const producto = new ProductoModel();
        producto.descripcion = this.forma.get('descripcion').value;
        producto.tipo = this.forma.get('tipo').value;
        producto.fechaDeVencimiento = this.forma.get('fecha').value;
        producto.precio = this.forma.get('precio').value;
        producto.rutaDeFoto = 'http://dummyimage.com/250x250.png/5fa2dd/ffffff';

        Swal.fire({
            title: 'Espere ...',
            icon: 'info'
        })
        Swal.showLoading();
        this.dataSrv.postRegistro('productos', producto).subscribe(
            resp => Swal.close()
        );
        this.forma.reset();
    }

}
