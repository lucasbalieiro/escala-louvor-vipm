import { Button, Container, Form, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";


export default function Home() {
    return (
        <>
            <NavBar />
            <Container>
                <Row xl={12} className="text-center">
                    <h1>Escala do Grupo de Louvor</h1>
                    <p>Janeiro</p>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Seu Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nome" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Text className="text-muted">
                                Selecione os dias que você está disponível.
                            </Form.Text>

                            <Form.Check
                                type="checkbox"
                                label="Domingo - 09/01/2021"
                            />
                            <Form.Check
                                type="checkbox"
                                label="Domingo - 09/01/2021"
                            />
                            <Form.Check
                                type="checkbox"
                                label="Domingo - 09/01/2021"
                            />
                            <Form.Check
                                type="checkbox"
                                label="Domingo - 09/01/2021"
                            />
                            <Form.Check
                                type="checkbox"
                                label="Aniversario V IPM - 09/01/2021"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                </Row>
            </Container>
        </>
    );
}