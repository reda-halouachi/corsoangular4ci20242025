export interface ITracks {
    href: string
    items: Item[]
    limit: number
    next: any
    offset: number
    previous: any
    total: number
  }
  
  export interface Item {
    artists: Artist[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_urls: ExternalUrls2
    href: string
    id: string
    name: string
    preview_url: any
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Artist {
    external_urls: ExternalUrls
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls {
    spotify: string
  }
  
  export interface ExternalUrls2 {
    spotify: string
  }
  