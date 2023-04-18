import { Button } from '@nextui-org/react'
import { NextPage } from 'next'
import { Layout } from '../../components/layouts'

const HomePage: NextPage = () => {
  return (
    <>
      <Layout title={'Pikachu'}>
        <Button color="primary">Aceptar</Button>
      </Layout>
    </>
  )
}
export default HomePage
