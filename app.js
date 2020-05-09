 var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
const fs = require('fs');
const ytdl = require('ytdl-core');
const url=require('url');
app.use(bodyParser.urlencoded({ extended: true })); 
 
 app.use(express.static('assests'));


app.get('/',function(req,res){
 res.status(200).sendFile(__dirname+"/assests/index.html");
}) 
app.get('/style.css', function(req, res){
   res.send('/style.css'); res.end();
   
 });
app.post('/myaction', function(req, res) {
// const a=req.body.audio==='mp3'?'lowest':'highest';
 //const fn=req.body.audio==='mp3'?'Youaudio.mp3':'Youvideo.mp4';
  res.header('Content-Disposition','attachment;filename="YouDvideo.mp4"');
  ytdl( req.body.link_input,{quality:'highest',format:  'mp4' })
  .pipe(res);
  console.log(req.body.audio)
});

app.listen(80, function() {
  console.log('S yeah connected');
});