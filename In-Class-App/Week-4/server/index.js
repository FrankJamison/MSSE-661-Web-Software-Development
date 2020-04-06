const express = require("express"); // Require express API
const app = express(); // Initialize express

app.use(express.static('public')); // point server to public folder

app.use('/css', express.static(__dirname = 'public/css')); // point web requests to root/css to public/css
app.use('/js', express.static(__dirname = 'public/src')); // point web requests to root/js to public/src

app.listen(3000, function () { // Listen on port 3000 and perform this function
    console.log('Server started at http://localhost:%s', 3000);
});