import {Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import { FileTreeNode } from '../../../core/types/file-tree-node';

@Component({
  selector: 'app-file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.scss']
})
export class FileTreeComponent implements OnInit {

  @Input() value: FileTreeNode[];
  @Input() selectionMode: string;
  @Input() selection: any;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();
  @Output() onNodeSelect: EventEmitter<any> = new EventEmitter();
  @Output() onNodeUnselect: EventEmitter<any> = new EventEmitter();
  @Output() onNodeExpand: EventEmitter<any> = new EventEmitter();
  @Output() onNodeCollapse: EventEmitter<any> = new EventEmitter();
  @Output() onNodeContextMenuSelect: EventEmitter<any> = new EventEmitter();
  @Input() style: any;
  @Input() styleClass: string;
  @Input() contextMenu: any;
  @Input() layout = 'vertical';
  @Input() draggableScope: any;
  @Input() metaKeySelection = true;
  @Input() propagateSelectionUp = true;
  @Input() propagateSelectionDown = true;
  @Input() loading: boolean;
  @Input() emptyMessage = 'No records found';

  public templateMap: any;

  public nodeTouched: boolean;

  constructor(public el: ElementRef) {}

  ngOnInit() {
  }

  onNodeClick(event: MouseEvent, node: FileTreeNode) {
    const eventTarget = (<Element> event.target);

    if (eventTarget.className && eventTarget.className.indexOf('ui-tree-toggler') === 0) {
      return;
    } else if (this.selectionMode) {
      if (node.selectable === false) {
        return;
      }

      const index = this.findIndexInSelection(node);
      const selected = (index >= 0);

      if (this.isCheckboxSelectionMode()) {
        if (selected) {
          if (this.propagateSelectionDown) {
            this.propagateDown(node, false);
          } else {
            this.selection = this.selection.filter((val, i) => i !== index);
          }

          if (this.propagateSelectionUp && node.parent) {
            this.propagateUp(node.parent, false);
          }

          this.selectionChange.emit(this.selection);
          this.onNodeUnselect.emit({originalEvent: event, node: node});
        } else {
          if (this.propagateSelectionDown) {
            this.propagateDown(node, true);
          } else {
            this.selection = [...this.selection || [], node];
          }

          if (this.propagateSelectionUp && node.parent) {
            this.propagateUp(node.parent, true);
          }

          this.selectionChange.emit(this.selection);
          this.onNodeSelect.emit({originalEvent: event, node: node});
        }
      } else {
        const metaSelection = this.nodeTouched ? false : this.metaKeySelection;

        if (metaSelection) {
          const metaKey = (event.metaKey || event.ctrlKey);

          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this.selectionChange.emit(null);
            } else {
              this.selection = this.selection.filter((val, i) => i !== index);
              this.selectionChange.emit(this.selection);
            }

            this.onNodeUnselect.emit({originalEvent: event, node: node});
          } else {
            if (this.isSingleSelectionMode()) {
              this.selectionChange.emit(node);
            } else if (this.isMultipleSelectionMode()) {
              this.selection = (!metaKey) ? [] : this.selection || [];
              this.selection = [...this.selection, node];
              this.selectionChange.emit(this.selection);
            }

            this.onNodeSelect.emit({originalEvent: event, node: node});
          }
        } else {
          if (this.isSingleSelectionMode()) {
            if (selected) {
              this.selection = null;
              this.onNodeUnselect.emit({originalEvent: event, node: node});
            } else {
              this.selection = node;
              this.onNodeSelect.emit({originalEvent: event, node: node});
            }
          } else {
            if (selected) {
              this.selection = this.selection.filter((val, i) => i !== index);
              this.onNodeUnselect.emit({originalEvent: event, node: node});
            } else {
              this.selection = [...this.selection || [], node];
              this.onNodeSelect.emit({originalEvent: event, node: node});
            }
          }

          this.selectionChange.emit(this.selection);
        }
      }
    }

    this.nodeTouched = false;
  }

  onNodeTouchEnd() {
    this.nodeTouched = true;
  }

  onNodeRightClick(event: MouseEvent, node: FileTreeNode) {
    if (this.contextMenu) {
      const eventTarget = (<Element> event.target);

      if (eventTarget.className && eventTarget.className.indexOf('ui-tree-toggler') === 0) {
        return;
      } else {
        const index = this.findIndexInSelection(node);
        const selected = (index >= 0);

        if (!selected) {
          if (this.isSingleSelectionMode()) {
            this.selectionChange.emit(node);
          } else {
            this.selectionChange.emit([node]);
          }
        }

        this.contextMenu.show(event);
        this.onNodeContextMenuSelect.emit({originalEvent: event, node: node});
      }
    }
  }

  findIndexInSelection(node: FileTreeNode) {
    let index = -1;

    if (this.selectionMode && this.selection) {
      if (this.isSingleSelectionMode()) {
        index = (this.selection === node) ? 0 : - 1;
      } else {
        for (let i = 0; i  < this.selection.length; i++) {
          if (this.selection[i] === node) {
            index = i;
            break;
          }
        }
      }
    }

    return index;
  }

  propagateUp(node: FileTreeNode, select: boolean) {
    if (node.children && node.children.length) {
      let selectedCount = 0;
      let childPartialSelected = false;
      for (const child of node.children) {
        if (this.isSelected(child)) {
          selectedCount++;
        } else if (child.partialSelected) {
          childPartialSelected = true;
        }
      }

      if (select && selectedCount === node.children.length) {
        this.selection = [...this.selection || [], node];
        node.partialSelected = false;
      } else {
        if (!select) {
          const index = this.findIndexInSelection(node);
          if (index >= 0) {
            this.selection = this.selection.filter((val, i) => i !== index);
          }
        }

        if (childPartialSelected || selectedCount > 0 && selectedCount !== node.children.length) {
          node.partialSelected = true;
        } else {
          node.partialSelected = false;
        }
      }
    }

    const parent = node.parent;
    if (parent) {
      this.propagateUp(parent, select);
    }
  }

  propagateDown(node: FileTreeNode, select: boolean) {
    const index = this.findIndexInSelection(node);

    if (select && index === -1) {
      this.selection = [...this.selection || [], node];
    } else if (!select && index > -1) {
      this.selection = this.selection.filter((val, i) => i !== index);
    }

    node.partialSelected = false;

    if (node.children && node.children.length) {
      for (const child of node.children) {
        this.propagateDown(child, select);
      }
    }
  }

  isSelected(node: FileTreeNode) {
    return this.findIndexInSelection(node) !== -1;
  }

  isSingleSelectionMode() {
    return this.selectionMode && this.selectionMode === 'single';
  }

  isMultipleSelectionMode() {
    return this.selectionMode && this.selectionMode === 'multiple';
  }

  isCheckboxSelectionMode() {
    return this.selectionMode && this.selectionMode === 'checkbox';
  }
}
