async function getStatistics(context, channelId) {
  const targetUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${context.env.YOUTUBE_KEY}`;
  const response = await fetch(targetUrl);
  const json = await response.json();

  return json.items[0].statistics.subscriberCount;
}

export async function onRequestGet(context) {
  const channelId = context.params.id;
  const subscriberCount = await getStatistics(context, channelId);

  return new Response(subscriberCount);
}
