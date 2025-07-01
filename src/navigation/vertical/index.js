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
      icon: 'tabler:dashboard'
    },
    {
      path: '/job-approval-applications',
      subject: 'Job Approval Applications',
      title: 'Approval Applications',
      icon: 'tabler:database'
    },
    {
      path: '/applied-applications',
      subject: 'Applied Applications',
      title: 'Applied Applications',
      icon: 'tabler:terminal'
    }
  ]
}

export default navigation
