"use strict";

const {addUser,getUser,deleteUser,getAllUser}=require('./Dao/userDao')


module.exports={
  addUser,
  getUser,
  deleteUser,
  getAllUser
}