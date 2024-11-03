import { Card, CardContent, Typography } from "@mui/joy";
import { DominionCard, DominionCardType } from "./Game";

interface CardDisplayProps {
    cardData: DominionCard;
}

export const mapCardTypeToColor = (cardType: DominionCardType) => {
    switch (cardType) {
        case DominionCardType.Attack: return 'danger'
        case DominionCardType.Defense: return 'primary'
        case DominionCardType.Point: return 'success'
        default: return undefined
    }
}

export default function CardDisplay({ cardData }: CardDisplayProps) {

    return (
        <Card
            variant={cardData.type == DominionCardType.Action ? "outlined" : "soft"}
            size="sm"
            color={mapCardTypeToColor(cardData.type)}>
            <CardContent>
                <Typography>
                    {cardData.cost} - {cardData.name}
                </Typography>
            </CardContent>
        </Card>
    )
}