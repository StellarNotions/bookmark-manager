import { Tag } from './Tag';

export interface Bookmark {
  name: string;
  icon?: string;
  url: string;
  tags: Tag[];
}
