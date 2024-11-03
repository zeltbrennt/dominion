import { Stack, Typography, Button } from "@mui/joy"
import CardBox from "./CardBox"
import { CardOptionProps } from "./CardOption"
import { useEffect, useState } from "react"
import { basisspiel, DominionCard } from "./Game"
import CardDisplay from "./CardDisplay"




function App() {

  const [choices, setChoices] = useState<DominionCard[]>([])
  const [include, setInclude] = useState<DominionCard[]>([])
  const [exclude, setExclude] = useState<DominionCard[]>([])
  const [nCombinations, setNCombinations] = useState(0)

  const factorial = (num: number) => {
    let rval = 1;
    for (let i = 2; i <= num; i++)
      rval = rval * i;
    return rval;
  }

  useEffect(() => {
    const n = basisspiel.length - exclude.length
    const k = 10 - include.length
    setNCombinations(factorial(n) / (factorial(n - k) * factorial(k)))
  }, [include, exclude])

  const shuffle = () => {
    if (nCombinations < 1) {
      return
    }
    const temp = [...include]
    while (temp.length < 10) {
      const rng = Math.floor(Math.random() * basisspiel.length)
      const card = basisspiel[rng]
      if (temp.indexOf(card) != -1 || exclude.indexOf(card) != -1) {
        continue
      }
      temp.push(basisspiel[rng])
    }
    temp.sort((a: DominionCard, b: DominionCard) => {
      if (a.cost < b.cost) return -1
      if (a.cost > b.cost) return 1
      else {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      }
    })
    setChoices(temp)
  }

  const removeFromBothLists = (card: DominionCard) => {
    setInclude(include.filter(item => item != card))
    setExclude(exclude.filter(item => item != card))
  }

  const addToInclude = (card: DominionCard) => {
    setInclude([...include, card])
  }

  const addToExclude = (card: DominionCard) => {
    setExclude([...exclude, card])
  }

  return (
    <Stack spacing={1.5}>

      <Typography color="primary" level="h2">Dominion RNG</Typography>
      <Typography color="neutral">Mögliche Spiele: {new Intl.NumberFormat('de-DE').format(nCombinations)}</Typography>

      <CardBox key="basisspiel" name="Basisspiel (1. Edition)" cards={basisspiel.map(card => (
        {
          card: card,
          onDefault: () => removeFromBothLists(card),
          onInclude: () => {
            addToInclude(card)
            setExclude(exclude.filter(item => item != card))
          },
          onExclude: () => {
            addToExclude(card)
            setInclude(include.filter(item => item != card))
          },
        } as CardOptionProps))} />


      <Button onClick={shuffle} disabled={nCombinations < 1}>Neues Spiel</Button>
      <Button onClick={() => {
        setChoices([])
        setExclude([])
        setInclude([])
      }} color="danger">Reset</Button>
      <Stack spacing={0.5}>
        {choices.map(choice =>
          <CardDisplay cardData={choice} />
        )}
      </Stack>

    </Stack>



  )
}

export default App
