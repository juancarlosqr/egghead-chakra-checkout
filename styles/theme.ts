import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const inputSelectStyles = {
  sizes: {
    md: {
      field: {
        borderRadius: 'none',
      },
    },
  },
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'brand.500',
        },
      },
    },
  },
}

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.500',
  },
}

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#f5fee5',
        100: '#e1fbb2',
        200: '#cdf781',
        300: '#b8ee56',
        400: '#a2e032',
        500: '#8ac919',
        600: '#71ab09',
        700: '#578602',
        800: '#3c5e00',
        900: '#203300',
      },
    },
    fonts: {
      body: `Inter, ${base.fonts?.body}`,
      heading: `Montserrat, ${base.fonts?.heading}`,
    },
    components: {
      Button: {
        variants: {
          primary: (props: any) => ({
            backgroundColor: mode('brand.500', 'brand.200')(props),
            color: mode('white', 'gray.800')(props),
            ...brandRing,
            rounded: 'none',

            _hover: {
              backgroundColor: mode('brand.600', 'brand.300')(props),
            },

            _active: {
              backgroundColor: mode('brand.700', 'brand.400')(props),
            },
          }),
        },
      },
      Input: {
        ...inputSelectStyles,
      },
      Select: {
        ...inputSelectStyles,
      },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: 'none',
            ...brandRing,
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox'],
  }),
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select'],
  })
)

export default theme
