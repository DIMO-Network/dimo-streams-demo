import StreamrClient from "streamr-client";
import crypto from "crypto";

const main = async () => {
  // Create the client using the validated private key
  const client = new StreamrClient({
    auth: {
      privateKey: crypto.randomBytes(32).toString("hex"),
    },
  });

  const subscription = await client.subscribe(
    "streams.dimo.eth/firehose/weather",
    (message) => {
      console.log(JSON.stringify(message, undefined, 2));
    }
  );
  return { client, subscription };
};

export default main();
