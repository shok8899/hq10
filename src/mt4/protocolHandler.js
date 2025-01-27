const { MT4_COMMANDS } = require('./constants');
const ConnectHandler = require('./handlers/connectHandler');
const MarketDataHandler = require('./handlers/marketDataHandler');
const ServerHandler = require('./handlers/serverHandler');
const logger = require('../utils/logger');

class MT4ProtocolHandler {
  handlePacket(socket, data) {
    try {
      if (!data || data.length === 0) {
        logger.warn('Received empty packet');
        return;
      }

      const command = data[0];
      logger.debug(`Received command: 0x${command.toString(16)}`);

      switch (command) {
        // Connection commands
        case MT4_COMMANDS.CONNECT:
          ConnectHandler.handleConnect(socket);
          break;
        case MT4_COMMANDS.LOGIN:
          ConnectHandler.handleLogin(socket, data);
          break;
        case MT4_COMMANDS.VERSION:
          ConnectHandler.handleConnect(socket);
          break;

        // Market data commands
        case MT4_COMMANDS.TICK_INFO:
          MarketDataHandler.handleTickInfo(socket);
          break;
        case MT4_COMMANDS.MARKET_INFO:
          MarketDataHandler.handleMarketInfo(socket);
          break;
        case MT4_COMMANDS.SYMBOL_LIST:
          MarketDataHandler.handleSymbolList(socket);
          break;
        case MT4_COMMANDS.SYMBOL_INFO:
          MarketDataHandler.handleSymbolInfo(socket);
          break;
        case MT4_COMMANDS.QUOTE_REQUEST:
          MarketDataHandler.handleQuoteRequest(socket);
          break;
        case MT4_COMMANDS.MARKET_WATCH:
          MarketDataHandler.handleMarketWatch(socket);
          break;

        // Server commands
        case MT4_COMMANDS.PING:
          ServerHandler.handlePing(socket);
          break;
        case MT4_COMMANDS.SERVER_STATUS:
          ServerHandler.handleServerStatus(socket);
          break;
        case MT4_COMMANDS.SERVER_CONFIG:
          ServerHandler.handleServerConfig(socket);
          break;

        default:
          this.handleUnknownCommand(socket, command);
      }
    } catch (err) {
      logger.error('Error handling packet:', err);
      this.sendErrorResponse(socket, data[0]);
    }
  }

  handleUnknownCommand(socket, command) {
    logger.warn(`Unknown command: 0x${command.toString(16)}`);
    this.sendErrorResponse(socket, command);
  }

  sendErrorResponse(socket, command) {
    const response = Buffer.alloc(4);
    response[0] = command;
    response[1] = 0x00; // Error
    response[2] = 0x00; // Reserved
    response[3] = 0x00; // Reserved
    socket.write(response);
  }
}

module.exports = new MT4ProtocolHandler();