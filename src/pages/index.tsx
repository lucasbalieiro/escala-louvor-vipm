import { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { GetMonthName } from "../services/GetMonthName";
import { getSchedule } from "../services/GetSchedule";


type EventType = {
    date: string;
    event: string;
}

export default function Home() {

    const [events, setEvents] = useState([] as EventType[])

    useEffect(() => {
        getSchedule().then((data) => {
            console.log(data)
            setEvents(data)
        })
    }, [])

    return (
        <>
            <NavBar />
            <Container>
                <Row xl={12} className="text-center">
                    <h1>Escala do Grupo de Louvor</h1>
                    <p>{GetMonthName(new Date().getMonth())}</p>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Seu Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nome" required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Text className="text-muted">
                                Selecione os dias que você está disponível.
                            </Form.Text>

                            {events.map((e) => {
                                return (
                                    <Form.Check
                                        type="checkbox"
                                        label={`${e.event} - ${e.date}`}
                                    />
                                )
                            })
                            }
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={events.length <= 0} >
                            Cadastrar
                        </Button>
                    </Form>
                </Row>
            </Container>
        </>
    );
}