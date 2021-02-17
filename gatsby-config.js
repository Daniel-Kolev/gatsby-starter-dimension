module.exports = {
    siteMetadata: {
      title: 'Галерията на Ани',
      author: 'Даниел Колев',
      description: 'Виртуалната галерия на Ани',
      keywords: 'aniart96, aniart, gallery, art, art site, ani gallery, ани картини, картини, рисунки, рисунките на ани, галерията на ани, картините на ани, поръчка на картини, поръчка на рисунки, поръчка на плакати, картини по поръчка, рисунки по поръчка, плакати по поръчка, поръчка',
      url: "https://ani.gallery/",
      siteUrl: "https://ani.gallery",
      hostname: "ani.gallery",
      image: "https://scontent.cdninstagram.com/v/t51.2885-15/106228560_574947930119402_914765535774726612_n.jpg?_nc_cat=102&ccb=3&_nc_sid=8ae9d6&_nc_ohc=gtnYTdnyoikAX8ZdAJl&_nc_ht=scontent.cdninstagram.com&oh=c676919058a95039739e99ac815b159a&oe=604E8652",
      "menuLinks": [
        {
          "name": "За мен",
          "description": "Аз съм Ани и обичам да рисувам.",
          "link": "/"
        },
        {
          "title": "Картини",
          "name": "Картини",
          "description": "Разгледайте моите картини",
          "keywords": 'aniart96, aniart, gallery, art, art site, ani gallery, ани картини, картини, рисунки, рисунките на ани, галерията на ани, картините на ани',
          "link": "/paintings"
        },
        {
          "title": "Поръчки",
          "name": "Поръчки",
          "description": "Поръчайте вашата мечтана картина!",
          "keywords": 'поръчка на картини, поръчка на рисунки, поръчка на плакати, картини по поръчка, рисунки по поръчка, плакати по поръчка, поръчка',
          "link": "/orders"
        }
      ]
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'Ani\'s gallery',
          short_name: 'Ani',
          start_url: '/',
          background_color: '#663399',
          theme_color: '#663399',
          display: 'minimal-ui',
          icon: 'src/images/gatsby-icon.png',
        },
      },
      'gatsby-plugin-sass',
      {
        resolve: "gatsby-plugin-google-tagmanager",
        options: {
          id: "GTM-KK8GB74",
          includeInDevelopment: false,
        },
      },
      {
        resolve: `gatsby-plugin-sitemap`,
        options: {
          output: `/sitemap.xml`,
          query: `
            {
              site {
                siteMetadata {
                  siteUrl
                }
              }
    
              allSitePage {
                nodes {
                  path
                }
              }

              images {
                data {
                  url
                }
              }
          }`,
          serialize: ({ site, allSitePage, images }) =>
            allSitePage.nodes.map(node => {
              const nodeData = {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `monthly`,
                priority: 0.7
              }
              
              if (node.path === '/paintings/') {
                nodeData.img = images.data
                nodeData.changefreq = `daily`,
                nodeData.priority = 1.0
              }
              
              return nodeData
            })
        }
      }
    ],
  }