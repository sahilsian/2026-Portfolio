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

export interface LayoutCollection extends Struct.ComponentSchema {
  collectionName: 'components_layout_collections';
  info: {
    displayName: 'collection';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    variation: Schema.Attribute.Component<'control.variation', false>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'control.button': ControlButton;
      'control.category': ControlCategory;
      'control.menu-item': ControlMenuItem;
      'control.variation': ControlVariation;
      'layout.collection': LayoutCollection;
      'layout.feature': LayoutFeature;
      'layout.group': LayoutGroup;
      'layout.hero': LayoutHero;
      'layout.statement': LayoutStatement;
      'layout.tab': LayoutTab;
      'layout.wrapper': LayoutWrapper;
    }
  }
}
