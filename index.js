const StreamrClient = require("streamr-client");
const crypto = require('crypto')
const { prettyPrintJson } = require('pretty-print-json');

const main = async () => {
  // Create the client using the validated private key
  const client = new StreamrClient({
    auth: {
      privateKey: crypto.randomBytes(32).toString('hex'),
    },
  });

  const subscription = await client.subscribe(
    "streams.dimo.eth/firehose/weather",
    (message) => {
      console.log(JSON.stringify(message));
    }
  );
  return { client, subscription };
};

main();

module.exports = main;
