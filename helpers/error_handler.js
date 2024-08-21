const errorHandler = (res, error) => {
    console.log(error);
    res.status(404).send({error: error.message});
}
module.exports = {
    errorHandler
}