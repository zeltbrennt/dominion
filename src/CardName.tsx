import { Stack, Sheet, Typography } from "@mui/joy"
import { mapCardTypeToColor } from "./CardDisplay"
import { CardDisplayProps } from "./CardDisplay"

export default function CardName({ cardData }: CardDisplayProps) {
    return (
        <Stack spacing={1} direction='row' sx={{ display: "flex", alignItems: 'center', justifyContent: 'flex-start' }}>
            <Sheet sx={{
                borderRadius: '50%', width: 30, height: 30, display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'warning.softBg'
            }} color={mapCardTypeToColor(cardData.type)}>
                <Typography textColor='warning.500' fontWeight={'bold'} >
                    {cardData.cost}
                </Typography>
            </Sheet>
            <Typography level="title-lg">
                {cardData.name}
            </Typography>
        </Stack>
    )
}