export type ArticleThumbnailProps = {
  conteudo: string;
  id: number;
  imagem: string;
  titulo: string;
  resumo: string;
  dataPublicacao: Date;
  tempoLeitura?: string;
  autor: {
    id:number;
    nome: string;
    avatar: string;
  };
  editavel?: boolean;
}
