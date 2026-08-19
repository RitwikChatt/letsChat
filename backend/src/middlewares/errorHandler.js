const errorHandler = (err, req, res, next) => {
    console.log('Error handling middleware called');
    console.error(err.stack);
    res.status(500).json({message : 'Internal server error'});
};

export default errorHandler;