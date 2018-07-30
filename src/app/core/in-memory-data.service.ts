import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categories = [
      {
        id: 1,
        showSubcategories: false,
        categoryName: 'Development',
        subcategories: [
          {
            categoryName: 'JavaScript',
            showSubcategories: false,
            subcategories: [
              {
                categoryName: 'Documentation',
                showSubcategories: false,
                subcategories: [
                  {
                    categoryName: 'Test',
                    showSubcategories: false,
                    subcategories: [
                      {
                        categoryName: 'Test 2',
                        showSubcategories: false,
                        subcategories: [
                          {
                            categoryName: 'Test 3',
                            showSubcategories: false,
                            subcategories: [
                              {
                                categoryName: 'Test 4',
                                showSubcategories: false,
                                subcategories: [
                                  {
                                    categoryName: 'Test 5',
                                    showSubcategories: false,
                                    subcategories: [
                                      {
                                        categoryName: 'Test 6',
                                        showSubcategories: false,
                                        subcategories: [],
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
                categoryName: 'Libraries',
                showSubcategories: false,
                subcategories: [],
                bookmarks: []
              },
              {
                categoryName: 'Frameworks',
                showSubcategories: false,
                subcategories: [],
                bookmarks: []
              }
            ],
            bookmarks: []
          },
          {
            categoryName: 'Python',
            showSubcategories: false,
            subcategories: [],
            bookmarks: []
          },
          {
            categoryName: 'Haskell',
            showSubcategories: false,
            subcategories: [
              {
                categoryName: 'Documentation',
                showSubcategories: false,
                subcategories: [],
                bookmarks: []
              },
              {
                categoryName: 'Tutorials',
                showSubcategories: false,
                subcategories: [],
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
        categoryName: 'Blockchain',
        showSubcategories: false,
        subcategories: [
          {
            categoryName: 'ETH',
            showSubcategories: false,
            subcategories: [
              {
                categoryName: 'Documentation',
                showSubcategories: false,
                subcategories: [],
                bookmarks: []
              },
              {
                categoryName: 'Faucets',
                showSubcategories: false,
                subcategories: [],
                bookmarks: []
              }
            ]
          }
        ],
        bookmarks: []
      },
      {
        id: 3,
        categoryName: 'YouTube Vids',
        showSubcategories: false,
        subcategories: [],
        bookmarks: []
      }
    ];

    return {categories};
  }
}
