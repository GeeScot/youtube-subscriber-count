async function getChannelId(context, username) {
  const targetUrl = `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=1&q=${username}&type=channel&key=${context.env.YOUTUBE_KEY}`;
  const response = await fetch(targetUrl);
  const json = await response.json();

  return json.items[0].id.channelId;
}

export async function onRequestGet(context) {
  const username = context.params.username;
  const channelId = await getChannelId(context, username);

  return new Response(JSON.stringify(channelId));
}
