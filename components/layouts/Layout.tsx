import { PropsWithChildren } from 'react'
import Head from 'next/head'

interface Props extends PropsWithChildren {
  title?: string
}

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonName'}</title>
        <meta name="author" content="Jesus Briceño" />
        <meta name="description" content="Informacion sobre el pokemon:" />
        <meta name="keywords" content="pokemon, pokedex, nombre del pokemon" />
      </Head>
      <main>{children}</main>
    </>
  )
}
