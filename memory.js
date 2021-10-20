const MemoryFactory = require("../history/MemoryFactory");
const memoryFactoryInstance = new MemoryFactory();
const memento = memoryFactoryInstance.getHistoryModel(file);
