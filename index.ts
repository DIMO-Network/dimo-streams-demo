import StreamrClient from "@streamr/sdk"
import crypto from "crypto";
const streamId = "streams.dimo.eth/firehose/weather";

const main = async () => {
  // Create the client using the validated private key
  const client = new StreamrClient({
    auth: {
      privateKey: crypto.randomBytes(32).toString('hex')
    },
  });

  const stream = await client.getStream(streamId);

  const onMessage = (content) => {
   console.log(JSON.stringify(content, undefined, 2));
  };
  
  const subscriptions = await Promise.all(
    stream.getStreamParts().map(async (partition) => {
      await client.subscribe(
        partition,
        onMessage
      );
    })
  );
  return { client, subscriptions };
};

export default main();