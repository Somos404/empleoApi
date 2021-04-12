const app = require("./app")

const PORT = process.env.PORT || 5000
const schedule = require('node-schedule');
const Task =  require('./task/quieroQueMeAvisen')

// Check connect
/* if (connection.state === 'disconnected') {
    console.log('mysql disconnected OFF')
} */

//app.listen(PORT, () => console.log(`Server runnig on port ${development.host}:${PORT}`))

app.listen(PORT, () => {
    console.log(`Server runnig`)
    schedule.scheduleJob('* * * * *', () => {
        //console.log(`===========================  1  =============================`)
        Task.checkInscripcionesCursos()
    });
});