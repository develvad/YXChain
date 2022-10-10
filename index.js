import PKG from './package.json';
import Block from './src/blockchain/Block/Block';

const { name, version } = PKG;
console.log(name, '-', version, 'Starting...');

const { genesis } = Block;
console.log(genesis.toString());

const block1 = Block.mineBlock(genesis, 'data-1');
console.log(block1.toString());

const block2 = Block.mineBlock(block1, 'data-2');
console.log(block2.toString());

// const block = new Block(Date.now(), genesis.hash, 'Hash_de_bloque', 'data-for-block');
// console.log(block.toString());

// const block2 = new Block(Date.now(), block.hash, 'Hash_de_bloque2', 'data-for-block2');
// console.log(block2.toString());