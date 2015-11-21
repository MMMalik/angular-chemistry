/********************************************/
var express = require("express"),
	path = require("path"),
	logger = require("morgan");
		
// start express
app = express();
app.use(express.static(__dirname));
/********************************************/

/********************************************/
// config
app.use(logger("dev"));
/********************************************/

/********************************************/
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));	
});
/********************************************/

/********************************************/
// error handling
app.use(function(req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		message: err.message,
		status: err.status,
		error: err
	});
});

/********************************************/
// listens
app.listen(3000, function () { console.log("Server started."); });

/********************************************/