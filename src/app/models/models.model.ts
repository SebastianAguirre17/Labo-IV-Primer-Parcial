export class ActorModel {
    id: string;
    nombre: string;
    apellido: string;
    sexo: string;
    fecha_nacimiento: string;
    foto: string;
}

export class PeliculaModel {
    id: string;
    nombre: string;
    tipo: Tipo;
    fecha_estreno: string;
    cantidad_publico: number;
    foto: string;
}

export type Tipo = 'terror' | 'comedia' | 'amor' | 'otros';