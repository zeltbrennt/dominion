import { AccordionDetails, Typography, Sheet, Card, RadioGroup, Radio, CardContent, CardActions } from "@mui/joy"
import { ChangeEvent } from "react"
import { DominionCard } from "./Game";
import { mapCardTypeToColor } from "./CardDisplay";
import { DominionCardType } from "./Game"

export interface CardOptionProps {
    card: DominionCard,
    onDefault: () => void,
    onInclude: () => void,
    onExclude: () => void,
}

export default function CardOption({ card, onDefault, onInclude, onExclude }: CardOptionProps) {

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        switch (event.target.value) {
            case "include": onInclude(); break;
            case "exclude": onExclude(); break;
            default: onDefault();
        }
    }
    return (
        <AccordionDetails>
            <Card
                variant={card.type == DominionCardType.Action ? "outlined" : "soft"}
                size="sm"
                color={mapCardTypeToColor(card.type)}>
                <CardContent>
                    <Typography>
                        {card.cost} - {card.name}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'right' }}>

                    <RadioGroup defaultValue={"maybe"} orientation="horizontal"
                        sx={{ gap: 2, display: 'flex', justifyContent: 'space-around' }}
                        onChange={handleRadioChange}>
                        <Sheet sx={{ borderRadius: '10%', padding: '5px', minWidth: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Radio value="include" overlay disableIcon label="Ja" />
                        </Sheet>
                        <Sheet sx={{ borderRadius: '10%', padding: '5px', minWidth: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Radio value="exclude" overlay disableIcon label="Nein" />
                        </Sheet>
                        <Sheet sx={{ borderRadius: '10%', padding: '5px', minWidth: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Radio value="maybe" overlay disableIcon label="Vielleicht" />
                        </Sheet>
                    </RadioGroup>
                </CardActions>
            </Card>
        </AccordionDetails>
    )
}