import Card from 'react-bootstrap/Card';

type EventData = {
  name: string;
  date: string;
}

type SubscriptionData = {
  name: string;
  events: EventData[];
}

type EventCardProps = {
  eventName: string;
  date: string;
  subscriptions: SubscriptionData[];
}

export default function EventCard({ eventName, date, subscriptions }: EventCardProps) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{eventName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>
          {subscriptions.map((subscription, index) => (
            subscription.events.map((event, index) => (
              event.date === date && <span style={{display: "block"}} key={index}>{subscription.name}</span>
            ))
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}