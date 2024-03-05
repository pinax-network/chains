"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../../configs");
const blocktypes_1 = __importDefault(require("../blocktypes"));
// Getting a type error? Run `npm run generate_pinaxid_type`
const id = 'osmosis';
const chain = {
    id,
    index: 4,
    graph_id: 'osmosis-1',
    name: 'Osmosis',
    alt_names: [],
    mainnet: id,
    standard: 'cosmos',
    block_type: blocktypes_1.default.cosmos,
    img: new URL(`${configs_1.DEFAULT_IMG_BASE_URL}/${id}.svg`),
    is_img_dt_invert: false,
    is_testnet: false,
    supported_services: {
        firehose: {
            released_at: new Date('2023-12-01'),
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
