import { DataTypes } from 'sequelize';
import sequelize from '../globals/sequelize';

export const CountryMode = sequelize.define(
  'country',
  {
    countryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false },
);

export const CapitalMode = sequelize.define(
  'capitel',
  {
    capitalName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false },
);

// Автора может быть множество книг
// Одни к одному
// CountryMode.hasOne(CapitalMode);
// CapitalMode.belongsTo(CountryMode);

export const Team = sequelize.define(
  'team',
  {
    teamTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false },
);

export const Player = sequelize.define(
  'player',
  {
    playerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false },
);

// Один к многим
Team.hasMany(Player);
Player.belongsTo(Team);

// Многие к многим

// const country: any = null;
// const capital = null;
// sequelize
//   .sync({ alter: true })
//   .then(async () => {
//     // Team.bulkCreate([
//     //   {
//     //     teamTitle: 'Tiam1',
//     //   },
//     //   {
//     //     teamTitle: 'Tiam2',
//     //   },
//     //   {
//     //     teamTitle: 'Tiam3',
//     //   },
//     // ]);
//
//     // Player.bulkCreate([
//     //   {
//     //     playerName: 'player 2',
//     //     teamId: 1,
//     //   },
//     //   {
//     //     playerName: 'player 3',
//     //     teamId: 1,
//     //   },
//     //   {
//     //     playerName: 'player 4',
//     //     teamId: 2,
//     //   },
//     // ]);
//
//     // CountryMode.bulkCreate([
//     //   {
//     //     countryName: 'countryName1',
//     //   },
//     //   {
//     //     countryName: 'countryName2',
//     //   },
//     //   {
//     //     countryName: 'countryName3',
//     //   },
//     //   {
//     //     countryName: 'countryName4',
//     //   },
//     // ]);
//     // CapitalMode.bulkCreate([
//     //   {
//     //     capitalName: 'capitalName1',
//     //   },
//     //   {
//     //     capitalName: 'capitalName2',
//     //   },
//     //   {
//     //     capitalName: 'capitalName3',
//     //   },
//     //   {
//     //     capitalName: 'capitalName4',
//     //   },
//     // ]);
//     // return await CountryMode.create({
//     //   countryName: 'Test',
//     // });
//
//     // const checkTeam: any = await Team.findOne({
//     //   where: {
//     //     teamTitle: 'Tiam1',
//     //   },
//     //   include: Player,
//     // });
//
//     const checkTeam: any = await Team.findOne({
//       where: {
//         teamTitle: 'Tiam1',
//       },
//     });
//
//     const hisShip = await checkTeam.getPlayers();
//
//     // const timePlayer = Player.findAll({ where: { teamId: 1 } });
//     // timePlayer.getTi();
//     // const players = await checkTeam?.getPlayer();
//     return hisShip;
//     // return await CountryMode.findOne({ where: { countryName: 'countryName2' } });
//     // return await CapitalMode.findOne({ where: { capitalName: 'capitelTest' } });
//   })
//   .then((data) => {
//     console.log(JSON.stringify(data));
//     // console.log(data?.toJSON());
//   })
//   // .then((data) => {
//   //   country = data;
//   //   // return country.createCapital({
//   //   //   capitalName: 'capitalName1',
//   //   // });
//   // })
//   // .then((data) => {
//   //   console.log(data.toJSON());
//   // })
//   .catch((e) => {
//     console.log(e);
//   });
