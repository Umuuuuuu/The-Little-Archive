// Render one Markdown article using the shared article template.
(async function () {
    const titleElement = document.getElementById("article-title");
    const metaElement = document.getElementById("article-meta");
    const contentElement = document.getElementById("article-content");
    const backLink = document.getElementById("back-to-category");
    if (!titleElement || !metaElement || !contentElement) return;

    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("id");

    try {
        if (!articleId) throw new Error("No article ID was provided.");

        const catalogResponse = await fetch("../content/catalog.json");
        if (!catalogResponse.ok) throw new Error("Could not load the article catalog.");
        const articles = await catalogResponse.json();
        const article = articles.find(item => item.id === articleId);
        if (!article) throw new Error("Article not found.");

        const articleResponse = await fetch(`../${article.file}`);
        if (!articleResponse.ok) throw new Error("Could not load the Markdown file.");
        const markdown = await articleResponse.text();

        document.title = `${article.title} | The Little Archive`;
        titleElement.textContent = article.title;
        metaElement.textContent = `${article.category.toUpperCase()}  ·  ${article.date}`;

        const rendered = marked.parse(markdown);
        contentElement.innerHTML = DOMPurify.sanitize(rendered);

        if (backLink) {
            backLink.href = `${article.category}.html`;
            backLink.textContent = `← Back to ${article.category}`;
        }
    } catch (error) {
        console.error(error);
        titleElement.textContent = "Article unavailable";
        metaElement.textContent = "";
        contentElement.textContent = "This article could not be found or loaded.";
    }
})();
