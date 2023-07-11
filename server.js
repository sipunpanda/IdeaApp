const express = require('express');
const serverconfig = require('./configs/server.config')
const app = express();

app.listen(serverconfig.PORT, () => {
    console.log(`Server is listening at port ${serverconfig.PORT}`);
})