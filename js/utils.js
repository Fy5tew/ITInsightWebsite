const ROOT_PATH_REGEXP = /.*(?=\/)/;

const ARTICLES_DATA_URL = '/data/articles.xml';


function getRootPath() {
    return location.href.match(ROOT_PATH_REGEXP)[0];
}


function getFullURL(path) {
    return getRootPath() + path;
}


async function getArticles() {
    const response = await fetch(getFullURL(ARTICLES_DATA_URL));
    const data = await response.text();

    const parser = new DOMParser();
    const xmlDocument = parser.parseFromString(data, 'text/xml');

    const articles = Array.from(xmlDocument.querySelectorAll('article')).map(article => {
        return {
            title: article.querySelector('title').textContent,
            preview: article.querySelector('preview').textContent,
            text: article.querySelector('text').textContent.split('\n').filter(paragraph => paragraph.length),
            image: article.querySelector('image').textContent,
            author: article.querySelector('author').textContent,
            date: article.querySelector('date').textContent,
            views: Number(article.querySelector('views').textContent),
            comments: Number(article.querySelector('comments').textContent),
        };
    });

    return articles;
}
