export type Tipo = 'terror' | 'comedia' | 'amor' | 'otros';

export type TipoProducto = 'liquido' | 'solido';

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

export class ProductoModel {
    id: string;
    descripcion: string;
    tipo: TipoProducto;
    fechaDeVencimiento: string;
    precio: number;
    rutaDeFoto?: string;
}

export class UsuarioModel {
    email: string;
    password: string;
}

export type Roles = 'ADMIN' | 'INVITADO';

export interface User {
    uid: string;
    email: string;
    password?: string;
    role?: Roles;
    name?: string;
}

export class RoleValidator {
    isAdmin(user: User): boolean {
        return user.role === 'ADMIN';
    }

    isInvitado(user: User): boolean {
        return user.role === 'INVITADO';
    }
}