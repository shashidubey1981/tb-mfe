export type Asset = {
  content_type?: string
  dimension?: {
    height: number
    width: number
  }
  file_size?: string
  filename?: string
  is_dir?: boolean,
  url: string
  }

// Locales Type <----
export type Locale = {
  code: string;
  fallback_locale: string | null;
  name: string;
}

export type localeItems = Locale[]
// ---->

// PersonalizeConfig Type <----
export type PersonalizeConfig = {
  audiences: Audiences
  taxonomy_path: string
}

export type Audiences = {
  group?: Group[]
}

export type Group = {
  name?: string
  attributes?: Attributes[]
}

export type Attributes = {
  key?: string
  value?: string
}
// ---->

export interface InternalLink {
  _content_type_uid?: string;
  url?: string;
}

export interface ExternalLink {
  title?: string
  href?:string
}

export type CTA = {
  text?: string;
  external_url?: string;
  link?: InternalLink[];
};

export type PGPCTA = {
  text?: string;
  url?: string;
  link?: InternalLink[];
};

export type UserFormModal = {
    icon?: Asset;
    heading?: string;
    form?: UserForm;
    display_button?: boolean;
    cookies_consent?: {
        icon?: Asset;
        heading?: string;
        message?: string;
    }
}

export type UserForm = {
    fields?: FormField[];
    user_consent_text?: string;
    submit: {
        submit_button_text?: string;
        submitting_button_text?: string;
        submitted_heading?: string;
        submitted_message?: string;
    };
}

export type FormField = {
    label?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    pattern?: string;
    message?: string;
}
export type ConsentAction = {
        label: string
        action: string
}

export type ConsentFormProps = {
    heading?: string
    content?: string
    consent_actions?: ConsentAction[]
    icon?: Asset
}
