import diaryData from './diaryentries.json'
import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'

const diaryEntries: DiaryEntry[] = diaryData as DiaryEntry[] // Type assertions

export const getEntries = (): DiaryEntry[] => diaryEntries

export const addEntry = (NewDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newEntry = {
    id: diaryEntries.length + 1,
    ...NewDiaryEntry
  }

  diaryEntries.push(newEntry)
  return newEntry
}

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaryEntries.find(d => d.id === id)

  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  // El tipo NonSensitiveInfoDiaryEntry sirve para omitir propiedades en TS, pero esto no se ve reflejado en los datos
  // Por lo tanto es necesario transformar los datos para que en realidad no aparezca la propiedad comentario

  return diaryEntries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}
