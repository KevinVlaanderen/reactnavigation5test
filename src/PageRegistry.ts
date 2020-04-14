import {
  bottombarPages,
  homePage as homePageName,
  pages as pageData,
} from '../data/pages';
import {ComponentType} from 'react';

export interface PageDescription {
  name: string;
  params: {
    type: string;
    // bottombar: boolean;
    sidebar: boolean;
  };
  component: () => ComponentType<any>;
  sidebarComponent?: () => ComponentType<any>;
}

export const allPages = pageData as PageDescription[];
export const homePage = allPages.find((page) => page.name === homePageName)!;
export const defaultPages = allPages.filter(
  (page) => page.params.type === 'default',
);
export const popups = allPages.filter((page) => page.params.type === 'popup');

export const pageWithName = (name: string) =>
  allPages.find((page) => page.name === name);
export const pageWithType = (type: string) =>
  allPages.find((page) => page.params.type === type);

export const isInBottomBar = (page: PageDescription) =>
  bottombarPages.some((bottombarPage) => bottombarPage === page.name);
// export const hasBottombar = (page: PageDescription) => page.params.bottombar;
export const hasSidebar = (page: PageDescription) => page.params.sidebar;

export const inBottombar = (pages: PageDescription[]) =>
  bottombarPages
    .map((name) => pages.find((page) => page.name === name))
    .filter(filerTruthy);
export const notInBottombar = (pages: PageDescription[]) =>
  pages.filter((page) => !isInBottomBar(page));

// export const withBottombar = (pages: PageDescription[]) =>
//   pages.filter(hasBottombar);
// export const withoutBottombar = (pages: PageDescription[]) =>
//   pages.filter((page) => !hasBottombar(page));

export const withSidebar = (pages: PageDescription[]) =>
  pages.filter(hasSidebar);
export const withoutSidebar = (pages: PageDescription[]) =>
  pages.filter((page) => !hasSidebar(page));

function filerTruthy<T>(t: T | undefined): t is T {
  return !!t;
}
