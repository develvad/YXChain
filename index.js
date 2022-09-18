import PKG from './package.json';
import Block from './src/blockchain/Block';

const { name, version } = PKG;
console.log(name, '-', version, 'Starting...');

const { genesis } = Block;
console.log(genesis.toString());

const block1 = Block.mine(genesis, 'Dato-1');
console.log(block1.toString());

const block2 = Block.mine(block1, 'Dato-2');
console.log(block2.toString());