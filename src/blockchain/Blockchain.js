import Block from './Block/Block';

class Blockchain {
    constructor() {
        this.blocks[Block.genesis];
    }

    addBlock(data) {
        const lastBlock = this.blocks[this.blocks.lenght - 1];     
        const newBlock = Block.mineBlock(lastBlock, data);
        this.blocks.push(newBlock);
    }
}
