export const conditions = {
  extend: {
    dark: '.dark &, [data-theme="dark"] &',
    light: '.light &, [data-theme="light"] &',
    closed: '&:is([data-state=closed])',
    hidden: '&[hidden], &[data-hidden]',
  },
}
