import {Bookmark} from './Bookmark';

export interface Category {
  id?: number;
  categoryName: string;
  showSubcategories: boolean;
  subcategories: Category[];
  bookmarks: Bookmark[];
}
