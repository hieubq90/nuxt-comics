import axios, { isAxiosError } from 'axios'
import { z } from 'zod'

import { initContract } from '@ts-rest/core'
import { initQueryClient } from '@ts-rest/vue-query'

import type { Method } from 'axios'
import {
  Chapter,
  ChapterDetail,
  Comic,
  Genre,
  GetComicsResult,
  SuggestedItem,
} from '~/types/schemas'

const c = initContract()

const genreContact = c.router({
  get: {
    method: 'GET',
    path: '/genres',
    responses: {
      200: z.array(Genre),
    },
    summary: 'Get all genres',
  },
  byId: {
    method: 'GET',
    path: '/genres/:gid',
    pathParams: z.object({
      gid: z.string(),
    }),
    responses: {
      200: GetComicsResult,
    },
    query: z.object({
      page: z.string().transform(Number).optional(),
    }),
    summary: 'get comics by genres',
  },
})

const COMIC_STATUS_VALUES = ['all', 'completed', 'ongoing'] as const
const ComicStatus = z.enum(COMIC_STATUS_VALUES)

const TOP_COMMICS_VALUES = [
  'all',
  'daily',
  'weekly',
  'monthly',
  'chapter',
  'follow',
  'comment',
] as const
const TopComicsType = z.enum(TOP_COMMICS_VALUES)

const comicContact = c.router({
  suggest: {
    method: 'GET',
    path: '/comics/search-suggest',
    responses: {
      200: z.array(SuggestedItem),
    },
    query: z.object({
      q: z.string().array().nonempty(),
    }),
    summary: 'search suggestion',
  },
  search: {
    method: 'GET',
    path: '/comics/search',
    responses: {
      200: z.array(GetComicsResult),
    },
    query: z.object({
      q: z.string().array().nonempty(),
      page: z.string().transform(Number).optional(),
    }),
    summary: 'search comics',
  },
  recommend: {
    method: 'GET',
    path: '/comics/recommend',
    responses: {
      200: z.array(Comic),
    },
    summary: 'recommend comics',
  },
  trending: {
    method: 'GET',
    path: '/comics/trending',
    responses: {
      200: GetComicsResult,
    },
    query: z.object({
      page: z.string().transform(Number).optional(),
    }),
    summary: 'get trending comics',
  },
  new: {
    method: 'GET',
    path: '/comics/new',
    responses: {
      200: GetComicsResult,
    },
    query: z.object({
      page: z.string().transform(Number).optional(),
      status: ComicStatus.optional(),
    }),
    summary: 'get new comics',
  },
  recently: {
    method: 'GET',
    path: '/comics/recent',
    responses: {
      200: GetComicsResult,
    },
    query: z.object({
      page: z.string().transform(Number).optional(),
      status: ComicStatus.optional(),
    }),
    summary: 'get recently update comics',
  },
  completed: {
    method: 'GET',
    path: '/comics/completed',
    responses: {
      200: GetComicsResult,
    },
    query: z.object({
      page: z.string().transform(Number).optional(),
    }),
    summary: 'get completed comics',
  },
  top: {
    method: 'GET',
    path: '/comics/top/:top_type',
    pathParams: z.object({
      top_type: TopComicsType,
    }),
    responses: {
      200: GetComicsResult,
    },
    query: z.object({
      page: z.string().transform(Number).optional(),
      status: ComicStatus.optional(),
    }),
    summary: 'get top comics by type',
  },
  detail: {
    method: 'GET',
    path: '/comics/:comic_id',
    pathParams: z.object({
      comic_id: z.string(),
    }),
    responses: {
      200: Comic,
    },
    summary: 'get comic detail',
  },
  chapters: {
    method: 'GET',
    path: '/comics/:comic_id/chapters',
    pathParams: z.object({
      comic_id: z.string(),
    }),
    responses: {
      200: z.array(Chapter),
    },
    summary: 'get comic detail',
  },
  read: {
    method: 'GET',
    path: '/comics/:comic_id/chapters/:chapter_id',
    pathParams: z.object({
      comic_id: z.string(),
      chapter_id: z.string(),
    }),
    query: z.object({
      alias: z.string().optional(),
    }),
    responses: {
      200: ChapterDetail,
    },
    summary: 'get comic detail',
  },
})

const contact = c.router(
  {
    genres: genreContact,
    comics: comicContact,
  },
  { pathPrefix: '/api/v1', strictStatusCode: true },
)

export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig()

  const httpClient = axios.create({
    baseURL: config.public.apiURL,
    withCredentials: false,
  })

  const comicsClient = initQueryClient(contact, {
    baseUrl: config.public.apiURL,
    baseHeaders: {},
    api: async ({ path, method, headers, body }) => {
      try {
        const result = await httpClient.request({
          method: method as Method,
          url: path,
          headers,
          data: body,
        })
        return {
          status: result.status,
          body: result.data,
          headers: new Headers(),
        }
      }
      catch (e: Error | any) {
        if (isAxiosError(e))
          return { status: 500, body: e.message, headers: new Headers() }

        throw e
      }
    },
    credentials: 'omit',
  })

  return {
    name: 'ts-rest',
    provide: {
      comicsClient,
    },
  }
})
