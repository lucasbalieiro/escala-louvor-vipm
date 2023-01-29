import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";


export default function Admin() {

    const [disabled, setDisabled] = useState(false)

    async function handleClearAllData(event: any) {
        event.preventDefault();
        setDisabled(true)

        const response = await fetch("/api/clearAllData", {
            method: "DELETE",
        });

        response.status === 200 ? alert("Dados apagados com sucesso!") : alert("Erro ao apagar os dados!");
        setDisabled(false)
    }

    return (
        <Container>
            <Form
                onSubmit={handleClearAllData}
            >
                <Form.Group className="mb-3">
                    <Form.Label>Deseja limpar todos os dados?</Form.Label>
                    <Button 
                        variant="primary" 
                        type="submit"
                        disabled={disabled}
                    >Limpar</Button>
                </Form.Group>
            </Form>
        </Container>
    );
    }
