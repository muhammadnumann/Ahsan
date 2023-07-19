export interface ITimeSetupFormValues {
  days: Array<{ from: string; to: string }>
}

export type TypeTimeSetupWeek =
  | 'saturday'
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
