// Superclasse
export interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagemUrl: string;
  tipo: 'CARTA' | 'PACOTE' | 'ACESSORIO';
}

// Subclasses para herança
export interface CartaAvulsa extends Product {
    tipo: 'CARTA';
    elementoCategoria: string;
    raridade: string;
    estadoConservacao: string;
    idioma: string;
}

export interface Pacote extends Product {
    tipo: 'PACOTE';
    quantidadeCartas: number;
    colecao: string;
    tipoSelado: string;
}

export interface Acessorio extends Product {
    tipo: 'ACESSORIO';
    marca: string;
    tipoAcessorio: string;
}