import { defineKeyframes } from '@pandacss/dev'
import { cssVariables } from './vars'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/checkbox/checkbox.tsx
const checkboxKeyframes = defineKeyframes({
  checkAnim: {
    from: { opacity: 0, strokeDashoffset: 16, transform: 'scale(0.95)' },
    to: { opacity: 1, strokeDashoffset: 0, transform: 'scale(1)' },
  },
  indeterminateOpacityAnim: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  indeterminateScaleAnim: {
    from: { transform: 'scaleX(0.65)' },
    to: { transform: 'scaleX(1)' },
  },
})

// https://github.com/cschroeter/park-ui/blob/ff729b25267137a6e5a87a375fe8b647e148dd2b/packages/presets/src/theme/keyframes.ts#L12
export const keyframes = defineKeyframes({
  ...checkboxKeyframes,
  fadeIn: {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  fadeOut: {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },
  'fade-in': {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  'fade-out': {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },
  'slide-in': {
    '0%': { opacity: '0', transform: 'translateY(64px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'slide-out': {
    '0%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(64px)' },
  },
  'skeleton-bg-fade': {
    from: {
      borderColor: cssVariables.skeleton['start-color'].ref,
      background: cssVariables.skeleton['start-color'].ref,
    },
    to: {
      borderColor: cssVariables.skeleton['end-color'].ref,
      background: cssVariables.skeleton['end-color'].ref,
    },
  },
  spin: {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
})
