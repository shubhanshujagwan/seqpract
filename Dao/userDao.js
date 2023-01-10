const User = require('../models/User')
User.sync();

const addUser = async (event, ctx, callback) => {
    const { firstName, lastName, email } = JSON.parse(event.body)

    const user = await User.create({ firstName, lastName, email })
    
    const response = {
        statusCode: 201,
        body: JSON.stringify({
            status: "User added successfully",
            user
        }),

    }
    callback(null, response)
}


const getUser = async (event, ctx, callback) => {
    const { key } = event.pathParameters;
    let response;
    const user = await User.findOne({ where: { id: key } });
    
    if (user === null) {
        response = {
            statusCode: 400,
            body: JSON.stringify({
                status: "User not found",
                Error: "Please enter correct key"
            })
        }
    }
    else {
        response = {
            statusCode: 200,
            body: JSON.stringify({
                status: "User found",
                user
            }),

        }
    }
    callback(null, response)
}

const deleteUser = async (event, ctx, callback) => {
    const { key } = event.pathParameters;
    let response;
    const user = await User.destroy({ where: { id: key } });
    
    if (!user) {
        response = {
            statusCode: 400,
            body: JSON.stringify({
                status: "Unsuccessful",
                Error: "No user present with this key, please enter correct ky"
            })
        }
    }
    else {
        response = {
            statusCode: 200,
            body: JSON.stringify({
                status: "Successfully deleted",
            }),

        }
    }
    callback(null, response)
}


const getAllUser = async (event, ctx, callback) => {
    let response;
    const users = await User.findAll();
    
    if (users.length == 0) {
        response = {
            statusCode: 400,
            body: JSON.stringify({
                Message: "No user present, Please add user"
            })
        }
    }
    else {
        response = {
            statusCode: 200,
            body: JSON.stringify({
                status: "Successful",
                users
            }),

        }
    }
    callback(null, response)
}

module.exports = {
    addUser,
    getUser,
    deleteUser,
    getAllUser
}
