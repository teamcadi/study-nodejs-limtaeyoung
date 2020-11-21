const { findUser, updateUser } = require("../services");

const userController = {
    getUser: (req, res, next) => {
        const { id } = req.params;
        const result = await findUser({id});
        if (result instanceof Error) next(result);
        else res.status(200).json({success: true, user: result})
    },
    modifyUser: (req, res, next) => {
        const { id } = req.params;
        const { name } = req.body;
        const result = await updateUser({id, name});
        if (result instanceof Error) next(result);
        else res.status(200).json({success: true, user: result})


    },
    modifyUserPw: (req, res, next) => {
        const { id } = req.params;
        const { password, newPassword } = req.body;
        const result = await updateUser({id, password, newPassword});
        if (result instanceof Error) next(result);
        else res.status(200).json({success: true, user: result})

    },
};

module.exports = userController;
