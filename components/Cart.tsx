import Image from 'next/image'
import {
  Box,
  Flex,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'

const Cart = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg="gray.50"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>If price is too hard on your eyes, try changing the theme.</Text>
      </VStack>
      <SimpleGrid columns={2} rowGap={4} width="full">
        <GridItem colSpan={2}>
          <Flex alignItems="center" justifyContent="space-between">
            <HStack alignItems="center" spacing={6}>
              <Image width={96} height={96} src="/product.png" />
              <VStack spacing={0}>
                <Heading size="md">Penny board</Heading>
                <Text color="gray.600" size="lg">
                  PNYCOMP27541
                </Text>
              </VStack>
            </HStack>
            <Heading size="sm" textAlign="right">
              $119.00
            </Heading>
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <Text color="gray.600" size="md">
            Sub-Total
          </Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Heading size="sm" textAlign="right">
            $119.00
          </Heading>
        </GridItem>
        <GridItem colSpan={1}>
          <Text color="gray.600">Shipping</Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Heading size="sm" textAlign="right">
            $19.99
          </Heading>
        </GridItem>
        <GridItem colSpan={1}>
          <Text color="gray.600">Taxes (estimated)</Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Heading size="sm" textAlign="right">
            $23.80
          </Heading>
        </GridItem>
        <GridItem colSpan={2}>
          <Box as="hr" my={2} />
        </GridItem>
        <GridItem colSpan={1}>
          <Text justifySelf="center" color="gray.600">
            Total
          </Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Heading size="lg" textAlign="right">
            $162.79
          </Heading>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}

export default Cart
