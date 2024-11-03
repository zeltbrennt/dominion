import { AccordionGroup, Accordion, AccordionSummary, Typography } from "@mui/joy"
import CardOption, { CardOptionProps } from "./CardOption"

interface CardBoxProps {
    name: string,
    cards: CardOptionProps[]
}

export default function CardBox({ name, cards }: CardBoxProps) {
    return (
        <AccordionGroup>

            <Accordion>
                <AccordionSummary>
                    <Typography level="h3" color="primary">
                        {name}
                    </Typography>
                </AccordionSummary>

                {cards.map(item => <CardOption
                    key={item.cardName}
                    cardName={item.cardName}
                    onDefault={item.onDefault}
                    onExclude={item.onExclude}
                    onInclude={item.onInclude}
                />)}

            </Accordion>
        </AccordionGroup>
    )
}