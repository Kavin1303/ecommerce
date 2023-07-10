import bcrypt from 'bcryptjs';

const users = [
    {
    name : 'Admin user',
    email :'admin@gmail.com',
    password : bcrypt.hashSync('123456', 10),
    isAdmin : true,
    },
    {
        name : 'Kavin Prasath',
        email :'kavin@gmail.com',
        password : bcrypt.hashSync('123456', 10),
        isAdmin : false,
    },
];
 export default users;