const ProtocolParser = require('../parsers/protocolParser');
const { symbolMapping } = require('../../config/symbols');
const logger = require('../../utils/logger');

class MarketDataHandler {
  static handleSymbolList(socket) {
    try {
      const symbols = Object.values(symbolMapping);
      const response = ProtocolParser.createSymbolListResponse(symbols);
      socket.write(response);
    } catch (err) {
      logger.error('Symbol list handler error:', err);
    }
  }

  static handleSymbolInfo(socket) {
    try {
      const response = ProtocolParser.createSymbolInfoResponse();
      socket.write(response);
    } catch (err) {
      logger.error('Symbol info handler error:', err);
    }
  }

  static handleMarketInfo(socket) {
    try {
      const response = ProtocolParser.createMarketInfoResponse();
      socket.write(response);
    } catch (err) {
      logger.error('Market info handler error:', err);
    }
  }

  static handleTickInfo(socket) {
    try {
      const response = ProtocolParser.createTickInfoResponse();
      socket.write(response);
    } catch (err) {
      logger.error('Tick info handler error:', err);
    }
  }

  static handleQuoteRequest(socket) {
    try {
      const response = ProtocolParser.createQuoteResponse();
      socket.write(response);
    } catch (err) {
      logger.error('Quote request handler error:', err);
    }
  }

  static handleMarketWatch(socket) {
    try {
      const response = ProtocolParser.createMarketWatchResponse();
      socket.write(response);
    } catch (err) {
      logger.error('Market watch handler error:', err);
    }
  }
}