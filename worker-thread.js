const { parentPort } = require('worker_threads');

let j = 0;
for (let i = 0; i < 6000000000; i++) {
	j++;
}

parentPort.postMessage(j);

/*

app.post('/uploadFile', (req, res) => {
 req.busboy.on('file', function (fieldname, file, filename) {
   console.log("received file")
   var fstream = fs.createWriteStream('./uploads/' + filename);
   file.pipe(fstream);
   fstream.on('close', function () {
     res.send('upload succeeded!');
   });
 });
 req.pipe(req.busboy);
})

*/
