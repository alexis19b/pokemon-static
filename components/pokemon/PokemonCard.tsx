import { FC } from 'react'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { SmallPokemon } from '../../interfaces'
import { useRouter } from 'next/router'

interface Pops {
  poke: SmallPokemon
}

export const PokemonCard: FC<Pops> = ({ poke }) => {
  const router = useRouter()

  const onClickPoke = () => {
    router.push(`/pokemon/${poke.id}`)
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={poke.id}>
      <Card hoverable clickable onClick={onClickPoke}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={poke.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{poke.name}</Text>
            <Text>#{poke.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
