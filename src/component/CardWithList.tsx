import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'

interface CardWithListProps {
    title: string
    subtitle: string
    items: string[]
}

export default function CardWithList({title, subtitle, items}: CardWithListProps) {
    return (
        <Card sx={{ minWidth: 400 }} className="text-center">
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {subtitle}
                </Typography>
                <List >
                    {items.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    )
}
