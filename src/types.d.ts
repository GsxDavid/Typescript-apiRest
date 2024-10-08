export type Weather = 'sunny' | 'rainny' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// Tipos de utilidad (Pick y Omit)

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
