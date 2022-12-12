import { StatusBar } from "expo-status-bar";
import {
  Container,
  Input,
  Title,
  Label,
  Form,
  Button,
  TextBottom,
} from "./styles/style";

export default function App() {
  return (
    <Container>
      <Title>Login</Title>
      <Form>
        <Label>Email</Label>
        <Input placeholder="Digite o seu email..." />
        <Label>Senha</Label>
        <Input placeholder="Digite o seu email..." />
        <Button>
          <TextBottom>Enviar</TextBottom>
        </Button>
      </Form>
      <StatusBar style="light" />
    </Container>
  );
}
