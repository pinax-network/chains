var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// data/chains/V2/index.ts
var V2_exports = {};
__export(V2_exports, {
  alfajores: () => meta_default2,
  amoy: () => meta_default32,
  arbgoerli: () => meta_default12,
  arbone: () => meta_default10,
  arbsepolia: () => meta_default11,
  arweave: () => meta_default14,
  avalanche: () => meta_default41,
  base: () => meta_default66,
  bitcoin: () => meta_default37,
  blast: () => meta_default42,
  blastsepolia: () => meta_default43,
  boba: () => meta_default22,
  bobasepolia: () => meta_default23,
  bsc: () => meta_default33,
  cardano: () => meta_default59,
  celo: () => meta_default,
  chapel: () => meta_default34,
  chiado: () => meta_default68,
  chiadoCl: () => meta_default69,
  cosmoshub: () => meta_default25,
  cronos: () => meta_default56,
  decimal: () => meta_default8,
  eos: () => meta_default61,
  eosevm: () => meta_default65,
  eth: () => meta_default46,
  ethCl: () => meta_default50,
  fantom: () => meta_default21,
  fuse: () => meta_default24,
  gnosis: () => meta_default67,
  gnosisCl: () => meta_default70,
  goerli: () => meta_default49,
  goerliCl: () => meta_default52,
  holesky: () => meta_default47,
  holeskyCl: () => meta_default51,
  jungle4: () => meta_default62,
  jungle4evm: () => meta_default64,
  juno: () => meta_default27,
  kava: () => meta_default28,
  kylin: () => meta_default63,
  linea: () => meta_default60,
  litecoin: () => meta_default71,
  mode: () => meta_default20,
  moonbeam: () => meta_default13,
  mumbai: () => meta_default31,
  near: () => meta_default44,
  neartest: () => meta_default45,
  opsepolia: () => meta_default18,
  optimism: () => meta_default17,
  ore: () => meta_default57,
  orestage: () => meta_default58,
  osmosis: () => meta_default36,
  polygon: () => meta_default30,
  ronin: () => meta_default29,
  scroll: () => meta_default19,
  sei: () => meta_default55,
  sepolia: () => meta_default48,
  sepoliaCl: () => meta_default53,
  starknet: () => meta_default54,
  telos: () => meta_default3,
  telostest: () => meta_default4,
  theta: () => meta_default26,
  ux: () => meta_default38,
  wax: () => meta_default15,
  waxtest: () => meta_default16,
  xLayer: () => meta_default9,
  xai: () => meta_default35,
  zkastar: () => meta_default5,
  zkatana: () => meta_default6,
  zksync: () => meta_default40,
  zkyoto: () => meta_default7,
  zora: () => meta_default39
});

// data/chains/V2/celo/meta.ts
var meta = {
  id: "celo",
  graph_id: "celo",
  name: "Celo",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/celo",
    brand_theme: "light",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://celo.org/"
  }
};
var meta_default = meta;

// data/chains/V2/celo/testnets/alfajores/meta.ts
var meta2 = {
  id: "alfajores",
  graph_id: null,
  name: "Alfajores",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default2 = meta2;

// data/chains/V2/telos/meta.ts
var meta3 = {
  id: "telos",
  graph_id: null,
  name: "Telos",
  alt_names: [],
  standard: "antelope",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.antelope.type.v1.Block",
    url: "https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1"
  },
  icon: {
    id: "networks/telos",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://telos.net/"
  }
};
var meta_default3 = meta3;

// data/chains/V2/telos/testnets/telostest/meta.ts
var meta4 = {
  id: "telostest",
  graph_id: null,
  name: "Telos Test",
  alt_names: [],
  standard: "antelope",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.antelope.type.v1.Block",
    url: "https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default4 = meta4;

// data/chains/V2/zkastar/meta.ts
var meta5 = {
  id: "zkastar",
  name: "Astar zkEVM",
  alt_names: [],
  graph_id: null,
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.zkevm.type.v1.Block",
    url: "https://buf.build/pinax/firehose-zkevm/docs/main:sf.zkevm.type.v1"
  },
  icon: {
    id: "networks/astar",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: "L2",
    website: "https://astar.network/"
  }
};
var meta_default5 = meta5;

// data/chains/V2/zkastar/testnets/zkatana/meta.ts
var meta6 = {
  id: "zkatana",
  name: "Astar zKatana",
  alt_names: [],
  graph_id: null,
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.zkevm.type.v1.Block",
    url: "https://buf.build/pinax/firehose-zkevm/docs/main:sf.zkevm.type.v1"
  },
  supported_services: {
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default6 = meta6;

// data/chains/V2/zkastar/testnets/zkyoto/meta.ts
var meta7 = {
  id: "zkyoto",
  name: "Astar zKyoto",
  alt_names: [],
  graph_id: "zkyoto-testnet",
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.zkevm.type.v1.Block",
    url: "https://buf.build/pinax/firehose-zkevm/docs/main:sf.zkevm.type.v1"
  },
  supported_services: {
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default7 = meta7;

// data/chains/V2/decimal/meta.ts
var meta8 = {
  id: "decimal",
  graph_id: null,
  name: "Decimal",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "tokens/del",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://www.decimalchain.com/"
  }
};
var meta_default8 = meta8;

// data/chains/V2/x-layer/meta.ts
var meta9 = {
  id: "x-layer",
  graph_id: null,
  name: "X-Layer",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/x-layer",
    brand_theme: "dark",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://www.okx.com/fr/xlayer"
  }
};
var meta_default9 = meta9;

// data/chains/V2/arbone/meta.ts
var meta10 = {
  id: "arbone",
  graph_id: "arbitrum-one",
  name: "Arbitrum One",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "tokens/arbi",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2024-06-10T00:00:00.000Z",
      full_released_at: "2024-06-10T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-06-10T00:00:00.000Z",
      full_released_at: "2024-06-10T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2024-06-10T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://arbitrum.io/"
  }
};
var meta_default10 = meta10;

// data/chains/V2/arbone/testnets/arbsepolia/meta.ts
var meta11 = {
  id: "arbsepolia",
  graph_id: "arbitrum-sepolia",
  name: "Arbitrum Sepolia",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2024-05-03T00:00:00.000Z",
      full_released_at: "2024-05-03T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-05-03T00:00:00.000Z",
      full_released_at: "2024-05-03T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2024-05-03T00:00:00.000Z",
      full_released_at: "2024-05-03T00:00:00.000Z",
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default11 = meta11;

// data/chains/V2/arbone/testnets/arbgoerli/meta.ts
var meta12 = {
  id: "arbgoerli",
  graph_id: null,
  name: "Arbitrum Goerli",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2024-05-03T00:00:00.000Z",
      full_released_at: "2024-05-03T00:00:00.000Z",
      deprecated_at: "2024-05-03T00:00:00.000Z"
    },
    substreams: {
      beta_released_at: "2024-05-03T00:00:00.000Z",
      full_released_at: "2024-05-03T00:00:00.000Z",
      deprecated_at: "2024-05-03T00:00:00.000Z"
    },
    rpc: {
      beta_released_at: "2024-05-03T00:00:00.000Z",
      full_released_at: "2024-05-03T00:00:00.000Z",
      deprecated_at: "2024-05-03T00:00:00.000Z"
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default12 = meta12;

// data/chains/V2/moonbeam/meta.ts
var meta13 = {
  id: "moonbeam",
  graph_id: "moonbeam",
  name: "Moonbeam",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/moonbeam",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://moonbeam.network/"
  }
};
var meta_default13 = meta13;

// data/chains/V2/arweave/meta.ts
var meta14 = {
  id: "arweave",
  graph_id: "arweave-mainnet",
  name: "Arweave",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.arweave.type.v1.Block",
    url: "https://buf.build/pinax/firehose-arweave/docs/main:sf.arweave.type.v1"
  },
  icon: {
    id: "tokens/ar",
    brand_theme: "dark",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2024-03-03T00:00:00.000Z",
      full_released_at: "2024-03-03T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-03-03T00:00:00.000Z",
      full_released_at: "2024-03-03T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://arweave.org/"
  }
};
var meta_default14 = meta14;

// data/chains/V2/wax/meta.ts
var meta15 = {
  id: "wax",
  graph_id: null,
  name: "WAX",
  alt_names: [],
  standard: "antelope",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.antelope.type.v1.Block",
    url: "https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1"
  },
  icon: {
    id: "tokens/waxp",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://wax.io/"
  }
};
var meta_default15 = meta15;

// data/chains/V2/wax/testnets/waxtest/meta.ts
var meta16 = {
  id: "waxtest",
  graph_id: null,
  name: "WAX Test",
  alt_names: [],
  standard: "antelope",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.antelope.type.v1.Block",
    url: "https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default16 = meta16;

// data/chains/V2/optimism/meta.ts
var meta17 = {
  id: "optimism",
  graph_id: "optimism",
  name: "Optimism",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/optimistic-ethereum",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2024-01-01T00:00:00.000Z",
      full_released_at: "2024-01-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-01-01T00:00:00.000Z",
      full_released_at: "2024-01-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://optimism.io/"
  }
};
var meta_default17 = meta17;

// data/chains/V2/optimism/testnets/opsepolia/meta.ts
var meta18 = {
  id: "opsepolia",
  graph_id: "optimism-sepolia",
  name: "Optimism Sepolia",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-08-30T00:00:00.000Z",
      full_released_at: "2023-08-30T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-08-30T00:00:00.000Z",
      full_released_at: "2023-08-30T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2023-08-30T00:00:00.000Z",
      full_released_at: "2023-08-30T00:00:00.000Z",
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default18 = meta18;

// data/chains/V2/scroll/meta.ts
var meta19 = {
  id: "scroll",
  graph_id: "scroll",
  name: "Scroll",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/scroll",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://scroll.io/"
  }
};
var meta_default19 = meta19;

// data/chains/V2/mode/meta.ts
var meta20 = {
  id: "mode",
  name: "Mode Network",
  alt_names: [],
  graph_id: "mode-mainnet",
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/mode",
    brand_theme: "light",
    variants: ["branded", "mono"]
  },
  supported_services: {
    rpc: {
      beta_released_at: "2024-05-14T00:00:00Z",
      full_released_at: "2024-05-14T00:00:00Z",
      deprecated_at: null
    },
    firehose: {
      beta_released_at: "2024-05-14T00:00:00Z",
      full_released_at: "2024-05-14T00:00:00Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-05-14T00:00:00Z",
      full_released_at: "2024-05-14T00:00:00Z",
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: "L2",
    website: "https://www.mode.network/"
  }
};
var meta_default20 = meta20;

// data/chains/V2/fantom/meta.ts
var meta21 = {
  id: "fantom",
  graph_id: "fantom",
  name: "Fantom",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/fantom",
    brand_theme: "light",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://fantom.foundation/"
  }
};
var meta_default21 = meta21;

// data/chains/V2/boba/meta.ts
var meta22 = {
  id: "boba",
  name: "Boba Network",
  alt_names: [],
  graph_id: "boba",
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "tokens/boba",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    firehose: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: "L2",
    website: "https://boba.network/"
  }
};
var meta_default22 = meta22;

// data/chains/V2/boba/testnets/bobasepolia/meta.ts
var meta23 = {
  id: "bobasepolia",
  graph_id: null,
  name: "Boba Sepolia",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    firehose: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default23 = meta23;

// data/chains/V2/fuse/meta.ts
var meta24 = {
  id: "fuse",
  name: "Fuse",
  alt_names: [],
  graph_id: "fuse",
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "tokens/fuse",
    brand_theme: "light",
    variants: ["branded", "mono"]
  },
  supported_services: {
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    firehose: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: "L1",
    website: "https://fuse.io/"
  }
};
var meta_default24 = meta24;

// data/chains/V2/cosmoshub/meta.ts
var meta25 = {
  id: "cosmoshub",
  graph_id: "cosmoshub-4",
  name: "Cosmos Hub",
  alt_names: [],
  standard: "cosmos",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.cosmos.type.v1.Block",
    url: "https://github.com/figment-networks/proto-cosmos/blob/main/sf/cosmos/type/v1/type.proto"
  },
  icon: {
    id: "networks/cosmos",
    brand_theme: "dark",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: "2023-10-29T00:00:00.000Z"
    },
    substreams: {
      beta_released_at: "2023-10-29T00:00:00.000Z",
      full_released_at: "2023-10-29T00:00:00.000Z",
      deprecated_at: "2023-10-29T00:00:00.000Z"
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://cosmos.network/"
  }
};
var meta_default25 = meta25;

// data/chains/V2/cosmoshub/testnets/theta/meta.ts
var meta26 = {
  id: "theta",
  graph_id: "theta-testnet-001",
  name: "Theta",
  alt_names: [],
  standard: "cosmos",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.cosmos.type.v1.Block",
    url: "https://github.com/figment-networks/proto-cosmos/blob/main/sf/cosmos/type/v1/type.proto"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: "2023-10-29T00:00:00.000Z"
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default26 = meta26;

// data/chains/V2/cosmoshub/testnets/juno/meta.ts
var meta27 = {
  id: "juno",
  graph_id: null,
  name: "Juno",
  alt_names: [],
  standard: "cosmos",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.cosmos.type.v1.Block",
    url: "https://github.com/figment-networks/proto-cosmos/blob/main/sf/cosmos/type/v1/type.proto"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: "2024-01-15T00:00:00.000Z"
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default27 = meta27;

// data/chains/V2/kava/meta.ts
var meta28 = {
  id: "kava",
  graph_id: null,
  name: "Kava",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/kava",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://www.kava.io/"
  }
};
var meta_default28 = meta28;

// data/chains/V2/ronin/meta.ts
var meta29 = {
  id: "ronin",
  graph_id: null,
  name: "Ronin",
  alt_names: [],
  standard: "rrc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/ronin",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://roninchain.com/"
  }
};
var meta_default29 = meta29;

// data/chains/V2/polygon/meta.ts
var meta30 = {
  id: "polygon",
  graph_id: "matic",
  name: "Polygon",
  alt_names: ["matic"],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/polygon-pos",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://polygon.technology/"
  }
};
var meta_default30 = meta30;

// data/chains/V2/polygon/testnets/mumbai/meta.ts
var meta31 = {
  id: "mumbai",
  graph_id: null,
  name: "Mumbai",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: "2024-04-12T00:00:00.000Z"
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: "2024-04-12T00:00:00.000Z"
    },
    rpc: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: "2024-04-12T00:00:00.000Z"
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default31 = meta31;

// data/chains/V2/polygon/testnets/amoy/meta.ts
var meta32 = {
  id: "amoy",
  graph_id: "polygon-amoy",
  name: "Amoy",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2024-04-12T00:00:00.000Z",
      full_released_at: "2024-04-12T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-04-12T00:00:00.000Z",
      full_released_at: "2024-04-12T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2024-04-12T00:00:00.000Z",
      full_released_at: "2024-04-12T00:00:00.000Z",
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default32 = meta32;

// data/chains/V2/bsc/meta.ts
var meta33 = {
  id: "bsc",
  graph_id: "bsc",
  name: "BNB",
  alt_names: ["bsc", "binance"],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/binance-smart-chain",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://www.bnbchain.org/en/bnb-smart-chain"
  }
};
var meta_default33 = meta33;

// data/chains/V2/bsc/testnets/chapel/meta.ts
var meta34 = {
  id: "chapel",
  graph_id: "chapel",
  name: "Chapel",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default34 = meta34;

// data/chains/V2/xai/meta.ts
var meta35 = {
  id: "xai",
  name: "XAI",
  alt_names: [],
  graph_id: null,
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/xai",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    firehose: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: "L3",
    website: "https://xai.games/"
  }
};
var meta_default35 = meta35;

// data/chains/V2/osmosis/meta.ts
var meta36 = {
  id: "osmosis",
  graph_id: "osmosis-1",
  name: "Osmosis",
  alt_names: [],
  standard: "cosmos",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.cosmos.type.v1.Block",
    url: "https://github.com/figment-networks/proto-cosmos/blob/main/sf/cosmos/type/v1/type.proto"
  },
  icon: {
    id: "networks/osmosis",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2024-01-01T00:00:00.000Z",
      full_released_at: "2024-01-01T00:00:00.000Z",
      deprecated_at: "2023-10-29T00:00:00.000Z"
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://osmosis.zone/"
  }
};
var meta_default36 = meta36;

// data/chains/V2/bitcoin/meta.ts
var meta37 = {
  id: "bitcoin",
  graph_id: null,
  name: "Bitcoin",
  alt_names: ["btc"],
  standard: "brc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.bitcoin.type.v1.Block",
    url: "https://buf.build/streamingfast/firehose-bitcoin/docs/main:sf.bitcoin.type.v1"
  },
  icon: {
    id: "tokens/btc",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-03-21T00:00:00.000Z",
      full_released_at: "2023-03-21T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-03-21T00:00:00.000Z",
      full_released_at: "2023-03-21T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://bitcoin.org/"
  }
};
var meta_default37 = meta37;

// data/chains/V2/ux/meta.ts
var meta38 = {
  id: "ux",
  graph_id: null,
  name: "UX",
  alt_names: [],
  standard: "antelope",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.antelope.type.v1.Block",
    url: "https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1"
  },
  icon: {
    id: "networks/ux",
    brand_theme: "both",
    variants: ["branded"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: "2024-01-15T00:00:00.000Z"
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: "2024-01-15T00:00:00.000Z"
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: ""
  }
};
var meta_default38 = meta38;

// data/chains/V2/zora/meta.ts
var meta39 = {
  id: "zora",
  name: "Zora Network",
  alt_names: [],
  graph_id: null,
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/zora-network",
    brand_theme: "both",
    variants: ["branded"]
  },
  supported_services: {
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    firehose: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: "L2",
    website: "https://zora.co/"
  }
};
var meta_default39 = meta39;

// data/chains/V2/zksync/meta.ts
var meta40 = {
  id: "zksync",
  graph_id: "zksync-era",
  name: "zkSync Era",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/zksync",
    brand_theme: "dark",
    variants: ["branded", "mono"]
  },
  supported_services: {
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://zksync.io/",
    tags: ["zk"]
  }
};
var meta_default40 = meta40;

// data/chains/V2/avalanche/meta.ts
var meta41 = {
  id: "avalanche",
  graph_id: "avalanche",
  name: "Avalanche",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/avalanche",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://www.avax.network/"
  }
};
var meta_default41 = meta41;

// data/chains/V2/blast/meta.ts
var meta42 = {
  id: "blast",
  name: "Blast Network",
  alt_names: [],
  graph_id: "blast-mainnet",
  index: 0,
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/blast",
    brand_theme: "light",
    variants: ["branded", "mono"]
  },
  supported_services: {
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    firehose: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: "L2",
    website: "https://blast.io/en"
  }
};
var meta_default42 = meta42;

// data/chains/V2/blast/testnets/blastsepolia/meta.ts
var meta43 = {
  id: "blastsepolia",
  name: "Blast Network Sepolia",
  alt_names: [],
  graph_id: "blast-testnet",
  index: 0,
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    rpc: {
      beta_released_at: "2024-08-01T00:00:000Z",
      full_released_at: "2023-10-16T00:00:00.000Z",
      deprecated_at: null
    },
    firehose: {
      beta_released_at: "2023-10-16T00:00:00.000Z",
      full_released_at: "2023-10-16T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-10-16T00:00:00.000Z",
      full_released_at: "2023-10-16T00:00:00.000Z",
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default43 = meta43;

// data/chains/V2/near/meta.ts
var meta44 = {
  id: "near",
  graph_id: "near-mainnet",
  name: "Near",
  alt_names: [],
  standard: "near",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.near.type.v1.Block",
    url: "https://buf.build/streamingfast/firehose-near/docs/main:sf.near.type.v1"
  },
  icon: {
    id: "tokens/near",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://near.org/"
  }
};
var meta_default44 = meta44;

// data/chains/V2/near/testnets/neartest/meta.ts
var meta45 = {
  id: "neartest",
  graph_id: "near-testnet",
  name: "Near-testnet",
  alt_names: [],
  standard: "near",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.near.type.v1.Block",
    url: "https://buf.build/streamingfast/firehose-near/docs/main:sf.near.type.v1"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default45 = meta45;

// data/chains/V2/eth/meta.ts
var meta46 = {
  id: "eth",
  graph_id: "mainnet",
  name: "Ethereum",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/ethereum",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    datasets: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://ethereum.org/"
  }
};
var meta_default46 = meta46;

// data/chains/V2/eth/testnets/holesky/meta.ts
var meta47 = {
  id: "holesky",
  graph_id: null,
  name: "Holesky",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default47 = meta47;

// data/chains/V2/eth/testnets/sepolia/meta.ts
var meta48 = {
  id: "sepolia",
  graph_id: "sepolia",
  name: "Sepolia",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    datasets: {
      beta_released_at: "2024-10-07T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default48 = meta48;

// data/chains/V2/eth/testnets/goerli/meta.ts
var meta49 = {
  id: "goerli",
  graph_id: null,
  name: "Goerli",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-03-01T00:00:00.000Z",
      full_released_at: "2023-03-01T00:00:00.000Z",
      deprecated_at: "2023-03-21T00:00:00.000Z"
    },
    substreams: {
      beta_released_at: "2023-03-01T00:00:00.000Z",
      full_released_at: "2023-03-01T00:00:00.000Z",
      deprecated_at: "2023-03-21T00:00:00.000Z"
    },
    rpc: {
      beta_released_at: "2023-03-01T00:00:00.000Z",
      full_released_at: "2023-03-01T00:00:00.000Z",
      deprecated_at: "2023-03-21T00:00:00.000Z"
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default49 = meta49;

// data/chains/V2/eth/consensus/eth-cl/meta.ts
var meta50 = {
  id: "eth-cl",
  graph_id: null,
  name: "Ethereum Consensus Layer",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-03-08T00:00:00.000Z",
      full_released_at: "2023-03-08T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-03-08T00:00:00.000Z",
      full_released_at: "2023-03-08T00:00:00.000Z",
      deprecated_at: null
    }
  }
};
var meta_default50 = meta50;

// data/chains/V2/eth/consensus/holesky-cl/meta.ts
var meta51 = {
  id: "holesky-cl",
  graph_id: null,
  name: "Holesky Consensus Layer",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-03-08T00:00:00.000Z",
      full_released_at: "2023-03-08T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-03-08T00:00:00.000Z",
      full_released_at: "2023-03-08T00:00:00.000Z",
      deprecated_at: null
    }
  }
};
var meta_default51 = meta51;

// data/chains/V2/eth/consensus/goerli-cl/meta.ts
var meta52 = {
  id: "goerli-cl",
  graph_id: null,
  name: "Goerli Consensus Layer",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-03-08T00:00:00.000Z",
      full_released_at: "2023-03-08T00:00:00.000Z",
      deprecated_at: "2023-03-21T00:00:00.000Z"
    },
    substreams: {
      beta_released_at: "2023-03-08T00:00:00.000Z",
      full_released_at: "2023-03-08T00:00:00.000Z",
      deprecated_at: "2023-03-21T00:00:00.000Z"
    }
  }
};
var meta_default52 = meta52;

// data/chains/V2/eth/consensus/sepolia-cl/meta.ts
var meta53 = {
  id: "sepolia-cl",
  graph_id: null,
  name: "Sepolia Consensus Layer",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-03-08T00:00:00.000Z",
      full_released_at: "2023-03-08T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-03-08T00:00:00.000Z",
      full_released_at: "2023-03-08T00:00:00.000Z",
      deprecated_at: null
    }
  }
};
var meta_default53 = meta53;

// data/chains/V2/starknet/meta.ts
var meta54 = {
  id: "starknet",
  graph_id: null,
  name: "Starknet",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/starknet",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://www.starknet.io/"
  }
};
var meta_default54 = meta54;

// data/chains/V2/sei/meta.ts
var meta55 = {
  id: "sei",
  graph_id: null,
  name: "Sei",
  alt_names: [],
  standard: "sei",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "tokens/sei",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://www.sei.io/"
  }
};
var meta_default55 = meta55;

// data/chains/V2/cronos/meta.ts
var meta56 = {
  id: "cronos",
  name: "Cronos",
  alt_names: [],
  graph_id: null,
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/cronos",
    brand_theme: "dark",
    variants: ["branded", "mono"]
  },
  supported_services: {
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    website: "https://cronos.org/"
  }
};
var meta_default56 = meta56;

// data/chains/V2/ore/meta.ts
var meta57 = {
  id: "ore",
  graph_id: null,
  name: "Ore",
  alt_names: [],
  standard: "antelope",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.antelope.type.v1.Block",
    url: "https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1"
  },
  icon: {
    id: "networks/ore",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    rpc: {
      beta_released_at: "2023-03-01T00:00:00.000Z",
      full_released_at: "2023-03-01T00:00:00.000Z",
      deprecated_at: "2023-03-21T00:00:00.000Z"
    },
    firehose: {
      beta_released_at: "2023-03-01T00:00:00.000Z",
      full_released_at: "2023-03-01T00:00:00.000Z",
      deprecated_at: "2023-03-21T00:00:00.000Z"
    },
    substreams: {
      beta_released_at: "2023-03-01T00:00:00.000Z",
      full_released_at: "2023-03-01T00:00:00.000Z",
      deprecated_at: "2023-03-21T00:00:00.000Z"
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://ore.network/"
  }
};
var meta_default57 = meta57;

// data/chains/V2/ore/testnets/orestage/meta.ts
var meta58 = {
  id: "orestage",
  graph_id: null,
  name: "Ore Stage",
  alt_names: [],
  standard: "antelope",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.antelope.type.v1.Block",
    url: "https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1"
  },
  supported_services: {
    rpc: {
      beta_released_at: "2023-03-01T00:00:00.000Z",
      full_released_at: "2023-03-01T00:00:00.000Z",
      deprecated_at: "2023-03-21T00:00:00.000Z"
    },
    firehose: {
      beta_released_at: "2023-03-01T00:00:00.000Z",
      full_released_at: "2023-03-01T00:00:00.000Z",
      deprecated_at: "2023-03-21T00:00:00.000Z"
    },
    substreams: {
      beta_released_at: "2023-03-01T00:00:00.000Z",
      full_released_at: "2023-03-01T00:00:00.000Z",
      deprecated_at: "2023-03-21T00:00:00.000Z"
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default58 = meta58;

// data/chains/V2/cardano/meta.ts
var meta59 = {
  id: "cardano",
  graph_id: null,
  name: "Cardano",
  alt_names: [],
  standard: "cardano",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/cardano",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://cardano.org/"
  }
};
var meta_default59 = meta59;

// data/chains/V2/linea/meta.ts
var meta60 = {
  id: "linea",
  name: "Linea",
  alt_names: [],
  graph_id: "linea",
  standard: "erc20",
  is_detailed_blocks: false,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "networks/linea",
    brand_theme: "dark",
    variants: ["branded", "mono"]
  },
  supported_services: {
    rpc: {
      beta_released_at: "2024-08-01T00:00:00Z",
      full_released_at: null,
      deprecated_at: null
    },
    firehose: {
      beta_released_at: "2024-08-01T00:00:00Z",
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-08-01T00:00:00Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    website: "https://linea.build/"
  }
};
var meta_default60 = meta60;

// data/chains/V2/eos/meta.ts
var meta61 = {
  id: "eos",
  graph_id: null,
  name: "EOS",
  alt_names: [],
  standard: "antelope",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.antelope.type.v1.Block",
    url: "https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1"
  },
  icon: {
    id: "tokens/eos",
    brand_theme: "light",
    variants: ["mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://eosnetwork.com/"
  }
};
var meta_default61 = meta61;

// data/chains/V2/eos/testnets/jungle4/meta.ts
var meta62 = {
  id: "jungle4",
  graph_id: null,
  name: "Jungle4",
  alt_names: [],
  standard: "antelope",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.antelope.type.v1.Block",
    url: "https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default62 = meta62;

// data/chains/V2/eos/testnets/kylin/meta.ts
var meta63 = {
  id: "kylin",
  graph_id: null,
  name: "Kylin",
  alt_names: [],
  standard: "antelope",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.antelope.type.v1.Block",
    url: "https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-12-01T00:00:00.000Z",
      full_released_at: "2023-12-01T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default63 = meta63;

// data/chains/V2/eos/evms/jungle4evm/meta.ts
var meta64 = {
  id: "jungle4evm",
  graph_id: null,
  name: "Jungle4 EVM",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  is_evm_testnet: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-09-20T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-09-20T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2023-09-20T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default64 = meta64;

// data/chains/V2/eos/evms/eosevm/meta.ts
var meta65 = {
  id: "eosevm",
  graph_id: null,
  name: "EOS EVM",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default65 = meta65;

// data/chains/V2/base/meta.ts
var meta66 = {
  id: "base",
  graph_id: "base",
  name: "Base",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "tokens/base",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: "2024-03-06T00:00:00.000Z",
      full_released_at: "2024-03-06T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-03-06T00:00:00.000Z",
      full_released_at: "2024-03-06T00:00:00.000Z",
      deprecated_at: null
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://www.base.org/"
  }
};
var meta_default66 = meta66;

// data/chains/V2/gnosis/meta.ts
var meta67 = {
  id: "gnosis",
  graph_id: "gnosis",
  name: "Gnosis",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  icon: {
    id: "tokens/gno",
    brand_theme: "dark",
    variants: ["branded", "mono"]
  },
  supported_services: {
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  metadata: {
    website: "https://gnosis.io/"
  }
};
var meta_default67 = meta67;

// data/chains/V2/gnosis/testnets/chiado/meta.ts
var meta68 = {
  id: "chiado",
  graph_id: null,
  name: "Chiado",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    rpc: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default68 = meta68;

// data/chains/V2/gnosis/consensus/chiado-cl/meta.ts
var meta69 = {
  id: "chiado-cl",
  graph_id: null,
  name: "Chiado Consensus Layer",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2024-08-01T00:00:00.000Z",
      full_released_at: null,
      deprecated_at: null
    }
  }
};
var meta_default69 = meta69;

// data/chains/V2/gnosis/consensus/gnosis-cl/meta.ts
var meta70 = {
  id: "gnosis-cl",
  graph_id: null,
  name: "Gnosis Consensus Layer",
  alt_names: [],
  standard: "erc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.ethereum.type.v2.Block",
    url: "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  supported_services: {
    firehose: {
      beta_released_at: "2023-03-08T00:00:00.000Z",
      full_released_at: "2023-03-08T00:00:00.000Z",
      deprecated_at: null
    },
    substreams: {
      beta_released_at: "2023-03-08T00:00:00.000Z",
      full_released_at: "2023-03-08T00:00:00.000Z",
      deprecated_at: null
    }
  }
};
var meta_default70 = meta70;

// data/chains/V2/litecoin/meta.ts
var meta71 = {
  id: "litecoin",
  name: "Litecoin",
  alt_names: ["LTC"],
  graph_id: null,
  standard: "ltc20",
  is_detailed_blocks: true,
  block_type: {
    label: "sf.litecoin.type.v1.Block",
    url: "https://buf.build/streamingfast/firehose-litecoin/docs/main:sf.litecoin.type.v1"
  },
  icon: {
    id: "tokens/ltc",
    brand_theme: "both",
    variants: ["branded", "mono"]
  },
  supported_services: {
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null
    }
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: "L1",
    website: "https://litecoin.org/"
  }
};
var meta_default71 = meta71;

// data/services.ts
var services_exports = {};
__export(services_exports, {
  default: () => services_default
});
var services = [
  {
    name: "Substreams",
    endpoint_slug: "substreams",
    port: 443
  },
  {
    name: "Firehose",
    endpoint_slug: "firehose",
    port: 443
  },
  {
    name: "RPC",
    endpoint_slug: "rpc",
    port: 443
  }
];
var services_default = services;

// types/index.ts
var types_exports = {};

// utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  chainsUtils: () => chains_exports,
  default: () => utils_default,
  service_configs: () => service_configs_exports
});

// utils/chains.ts
var chains_exports = {};
__export(chains_exports, {
  findChainById: () => findChainById,
  findSubnetMainnet: () => findSubnetMainnet,
  getChainIconUrl: () => getChainIconUrl,
  getChainStatus: () => getChainStatus,
  getChainSubnets: () => getChainSubnets,
  getNumberOfSupportedChains: () => getNumberOfSupportedChains,
  getSupportedServices: () => getSupportedServices,
  hasChainFullBlockSupport: () => hasChainFullBlockSupport,
  isChainBeta: () => isChainBeta,
  isChainConsensusLayer: () => isChainConsensusLayer,
  isChainDeprecated: () => isChainDeprecated,
  isChainEVM: () => isChainEVM,
  isChainSupported: () => isChainSupported,
  isChainTestnet: () => isChainTestnet,
  isServiceBeta: () => isServiceBeta,
  isServiceDeprecated: () => isServiceDeprecated,
  isServiceSupported: () => isServiceSupported
});
var isServiceSupported = (chain, service) => {
  if (!chain.supported_services) {
    return false;
  }
  const serviceStatusDates = chain.supported_services[service];
  if (!serviceStatusDates) {
    return false;
  }
  return serviceStatusDates.full_released_at !== null && serviceStatusDates.deprecated_at === null;
};
var isServiceBeta = (chain, service) => {
  const serviceStatusDates = chain.supported_services[service];
  return serviceStatusDates && serviceStatusDates.beta_released_at !== null && serviceStatusDates.deprecated_at === null && !isServiceSupported(chain, service);
};
var isServiceDeprecated = (chain, service) => {
  const serviceStatusDates = chain.supported_services[service];
  return serviceStatusDates && (serviceStatusDates.beta_released_at !== null || serviceStatusDates.full_released_at !== null) && serviceStatusDates.deprecated_at !== null;
};
var isChainSupported = (chain) => {
  return isServiceSupported(chain, "firehose") || isServiceSupported(chain, "substreams") || isServiceSupported(chain, "rpc") || isServiceSupported(chain, "datasets");
};
var isChainBeta = (chain) => {
  return (isServiceBeta(chain, "firehose") || isServiceBeta(chain, "substreams") || isServiceBeta(chain, "datasets") || isServiceBeta(chain, "rpc")) && !isServiceSupported(chain, "firehose") && !isServiceSupported(chain, "substreams") && !isServiceSupported(chain, "datasets") && !isServiceSupported(chain, "rpc");
};
var isChainDeprecated = (chain) => {
  return isServiceDeprecated(chain, "firehose") || isServiceDeprecated(chain, "substreams") || isServiceDeprecated(chain, "datasets") || isServiceDeprecated(chain, "rpc");
};
var findChainById = (db, id) => {
  for (const chain of db) {
    if (chain.id === id) {
      return chain;
    }
    const consensus = chain.consensus?.find((consensus2) => consensus2.id === id);
    if (consensus) {
      return consensus;
    }
    const testnet = chain.testnets?.find((testnet2) => testnet2.id === id);
    if (testnet) {
      return testnet;
    }
    const evm = chain.evms?.find((evm2) => evm2.id === id);
    if (evm) {
      return evm;
    }
  }
  return void 0;
};
var findSubnetMainnet = (db, id) => {
  for (const chain of db) {
    if (chain.id === id) {
      return chain;
    }
    const consensus = chain.consensus?.find((consensus2) => consensus2.id === id);
    if (consensus) {
      return chain;
    }
    const testnet = chain.testnets?.find((testnet2) => testnet2.id === id);
    if (testnet) {
      return chain;
    }
    const evm = chain.evms?.find((evm2) => evm2.id === id);
    if (evm) {
      return chain;
    }
  }
  return void 0;
};
var isChainConsensusLayer = (chain) => {
  return chain.id.slice(-3).includes("-cl");
};
var isChainEVM = (db, chain) => {
  let isEVM = false;
  const mainnet = findSubnetMainnet(db, chain.id);
  if (mainnet) {
    mainnet.evms?.forEach((evm) => {
      if (evm.id === chain.id) {
        isEVM = true;
      }
    });
  }
  return isEVM;
};
var isChainTestnet = (db, chain) => {
  let isTestnet = false;
  const mainnet = findSubnetMainnet(db, chain.id);
  if (mainnet) {
    mainnet.testnets?.forEach((testnet) => {
      if (testnet.id === chain.id) {
        isTestnet = true;
      }
    });
  }
  return isTestnet;
};
var hasChainFullBlockSupport = (chain) => {
  return chain.is_detailed_blocks;
};
var getNumberOfSupportedChains = (chains) => {
  let supportedChains = 0;
  chains.filter((c) => isChainSupported(c)).forEach((c) => {
    supportedChains++;
    c.consensus?.forEach((consensus) => {
      if (isChainSupported(consensus)) {
        supportedChains++;
      }
    });
    c.evms?.forEach((evm) => {
      if (isChainSupported(evm)) {
        supportedChains++;
      }
    });
    c.testnets?.forEach((tn) => {
      if (isChainSupported(tn)) {
        supportedChains++;
      }
    });
  });
  return supportedChains;
};
var getChainStatus = (chain) => {
  if (isChainSupported(chain)) {
    return "supported";
  }
  if (isChainBeta(chain)) {
    return "beta";
  }
  if (isChainDeprecated(chain)) {
    return "deprecated";
  }
  return "unsupported";
};
var getSupportedServices = (chain) => {
  let supServices = [];
  ["rpc", "firehose", "substreams", "datasets"].forEach(
    (service) => {
      if (isServiceBeta(chain, service)) {
        supServices.push([
          service,
          chain.supported_services[service]?.beta_released_at
        ]);
      } else if (isServiceSupported(chain, service)) {
        supServices.push([
          service,
          chain.supported_services[service]?.full_released_at
        ]);
      }
    }
  );
  return supServices;
};
var getChainSubnets = (chain) => {
  return chain.testnets?.concat(chain.evms || []).concat(chain.consensus || []);
};
var getChainIconUrl = (chainIcon, theme, chainId) => {
  const iconAssetsFolder = "/assets/chains/";
  if (chainIcon?.variants && chainIcon.variants?.includes("branded")) {
    if (chainIcon?.brand_theme === "both") {
      return `${iconAssetsFolder}${chainId}.branded.svg`;
    } else if (chainIcon.brand_theme === "light") {
      if (theme === "light") {
        return `${iconAssetsFolder}${chainId}.dark.svg`;
      } else {
        return `${iconAssetsFolder}${chainId}.branded.svg`;
      }
    } else {
      if (theme === "dark") {
        return `${iconAssetsFolder}${chainId}.light.svg`;
      } else {
        return `${iconAssetsFolder}${chainId}.branded.svg`;
      }
    }
  } else {
    if (theme === "light") {
      return `${iconAssetsFolder}${chainId}.dark.svg`;
    } else {
      return `${iconAssetsFolder}${chainId}.light.svg`;
    }
  }
};

// utils/service_configs/index.ts
var service_configs_exports = {};
__export(service_configs_exports, {
  firehose: () => firehose_exports,
  rpc: () => rpc_exports,
  substreams: () => substreams_exports
});

// utils/service_configs/firehose.ts
var firehose_exports = {};
__export(firehose_exports, {
  default: () => firehose_default
});
var firehose = services_default.filter(
  (s) => s.endpoint_slug.indexOf("firehose") > -1
)[0];
var generateGRPCurlConfig = (chain, apiKey) => {
  return [
    `# Set your API Key`,
    `export PINAX_KEY=${apiKey}`,
    ``,
    `# Set your JWT`,
    `export FIREHOSE_API_TOKEN=$(curl https://auth.pinax.network/v1/auth/issue -s --data-binary '{"api_key":"'$PINAX_KEY'"}' | jq -r .token)`,
    ``,
    `# Run Firehose`,
    `grpcurl -keepalive-time 30 -max-msg-sz 50241867 -d '{"start_block_num": -100}' -H 'Authorization: "$FIREHOSE_API_TOKEN"' ${chain.id}.firehose.pinax.network:443 sf.firehose.v2.Stream.Blocks`
  ].join("\n");
};
var generateTomlEnv = (chain, token) => {
  return [
    `PINAX_RPC_NODE=${chain.id}.rpc.pinax.network`,
    `PINAX_JWT=${token}`
  ].join("\n");
};
var generateTomlConfig = (chain) => {
  const getERC20ConfigLines = (chain2) => {
    if (chain2.standard?.localeCompare("ERC-20") === 0)
      return [
        `   # Ethereum Based Chain`,
        `   { label = "bootstrap", details = { type = "web3", url = "$PINAX_RPC_NODE", features = [ "archive" ] }},`
      ];
    return [];
  };
  return [
    `[chains.${chain.graph_id}]`,
    `shard = "primary"`,
    `provider = [`,
    ...getERC20ConfigLines(chain),
    `    # Firehose Configuration`,
    `    { label = "firehose", details = { type = "firehose", url = "https://${chain.id}.firehose.pinax.network:443", token = "$PINAX_JWT" }},`
  ].join("\n");
};
var firehose_default = {
  service: firehose,
  generateGRPCurlConfig,
  generateTomlEnv,
  generateTomlConfig
};

// utils/service_configs/rpc.ts
var rpc_exports = {};
__export(rpc_exports, {
  default: () => rpc_default
});
var rpc = services_default.filter(
  (s) => s.endpoint_slug.indexOf("rpc") > -1
)[0];
var generateCurlConfig = (chain, apiKey) => {
  return `curl -4vsH 'Content-Type: application/json' -d '{"jsonrpc": "2.0", "method": "eth_getBlockByNumber", "params": ["latest", false], "id": 1}' https://${chain.id}.rpc.pinax.network/v1/${apiKey}/`;
};
var rpc_default = {
  service: rpc,
  generateCurlConfig
};

// utils/service_configs/substreams.ts
var substreams_exports = {};
__export(substreams_exports, {
  default: () => substreams_default
});
var substreams = services_default.filter(
  (s) => s.endpoint_slug.indexOf("substreams") > -1
)[0];
var generateTomlEnv2 = (chain, token) => {
  const getEthBasedEnv = () => {
    if (chain.standard?.localeCompare("ERC-20") === 0)
      return `PINAX_RPC_NODE=${chain.id}.rpc.pinax.network
`;
    return "";
  };
  const getSubstreamsEnv = () => {
    return `PINAX_JWT=${token}`;
  };
  return ["# ...\n", getEthBasedEnv(), getSubstreamsEnv()].join("");
};
var generateJavascriptEnv = (chain, apiKey) => {
  return `# ...
MANIFEST=https://example.com/substreams.spkg
SUBSTREAMS_URL=https://${chain.id}.${substreams.endpoint_slug}.pinax.network:${substreams.port}
SUBSTREAMS_API_KEY=${apiKey}`;
};
var generateCurlConfig2 = (chain, api_key) => {
  return [
    `# Set your API Key`,
    `export PINAX_KEY=${api_key}`,
    ``,
    `# Set your JWT`,
    `export SUBSTREAMS_API_TOKEN=$(curl https://auth.pinax.network/v1/auth/issue -s --data-binary '{"api_key":"'$PINAX_KEY'"}' | jq -r .token)`,
    ``,
    `# Run Substreams`,
    `substreams run -e ${chain.id}.substreams.pinax.network:443 https://github.com/pinax-network/substreams/releases/download/blocks-v0.1.0/blocks-v0.1.0.spkg map_blocks -s -10`
  ].join("\n");
};
var generateTomlConfig2 = (chain) => {
  const getChainsLine = (chain2) => `[chains.${chain2.graph_id}]
`;
  const getShardLine = () => `shard = "primary"
`;
  const getEthConfigLines = (chain2) => {
    if (chain2.standard?.localeCompare("ERC-20") === 0)
      return `    # Ethereum Based Chain
    { label = "bootstrap", details = { type = "web3", url = "$PINAX_RPC_NODE", features = [ "archive" ] }},
`;
    return "";
  };
  const getSubstreamsConfigLines = (chain2) => `    # Substreams Configuration
    { label = "substreams", details = { type = "substreams", url = "https://${chain2.id}.${substreams.endpoint_slug}.pinax.network:${substreams.port}", token = "$PINAX_JWT" }},
`;
  let config = [
    getChainsLine(chain),
    getShardLine(),
    "provider = [\n",
    getEthConfigLines(chain)
  ].join("");
  config += getSubstreamsConfigLines(chain);
  config += "]\n";
  return config;
};
var generateJavascriptConfig = () => {
  return `import { createRegistry, createRequest } from \u201C@substreams/core\u201D;
import { readPackage } from \u201C@substreams/manifest\u201D;
import { BlockEmitter, createDefaultTransport } from \u201C@substreams/node\u201D;

const { MANIFEST, SUBSTREAMS_URL, SUBSTREAMS_API_KEY } = process.env;

// Read Substream
const substreamPackage = await readPackage({MANIFEST});

// Connect Transport
const headers = new Headers({ \u201CUser-Agent\u201D: \u201C@substreams/node\u201D });
const registry = createRegistry(substreamPackage);
const transport = createDefaultTransport({SUBSTREAMS_URL}, {SUBSTREAMS_API_KEY}, registry, headers);
const request = createRequest({substreamPackage, outputModule: \u201Cgraph_out\u201D, startBlockNum: -1});

// NodeJS Events
const emitter = new BlockEmitter(transport, request, registry);

// Session Trace ID
emitter.on("session", (session) => {
  console.dir(session);
});

// Stream Blocks
emitter.on("anyMessage", (message, cursor, clock) => {
  console.dir(message);
  console.dir(cursor);
  console.dir(clock);
});

// Start Emitter
await emitter.start();
console.log("\u2705 Done")`;
};
var substreams_default = {
  service: substreams,
  generateTomlEnv: generateTomlEnv2,
  generateJavascriptEnv,
  generateCurlConfig: generateCurlConfig2,
  generateTomlConfig: generateTomlConfig2,
  generateJavascriptConfig
};

// utils/index.ts
var utils_default = { chainsUtils: chains_exports, service_configs: service_configs_exports };

// index.ts
var chains_default = { chains: V2_exports, services: services_exports, types: types_exports, utils: utils_exports };
export {
  V2_exports as chains,
  chains_default as default,
  services_exports as services,
  types_exports as types,
  utils_exports as utils
};
