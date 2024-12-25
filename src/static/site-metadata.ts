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
  siteTitle: 'Running Page',
  siteUrl: 'https://doodle1129.github.io/running_page/',
  logo: 'https://cdsassets.apple.com/live/7WUAS350/images/nav-icons/content-nav-watch-workout-running-icon.png',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Workouts Page',
      url: 'https://doodle1129.github.io/workouts_page/',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
