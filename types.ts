import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  enTitle: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}