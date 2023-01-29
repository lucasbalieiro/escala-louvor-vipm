import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { GetMonthName } from "../services/GetMonthName";


type EventType = {
    date: string;
    name: string;
}

export default function Home() {

    const [events, setEvents] = useState([] as EventType[])
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        axios.get("/api/events")
            .then(response => {
                setEvents(response.data)
            }
            )
    }, [])

    async function handleSubmitEvent(event: any) {
        event.preventDefault();
        setDisabled(true)

        const selectedEvents = events.filter((e: EventType) => event.target.elements[e.name].checked)
        if (selectedEvents.length <= 0) {
            alert("Selecione pelo menos um dia!")
            setDisabled(false)
            return
        }

        const result = await axios.post("/api/subscription", { name, events: selectedEvents, role })
        .catch(err => {
            return err.response
        })

        if (result.status === 409) {
            alert("Você já está cadastrado para os eventos selecionados e para essa funcao!")
            setDisabled(false)
            return
        }
        result.status === 201 ? alert("Cadastro realizado com sucesso!") : alert("Erro ao cadastrar!")
        setName("");
        setDisabled(false)

    }

    return (
        <>
            <Container>
                <Row xl={12} className="text-center">
                    <h1>Escala do Grupo de Louvor</h1>
                    <p>{GetMonthName(new Date().getMonth())}</p>
                </Row>
                <Row>
                    <Form
                        onSubmit={handleSubmitEvent}
                    >
                        <Form.Group className="mb-3">
                            <Form.Label>Seu Nome</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Digite seu nome"
                                required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check
                                onChange={(e) => setRole(e.target.value)}
                                type="radio"
                                label="Vocal"
                                value="Vocal"
                                name="role"
                                required
                            />
                            <Form.Check
                                type="radio"
                                onChange={(e) => setRole(e.target.value)}
                                label="Instrumental"
                                value="Instrumental"
                                name="role"
                                required
                            />
                            <Form.Check
                                type="radio"
                                onChange={(e) => setRole(e.target.value)}
                                label="Cabine"
                                value="Cabine"
                                name="role"
                                required
                            />
                        </Form.Group>


                        <Form.Group>
                            <Form.Text className="text-muted">
                                Selecione os dias que você está disponível.
                            </Form.Text>

                            {events.map((e, index) => {
                                return (
                                    <Form.Check
                                        key={index}
                                        name={e.name}
                                        type="checkbox"
                                        label={`${e.date} - ${e.name}`}
                                    />
                                )
                            })
                            }
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={events.length <= 0 || disabled} >
                            Cadastrar
                        </Button>
                    </Form>
                </Row>
            </Container>
        </>
    );
}