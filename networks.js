var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  magic: hex('22053570'),
  addressVersion: 75,
  privKeyVersion: 203,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('c28cec4d563943a8be2d8da8b692062833553b1a541426065cf987bd71080000'),
    merkle_root: hex('e4454b9cb81c1ce04276c70f36d27f7b1872302b2a88af3d602d079dde35a516'),
    height: 0,
    nonce: 223008,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1414644354,
    bits: 504365055,
  },
  dnsSeeds: [
    'vtrseed.cloudns.asia'
  ],
  defaultClientPort: 22524
};

exports.testnet = {
  name: 'testnet',
  magic: hex('0711050b'),
  addressVersion: 0x7f,
  privKeyVersion: 255,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('726fad846b2d5101883f0d5fea8f732d8a49ec0828c8ed475238c1870a910000'),
    merkle_root: hex('26a3ff5d3dc46b091e7b58b6022982e6d27dff1bab3bd1da6beb4790983c87c4'),
    height: 0,
    nonce: 55887,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1414644354,
    bits: 0x1f00ffff,
  },
  dnsSeeds: [
    'testnet-vtrseed.cloudns.asia'
  ],
  defaultClientPort: 22525
};
