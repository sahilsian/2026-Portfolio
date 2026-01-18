import type { Schema, Struct } from '@strapi/strapi';

export interface ControlButton extends Struct.ComponentSchema {
  collectionName: 'components_control_buttons';
  info: {
    displayName: 'button';
    icon: 'attachment';
  };
  attributes: {
    label: Schema.Attribute.String;
    route: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['internal', 'external']>;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface ControlCategory extends Struct.ComponentSchema {
  collectionName: 'components_control_categories';
  info: {
    displayName: 'category';
    icon: 'archive';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      ['all', 'art', 'software', 'photography', 'design']
    >;
  };
}

export interface ControlMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_control_menu_items';
  info: {
    displayName: 'menuItem';
    icon: 'arrowRight';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      ['Art', 'Software', 'About', 'Social']
    > &
      Schema.Attribute.Required;
    displayName: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface ControlSocialItem extends Struct.ComponentSchema {
  collectionName: 'components_control_social_items';
  info: {
    displayName: 'socialItem';
    icon: 'alien';
  };
  attributes: {
    iconName: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ControlVariation extends Struct.ComponentSchema {
  collectionName: 'components_control_variations';
  info: {
    displayName: 'variation';
    icon: 'car';
  };
  attributes: {
    variation: Schema.Attribute.Enumeration<
      [
        'hero',
        'feature',
        'featureReversed',
        'statement',
        'collection',
        'product',
      ]
    >;
  };
}

export interface FormDropdownField extends Struct.ComponentSchema {
  collectionName: 'components_form_dropdown_fields';
  info: {
    displayName: 'dropdownField';
  };
  attributes: {
    label: Schema.Attribute.String;
    metadata: Schema.Attribute.Component<'form.type', false>;
    name: Schema.Attribute.String;
    options: Schema.Attribute.JSON;
    required: Schema.Attribute.Boolean;
  };
}

export interface FormEmailField extends Struct.ComponentSchema {
  collectionName: 'components_form_email_fields';
  info: {
    displayName: 'emailField';
  };
  attributes: {
    className: Schema.Attribute.String;
    disabled: Schema.Attribute.Boolean;
    metadata: Schema.Attribute.Component<'form.type', false>;
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
  };
}

export interface FormSubmissionField extends Struct.ComponentSchema {
  collectionName: 'components_form_submission_fields';
  info: {
    displayName: 'submissionField';
    icon: 'attachment';
  };
  attributes: {
    className: Schema.Attribute.String;
    disabled: Schema.Attribute.Boolean;
    metadata: Schema.Attribute.Component<'form.type', false>;
    name: Schema.Attribute.String;
  };
}

export interface FormTextField extends Struct.ComponentSchema {
  collectionName: 'components_form_text_fields';
  info: {
    displayName: 'textField';
    icon: 'database';
  };
  attributes: {
    className: Schema.Attribute.String;
    disabled: Schema.Attribute.Boolean;
    metadata: Schema.Attribute.Component<'form.type', false>;
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
  };
}

export interface FormTextareaField extends Struct.ComponentSchema {
  collectionName: 'components_form_textarea_fields';
  info: {
    displayName: 'textareaField';
  };
  attributes: {
    className: Schema.Attribute.String;
    disabled: Schema.Attribute.Boolean;
    metadata: Schema.Attribute.Component<'form.type', false>;
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
  };
}

export interface FormType extends Struct.ComponentSchema {
  collectionName: 'components_form_types';
  info: {
    displayName: 'metadata';
  };
  attributes: {
    fieldType: Schema.Attribute.Enumeration<
      ['textarea', 'email', 'text', 'dropdown', 'submit']
    >;
  };
}

export interface LayoutFeature extends Struct.ComponentSchema {
  collectionName: 'components_layout_features';
  info: {
    displayName: 'feature';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primary: Schema.Attribute.Component<'control.button', false>;
    title: Schema.Attribute.String;
    variation: Schema.Attribute.Component<'control.variation', false>;
  };
}

export interface LayoutGroup extends Struct.ComponentSchema {
  collectionName: 'components_layout_groups';
  info: {
    displayName: 'group';
    icon: 'eye';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primary: Schema.Attribute.Component<'control.button', false>;
    profile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    secondary: Schema.Attribute.Component<'control.button', false>;
    title: Schema.Attribute.Text;
    variation: Schema.Attribute.Component<'control.variation', false>;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    hero_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    primary: Schema.Attribute.Component<'control.button', false>;
    profile_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
    variation: Schema.Attribute.Component<'control.variation', false>;
  };
}

export interface LayoutStatement extends Struct.ComponentSchema {
  collectionName: 'components_layout_statements';
  info: {
    displayName: 'statement';
    icon: 'bold';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primary: Schema.Attribute.Component<'control.button', false>;
    title: Schema.Attribute.String;
    variation: Schema.Attribute.Component<'control.variation', false>;
  };
}

export interface LayoutTab extends Struct.ComponentSchema {
  collectionName: 'components_layout_tabs';
  info: {
    displayName: 'tab';
    icon: 'apps';
  };
  attributes: {
    richDescription: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface LayoutWrapper extends Struct.ComponentSchema {
  collectionName: 'components_layout_wrappers';
  info: {
    displayName: 'wrapper';
    icon: 'apps';
  };
  attributes: {
    art_primary: Schema.Attribute.Component<'layout.feature', false>;
    art_secondary: Schema.Attribute.Component<'layout.feature', false>;
    hero: Schema.Attribute.Component<'layout.hero', false>;
    software_statement: Schema.Attribute.Component<'layout.statement', false>;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    icon: 'bell';
  };
  attributes: {
    canonical: Schema.Attribute.String;
    description: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    OGImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    robots: Schema.Attribute.Enumeration<['index,follow', 'noindex,nofollow']>;
    title: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'control.button': ControlButton;
      'control.category': ControlCategory;
      'control.menu-item': ControlMenuItem;
      'control.social-item': ControlSocialItem;
      'control.variation': ControlVariation;
      'form.dropdown-field': FormDropdownField;
      'form.email-field': FormEmailField;
      'form.submission-field': FormSubmissionField;
      'form.text-field': FormTextField;
      'form.textarea-field': FormTextareaField;
      'form.type': FormType;
      'layout.feature': LayoutFeature;
      'layout.group': LayoutGroup;
      'layout.hero': LayoutHero;
      'layout.statement': LayoutStatement;
      'layout.tab': LayoutTab;
      'layout.wrapper': LayoutWrapper;
      'seo.seo': SeoSeo;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
