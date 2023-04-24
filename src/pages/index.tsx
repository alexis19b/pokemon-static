import { GetStaticProps, NextPage } from 'next'
import { Layout } from '../../components/layouts'
import { pokeApi } from '../../api'
import { PokemonListResponse, SmallPokemon } from '../../interfaces/'
import { PokemonCard } from '../../components/pokemon/'
import { Grid } from '@nextui-org/react'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de Pokemons">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons?.map((poke) => (
            <PokemonCard key={poke.id} poke={poke} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  )
}
export default HomePage

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((res, index) => ({
    ...res,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`
  }))

  return {
    props: {
      pokemons
    }
  }
}
