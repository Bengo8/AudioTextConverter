const txtomp3 = require("text-to-mp3");
exports.getAudioFileFromText = async(req, res) => {
    try {
        var options = {
            //the property tl of the object provided must be a string and follow the 2 digit iso short code used by the Google Translate API
            tl: 'es'
          }
          const text = req?.params?.text !== undefined && req?.params?.text !== null ? req?.params?.text : '';
        txtomp3.saveMP3(text, "TextConverted.mp3", options).then(
        (absoluteFilePath) => { 
            console.log("File saved :", absoluteFilePath); //"File saved : /home/enrico/WebstormProjects/textToMp3/FileName.mp3"
            res.status(200).json(absoluteFilePath);
        })
        .catch((err) => {
            res.status(500).json({ message: "Internal Server Error at getAudioFileFromText. Error: " + err, ResponseStatus: 500 });
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error at getAudioFileFromText Error: " + error, ResponseStatus: 500 });
    }
}