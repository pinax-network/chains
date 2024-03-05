"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../../configs");
const blocktypes_1 = __importDefault(require("../blocktypes"));
// Getting a type error? Run `npm run generate_pinaxid_type`
const id = 'arweave';
const chain = {
    id,
    index: 4,
    graph_id: 'arweave-mainnet',
    name: 'Arweave',
    alt_names: [],
    mainnet: id,
    standard: 'erc20',
    block_type: blocktypes_1.default.arweave,
    img: new URL(`${configs_1.DEFAULT_IMG_BASE_URL}/${id}.svg`),
    is_img_dt_invert: true,
    is_testnet: false,
    supported_services: {
        firehose: {
            released_at: new Date('2023-12-01'),
            deprecated_at: undefined,
        },
        substreams: {
            released_at: new Date('2024-03-03'),
            deprecated_at: undefined,
        },
        rpc: {
            released_at: undefined,
            deprecated_at: undefined,
        },
    },
};
exports.default = chain;
