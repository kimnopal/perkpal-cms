import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAboutHero extends Struct.ComponentSchema {
  collectionName: 'components_about_about_heroes';
  info: {
    displayName: 'HeroAbout';
    icon: 'bulletList';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutFaqAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_faq_abouts';
  info: {
    displayName: 'FAQAbout';
    icon: 'bulletList';
  };
  attributes: {
    FAQ: Schema.Attribute.Component<'components.faq', true>;
  };
}

export interface AboutWhatWeDo extends Struct.ComponentSchema {
  collectionName: 'components_about_what_we_dos';
  info: {
    displayName: 'WhatWeDo';
    icon: 'bulletList';
  };
  attributes: {
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    WhatWeDoItem: Schema.Attribute.Component<'about.what-we-do-item', true>;
  };
}

export interface AboutWhatWeDoItem extends Struct.ComponentSchema {
  collectionName: 'components_about_what_we_do_items';
  info: {
    displayName: 'WhatWeDoItem';
    icon: 'command';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutWhoWeServe extends Struct.ComponentSchema {
  collectionName: 'components_about_who_we_serves';
  info: {
    displayName: 'WhoWeServe';
    icon: 'crown';
  };
  attributes: {
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    WhoWeServeItem: Schema.Attribute.Component<'about.who-we-serve-item', true>;
  };
}

export interface AboutWhoWeServeItem extends Struct.ComponentSchema {
  collectionName: 'components_about_who_we_serve_items';
  info: {
    displayName: 'WhoWeServeItem';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'CTAButton';
    icon: 'cursor';
  };
  attributes: {
    link: Schema.Attribute.Relation<'oneToOne', 'api::link.link'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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

export interface ComponentsHero extends Struct.ComponentSchema {
  collectionName: 'components_components_heroes';
  info: {
    displayName: 'HeroHome';
    icon: 'crown';
  };
  attributes: {
    ButtonBottom: Schema.Attribute.Component<'components.button', false>;
    ButtonTop: Schema.Attribute.Component<'components.button', false>;
    HeroCard: Schema.Attribute.Component<'components.hero-card', true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsHeroCard extends Struct.ComponentSchema {
  collectionName: 'components_components_hero_cards';
  info: {
    displayName: 'HeroCardHome';
    icon: 'bulletList';
  };
  attributes: {
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_components_how_it_works';
  info: {
    displayName: 'HowItWorks';
    icon: 'bulletList';
  };
  attributes: {
    HowItWorksItem: Schema.Attribute.Component<
      'components.how-it-works-item',
      true
    >;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsHowItWorksItem extends Struct.ComponentSchema {
  collectionName: 'components_components_how_it_works_items';
  info: {
    displayName: 'HowItWorksItem';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Text & Schema.Attribute.Required;
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

export interface PartnerWithUsFaqpwu extends Struct.ComponentSchema {
  collectionName: 'components_partner_with_us_faqpwus';
  info: {
    displayName: 'FAQPWU';
    icon: 'bulletList';
  };
  attributes: {
    FAQ: Schema.Attribute.Component<'components.faq', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartnerWithUsGetStartedPwu extends Struct.ComponentSchema {
  collectionName: 'components_partner_with_us_get_started_pwus';
  info: {
    displayName: 'GetStartedPWU';
    icon: 'apps';
  };
  attributes: {
    CTAButton: Schema.Attribute.Component<'components.button', false>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartnerWithUsHeroPartnerWithUs extends Struct.ComponentSchema {
  collectionName: 'components_partner_with_us_hero_partner_withuses';
  info: {
    displayName: 'HeroPWU';
    icon: 'calendar';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    CTAButton: Schema.Attribute.Component<'components.button', false>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartnerWithUsHowItWorksItemPartnerWithUs
  extends Struct.ComponentSchema {
  collectionName: 'components_partner_with_us_how_it_works_item_partner_withuses';
  info: {
    displayName: 'HowItWorksItemPWU';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartnerWithUsHowItWorksPartnerWithUs
  extends Struct.ComponentSchema {
  collectionName: 'components_partner_with_us_how_it_works_partner_withuses';
  info: {
    displayName: 'HowItWorksPWU';
    icon: 'bulletList';
  };
  attributes: {
    HowItWorksItemPWU: Schema.Attribute.Component<
      'partner-with-us.how-it-works-item-partner-with-us',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartnerWithUsWhyPartnerWithUs extends Struct.ComponentSchema {
  collectionName: 'components_partner_with_us_why_partner_withuses';
  info: {
    displayName: 'WhyPartnerWithUs';
    icon: 'brush';
  };
  attributes: {
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    WhyPartnerWithUsItem: Schema.Attribute.Component<
      'partner-with-us.why-partner-with-us-item',
      true
    >;
  };
}

export interface PartnerWithUsWhyPartnerWithUsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_partner_with_us_why_partner_with_us_items';
  info: {
    displayName: 'WhyPartnerWithUsItem';
    icon: 'collapse';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-hero': AboutAboutHero;
      'about.faq-about': AboutFaqAbout;
      'about.what-we-do': AboutWhatWeDo;
      'about.what-we-do-item': AboutWhatWeDoItem;
      'about.who-we-serve': AboutWhoWeServe;
      'about.who-we-serve-item': AboutWhoWeServeItem;
      'components.button': ComponentsButton;
      'components.faq': ComponentsFaq;
      'components.footer-nav': ComponentsFooterNav;
      'components.hero': ComponentsHero;
      'components.hero-card': ComponentsHeroCard;
      'components.how-it-works': ComponentsHowItWorks;
      'components.how-it-works-item': ComponentsHowItWorksItem;
      'components.nav-icon': ComponentsNavIcon;
      'components.nav-item': ComponentsNavItem;
      'components.seo': ComponentsSeo;
      'partner-with-us.faqpwu': PartnerWithUsFaqpwu;
      'partner-with-us.get-started-pwu': PartnerWithUsGetStartedPwu;
      'partner-with-us.hero-partner-with-us': PartnerWithUsHeroPartnerWithUs;
      'partner-with-us.how-it-works-item-partner-with-us': PartnerWithUsHowItWorksItemPartnerWithUs;
      'partner-with-us.how-it-works-partner-with-us': PartnerWithUsHowItWorksPartnerWithUs;
      'partner-with-us.why-partner-with-us': PartnerWithUsWhyPartnerWithUs;
      'partner-with-us.why-partner-with-us-item': PartnerWithUsWhyPartnerWithUsItem;
    }
  }
}
