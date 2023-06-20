import SequelizeConnection from '../configuration';
import Department from './department';

const sequelize = SequelizeConnection.getInstance();

Department.initModel(sequelize);

export const db = {
    sequelize,
    Department,
};
