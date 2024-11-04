import { Card, CardContent, } from "@mui/joy";
import { DominionCard, DominionCardType } from "./Game";
import CardName from "./CardName";

export interface CardDisplayProps {
    cardData: DominionCard;
}

export const mapCardTypeToColor = (cardType: DominionCardType) => {
    switch (cardType) {
        case DominionCardType.Attack: return 'danger'
        case DominionCardType.Defense: return 'primary'
        case DominionCardType.Point: return 'success'
        default: return 'neutral'
    }
}

export default function CardDisplay({ cardData }: CardDisplayProps) {

    return (
        <Card
            variant={cardData.type == DominionCardType.Action ? "outlined" : "soft"}
            sx={{ border: 1, borderColor: 'rgba(0, 0, 0, 0.12)' }}
            size="sm"
            color={mapCardTypeToColor(cardData.type)}>
            <CardContent>
                <CardName cardData={cardData} />
            </CardContent>
        </Card>
    )
}