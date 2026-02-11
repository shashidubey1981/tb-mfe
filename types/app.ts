import { Asset, ConsentFormProps, localeItems, UserFormModal} from './common'
import { ExternalLink, InternalLink } from './common'
import { QuickLinks } from './components';

export type WebConfig =  {
  quick_links?: QuickLinks;
  consent_modal?: ConsentFormProps;
  }

export type NavigationConfig =  {
  header: Header;
  footer: Footer;
}

// ######################### HEADER & NAVIGATION #########################
export interface Header extends Logo {
  items: Navigation;
}

export interface Logo {
  logo?: Asset;
}

export interface Navigation {
  items: NavItems[]
}

export interface NavItems {
  text?: string
  mega_menu?:{
    sections?: MegaMenuSection;
    sub_sections?: MegaMenuSubSection;
    feature_cards?: FeatureCard;
  }[]
}

export interface MegaMenuSection{
  links: SectionLink[]
}

export interface MegaMenuSubSection{
  links: SubSectionLink[]
}

export interface FeatureCard{
  image?: Asset
  title?: string
  subtitle?: string,
  link?: string
}

export interface SectionLink {
  link?:string,
  link_text?:string
}

export interface SubSectionLink {
  link?:string,
  link_text?:string
}




// ######################### FOOTER #########################
export interface Footer {
  sections?: FooterSection[];
  copyright_info?: string;
  built_by?: string;
  logo?: Asset;
}

export interface FooterSection extends FooterLink {
  links: FooterLink[]
}

export interface FooterLink {
  title?: string;
  text?: string
  link: InternalLink[]
  external_link?: string
  [key: string]: FooterLink[] | InternalLink[] | ExternalLink | string | undefined;
}
