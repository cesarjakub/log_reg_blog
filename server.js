import express from 'express';
import serveIndex from 'serve-index';
import path from 'path';
import { URL } from 'url';
import { fileURLToPath } from 'url';
                                          
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something broke");
});

app.use(express.json());

app.get('/', (req, res) => {
  res.redirect("/index.html");
});

app.get("/public", (req, res) => {
  //res.sendFile(path.join(__dirname+"/index.html"));
  res.redirect("/index.html");
});

app.get("/index.html", (req, res) => {
        res.sendFile(path.join(__dirname+"/index.html"));
});

app.get("/public", (req, res) => {
  res.redirect("/index.html")
});

app.get("/register.html", (req, res) => {
        res.sendFile(path.join(__dirname+"/register.html"));
});

/*
app.route("/register.html")
        .get((req, res) => {
                res.sendFile(path.join(__dirname + "/register.html"));
        })
        .post(async (req, res) => {
                const { Lname, Lpass } = req.body;
        const user = await register(Lname, Lpass);
        res.status(201);
        // redirect to main page
                console.log(req.body);
        });
*/

app.get("/blog.html", (req, res) => {
        res.sendFile(path.join(__dirname+"/blog.html"));
});

app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));
app.listen(3000, () => console.log('Example app is listening on port 3000.'));
