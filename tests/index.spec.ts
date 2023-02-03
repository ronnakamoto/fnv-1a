import 'mocha';
import { assert } from "chai";
import fnv1a from "../src";

const DATA = {
    'STRING_SHORT': {
        text: 'Ron Nakamoto',
        hash_32: BigInt('0x3da014bc'),
        hash_64: BigInt('0xf5d0421cb1e2cd3c'),
        hash_128: BigInt('0x1bdf16862632143071975a9c3c7ac74c'),
        hash_256: BigInt('0x736717c365024892153c524fce95e52c0f33fc79c1cfa5abbc55f8142f53c79c'),
        hash_512: BigInt('0xc49c100735fc985903fa7eae043af7306a2f40b2b72e95dc7d9dbe0aae16a49ed40ec06ef9d6cb97eb2df3d7340b2aa7e5d6b0aa13211edadd6e82de124c7854'),
        hash_1024: BigInt('0xae859e431319ec6fcac09e933c0a78b0de0034aba17059c38c44ad716d5d0ae07f4df962b424ec80e3325400000000000000000000000000000000000000000000000000000000000000000000000000039c23a21aa5d3091842860bfe6a06043af9eac81ba7fc86c4b91e118db9e2f02514f432280fe595bdf9cdc9343165c0'),
    },
    'STRING_LONG': {
        text: 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks',
        hash_32: BigInt('0xe0ba955a'),
        hash_64: BigInt('0x92669f3c723cafba'),
        hash_128: BigInt('0x4622e29a97f211752258e96a8031c1f2'),
        hash_256: BigInt('0x856574b8dc9265130d516437714d8011e55519ffdf987583ed503e26250cc82a'),
        hash_512: BigInt('0x591eff3bb0dbedfbbba1a90682876fafedb202456a397f01cba1dff61752669c8705ba451c67c8eeabd9a2732be5efd8b4938f22f25e9b078d3e7126fb2f82f6'),
        hash_1024: BigInt('0x1c5a0702c88887ea6fac42f385d7ace400239b9f69d29f6dd5efa865089414bf977b70e3d45147db07c6e1577f021b7890c79902a5118b70e23ea3a1a39d519d9bbbada4276c3ba04a1993cc20ec77665cfdac1a88da967e143786a54a9ed3a55f467a5912eb392015572a7234c33e2947b970a28ae1ec21d673f394ed7b332c'),
    },
    'UNICODE_TEXT': {
        text: 'ℜ𝔬𝔫 𝔑𝔞𝔨𝔞𝔪𝔬𝔱𝔬',
        hash_32: BigInt('0xb8a56f5e'),
    },
    'UNICODE_EMOJI': {
        text: '😁😂😃',
        hash_32: BigInt('0xc9c86248'),
    }
};


describe('FNV-1A', () => {
    it('Should throw if an invalid `Option.size` is given', () => {
        assert.throws(() => fnv1a(DATA.STRING_SHORT.text, { size: 35 as never }));
    });

    it('Should not throw if a valid `Option.size` is given', () => {
        assert.doesNotThrow(() => fnv1a(DATA.STRING_SHORT.text, { size: 32 }));
    });

    it('Should given correct hash when `Options.size` is 32 and data is short', () => {
        const result = fnv1a(DATA.STRING_SHORT.text, { size: 32 });
        assert.equal(result, DATA.STRING_SHORT.hash_32);
    });

    it('Should given correct hash when `Options.size` is 32 and data is long', () => {
        const result = fnv1a(DATA.STRING_LONG.text, { size: 32 });
        assert.equal(result, DATA.STRING_LONG.hash_32);
    });

    it('Should given correct hash when `Options.size` is 64 and data is long', () => {
        const result = fnv1a(DATA.STRING_LONG.text, { size: 64 });
        assert.equal(result, DATA.STRING_LONG.hash_64);
    });

    it('Should given correct hash when `Options.size` is 64', () => {
        const result = fnv1a(DATA.STRING_SHORT.text, { size: 64 });
        assert.equal(result, DATA.STRING_SHORT.hash_64);
    });

    it('Should given correct hash when `Options.size` is 128', () => {
        const result = fnv1a(DATA.STRING_SHORT.text, { size: 128 });
        assert.equal(result, DATA.STRING_SHORT.hash_128);
    });

    it('Should given correct hash when `Options.size` is 256', () => {
        const result = fnv1a(DATA.STRING_SHORT.text, { size: 256 });
        assert.equal(result, DATA.STRING_SHORT.hash_256);
    });

    it('Should given correct hash when `Options.size` is 512', () => {
        const result = fnv1a(DATA.STRING_SHORT.text, { size: 512 });
        assert.equal(result, DATA.STRING_SHORT.hash_512);
    });

    it('Should given correct hash when `Options.size` is 1024', () => {
        const result = fnv1a(DATA.STRING_SHORT.text, { size: 1024 });
        assert.equal(result, DATA.STRING_SHORT.hash_1024);
    });

    it('Should given correct hash when data is unicode text', () => {
        const result = fnv1a(DATA.UNICODE_TEXT.text, { size: 32 });
        assert.equal(result, DATA.UNICODE_TEXT.hash_32);
    });

    it('Should given correct hash when data is emoji', () => {
        const result = fnv1a(DATA.UNICODE_EMOJI.text, { size: 32 });
        assert.equal(result, DATA.UNICODE_EMOJI.hash_32);
    });
});