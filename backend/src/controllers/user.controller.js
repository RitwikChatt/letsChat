export const getUser = (req, res) => {
    console.log('User Route');
    const id = 6;
    res.status(200).json({message : `User ID: ${id}`});
};

export const createUser = (req, res) => {
    console.log('User Route');
    const {name, email} = req.body;
    res.status(200).json({message : `Hello, ${name}!`});
};