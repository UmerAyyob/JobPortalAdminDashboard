const navigation = () => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'tabler:mail'
    },
    {
      action: 'read',
      path: '/acl',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'tabler:shield'
    },
    {
      path: '/dashboard',
      subject: 'Dashboard',
      title: 'Dashoard',
      icon: 'tabler:shield'
    },
    {
      path: '/applications',
      subject: 'Applications',
      title: 'Applications',
      icon: 'tabler:shield'
    }
  ]
}

export default navigation
