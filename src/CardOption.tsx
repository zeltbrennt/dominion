import { AccordionDetails, FormControl, FormLabel, RadioGroup, Radio } from "@mui/joy"
import { ChangeEvent } from "react"

export interface CardOptionProps {
    cardName: string,
    onDefault: () => void,
    onInclude: () => void,
    onExclude: () => void,
}

export default function CardOption({ cardName, onDefault, onInclude, onExclude }: CardOptionProps) {

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        switch (event.target.value) {
            case "include": onInclude(); break;
            case "exclude": onExclude(); break;
            default: onDefault();
        }
    }
    return (
        <AccordionDetails>
            <FormControl orientation="horizontal" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <FormLabel>{cardName}</FormLabel>
                <RadioGroup defaultValue={"maybe"} orientation="horizontal" onChange={handleRadioChange}>
                    <Radio value="include" label="Ja" />
                    <Radio value="exclude" label="Nein" />
                    <Radio value="maybe" label="Vielleicht" />
                </RadioGroup>
            </FormControl>
        </AccordionDetails>
    )
}