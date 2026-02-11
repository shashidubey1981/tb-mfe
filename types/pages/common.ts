import { QuickLinks, PGPCardCollection, CardCollection, Hero, Image, Teaser, Text, TextAndImageCarousel , APIComponent} from '../components'
import {App, Common} from '@/types'

export type SeoProps = {
  title?: string
  url?: string
  seo?: {
    title?: string
    description?: string
    canonical_url?: string
    no_follow: boolean
    no_index: boolean
  }
  summary?: string
  locale?: string
  uid?: string
  contentType?: string
  locales?: Common.localeItems | []
}

export interface pageBlocks {
  api_component?:APIComponent
  teaser?:Teaser
  text_and_image_carousel?:TextAndImageCarousel
  text?: Text
  card_collection?:CardCollection
  pgp_collection?:PGPCardCollection
  quick_links?:QuickLinks
  image_preset?: Image
  seo?:SeoProps
}
  
export type pageRenderProps = {
  webConfig?: App.WebConfig;
  components: pageBlocks[];
  isABEnabled?: boolean;
  searchParams?: { [key: string]: string | string[] | undefined };
  [key: string]: string | boolean | pageBlocks[] | Hero | pageRenderProps | App.WebConfig | Common.PersonalizeConfig | { [key: string]: string | string[] | undefined } | undefined;
  hero?: Hero;
} 

// Article Type <-----
export interface Article {
  summary?:string
  cover_image?:Image['image']
  content?:string
  show_related_articles?: boolean
  show_related_links?: boolean
}
// ----->

export type Taxonomy = {
  taxonomy_uid:string,
  term_uid:string
}