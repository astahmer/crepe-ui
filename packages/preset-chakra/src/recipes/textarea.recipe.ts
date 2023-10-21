import { defineRecipe } from '@pandacss/dev'
import { inputRecipe } from './input.recipe'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/textarea.ts

export const textareaRecipe = defineRecipe({
  className: 'textarea',
  base: {
    ...inputRecipe.base?.field,
    paddingY: '2',
    minHeight: '20',
    lineHeight: 'short',
    verticalAlign: 'top',
  },
  variants: {
    variant: {
      outline: inputRecipe.variants?.variant?.outline.field ?? {},
      flushed: inputRecipe.variants?.variant?.flushed.field ?? {},
      filled: inputRecipe.variants?.variant?.filled.field ?? {},
      unstyled: inputRecipe.variants?.variant?.unstyled.field ?? {},
    },
    size: {
      xs: inputRecipe.variants?.size?.xs.field ?? {},
      sm: inputRecipe.variants?.size?.sm.field ?? {},
      md: inputRecipe.variants?.size?.md.field ?? {},
      lg: inputRecipe.variants?.size?.lg.field ?? {},
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
})
