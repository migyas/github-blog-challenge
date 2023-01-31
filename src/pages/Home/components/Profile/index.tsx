import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AboutMe,
  ButtonLink,
  Container,
  Content,
  HeaderWithLink,
  SocialContainer,
} from "./styles";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../services/api";

interface UserData {
  login: string;
  name: string;
  followers: number;
  company: string;
  bio: string;
  avatar_url: string;
  html_url: string;
}

export function Profile() {
  const [user, setUser] = useState({} as UserData);

  const getUser = useCallback(async () => {
    const { data } = await api.get("/users/migyas");
    setUser(data);
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <img src={user.avatar_url} alt="Foto do perfil" />
      <Content>
        <HeaderWithLink>
          <strong>{user.name}</strong>
          <ButtonLink to={user.html_url ?? "#"} target="_blank">
            <span>Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ButtonLink>
        </HeaderWithLink>
        <AboutMe>{user.bio ?? "Nenhuma bio foi registrada"}</AboutMe>
        <SocialContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{user.company ?? "----"}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user.followers ?? "0"} seguidores</span>
          </div>
        </SocialContainer>
      </Content>
    </Container>
  );
}
