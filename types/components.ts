import { Dispatch, ReactNode, SetStateAction } from 'react'
import { Asset, PGPCTA, CTA, InternalLink } from './common'
import {App, Common} from '../types'

// ######################### COMPONENTS #########################

// Hero Component Type
export interface Hero {
  id?: string;
  heading?: string;
  content?: string;
  cta?: CTA[];
  image?: Image[];
  video?: Video;
  styles?: {
    text_align?: string;
  }
  title?: string;
}

// Text (HTML RTE) Component
export interface Text {
  id?: string | number;
  content?: string;
  className?: string;
}

// Text and Image Carousel Item Type
export interface TextAndImage extends Image {
  id?: string;
  heading?: string;
  styles:{
    theme?:string;
  }
  cta: CTA[];
  content?: string;
  icon?:Image['image'];
}

// Text and Image Carousel Component Type
export interface TextAndImageCarousel {
  id?: string;
  carousel_items: TextAndImage[] | [];
  styles: {
    image_position?: string;
  }
}

// Teaser Component Type
export interface Teaser {
  id?: string
  heading?: string;
  content?: string;
  cta?: CTA[];
  image?: Image[];
  video?: Video;
  isABEnabled?: boolean;
  styles?: {
    text_align?: string;
  }
}

export interface APIComponent {
  id?: string;
  component_name?: string;
}

// PGPCardCollection Component Type <-----
export interface PGPCardCollection {
  id?: string;
  cards?: PGPImageCardItem[] | [];
  count?: number;
  editKey?: string;
  className?: string;
}

export interface QuickLinks {
  webConfig?: App.WebConfig;
  id?: string;
  title?: string;
  items?: QuickLinkCategory[] | [];
  slug?: string[];
}

export interface QuickLinkCategory {
  link_text: string
  link: string
}

export interface PGPImageCardItem extends Image, PGPImageCardText{
  id?: string | number;
  key?: string | number;
  count?: number;
  index?: any;
};

export interface PGPImageCardText {
  title?: string;
  subtitle?: string;
  cta?: PGPCTA;
  url?: string; // when reference is passed as a card
  summary?: string;
}


// CardCollection Component Type <-----
export interface CardCollection extends CardCollectionBody {
  header?: CardCollectionHeader;
}

export interface CardCollectionHeader {
  id?: string;
  heading?:string
  sub_heading?:string
}

export interface CardCollectionBody {
  id?: string;
  cards?: ImageCardItem[] | [];
  count?: number;
  editKey?: string;
  className?: string;
}
// CardCollection Component Type ENDS ---->


/* The `ImageCardItem` type is used to represent an item, where each item has an image, text content, and associated
actions (CTA). The `ImageCardItem` type is designed to provide a consistent format for displaying
image cards within components like `CardCollection`. */
export interface ImageCardItem extends Image, ImageCardText{
  id?: string | number;
  key?: string | number;
  count?: number;
  index?: any;
};

export interface ImageCardText {
  title?: string;
  subtitle?: string;
  content?: string;
  cta?: CTA;
  url?: string; // when reference is passed as a card
  summary?: string;
}


export interface LinkComponent {
  children?: ReactNode;
  className?: string;
  target?: string | undefined;
  'data-title'?: string;
  url?: string | InternalLink[];
  isABEnabled?: boolean
}

// Image Component
export interface ImageComponent extends Image {
  className?: string;
  addDataCslp?: boolean;
}

export interface Image {
  id?: string | number;
  image?: Asset;
  cover_image?: Asset
  image_alt_text?: string;
  image_position?: string;
  is_thumbnail?: boolean;
  alt?: string;
}

// Video Component <----
export interface VideoComponent extends Video {
  className?: string;
  addDataCslp?: boolean;
}

export interface Video {
  id?: string | number;
  video?: Asset;
  video_alt_text?: string;
}
// ---->

export interface Pagination {
  length: number
  dataPerPage: number
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}

export interface Carousel {
  className?: string,
  children? :string|ReactNode
}