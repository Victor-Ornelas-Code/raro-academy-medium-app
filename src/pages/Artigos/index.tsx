import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import axiosApiInstance from "../../components/Services/api-client";

export const ArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

  async function listArticles() {
    const response = await axiosApiInstance.get<ArticleThumbnailProps[]>(
      '/artigos'      
    );
    setArticles(response.data);
  }

  useEffect(() => {
    listArticles();
  }, []);



  return (
    <div className="my-30">
      <ArticleList
        articles={articles}
      />
    </div>
  );
};