const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while(Date.now() - startTime < duration) {
        // event loop is blocked
    }
}

app.get('/', (req, res) => {
    res.send('Performance example');
});

app.use('/timer', (req, res) => {
    delay(9000);
    res.send('API example');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

