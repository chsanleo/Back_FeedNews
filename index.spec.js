require('dotenv').config();

describe('file .env with the variables', () => {
    it(' Variable PORT defined with value ', () => {
        expect(process.env.PORT !== undefined && process.env.PORT !== null && process.env.PORT !== '')
        .toEqual(true);
    });
    it(' Variable MONGO_USER defined with value ', () => {
        expect(process.env.MONGO_USER !== undefined && process.env.MONGO_USER !== null && process.env.MONGO_USER !== '')
        .toEqual(true);
    });
    it(' Variable MONGO_PASS defined with value ', () => {
        expect(process.env.MONGO_PASS !== undefined && process.env.MONGO_PASS !== null && process.env.MONGO_PASS !== '')
        .toEqual(true);
    });
    it(' Variable MONGO_NAMEDB defined with value ', () => {
        expect(process.env.MONGO_NAMEDB !== undefined && process.env.MONGO_NAMEDB !== null && process.env.MONGO_NAMEDB !== '')
        .toEqual(true);
    });
    it(' Variable MONGO_CLUSTER defined with value ', () => {
        expect(process.env.MONGO_CLUSTER !== undefined && process.env.MONGO_CLUSTER !== null && process.env.MONGO_CLUSTER !== '')
        .toEqual(true);
    });
});