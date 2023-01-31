import ReactMarkdown from "react-markdown";
import { Header } from "./components/Header";
import { Content } from "./styles";

export function Post() {
  return (
    <div>
      <Header />
      <Content>
        <ReactMarkdown>## Olá mundo</ReactMarkdown>
      </Content>
    </div>
  );
}
