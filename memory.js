const FileHistory = require('./history/FileHistory');
const HistoryManager = require('./history/HistoryManager');

module.exports = (fileName) => {

    const historyManagerInstance = new HistoryManager();
    historyManagerInstance.setStrategy(new FileHistory(fileName));

    return historyManagerInstance;
};