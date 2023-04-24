import { useRouter } from 'next/router'

const PokemonPage = () => {
  const router = useRouter()
  console.log(router.query)

  return <div>PokemonPage</div>
}
export default PokemonPage
