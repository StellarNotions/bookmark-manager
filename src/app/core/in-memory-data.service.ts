import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bookmarks = [
      {
        id: 1,
        root: 'Development',
        sub: [
          {
            root: 'JavaScript',
            sub: [
              {
                root: 'Documentation',
                sub: [],
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
                root: 'Libraries',
                sub: [],
                bookmarks: []
              },
              {
                root: 'Frameworks',
                sub: [],
                bookmarks: []
              }
            ],
            bookmarks: []
          },
          {
            root: 'Python',
            sub: [],
            bookmarks: []
          },
          {
            root: 'Haskell',
            sub: [
              {
                root: 'Documentation',
                sub: [],
                bookmarks: []
              },
              {
                root: 'Tutorials',
                sub: [],
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
        root: 'Blockchain',
        sub: [
          {
            root: 'ETH',
            sub: [
              {
                root: 'Documentation',
                sub: [],
                bookmarks: []
              },
              {
                root: 'Faucets',
                sub: [],
                bookmarks: []
              }
            ]
          }
        ],
        bookmarks: []
      }
    ];

    return {bookmarks};
  }
}
