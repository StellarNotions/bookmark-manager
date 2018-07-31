// Angular Library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileTreeComponent } from './components/file-tree/file-tree.component';
import { FileTreeNodeComponent } from './components/file-tree/file-tree-node/file-tree-node.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [FileTreeComponent, FileTreeNodeComponent],
  exports: [FileTreeComponent]
})
export class SharedModule { }
