import {
    Component,
    NgFor,
    View,
    bootstrap
} from 'angular2/angular2';

class Article {
    votes: number;
    title: string;
    link: string;

    constructor(title, link) {
        this.votes = 0;
        this.title = title;
        this.link = link;
    }
    voteUp() {
        this.votes += 1;
        return false;
    }

    voteDown() {
        this.votes -= 1;
        return false;
    }
}

@Component({
    selector: 'reddit-article',
    properties: ['article']
})
@View({
    template: `
        <article>
            <div class="votes">{{ article.votes }}</div>
            <div class="main">
                <h2><a href="{{ article.link }}">{{ article.title }}</a></h2>
                <ul>
                    <li><a href (click)="article.voteUp()">upvote</a></li>
                    <li><a href (click)="article.voteDown()">downvote</a></li>
                </ul>
            </div>
        </article>
    `
})
class RedditArticle {
    article: Article;
}

@Component({
  selector: 'reddit'
})
@View({
    directives: [RedditArticle, NgFor],
    template: `
        <section class="new-link">
            <div class="control-group">
                <div><label for="title">Title:</label></div>
                <div><input name="title" #newtitle></div>
            </div>
            <div class="control-group">
                <div><label for="link">Link:</label></div>
                <div><input name="link" #newlink></div>
            </div>
            <button (click)="addArticle(newtitle, newlink)">Submit Link</button>
        </section>

        <reddit-article
            *ng-for="#article of articles"
            [article]="article">
        </reddit-article>
    `
})
class RedditApp {
    articles: Array<Article>;
    
    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io'),
            new Article('Fullstack', 'http://fullstack.io'),
        ];
    }

    addArticle(title, link) {
        this.articles.push(new Article(title.value, link.value));
    }
}

bootstrap(RedditApp);
