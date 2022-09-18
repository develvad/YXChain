import { SHA256 } from 'crypto-js';



class Block {
    constructor(timestamp, previousHash, hash, data) {
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = data;
    }

    static get genesis() {
        const timestamp = (new Date(2010, 0, 1)).getTime();
        return new this(timestamp, undefined, 'Bloque-Genesis', [])
    }

    static mine(previousBlock, payload) {
        const timestamp = Date.now();
        const { hash: previousHash } = previousBlock;
        const hash = Block.hash(timestamp, previousHash, payload);

        return new this(timestamp, previousHash , hash, payload);
    }

    static hash(timestamp, previousHash, data) {
        return SHA256(`${timestamp}${previousHash}${data}`).toString();
    }

    toString() {
        const { timestamp, previousHash, hash, data } = this;
        return `
            Block: - 
            timestamp       : ${timestamp}
            previousHash    : ${previousHash}
            hash            : ${hash}
            data            : ${data}
        `;
    }
}

export default Block;