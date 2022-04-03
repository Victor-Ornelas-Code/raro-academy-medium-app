import { clear } from "console";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import axiosApiInstance from "../../components/Services/api-client";


export const EditarArquivoPage = () => {
    const [artigo, setArtigo] = useState<ArticleThumbnailProps>();
    const { id } = useParams();

    const navigate = useNavigate();


    useEffect(() => {
        if (id) {
            buscarArtigo();
        }
    }, [id]);

    async function buscarArtigo() {
        const response = await axiosApiInstance.get<ArticleThumbnailProps>(
            `/artigos/${id}`
        );
      
        setArtigo(response.data);
    }

    const handleSubmit = async (artigo: ArticleThumbnailProps) => {

        
        if (artigo.id) {
             await axiosApiInstance.patch<ArticleThumbnailProps>(
                `/artigos/${id}`, {...artigo});
            
        } else {
            await axiosApiInstance.post<ArticleThumbnailProps>(`/artigos`, {...artigo})
            
        }
        navigate('/artigos')

    }

    const handleDelete = async (article: ArticleThumbnailProps) => {

        if (article.id) {
        const response = await axiosApiInstance.delete<ArticleThumbnailProps>(
          `/artigos/${id}`);
        }
    
        navigate('/artigos')
      }

    return (
        <>
            <div className="items-center justify-center m-10">
                <ArticleForm
                    article={artigo}
                    onSubmit={handleSubmit}
                    onDelete={handleDelete}
                />
            </div>
        </>
    );
};