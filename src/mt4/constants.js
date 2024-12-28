// MT4 Protocol Constants
exports.MT4_COMMANDS = {
  // Connection commands
  CONNECT: 0x00,
  LOGIN: 0x02,
  LOGOUT: 0x04,
  VERSION: 0x07,
  
  // Market data commands
  SYMBOL_LIST: 0x0A,
  PRICE_REQUEST: 0x0C,
  TICK_INFO: 0x81,
  MARKET_INFO: 0x83,
  
  // Account commands
  ACCOUNT_INFO: 0x46,
  TRADE_INFO: 0x48,
  SERVER_TIME: 0x4E,
  
  // Additional commands
  PING: 0x51,
  CONFIG: 0x75,
  HISTORY: 0x8F,
  
  // Extended commands
  SYMBOL_INFO: 0x4C,
  TRADE_STATUS: 0x37,
  SERVER_STATUS: 0x73,
  QUOTE_REQUEST: 0x79,
  TRADE_REQUEST: 0xD1,
  TRADE_HISTORY: 0x94,
  SERVER_CONFIG: 0xC7,
  MARKET_WATCH: 0x5B,
  TRADE_CONTEXT: 0x17
};