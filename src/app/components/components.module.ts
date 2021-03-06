import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './peliculas-listado/peliculas-listado.component';
import { TablaPeliculaComponent } from './tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { TablaActorComponent } from './tabla-actor/tabla-actor.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoAltaComponent } from './producto-alta/producto-alta.component';
import { VentasListadoComponent } from './ventas-listado/ventas-listado.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';
import { BusquedaProductosComponent } from './busqueda-productos/busqueda-productos.component';
import { BotonComponent } from './boton/boton.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component';
import { EditarActorComponent } from './editar-actor/editar-actor.component';
import { BorrarActorComponent } from './borrar-actor/borrar-actor.component';



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
        BienvenidoComponent,
        TablaActorComponent,
        TablaProductosComponent,
        ProductosComponent,
        ProductoAltaComponent,
        VentasListadoComponent,
        NuevaVentaComponent,
        BusquedaProductosComponent,
        BotonComponent,
        BuscadorComponent,
        TablaPaisesComponent,
        DetalleActorComponent,
        EditarActorComponent,
        BorrarActorComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
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
        TablaActorComponent,
        TablaProductosComponent,
        ProductosComponent,
        ProductoAltaComponent,
        VentasListadoComponent,
        NuevaVentaComponent,
        BusquedaProductosComponent,
        BotonComponent,
        BuscadorComponent,
        TablaPaisesComponent,
        DetalleActorComponent,
        EditarActorComponent
    ]
})
export class ComponentsModule { }
