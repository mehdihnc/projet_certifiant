import logger from 'pino'
import dayjs from 'dayjs'


const LOG = logger({
    base: {
      pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`
  })

  export default LOG