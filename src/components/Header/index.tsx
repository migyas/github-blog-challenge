import bgMainImg from "../../assets/bg-main.svg";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img src={bgMainImg} />
    </Container>
  );
}
