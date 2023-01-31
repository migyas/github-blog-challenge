import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AboutMe,
  Container,
  Content,
  HeaderWithLink,
  SocialContainer,
} from "./styles";

export function Profile() {
  return (
    <Container>
      <img src="https://github.com/migyas.png" alt="Foto do perfil" />
      <Content>
        <HeaderWithLink>
          <strong>Yan Dias</strong>
          <button>
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </HeaderWithLink>
        <AboutMe>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </AboutMe>
        <SocialContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>migyas</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Yan Dev TI</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>5 seguidores</span>
          </div>
        </SocialContainer>
      </Content>
    </Container>
  );
}
