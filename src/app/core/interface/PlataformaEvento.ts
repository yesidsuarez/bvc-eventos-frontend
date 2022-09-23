import { Evento } from "./Evento";
import { Plataforma } from "./Plataforma";

export interface PlataformaEvento {
    id: string;
    fecha: Date;
    cantidad: number;
    costo: number;
    plataforma: Plataforma
    evento: Evento;


}
