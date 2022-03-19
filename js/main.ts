import YouTubeEmbed from './youtubeEmbed.js'
import YouTubeLatestEmbed from './youtubeLatestEmbed.js'
import ScrollManager from './scrollManager.js'

new YouTubeEmbed('#youtubeembed', 'https://www.youtube.com/feeds/videos.xml?playlist_id=PLQqgg6tk-ffmfa-YX17gJQlIGDBTNqynL')
new YouTubeLatestEmbed('#youtubelatestembed', 'https://www.youtube.com/feeds/videos.xml?channel_id=UCE2kTOrZwClF2VtJEvG0a6Q')
new ScrollManager()