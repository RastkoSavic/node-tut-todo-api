var mongoose = require('mongoose');

mongoose.Promise = global.Promise;



mongoose.connect('mongodb://RastkoS:mrasha23lab87@ds135179.mlab.com:35179/todo_api' || 'mongodb://127.0.0.1:27017/TodoApp');

module.exports = { mongoose };