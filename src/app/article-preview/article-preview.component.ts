import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [NgFor, TagComponent],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css',
})
export class ArticlePreviewComponent {
  tags = ['0.0', '@@', '0_0', '@Q@'];
}
