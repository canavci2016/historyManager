module.exports = class HistoryManager {
    strategy;

    setStrategy(strategyIns) {
        this.strategy = strategyIns;
    }

    takeSnapShot(configuration) {
        this.strategy.write(JSON.stringify(configuration));
    }

    restore(offset, limit) {
        try {
            let data = this.strategy.read();
            data = JSON.parse(data);
            if (data) {
                limit = data.limit;
                offset = data.offset;
            }
        } catch (error) {

        }

        return { offset, limit };
    }

    flush() {
        this.strategy.write("");
    }

}