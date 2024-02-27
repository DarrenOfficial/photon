import type { Community } from 'lemmy-js-client'
import { writable } from 'svelte/store'

interface SessionStorage {
  lastSeenCommunity: Community | undefined
  postDraft:
    | {
        community: Community | null
        title: string
        body: string
        image: FileList | null
        url: string | undefined
        nsfw: boolean
        loading: boolean
      }
    | undefined
}

export const setSessionStorage = (
  key: keyof SessionStorage,
  value: SessionStorage[typeof key]
) => {
  if (value == undefined) {
    sessionStorage.removeItem(key)
  } else {
    sessionStorage.setItem(key, JSON.stringify(value))
  }
}

export const getSessionStorage = (
  key: keyof SessionStorage
): SessionStorage[typeof key] => {
  return JSON.parse(sessionStorage.getItem(key)!)
}

interface Route {
  title: string
}

export const route = writable<Route | undefined>(undefined)
