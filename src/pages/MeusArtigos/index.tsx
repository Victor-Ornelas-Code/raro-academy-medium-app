import axiosApiInstance from "../../components/Services/api-client";
import { useEffect, useState } from "react";

import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import NoArticles from "../../components/NoArticle";


export const MeusArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

  async function buscaMeusArtigos() {
    const response = await axiosApiInstance.get<ArticleThumbnailProps[]>(
      '/artigos/meus-artigos'
    );
    setArticles(response.data);
  }

  useEffect(() => {
    buscaMeusArtigos();
  }, []);

  return (
    <div className="my-30">
      {articles.length === 0 ? <NoArticles /> : <ArticleList articles={articles} />}
    </div>
  );
};