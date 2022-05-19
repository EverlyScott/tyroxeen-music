import YouTubeFeed from "../ts/types/youtubeFeed";

export default class YouTubeEmbed {
  constructor(element: HTMLIFrameElement | string, feedUrl: string) {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`)
      .then((res) => res.json())
      .then((feed: YouTubeFeed) => {
        var elem: HTMLIFrameElement;

        if (typeof element === "string" || element instanceof String) {
          elem = <HTMLIFrameElement>document.querySelector(<string>element);
        } else {
          elem = element;
        }

        const id = feed.items[0].link.replace(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/, "$2");

        elem.src = `https://www.youtube-nocookie.com/embed/${id}`;
      });
  }
}
