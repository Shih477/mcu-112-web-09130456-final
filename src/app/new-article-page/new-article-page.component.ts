import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-new-article-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './new-article-page.component.html',
  styleUrl: './new-article-page.component.css',
})
export class NewArticlePageComponent {}
