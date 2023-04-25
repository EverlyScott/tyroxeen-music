import YouTubeEmbed from "./youtubeEmbed.js";
import ScrollManager from "./scrollManager.js";

const latestsection = document.getElementById("latestsection");

(async () => {
  const youtubeembed = await YouTubeEmbed(
    "#youtubeembed",
    "https://www.youtube.com/feeds/videos.xml?playlist_id=PLQqgg6tk-ffmaLsRLtqPfapZ-bAwi6z8_"
  );

  const youtubelatestembed = await YouTubeEmbed(
    "#youtubelatestembed",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCE2kTOrZwClF2VtJEvG0a6Q"
  );

  if (youtubeembed === youtubelatestembed) {
    latestsection.remove();
  }
})();

new ScrollManager(300);
