interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'YUHANG的跑步主页',
  siteUrl: 'https://cn.bing.com/',
  logo: 'https://cdsassets.apple.com/live/7WUAS350/images/nav-icons/content-nav-watch-workout-running-icon.png',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://cn.bing.com/',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
