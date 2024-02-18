import type { Schema, Attribute } from '@strapi/strapi';

export interface PageFeatureBlock extends Schema.Component {
  collectionName: 'components_page_feature_blocks';
  info: {
    displayName: 'featureBlock';
    icon: 'manyToOne';
  };
  attributes: {
    title: Attribute.String;
    feature: Attribute.Component<'page.feature', true>;
  };
}

export interface PageFeature extends Schema.Component {
  collectionName: 'components_page_features';
  info: {
    displayName: 'feature';
    icon: 'star';
  };
  attributes: {
    Icon: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface PageHero extends Schema.Component {
  collectionName: 'components_page_heroes';
  info: {
    displayName: 'hero';
    icon: 'alien';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    subHeading: Attribute.String;
    link: Attribute.Component<'page.link', true>;
  };
}

export interface PageLink extends Schema.Component {
  collectionName: 'components_page_links';
  info: {
    displayName: 'link';
    icon: 'apps';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface PageLink2 extends Schema.Component {
  collectionName: 'components_page_link2s';
  info: {
    displayName: 'link2';
    icon: 'apps';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface PageSocialIcons extends Schema.Component {
  collectionName: 'components_page_social_icons';
  info: {
    displayName: 'socialIcons';
    icon: 'command';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter', 'Instagram']> &
      Attribute.Required &
      Attribute.DefaultTo<'Facebook'>;
    url: Attribute.String & Attribute.Required;
  };
}

export interface PageTextBlock extends Schema.Component {
  collectionName: 'components_page_text_blocks';
  info: {
    displayName: 'textBlock';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.feature-block': PageFeatureBlock;
      'page.feature': PageFeature;
      'page.hero': PageHero;
      'page.link': PageLink;
      'page.link2': PageLink2;
      'page.social-icons': PageSocialIcons;
      'page.text-block': PageTextBlock;
    }
  }
}
