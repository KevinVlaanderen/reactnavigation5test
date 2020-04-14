import {DefaultPage} from '../src/components/DefaultPage';
import {SidebarContent} from '../src/components/SidebarContent';

const createPage = (
  name,
  type,
  // bottombar,
  sidebar,
  component,
  sidebarComponent,
) => ({
  name,
  params: {
    type: type,
    // bottombar: bottombar,
    sidebar: sidebar,
  },
  component: () => component,
  sidebarComponent: () => sidebarComponent,
});

const pageData = [
  createPage(
    'with_sidebar_1',
    'default',
    // false,
    true,
    DefaultPage,
    SidebarContent,
  ),
  createPage(
    'with_sidebar_2',
    'default',
    // false,
    true,
    DefaultPage,
    SidebarContent,
  ),
  createPage(
    'with_bottombar_1',
    'default',
    // true,
    false,
    DefaultPage,
  ),
  createPage(
    'with_bottombar_2',
    'default',
    // true,
    false,
    DefaultPage,
  ),
  createPage(
    'with_sidebar_bottombar_1',
    'default',
    // true,
    true,
    DefaultPage,
    SidebarContent,
  ),
  createPage(
    'with_sidebar_bottombar_2',
    'default',
    // true,
    true,
    DefaultPage,
    SidebarContent,
  ),
  createPage(
    'popup_1',
    'popup',
    // false,
    false,
    DefaultPage,
  ),
];

export const pages = pageData;

export const homePage = 'with_bottombar_1';

export const bottombarPages = [
  'with_sidebar_bottombar_2',
  'with_sidebar_bottombar_1',
];
