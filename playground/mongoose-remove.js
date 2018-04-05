const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result), () => {
//     console.log(result);
// });

// Todo.findOneAndRemove()

Todo.findOneAndRemove({ _id: '5ac6a7b75cc94c1160a605d0' }).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5ac6a7b75cc94c1160a605d0').then((todo) => {
    console.log(todo);
});