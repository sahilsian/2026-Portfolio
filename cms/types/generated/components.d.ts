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

export interface ControlTabs extends Struct.ComponentSchema {
  collectionName: 'components_control_tabs';
  info: {
    displayName: 'tabs';
    icon: 'hashtag';
  };
  attributes: {
    tab: Schema.Attribute.Component<'layout.tab', true>;
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
      ['hero', 'feature', 'featureReversed', 'statement', 'collection']
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
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'control.button': ControlButton;
      'control.menu-item': ControlMenuItem;
      'control.tabs': ControlTabs;
      'control.variation': ControlVariation;
      'layout.collection': LayoutCollection;
      'layout.group': LayoutGroup;
      'layout.statement': LayoutStatement;
      'layout.tab': LayoutTab;
    }
  }
}
