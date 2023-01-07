import { FormEvent, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";

export default function AddEvent() {

    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");

    async function  handleSubmitEvent(event:FormEvent) {
        event.preventDefault();
        const response = await axios.post("/api/events", {eventName, eventDate})
        response.status === 201 ? alert("Evento adicionado com sucesso!") : alert("Erro ao adicionar evento!")
        setEventName("");
        setEventDate("");
    }

    return (
        <>
            <Container>
                <h1>Adicionar Evento</h1>

                <Form
                    onSubmit={handleSubmitEvent} 
                 >
                    <Form.Group className="mb-3">
                        <Form.Label>Nome do Evento</Form.Label>
                        <Form.Control 
                            type="text"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            placeholder="Digite o nome do evento"
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Data do Evento</Form.Label>
                        <Form.Control 
                            type="text  " 
                            value={eventDate} 
                            onChange={(e) => setEventDate(e.target.value)}
                            placeholder="Digite a data do evento" 
                            required />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" >
                        Cadastrar Evento
                    </Button>


                </Form>

            </Container>
        </>
    )
}