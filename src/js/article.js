const ARTICLE_ID_REGEXP = /id=(?<id>\d*)/;


function formatArticle(article) {
    document.querySelector('.article__header').textContent = article.title;
    document.querySelector('.article__author').textContent = article.author;
    document.querySelector('.article__date').textContent = article.date;
    document.querySelector('.article__image img').setAttribute('src', article.image);
    document.querySelector('.article__text').innerHTML = article.text.map(text => `<p>${text}</p>`).join('');
    document.querySelector('.article__views').textContent = article.views;
    document.querySelector('.article__comments').textContent = article.comments;
}


function formatArticleNotFound() {
    document.querySelector('.article__header').textContent = 'Статья не найдена';
    document.querySelector('.article__content').style.display = 'none';
}


(async () => {
    const articles = await getArticles();
    const articleId = location.search.match(ARTICLE_ID_REGEXP).groups.id;
    const article = articles[articleId-1];
    
    if (!article) {
        formatArticleNotFound();
    }
    else {
        formatArticle(article);
    }
})();
