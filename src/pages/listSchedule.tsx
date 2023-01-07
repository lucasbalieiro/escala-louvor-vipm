import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import EventCard from "../components/EventCard";

type EventType = {
    date: string;
    name: string;
}

export default function ListSchedule() {

    const [subscribers, setSubscribers] = useState([]);
    const [events, setEvents] = useState([] as EventType[])

    useEffect(() => {
        axios.get("/api/subscription").then((response) => {
            setSubscribers(response.data.subscribers);
            setEvents(response.data.events);
        });
    }, []);

    return (
        <Container>
            <h1>Lista de Escala</h1>
            <Row>
                {events.map((event, index) => (
                    <Col xs={12} md={6} lg={4} xl={3}
                        key={index}
                        style={{ marginBottom: "10px" }}
                    >
                        <EventCard
                            key={index}
                            eventName={event.name}
                            date={event.date}
                            subscriptions={subscribers}
                        />
                    </Col>
                ))}

            </Row>
        </Container>
    )
}