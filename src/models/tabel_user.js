const DbPool = require('../config/database');

const getAllUsers = () => {
    const SQLquery = `SELECT * FROM tabel_user`;

    return DbPool.execute(SQLquery);
};

const createNewUsers = (body) => {
    const SQLquery =`   INSERT INTO tabel_user (Nama, email, address ) 
                        VALUES ('${body.Nama}','${body.email}','${body.address}')`;
    return DbPool.execute(SQLquery);
};

const updateUsers = (body, userID) => {
    const SQLquery =`   UPDATE tabel_user SET 
                        Nama='${body.Nama}', email='${body.email}', address='${body.address}'
                        WHERE id=${userID}`;
    return DbPool.execute(SQLquery);
};

const deleteUsers = (userID) => {
    const SQLquery =`   DELETE FROM tabel_user WHERE id=${userID}`;

    return DbPool.execute(SQLquery);
};

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers,
}
