const ProtocolParser = require('../parsers/protocolParser');
const logger = require('../../utils/logger');

class ServerHandler {
  static handleServerStatus(socket) {
    try {
      const response = ProtocolParser.createServerStatusResponse();
      socket.write(response);
    } catch (err) {
      logger.error('Server status handler error:', err);
    }
  }

  static handleServerConfig(socket) {
    try {
      const response = ProtocolParser.createServerConfigResponse();
      socket.write(response);
    } catch (err) {
      logger.error('Server config handler error:', err);
    }
  }

  static handlePing(socket) {
    try {
      const response = ProtocolParser.createPongResponse();
      socket.write(response);
    } catch (err) {
      logger.error('Ping handler error:', err);
    }
  }
}

module.exports = ServerHandler;