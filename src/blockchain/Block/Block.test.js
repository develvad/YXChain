import Block from './Block';

describe('Block', () => {

    let timestamp;
    let previusBlock;
    let data;
    let hash;

    beforeEach(() => {
        timestamp = new Date(2010, 0, 1);
        previusBlock = Block.genesis;
        data = 'data-test';
        hash = 'hashhhh';
    });

    it('create an instance with paramers', () => {
        const block = new Block(timestamp, previusBlock.hash, hash, data);
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(previusBlock.hash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });
   
    it('Mine Sucefully', () => {
        const block = Block.mineBlock(previusBlock, data);
        const hash = Block.hash(block.timestamp, block.lastHash, block.data);
        expect(block.lastHash).toEqual(previusBlock.hash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
        expect(block.hash.length).toEqual(64);
    }); 
});