// Load and display articles for the current category page.
(async function () {
    const list = document.getElementById("article-list");
    const category = document.body.dataset.category;
    if (!list || !category) return;

    try {
        const response = await fetch("../content/catalog.json");
        if (!response.ok) throw new Error("Could not load the article catalog.");
        const articles = await response.json();
        const matching = articles
            .filter(article => article.category === category)
            .sort((a, b) => b.date.localeCompare(a.date));

        if (matching.length === 0) {
            list.innerHTML = "<p>More articles coming soon...</p>";
            return;
        }

        list.replaceChildren();
        matching.forEach(article => {
            const link = document.createElement("a");
            link.className = "article-card";
            link.href = `article.html?id=${encodeURIComponent(article.id)}`;

            const details = document.createElement("div");
            details.className = "article-card-details";

            const title = document.createElement("h2");
            title.textContent = article.title;

            const description = document.createElement("p");
            description.textContent = article.description;

            const date = document.createElement("span");
            date.className = "article-date";
            date.textContent = article.date;

            details.append(title, description, date);
            link.append(details);

            if (article.cover) {
                const image = document.createElement("img");
                image.src = `../${article.cover}`;
                image.alt = "";
                image.loading = "lazy";
                link.prepend(image);
            }

            const arrow = document.createElement("span");
            arrow.className = "article-arrow";
            arrow.textContent = "↗";
            link.append(arrow);
            list.append(link);
        });
    } catch (error) {
        console.error(error);
        list.innerHTML = "<p>The archive could not be loaded. Please try again later.</p>";
    }
})();
