export type PreferRight<BaseProps, OverrideProps> = Omit<BaseProps, keyof OverrideProps> & OverrideProps
