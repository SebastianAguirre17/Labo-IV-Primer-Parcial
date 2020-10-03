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
    fecha_de_estreno: string;
    cantidad_de_publico: number;
    foto?: string;
    actor?: ActorModel;
}

export type Tipo = 'terror' | 'comedia' | 'amor' | 'otros';