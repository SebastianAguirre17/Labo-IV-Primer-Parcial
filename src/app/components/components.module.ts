import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './peliculas-listado/peliculas-listado.component';
import { TablaPeliculaComponent } from './tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';



@NgModule({
    declarations: [
        NavbarComponent,
        BusquedaComponent,
        PeliculaAltaComponent,
        ActorAltaComponent,
        ActorListadoComponent,
        PeliculasListadoComponent,
        TablaPeliculaComponent,
        DetallePeliculaComponent,
        BienvenidoComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        NavbarComponent,
        BusquedaComponent,
        PeliculaAltaComponent,
        ActorAltaComponent,
        ActorListadoComponent,
        PeliculasListadoComponent,
        TablaPeliculaComponent,
        DetallePeliculaComponent,
        BienvenidoComponent,
        FormsModule
    ]
})
export class ComponentsModule { }