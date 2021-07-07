const express = require('express');
const app = express ();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    let mascots = [
     
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}

    ];
   let tagline = "No programming concept is complete withouth a cute animal mascot.";
   
   res.render("myPages/index", {
     mascots: mascots,
     tagline: tagline
    });
});

app.get('/about', function(req, res) {
    res.render('templates/about');
  });

app.listen(8080);
console.log('Server is listening on port 8080');
