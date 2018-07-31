import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categories = [
      {
        id: 1,
        label: 'Development',
        expanded: false,
        children: [
          {
            label: 'JavaScript',
            expanded: false,
            children: [
              {
                label: 'Documentation',
                expanded: false,
                children: [
                  {
                    label: 'Test',
                    expanded: false,
                    children: [
                      {
                        label: 'Test 2',
                        expanded: false,
                        children: [
                          {
                            label: 'Test 3',
                            expanded: false,
                            children: [
                              {
                                label: 'Test 4',
                                expanded: false,
                                children: [
                                  {
                                    label: 'Test 5',
                                    expanded: false,
                                    children: [
                                      {
                                        label: 'Test 6',
                                        expanded: false,
                                        children: [],
                                        bookmarks: []
                                      },
                                    ],
                                    bookmarks: []
                                  },
                                ],
                                bookmarks: []
                              },
                            ],
                            bookmarks: []
                          },
                        ],
                        bookmarks: []
                      },
                    ],
                    bookmarks: []
                  },
                ],
                bookmarks: [
                  {
                    name: 'Angular - Docs',
                    url: 'https://angular.io/docs',
                    tags: [
                      {
                        name: 'Angular'
                      }
                    ]
                  }
                ]
              },
              {
                label: 'Libraries',
                expanded: false,
                children: [],
                bookmarks: []
              },
              {
                label: 'Frameworks',
                expanded: false,
                children: [],
                bookmarks: []
              }
            ],
            bookmarks: []
          },
          {
            label: 'Python',
            expanded: false,
            children: [],
            bookmarks: []
          },
          {
            label: 'Haskell',
            expanded: false,
            children: [
              {
                label: 'Documentation',
                expanded: false,
                children: [],
                bookmarks: []
              },
              {
                label: 'Tutorials',
                expanded: false,
                children: [],
                bookmarks: []
              }
            ],
            bookmarks: []
          }
        ],
        bookmarks: [
          {
            name: 'exercism.io',
            url: 'http://exercism.io/',
            tags: [
              {
                name: 'exercises'
              },
            ]
          }
        ]
      },
      {
        id: 2,
        label: 'Blockchain',
        expanded: false,
        children: [
          {
            label: 'ETH',
            expanded: false,
            children: [
              {
                label: 'Documentation',
                expanded: false,
                children: [],
                bookmarks: []
              },
              {
                label: 'Faucets',
                expanded: false,
                children: [],
                bookmarks: []
              }
            ]
          }
        ],
        bookmarks: []
      },
      {
        id: 3,
        label: 'YouTube Vids',
        expanded: false,
        children: [],
        bookmarks: []
      }
    ];

    return {categories};
  }
}
