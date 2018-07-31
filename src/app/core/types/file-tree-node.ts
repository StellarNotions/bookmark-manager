export interface FileTreeNode {
  label?: string;
  data?: any;
  icon?: any;
  expandedIcon?: any;
  collapsedIcon?: any;
  children?: FileTreeNode[];
  leaf?: boolean;
  expanded?: boolean;
  type?: string;
  parent?: FileTreeNode;
  partialSelected?: boolean;
  styleClass?: string;
  draggable?: boolean;
  droppable?: boolean;
  selectable?: boolean;
}
