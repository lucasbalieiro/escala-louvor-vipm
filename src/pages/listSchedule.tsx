import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import EventCard from "../components/EventCard";

export default function ListSchedule() {

    const [subscribers, setSubscribers] = useState([]);
    const [events, setEvents] = useState([]);


    useEffect(() => {
        axios.get("/api/subscription").then((response) => {
            setSubscribers(response.data.subscribers);
            setEvents(response.data.events);
        });
    }, []);

    return (
        <Container>
            <h1>Lista de Escala</h1>
            <Row className="justify-content-md-center">
                <Col
                    style={{ marginBottom: "10px" }}
                >
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            eventName={event.name}
                            date={event.date}
                            subscriptions={subscribers}
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}