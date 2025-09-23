module.exports = {
    up(db) {
        return db.collection('users').insertMany([
            { name: 'ABC1', password: 'abc1@getnada.com' },
            { name: 'ABC2', password: 'abc2@getnada.com' },
            { name: 'ABC3', password: 'abc3@getnada.com' },
        ]);
    },

    down(db) {
        return db.collection('users').drop();
    },
};
