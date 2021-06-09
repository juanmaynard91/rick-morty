interface Character {
    id?: number; // ? siginifica propiedades opcionales, por si no hay informacion que mostrar
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin?: {
      name?: string;
      url?: string;
    };
    location?: {
      name?: string;
      url?: string;
    };
    image?: String;
    episode?: Array<string>;
  }
  
  export default Character;
  