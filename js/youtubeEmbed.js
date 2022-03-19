var YouTubeEmbed = /** @class */ (function () {
    function YouTubeEmbed(element, feedUrl) {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(feedUrl)).then(function (res) { return res.json(); }).then(function (feed) {
            var elem;
            if (typeof element === 'string' || element instanceof String) {
                elem = document.querySelector(element);
            }
            else {
                elem = element;
            }
            var id = feed.items[0].link.replace(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/, '$2');
            elem.src = "https://www.youtube-nocookie.com/embed/" + id;
        });
    }
    return YouTubeEmbed;
}());
export default YouTubeEmbed;
//# sourceMappingURL=youtubeEmbed.js.map