const User = require('../../../models/user');

const getUserProfile = async (req,res) => {
    try {
        const user = await User.findById(req.user.userId)

        if(!user){
           return res.status(404).json({message:"User not found"});
        }

        res.json(user);

    } catch(error){
        res.status(500).json({message:"Server Error"});
    }
};

module.exports = {getUserProfile}