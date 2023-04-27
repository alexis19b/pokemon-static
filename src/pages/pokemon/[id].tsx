import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { SmallPokemon } from '../../../interfaces'

interface Props {
  id: string
  name: string
}

const PokemonPage: NextPage<Props> = ({ id, name }) => {
  const router = useRouter()
  console.log(router.query)

  return <div>PokemonPage</div>
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [
      {
        params: { id: '1' }
      },
      {
        params: { id: '2' }
      },
      {
        params: { id: '3' }
      }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      id: 1,
      name: 'Bulbasor'
    }
  }
}

export default PokemonPage
