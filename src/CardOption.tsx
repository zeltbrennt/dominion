import { AccordionDetails, Sheet, Stack, Typography, Card, CardContent, CardActions } from "@mui/joy"
import { DominionCard } from "./Game";
import { mapCardTypeToColor } from "./CardDisplay";
import { DominionCardType } from "./Game"
import RadioButtonGroup from "./RadioButtonGroup";
import CardName from "./CardName";

export interface CardOptionProps {
    card: DominionCard,
    onDefault: () => void,
    onInclude: () => void,
    onExclude: () => void,
}

export default function CardOption({ card, onDefault, onInclude, onExclude }: CardOptionProps) {


    return (
        <AccordionDetails>
            <Card
                variant={card.type == DominionCardType.Action ? "outlined" : "soft"}
                sx={{ border: 1, borderColor: 'rgba(0, 0, 0, 0.12)' }}
                size="sm"
                color={mapCardTypeToColor(card.type)}>
                <CardContent>
                    <CardName cardData={card} />
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'right' }}>
                    <RadioButtonGroup card={card} onDefault={onDefault} onInclude={onInclude} onExclude={onExclude} />
                </CardActions>
            </Card>
        </AccordionDetails>
    )
}