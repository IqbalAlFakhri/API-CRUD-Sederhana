const modelTabel_users = require('../models/tabel_user');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await modelTabel_users.getAllUsers();
        res.json({
            message: "Get All User berhasil terhubung",
            data: data,
        });   
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
};

const createNewUsers = async (req, res) => {
    const {body} = req;

    if (!body.Nama || !body.email || !body.address){
        return res.status(400).json({
            message: "Data Tidak Lengkap, bad request",
        })
    }
    try {
        await modelTabel_users.createNewUsers(body);
        res.status(201).json({
            message: "Create New User berhasil terhubung",
            data: req.body
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
};

const userUpdate = async (req, res) => {
    const {userID} = req.params;
    const {body} = req;
    try {
        await modelTabel_users.updateUsers(body, userID);
        res.status(201).json({
            message: "Update User berhasil terhubung",
            data: {
                id : userID,
                ...body,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })   
    }
};

const userDelete = async (req, res) => {
    const {userID} = req.params;
    try {
        await modelTabel_users.deleteUsers(userID);
        res.json({
            message: "Delete User berhasil terhubung",
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })  
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    userUpdate,
    userDelete
};