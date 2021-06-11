const { description } = require('../../package')

module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/images/bglogo.png' }],
      ],
    title: 'Softsetu - Doc',
    description: description,
    plugins: ['@vuepress/last-updated'],
    themeConfig: {
        logo: '/images/pink-sslogo.png',
        searchMaxSuggestions: 5,
        searchPlaceholder: 'Search Here...',
        // search: false,
        // searchMaxSuggestions: 10,
        
        lastUpdated: 'Last Updated',  
        
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Documentation', link: '/guide/register_with_ref' },
            { text: 'Website', link: 'https://softsetu.com' },
        ],
        sidebar: [
          {
            title: '1. Registration Process',   // required
            path: '',      // optional, link of the title, which should be an absolute path and must exist
            collapsable: true, // optional, defaults to true
            // sidebarDepth: 1,    // optional, defaults to 1
            children: [
        
                '/guide/register_with_ref',
                '/guide/how_to_share_ref',
                '/guide/register_with_link'
            ]
          },
          {
            title: '2. Login Process',
            path: '',
            collapsable: true,
            children: [ 
                
              '/login/first_time',
              '/login/normal_login'
              ],
          },
          {
            title: '3. Profile/Synopsis Update Process',
            path: '',
            collapsable: true,
            children: [ 
                
              '/profile/first_time_profile_update',
              '/profile/normal_profile_update'
              ],
          },
          {
            title: '4. Profile/Synopsis Sharing',
            path: '',
            collapsable: true,
            children: [ 
                
              '/profile share/profile_sharing'
              
              ],
          },
          {
            title: '5. Password',
            path: '',
            collapsable: true,
            children: [ 
                
              '/password/forgot_password',
              '/password/change_password',
              ],
          },
          {
            title: '6. Bridge',
            path: '',
            collapsable: true,
            children: [ 
                
              '/bridge/suppliers',
              '/bridge/travel_agent',
              '/bridge/btb_suppliers'
            ],
          },
          {
            title: '7. Create Account Hotelier/Agent',
            path: '',
            collapsable: true,
            children: [ 
                
              '/account/hotelier_account',
              '/account/agent_account',
            ],
          }
        ]
    }
}