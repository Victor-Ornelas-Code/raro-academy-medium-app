import faker from "@faker-js/faker";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { ArticleView } from "../../components/ArticleView";
import axiosApiInstance from "../../components/Services/api-client";

export const ArtigoPage = () => {
  const [article, setArticle] = useState<string>();
  const [autor, setAutor] = useState({
    nome: faker.name.firstName(),
    avatar: faker.image.avatar(),
  });
  const [dataPublicacao] = useState(new Date());
  const { id } = useParams();

  useEffect(() => {
    async function loadArticle() {

      const article = await axiosApiInstance.get<ArticleThumbnailProps>(
        `/artigos/${id}`
      );
      setArticle(article.data.conteudo);
      setAutor({nome: article.data.autor.nome,
      avatar: article.data.autor.avatar})

    }

    loadArticle();
  }, []);


  return (
    <div className="m-10">
      <ArticleView
        article={article}
        autor={autor}
        dataPublicacao={dataPublicacao}
        tempoLeitura={'10min'}
      />
      
    </div>
  );
};