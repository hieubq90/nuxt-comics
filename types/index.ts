import type { z } from 'zod'

import type { ChapterDetail, Comic, Genre } from './schemas'

export type IGenre = z.infer<typeof Genre>
export type IComic = z.infer<typeof Comic> & {
  last_reading?: string
  chapter_id?: number
}
export type IChapterDetail = z.infer<typeof ChapterDetail>
