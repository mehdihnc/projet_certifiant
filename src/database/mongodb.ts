import mongoose from 'mongoose';
import config from 'config';
import LOG from '../utils/logger'


const connect = () => {
    const dbUri = config.get<string>('mongodburi')
    return mongoose
        .connect(dbUri)
        .then(() => {
            LOG.info('Connected to database')
        })
        .catch((error) => {
            LOG.info(error.message)
            LOG.error('Connection failed')
            process.exit(1)
        })
}

export default connect