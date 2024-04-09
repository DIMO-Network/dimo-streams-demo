import StreamrClient from "@streamr/sdk"
import { StreamPartIDUtils } from '@streamr/protocol'
import { ethers } from "ethers";
const streamId = "streams.dimo.eth/vehicles/3";

const main = async () => {
  // Create the client using the validated private key
  const client = new StreamrClient({
    logLevel: 'debug',
    auth: {
      //this is the signer private key the developer adds
      privateKey: '00000'
    },
  });
  console.log("Client public key is:", client.getAddress());  
  const stream = await client.getStream(streamId);

  const onMessage = (content) => {
   console.log(JSON.stringify(content, undefined, 2));
  };
  
  const subscriptions = await Promise.all(
    stream.getStreamParts().map(async (partition) => {
      const [id, part] = StreamPartIDUtils.getStreamIDAndPartition(partition)
      await client.subscribe(
        //the erc1271 contract in this api is the contract address of the Developer License ClientId
        { id: id, partition: part, erc1271Contract: "0x401aEf4801eF3691447B80400560Ce750FF63FB0" },
        onMessage
      );
    })
  );
  return { client, subscriptions };
};

export default main();