import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Content,
  Description,
  HeaderWithLink,
  LinkButton,
  SocialContainer,
} from "./styles";
import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface UserData {
  login: string;
}

interface HeaderPublicationProps {
  title: string;
  htmlUrl: string;
  createdAt: string;
  comments: number;
  user: UserData;
}

export function Header({
  user,
  createdAt,
  comments,
  title,
  htmlUrl,
}: HeaderPublicationProps) {
  return (
    <Container>
      <Content>
        <HeaderWithLink>
          <LinkButton to={"/"}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </LinkButton>
          <LinkButton to={htmlUrl ?? "/"} target="_blank">
            <span>Ver no GitHub</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </LinkButton>
        </HeaderWithLink>
        <Description>{title}</Description>
        <SocialContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user?.login ?? "---"}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <time>
              {createdAt &&
                formatDistance(new Date(), new Date(createdAt), {
                  addSuffix: true,
                  locale: ptBR,
                })}
            </time>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{comments} comentários</span>
          </div>
        </SocialContainer>
      </Content>
    </Container>
  );
}
