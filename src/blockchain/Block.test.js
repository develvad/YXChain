import Block from './Block';

describe('Block', () => {
    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() => {
        timestamp = new Date(2010, 0, 1).getTime();
        previousBlock = Block.genesis;
        hash = 'Bloque-Genesis';
        data = [];
    });

    it('New Block with <params>', () => {
        const block = new Block(timestamp, previousBlock.hash, hash, data);
        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    it('<static> mine from Block', () => {
        const block = Block.mine(previousBlock, data);
        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
    });

    it('use static hash()', () => {
        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hasoutput = 'c9ce144f90e439a5cb475b5df93f3e2110ee8db50f70d7e4572184cfddfb9832';
        expect(hash).toEqual(hasoutput);
    });

    it('use toString', () => {
        const block = Block.mine(previousBlock, data);
        expect(typeof block.toString()).toEqual("string");
    });

});