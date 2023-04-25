import YouTubeFeed from "../ts/types/youtubeFeed";

export default async function YouTubeEmbed(element: HTMLIFrameElement | string, feedUrl: string) {
  const feed: YouTubeFeed = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`
  ).then((res) => res.json());

  let elem: HTMLIFrameElement;

  if (typeof element === "string" || element instanceof String) {
    elem = document.querySelector(<string>element) as HTMLIFrameElement;
  } else {
    elem = element as HTMLIFrameElement;
  }

  const id = feed.items[0].link.replace(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/, "$2");

  elem.src = `https://www.youtube-nocookie.com/embed/${id}`;

  return id;
}
