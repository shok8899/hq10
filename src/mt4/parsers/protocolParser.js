const { MT4_COMMANDS } = require('../constants');

class ProtocolParser {
  static createConnectResponse() {
    const buffer = Buffer.alloc(8);
    buffer[0] = MT4_COMMANDS.CONNECT;
    buffer[1] = 0x01; // Success
    buffer.writeUInt16LE(0x0100, 2); // Protocol version 1.0
    buffer.writeUInt32LE(0, 4); // Reserved
    return buffer;
  }

  static createSymbolInfoResponse() {
    const buffer = Buffer.alloc(8);
    buffer[0] = MT4_COMMANDS.SYMBOL_INFO;
    buffer[1] = 0x01; // Success
    buffer.writeUInt16LE(0, 2); // Reserved
    buffer.writeUInt32LE(Date.now() / 1000, 4); // Current time
    return buffer;
  }

  static createQuoteResponse() {
    const buffer = Buffer.alloc(8);
    buffer[0] = MT4_COMMANDS.QUOTE_REQUEST;
    buffer[1] = 0x01; // Success
    buffer.writeUInt16LE(0, 2); // Reserved
    buffer.writeUInt32LE(Date.now() / 1000, 4);
    return buffer;
  }

  static createMarketWatchResponse() {
    const buffer = Buffer.alloc(8);
    buffer[0] = MT4_COMMANDS.MARKET_WATCH;
    buffer[1] = 0x01; // Success
    buffer.writeUInt16LE(0, 2); // Reserved
    buffer.writeUInt32LE(Date.now() / 1000, 4);
    return buffer;
  }

  static createServerStatusResponse() {
    const buffer = Buffer.alloc(8);
    buffer[0] = MT4_COMMANDS.SERVER_STATUS;
    buffer[1] = 0x01; // Success
    buffer.writeUInt16LE(0, 2); // Reserved
    buffer.writeUInt32LE(Date.now() / 1000, 4);
    return buffer;
  }

  static createServerConfigResponse() {
    const buffer = Buffer.alloc(8);
    buffer[0] = MT4_COMMANDS.SERVER_CONFIG;
    buffer[1] = 0x01; // Success
    buffer.writeUInt16LE(0, 2); // Reserved
    buffer.writeUInt32LE(Date.now() / 1000, 4);
    return buffer;
  }

  static createPongResponse() {
    const buffer = Buffer.alloc(4);
    buffer[0] = MT4_COMMANDS.PING;
    buffer[1] = 0x01; // Success
    buffer.writeUInt16LE(0, 2); // Reserved
    return buffer;
  }
}

module.exports = ProtocolParser;