export default defineAppConfig({
  alpine: {
    title: 'grothesk.io',
    description: 'My blog',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: false,
      // logo: {
      //   path: '/logo.svg', // path of the logo
      //   pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
      //   alt: 'alpine' // alt of the logo
      // }
    },
    footer: {
      credits: {
        text: 'github',
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/grothesk/blog' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      github: 'grothesk',
      twitter: 'grothesk_musik',
      facebook: 'malte.groth',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/malte-groth-50763254'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    },
    backToTop: {
      text: 'Back to top',
      icon: 'material-symbols:arrow-upward'
    }
  }
})
