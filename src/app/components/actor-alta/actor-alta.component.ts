import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorModel, PaisModel } from 'src/app/models/models.model';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-actor-alta',
    templateUrl: './actor-alta.component.html',
    styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

    forma: FormGroup;
    paises:PaisModel[] = [];
    pais: PaisModel = new PaisModel();

    url: string = 'https://restcountries.eu/rest/v2/region/';
    region: string = 'europe';

    index: number;

    constructor(private fb: FormBuilder, private dataSrv: DataService) {
        this.crearFormulario();
        this.getPaisesUrl(this.region);

    }

    ngOnInit(): void {
        // this.getpaises();
    }

    get nombreNoValido() {
        return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
    }

    get apellidoNoValido() {
        return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
    }

    get fechaNoValida() {
        return this.forma.get('fecha').invalid && this.forma.get('fecha').touched;
    }

    get paisNoValido() {
        return this.forma.get('nacionalidad').invalid && this.forma.get('nacionalidad').touched;
    }

    crearFormulario() {
        this.forma = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(2)]],
            apellido: ['', [Validators.required, Validators.minLength(2)]],
            sexo: ['m', [Validators.required]],
            fecha: ['', [Validators.required]],
            nacionalidad: ['', [Validators.required]]
        });
    }

    // getpaises() {
    //     this.dataSrv.getColeccion('paises')
    //         .subscribe(resp => this.paises = this.dataSrv.crearArrDePaises(resp));
    // }

    guardar() {
        if (this.forma.invalid) {
            return Object.values(this.forma.controls).forEach(control => {
                if (control instanceof FormGroup)
                    Object.values(control.controls).forEach(control => control.markAsTouched());
                else
                    control.markAsTouched();
            });
        }

        const actor = new ActorModel();
        actor.nombre = this.forma.get('nombre').value;
        actor.sexo = this.forma.get('sexo').value;
        actor.fecha_de_nac = this.forma.get('fecha').value;
        actor.nacionalidad = this.pais.name;

        Swal.fire({
            title: 'Espere ...',
            icon: 'info'
        })
        Swal.showLoading();
        this.dataSrv.postRegistro('actores', actor).subscribe(
            resp => Swal.close()
        );
        this.forma.reset();
    }

    tomarPais(pais: PaisModel) {
        console.log(pais);
        this.pais = pais;
        this.forma.setValue({
            nombre: this.forma.get('nombre').value,
            apellido: this.forma.get('apellido').value,
            sexo: this.forma.get('sexo').value,
            fecha: this.forma.get('fecha').value,
            nacionalidad: this.pais.name
        })
    }


    getPaisesUrl(region: string) {
        this.dataSrv.peticionHttp(`${this.url}${region}`)
            .subscribe((resp: PaisModel[]) => {
                this.paises = resp;
            });
    }
}
