"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../../configs");
const blocktypes_1 = __importDefault(require("../blocktypes"));
// Getting a type error? Run `npm run generate_pinaxid_type`
const id = 'arbgoerli';
const chain = {
    id,
    index: 4,
    graph_id: 'arbitrum-goerli',
    name: 'Arbitrum Goerli',
    alt_names: [],
    mainnet: 'arbitrum',
    standard: 'erc20',
    block_type: blocktypes_1.default.erc20,
    img: new URL(`${configs_1.DEFAULT_IMG_BASE_URL}/${id}.svg`),
    is_img_dt_invert: false,
    is_testnet: true,
    supported_services: {
        firehose: {
            released_at: undefined,
            deprecated_at: undefined,
        },
        substreams: {
            released_at: undefined,
            deprecated_at: undefined,
        },
        rpc: {
            released_at: undefined,
            deprecated_at: undefined,
        },
    },
};
exports.default = chain;
