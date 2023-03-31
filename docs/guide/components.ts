import type { ComponentListItem } from './../.vitepress/components/overview/src/components'

// svgs are from https://undraw.co/search
export const Components: ComponentListItem[] = [
  {
    name: 'Basic',
    components: [
      {
        name: 'Button',
        description: 'Buttons allow the user to take actions or make choices.',
        link: '/components/button.html',
        icon: '/svgs/button.svg',
      },
      {
        name: 'Badge',
        description: 'Badges are used to inform the user of the status of specific data.',
        link: '/components/badge.html',
        icon: '/svgs/badge.svg',
      },
      {
        name: 'Icon',
        description: 'Icon are used to any icons with Pure CSS for OnuUI.',
        link: '/components/icon.html',
        icon: '/svgs/icon.svg',
      },
      {
        name: 'Link',
        description: 'Icon are used to customize some jump anchor links.',
        link: '/components/link.html',
        icon: '/svgs/link.svg',
      },
    ],
  },
  {
    name: 'Form',
    components: [
      {
        name: 'Checkbox',
        description: 'Checkboxes are used to select or deselect a value.',
        link: '/components/checkbox.html',
        icon: '/svgs/checkbox.svg',
      },
      {
        name: 'Switch',
        description: 'Switch is a checkbox that is styled to look like a switch button.',
        link: '/components/switch.html',
        icon: '/svgs/switch.svg',
      },
      {
        name: 'Rate',
        description: 'Rate is a set of radio buttons that allow the user to rate something.',
        link: '/components/rate.html',
        icon: '/svgs/rate.svg',
      },
    ],
  },
  {
    name: 'Data',
    components: [
      {
        name: 'Avatar',
        description: 'Avatars are used to show a thumbnail representation of an individual or business in the interface.',
        link: '/components/avatar.html',
        icon: '/svgs/avatar.svg',
      },
      {
        name: 'Card',
        description: 'Cards are used to group and display content in a way that is easily readable.',
        link: '/components/card.html',
        icon: '/svgs/card.svg',
      },
      {
        name: 'Empty',
        description: 'Empty are used to display the status of empty data.',
        link: '/components/empty.html',
        icon: '/svgs/empty.svg',
      },
      {
        name: 'Tag',
        description: 'Tags are used to inform the user of the status of specific data.',
        link: '/components/tag.html',
        icon: '/svgs/tag.svg',
      },
      {
        name: 'Infinite Scroll',
        description: 'Load more data while reach bottom of the page',
        link: '/components/infinite-scroll.html',
        icon: '/svgs/infinite-scroll.svg',
      },
    ],
  },
  {
    name: 'Navigation',
    components: [
      {
        name: 'BackTop',
        description: 'BackTop are used to return the page to the top.',
        link: '/components/backtop.html',
        icon: '/svgs/backtop.svg',
      },
    ],
  },
  {
    name: 'Feedback',
    components: [
      {
        name: 'Alert',
        description: 'Alert informs users about important events.',
        link: '/components/alert.html',
        icon: '/svgs/alert.svg',
      },
      {
        name: 'Message',
        description: 'Message is used to display the new prompt message',
        link: '/components/message.html',
        icon: '/svgs/message.svg',
      },
      {
        name: 'Popup',
        description: 'Popup is a wrapper to stack elements, positioned on the corner of page.',
        link: '/components/popup.html',
        icon: '/svgs/popup.svg',
      },
      {
        name: 'Collapse',
        description: 'Collapse is used for showing and hiding content.',
        link: '/components/collpase.html',
        icon: '/svgs/collapse.svg',
      },
    ],
  },
]
