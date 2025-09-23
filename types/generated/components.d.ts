import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsFaq extends Struct.ComponentSchema {
  collectionName: 'components_components_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsFooterNav extends Struct.ComponentSchema {
  collectionName: 'components_components_footer_navs';
  info: {
    displayName: 'FooterNav';
    icon: 'stack';
  };
  attributes: {
    nav_header: Schema.Attribute.String & Schema.Attribute.Required;
    NavItem: Schema.Attribute.Component<'components.nav-item', true>;
  };
}

export interface ComponentsHeader extends Struct.ComponentSchema {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
    icon: 'command';
  };
  attributes: {
    SubTitle: Schema.Attribute.Component<'components.subtitle', false>;
    Title: Schema.Attribute.Component<'components.title', false>;
  };
}

export interface ComponentsHero extends Struct.ComponentSchema {
  collectionName: 'components_components_heroes';
  info: {
    displayName: 'Hero';
    icon: 'crown';
  };
  attributes: {
    HeroCard: Schema.Attribute.Component<'components.hero-card', true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsHeroCard extends Struct.ComponentSchema {
  collectionName: 'components_components_hero_cards';
  info: {
    displayName: 'HeroCard';
    icon: 'bulletList';
  };
  attributes: {
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsNavIcon extends Struct.ComponentSchema {
  collectionName: 'components_components_nav_icons';
  info: {
    displayName: 'NavIcon';
    icon: 'check';
  };
  attributes: {
    icon: Schema.Attribute.Text & Schema.Attribute.Required;
    link: Schema.Attribute.Relation<'oneToOne', 'api::link.link'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsNavItem extends Struct.ComponentSchema {
  collectionName: 'components_components_nav_items';
  info: {
    displayName: 'NavItem';
    icon: 'link';
  };
  attributes: {
    link: Schema.Attribute.Relation<'oneToOne', 'api::link.link'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsSeo extends Struct.ComponentSchema {
  collectionName: 'components_components_seos';
  info: {
    displayName: 'SEO';
    icon: 'bell';
  };
  attributes: {
    meta_description: Schema.Attribute.String;
    meta_title: Schema.Attribute.String;
  };
}

export interface ComponentsSubtitle extends Struct.ComponentSchema {
  collectionName: 'components_components_subtitles';
  info: {
    displayName: 'Subtitle';
    icon: 'bold';
  };
  attributes: {
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsTitle extends Struct.ComponentSchema {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'Title';
    icon: 'bold';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.faq': ComponentsFaq;
      'components.footer-nav': ComponentsFooterNav;
      'components.header': ComponentsHeader;
      'components.hero': ComponentsHero;
      'components.hero-card': ComponentsHeroCard;
      'components.nav-icon': ComponentsNavIcon;
      'components.nav-item': ComponentsNavItem;
      'components.seo': ComponentsSeo;
      'components.subtitle': ComponentsSubtitle;
      'components.title': ComponentsTitle;
    }
  }
}
