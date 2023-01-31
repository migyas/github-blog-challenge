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
  SocialContainer,
} from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <HeaderWithLink>
          <button>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </button>
          <button>
            <span>Ver no GitHub</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </HeaderWithLink>
        <Description>JavaScript data types and data structures</Description>
        <SocialContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>migyas</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <time>Há 1 dia</time>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentário(s)</span>
          </div>
        </SocialContainer>
      </Content>
    </Container>
  );
}
