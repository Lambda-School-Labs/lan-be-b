const database = require('../database/dbConfig');

const add = user => {
    return database('users').insert(user).returning('*');
};

const find = filter => {
    return database('users').where(filter).first();
};

const update = (id, track) => {
    return database('users').where({ id }).update({ track }).returning('*');
};

const fetchPosts = userID => {
    return database('posts').where('user_id', userID);
};

const fetchComments = userID => {
    return database('comments').where('user_id', userID);
};

module.exports = {
    add,
    find,
    update,
    fetchPosts,
    fetchComments
};