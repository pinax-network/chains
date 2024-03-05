"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BLOCKTYPES = {
    antelope: {
        label: 'sf.antelope.type.v1.Block',
        url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
    },
    arweave: {
        label: 'sf.arweave.type.v1.Block',
        url: 'https://buf.build/pinax/firehose-arweave/docs/main:sf.arweave.type.v1',
    },
    brc20: {
        label: 'sf.bitcoin.type.v1.Block',
        url: 'https://buf.build/streamingfast/firehose-bitcoin/docs/main:sf.bitcoin.type.v1',
    },
    cosmos: {
        label: 'sf.cosmos.type.v1.Block',
        url: 'https://github.com/figment-networks/proto-cosmos/blob/main/sf/cosmos/type/v1/type.proto',
    },
    erc20: {
        label: 'sf.ethereum.type.v2.Block',
        url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
    },
    near: {
        label: 'sf.near.type.v1.Block',
        url: 'https://buf.build/streamingfast/firehose-near/docs/main:sf.near.type.v1',
    },
};
exports.default = BLOCKTYPES;
