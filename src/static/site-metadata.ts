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
  logo: 'https://avatars.githubusercontent.com/u/189682565?s=400&u=ea676e2a2dd59ee5a1f28ea5d9a1900ddc3c3727&v=4',
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
