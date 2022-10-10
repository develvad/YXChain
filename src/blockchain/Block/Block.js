import { SHA256 } from 'crypto-js';

class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    static get genesis() {
        const timestamp = (new Date(2000, 0, 1)).getTime();
        return new this(timestamp, undefined, 'hash-one', 'data-one');
    }

    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);
        return new this(timestamp, lastHash, hash, data);
    }

    static hash(timestamp, previusHash, data) {
        return SHA256(`${timestamp, previusHash, data}`).toString();
    }

    toString() {
        const {
            timestamp, lastHash, hash, data
        } = this;
        return `
            timestamp:  ${timestamp}
            lastHash:   ${lastHash}
            hash:       ${hash}
            data:       ${data}
        `;
    }
}

export default Block;
