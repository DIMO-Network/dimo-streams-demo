## Overview
This is a demo application that utilizes the [Streamr JavaScript Client](https://www.npmjs.com/package/streamr-client) to subscribe to a data stream. [Streamr](https://streamr.network/) is a decentralized P2P real-time data pub/sub network. By running this demo application, you will be operating a light Streamr node that subscribes to an existing data stream.

## Installation
1. Install npm (if you don't have this in your environment):

```
brew install node && brew install npm
```

2. Clone this repository:

```
git clone https://github.com/DIMO-Network/dimo-streams-demo.git
```

3. Install the dependencies for this application:

> The Streamr JavaScript Client uses some npm dependencies that have been deprecated in Node v21, please use a Node version < 21 to ensure a successful installation.

```
npm i
```

4. Install `npx` globally:

```
npm i -g npx
```

5. Start the Streamr subscriber:

```
npm run start
```
## Configurations
In `index.ts`, update the `streamId` constant to any data stream that you have access to. Since the demo uses the [public DIMO Weather Stream](https://streamr.network/hub/projects/0xc14edaef028d15867368e7185c553abb2eff7547328a8d6ab995d3c67ded3b5b/overview), we generate a random 0x address to be used in the `privateKey` to initiate the Streamr client. If you are subscribing to a private data stream, simply update the Streamr client call to use your own `privateKey`:

```
  const client = new StreamrClient({
    auth: {
      privateKey: <use_your_own_privateKey>
    },
  });
```
