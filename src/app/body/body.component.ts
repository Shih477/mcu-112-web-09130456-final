import { Component } from '@angular/core';
import { TagListComponent } from '../tag-list/tag-list.component';
import { ArticleListComponent } from '../article-list/article-list.component';

@Component({
  selector: 'app-body',
  standalone: true,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  imports: [TagListComponent, ArticleListComponent],
})
export class BodyComponent {}
