import type { NextPage } from 'next'
import { Container, Flex, VStack } from '@chakra-ui/react'

const HomePage: NextPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <h1>Hello Chakra-UI 👋🏼</h1>
        </VStack>
        <VStack
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
          bg="gray.50"
        >
          <h1>Hello Chakra-UI 👋🏼</h1>
        </VStack>
      </Flex>
    </Container>
  )
}

export default HomePage
