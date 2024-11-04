import { Button, Stack } from "@mui/joy";
import { useState } from "react";
import { CardOptionProps } from "./CardOption";
import { mapCardTypeToColor } from "./CardDisplay";


export default function RadioButtonGroup({ card, onDefault, onInclude, onExclude }: CardOptionProps) {
    const [selected, setSelected] = useState('maybe')
    const radioOptions = [
        { value: 'include', label: 'Ja' },
        { value: 'exclude', label: 'Nein' },
        { value: 'maybe', label: 'Vielleicht' },
    ]

    const handleChange = (value: string) => {
        setSelected(value)
        switch (value) {
            case "include": onInclude(); break;
            case "exclude": onExclude(); break;
            default: onDefault();
        }
    }

    return (
        <Stack direction='row' spacing={0.5}>
            {radioOptions.map(option => (
                <Button
                    key={option.value}
                    variant={selected === option.value ? 'solid' : 'outlined'}
                    color={mapCardTypeToColor(card.type)}
                    onClick={() => handleChange(option.value)}>
                    {option.label}
                </Button>
            ))}
        </Stack>
    )
}