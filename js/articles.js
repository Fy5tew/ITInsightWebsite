const formatArticle = (id, article) => {
    return  (
`<article class="article main__article">
    <div class="article__content">
        <div class="article__top-info">
            <img class="icon" src="assets/icons/author.png" />
            <span class="article__author">${article.author}</span>
            <span class="article__date">${article.date}</span>
        </div>
        <h3 class="article__title">${article.title}</h3>
        <p class="article__preview">${article.preview}</p>
        <div class="article__bottom-info">
            <div class="article__link">
                <a href="article.html?id=${id}">Читать далее</a>
            </div>
            <div class="article__stats">
                <img class="icon" src="assets/icons/views.png" />
                <span class="article__views">${article.views}</span>
                <img class="icon" src="assets/icons/comments.png" />
                <span class="article__comments">${article.comments}</span>
            </div>
        </div>
    </div>
    <div class="article__image">
        <img src="${article.image}" />
    </div>
</article>`
    );
}


(async () => {
    const articlesWrapper = document.querySelector('.main__articles');
    if (!articlesWrapper) {
        return;
    }
    const dataArticles = await getArticles();
    const formatedArticles = dataArticles.map((article, id) => formatArticle(id+1, article));
    articlesWrapper.innerHTML = formatedArticles.reduce((sum, el) => sum + el, '');
})();
