import { useCallback, useEffect, useState } from "react";
import { formatDistance } from "date-fns";
import { api } from "../../../../services/api";
import { Container, LinkArticle, SectionList } from "./styles";
import ptBR from "date-fns/esm/locale/pt-BR";
import { useForm } from "react-hook-form";

interface PublicationData {
  body: string;
  created_at: string;
  title: string;
  number: number;
}

interface SearchFormQuery {
  query: string;
}

export function Featured() {
  const [publications, setPublications] = useState<PublicationData[]>([]);
  const { register, handleSubmit, reset } = useForm<SearchFormQuery>();

  const getPublicationsInGithub = useCallback(async () => {
    const { data } = await api.get(
      "/repos/rocketseat-education/reactjs-github-blog-challenge/issues"
    );
    setPublications(data);
  }, []);

  async function handleSearchPublication({ query }: SearchFormQuery) {
    const { data } = await api.get(
      `search/issues?q=${query}%20repo:rocketseat-education/reactjs-github-blog-challenge`
    );
    setPublications(data.items);
    reset();
  }

  useEffect(() => {
    getPublicationsInGithub();
  }, []);

  return (
    <Container>
      <header>
        <strong>Publicações</strong>
        <span>{publications.length} publicações</span>
      </header>
      <form onSubmit={handleSubmit(handleSearchPublication)}>
        <input {...register("query")} placeholder="Buscar conteúdo" />
      </form>
      <SectionList>
        {publications.length > 0 ? (
          publications.map((publication) => (
            <LinkArticle
              to={`/${publication.number ?? null}`}
              key={publication.number}
            >
              <article>
                <header>
                  <strong>{publication.title}</strong>
                  <time>
                    {formatDistance(
                      new Date(),
                      new Date(publication.created_at),
                      {
                        addSuffix: true,
                        locale: ptBR,
                      }
                    )}
                  </time>
                </header>
                <p>{publication.body.slice(0, 200)}</p>
              </article>
            </LinkArticle>
          ))
        ) : (
          <header>
            <strong>Nenhum resultado encontrado</strong>
          </header>
        )}
      </SectionList>
    </Container>
  );
}
