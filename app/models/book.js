import { DataTypes } from 'sequelize';
import sequelize from '#app/globals/sequelize.js';


const Book = sequelize.define(
    'Book',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        numberPages: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        publishing: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        read: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        buy: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }
);

export default Book;

// const Book = sequelize.define(
//     'Book',
//     {



//         read: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false,
//         },
//         buy: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false,
//         },
//     },
// );
//
// export default Book;