const FileHistory = require('./FileHistory');
const HistoryManager = require('./HistoryManager');

module.exports = class MemoryFactory {

  getHistoryModel(fileName) {
    const historyManagerInstance = new HistoryManager();
    historyManagerInstance.setStrategy(new FileHistory(fileName));
    return historyManagerInstance;
  }

};
