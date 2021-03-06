import {Component, EventEmitter, forwardRef, Inject, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange} from '@angular/core';

import { FileTreeNode } from '../../../../core/types/file-tree-node';
import {FileTreeComponent} from '../file-tree.component';

@Component({
  selector: 'app-file-tree-node',
  templateUrl: './file-tree-node.component.html',
  styleUrls: ['./file-tree-node.component.scss']
})
export class FileTreeNodeComponent implements OnInit, OnDestroy {

  static ICON_CLASS = 'fas';

  @Input('node') node: FileTreeNode;
  @Input('parentNode') parentNode: FileTreeNode;
  @Input('root') root: boolean;
  @Input('index') index: number;
  @Input('firstChild') firstChild: boolean;
  @Input('lastChild') lastChild: boolean;

  constructor(@Inject(forwardRef(() => FileTreeComponent)) public tree: FileTreeComponent) {}

  ngOnInit() {
    this.node.parent = this.parentNode;
  }

  ngOnDestroy() {
    // Closes child nodes when parent is closed
    this.node.expanded = false;
  }

  getIcon() {
    let icon: string;

    if (this.node.icon) {
      icon = this.node.icon;
    } else {
      icon = this.node.expanded && this.node.children && this.node.children.length ? this.node.expandedIcon : this.node.collapsedIcon;
    }

    return `${FileTreeNodeComponent.ICON_CLASS} ${icon}`;
  }

  isLeaf() {
    return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
  }

  toggle(event: Event) {
    if (this.node.expanded) {
      this.tree.nodeCollapsed.emit({originalEvent: event, node: this.node});
    } else {
      this.tree.nodeExpanded.emit({originalEvent: event, node: this.node});
    }

    this.node.expanded = !this.node.expanded;
  }

  onNodeClick(event: MouseEvent) {
    this.tree.onNodeClick(event, this.node);
  }

  onNodeRightClick(event: MouseEvent) {
    this.tree.onNodeRightClick(event, this.node);
  }

  isSelected() {
    return this.tree.isSelected(this.node);
  }
}
