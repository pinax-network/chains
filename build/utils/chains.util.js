"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isChainSupported = exports.isRpcSupported = exports.isSubstreamsSupported = exports.isFirehoseSupported = void 0;
const isFirehoseSupported = (chain) => {
    var _a, _b, _c, _d;
    return (((_b = (_a = chain === null || chain === void 0 ? void 0 : chain.supported_services) === null || _a === void 0 ? void 0 : _a.firehose) === null || _b === void 0 ? void 0 : _b.released_at) !== undefined &&
        !((_d = (_c = chain === null || chain === void 0 ? void 0 : chain.supported_services) === null || _c === void 0 ? void 0 : _c.firehose) === null || _d === void 0 ? void 0 : _d.deprecated_at) !== undefined);
};
exports.isFirehoseSupported = isFirehoseSupported;
const isSubstreamsSupported = (chain) => {
    var _a, _b, _c, _d;
    return (((_b = (_a = chain === null || chain === void 0 ? void 0 : chain.supported_services) === null || _a === void 0 ? void 0 : _a.substreams) === null || _b === void 0 ? void 0 : _b.released_at) !== undefined &&
        !((_d = (_c = chain === null || chain === void 0 ? void 0 : chain.supported_services) === null || _c === void 0 ? void 0 : _c.substreams) === null || _d === void 0 ? void 0 : _d.deprecated_at) !== undefined);
};
exports.isSubstreamsSupported = isSubstreamsSupported;
const isRpcSupported = (chain) => {
    var _a, _b, _c, _d;
    return (((_b = (_a = chain === null || chain === void 0 ? void 0 : chain.supported_services) === null || _a === void 0 ? void 0 : _a.rpc) === null || _b === void 0 ? void 0 : _b.released_at) !== undefined &&
        !((_d = (_c = chain === null || chain === void 0 ? void 0 : chain.supported_services) === null || _c === void 0 ? void 0 : _c.rpc) === null || _d === void 0 ? void 0 : _d.deprecated_at) !== undefined);
};
exports.isRpcSupported = isRpcSupported;
const isChainSupported = (chain) => {
    return (isFirehoseSupported(chain) ||
        isSubstreamsSupported(chain) ||
        isRpcSupported(chain));
};
exports.isChainSupported = isChainSupported;
