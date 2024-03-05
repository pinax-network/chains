"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServiceEndpointUrl = void 0;
const getServiceEndpointUrl = (chainId, service) => {
    return `https://${chainId}.${service}.pinax.network`;
};
exports.getServiceEndpointUrl = getServiceEndpointUrl;
