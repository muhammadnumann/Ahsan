export interface ITax {
  englishTitle: string
  arabicTitle: string
  percentages: string
}

export interface ITaxesFormValues {
  taxes: ITax[]
}
