import type { NextPage } from 'next'
import { Container, Flex } from '@chakra-ui/react'
import Details from '@/components/Details'
import EggCart from '@/components/EggCart'

const HomePage: NextPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={[0, 10, 20]}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Details />
        <EggCart />
      </Flex>
    </Container>
  )
}

export default HomePage
