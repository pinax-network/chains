"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../../configs");
const blocktypes_1 = __importDefault(require("../blocktypes"));
const chains_1 = require("wagmi/chains");
// Getting a type error? Run `npm run generate_pinaxid_type`
const id = 'eth';
const chain = {
    id,
    index: 1,
    graph_id: 'mainnet',
    name: 'Ethereum',
    alt_names: [],
    mainnet: id,
    standard: 'erc20',
    block_type: blocktypes_1.default.erc20,
    img: new URL(`${configs_1.DEFAULT_IMG_BASE_URL}/${id}.svg`),
    is_img_dt_invert: true,
    is_testnet: false,
    supported_services: {
        firehose: {
            released_at: new Date('2023-12-01'),
            deprecated_at: undefined,
        },
        substreams: {
            released_at: new Date('2023-12-01'),
            deprecated_at: undefined,
        },
        rpc: {
            released_at: new Date('2023-12-01'),
            deprecated_at: undefined,
        },
    },
    metadata: chains_1.mainnet,
};
exports.default = chain;
