import { useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Header } from "./components/Header";
import { Content } from "./styles";

interface UserData {
  login: string;
}

interface PublicationData {
  body: string;
  title: string;
  html_url: string;
  created_at: string;
  comments: number;
  user: UserData;
}

export function Post() {
  const params = useParams();
  const [publication, setPublication] = useState({} as PublicationData);

  const getPublicationByNumber = useCallback(async () => {
    const { data } = await api.get(
      `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${params.number}`
    );
    setPublication(data);
  }, []);

  useEffect(() => {
    getPublicationByNumber();
  }, []);

  return (
    <div>
      <Header
        title={publication.title}
        comments={publication.comments}
        createdAt={publication.created_at}
        htmlUrl={publication.html_url}
        user={publication.user}
      />
      <Content>
        <ReactMarkdown>{publication.body}</ReactMarkdown>
      </Content>
    </div>
  );
}
