import { useCallback, useEffect, useState } from "react";
import { formatDistance } from "date-fns";
import { api } from "../../../../services/api";
import { Container, LinkArticle, SectionList } from "./styles";
import ptBR from "date-fns/esm/locale/pt-BR";
import { Link } from "react-router-dom";

interface PublicationData {
  body: string;
  created_at: string;
  title: string;
  number: number;
}

export function Featured() {
  const [publications, setPublications] = useState<PublicationData[]>([]);

  const getPublicationsInGithub = useCallback(async () => {
    const { data } = await api.get(
      "/repos/rocketseat-education/reactjs-github-blog-challenge/issues"
    );
    setPublications(data);
  }, []);

  useEffect(() => {
    getPublicationsInGithub();
  }, []);

  return (
    <Container>
      <header>
        <strong>Publicações</strong>
        <span>{publications.length} publicações</span>
      </header>
      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
      <SectionList>
        {publications.map((publication) => (
          <LinkArticle
            to={`/${publication.number ?? "0"}`}
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
        ))}
      </SectionList>
    </Container>
  );
}
