function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: "Кармен | Project Moon",
            text: "Дізнайтеся більше про Кармен із всесвіту Project Moon!",
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Посилання скопійовано!");
    }
}