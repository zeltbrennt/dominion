import { Stack, Typography, Button, List, ListItem } from "@mui/joy"
import CardBox from "./CardBox"
import { CardOptionProps } from "./CardOption"
import { useEffect, useState } from "react"


function App() {

  const basisspiel = ["Burggraben", "Kapelle", "Keller", "Dorf", "Holzfäller",
    "Kanzler", "Werkstatt", "Bürokrat", "Dieb", "Festmahl", "Geldverleiher",
    "Miliz", "Schmiede", "Spion", "Thronsaal", "Umbau", "Bibliothek", "Hexe",
    "Jahrmarkt", "Laboratorium", "Markt", "Mine", "Ratsversammlung", "Abenteuer",
    "Gärten"
  ].sort()

  const [choices, setChoices] = useState<string[]>([])
  const [include, setInclude] = useState<string[]>([])
  const [exclude, setExclude] = useState<string[]>([])
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
    setChoices(temp.sort())
  }

  const removeFromBothLists = (card: string) => {
    setInclude(include.filter(item => item != card))
    setExclude(exclude.filter(item => item != card))
  }

  const addToInclude = (card: string) => {
    setInclude([...include, card])
  }

  const addToExclude = (card: string) => {
    setExclude([...exclude, card])
  }

  return (
    <Stack spacing={1.5}>

      <Typography color="primary" level="h2">Dominion RNG</Typography>
      <Typography color="neutral">Mögliche Spiele: {new Intl.NumberFormat('de-DE').format(nCombinations)}</Typography>

      <CardBox key="basisspiel" name="Basisspiel" cards={basisspiel.map(name => (
        {
          cardName: name,
          onDefault: () => removeFromBothLists(name),
          onInclude: () => addToInclude(name),
          onExclude: () => addToExclude(name),
        } as CardOptionProps))} />


      <Button onClick={shuffle} disabled={nCombinations < 1}>RNG</Button>
      <Button onClick={() => setChoices([])} color="danger">clear</Button>
      <List>
        {choices.map(c => <ListItem key={c}>{c}</ListItem>)}
      </List>

    </Stack>



  )
}

export default App
