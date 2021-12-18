import type { NextPage } from 'next'
import { Container, Flex } from '@chakra-ui/react'
import Details from '@/components/Details'
import EggCart from '@/components/EggCart'

const HomePage: NextPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Details />
        <EggCart />
      </Flex>
    </Container>
  )
}

export default HomePage
