exports.imageUpload = async (req, res) => {
    console.log(req.file);
    res.send('done');
}
