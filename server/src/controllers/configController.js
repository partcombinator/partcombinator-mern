const Config = require('../models/Config');

// get Config
exports.getConfig = async(req, res) => {
    try {
        const config = await Config.findOne(
                { name :"default"}
        );
        if(!config){
            newConfig = new Config({
                "web_online" : true,
                "language" : "spanish",
                "name" : "default"
            });
            configSave = await newConfig.save();
            res.status(200).json({configSave});
        } else {
            res.status(200).json({config});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error' })
    }
}

exports.web_online = async(req, res) => {
    try {
        const configNow = await Config.findOne(
            { name :"default"}
        );
        const { web_online } = req.body;
        const newConfig = {};
        if (web_online === "true") { newConfig.web_online = true } else { newConfig.web_online = false } 
        const configUpdate = await Config.findOneAndUpdate(
            {_id: configNow.id}, newConfig, { new:true }
        );
        res.status(200).json({configUpdate});
    } catch (error) {
        res.status(500).json({ msg: 'Error' })
    }
}