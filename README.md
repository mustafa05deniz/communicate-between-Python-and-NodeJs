
<h2>install</h2>

<h3>config/database.js</h3>
<pre>
module.exports = {
    'connection': {
        'host': '127.0.0.1', // local or ip adress .
        'user': 'root', // mysql user name
        'password': 'password', // password 
        'database': 'dbname'// database name .
    },
	'database': 'dbname',
    
};
</pre>


<pre>npm install </pre>
<pre>node server.js</pre>

<h2>How is running</h2>

<h4>click localhost:300/signup</h4>
<pre>
app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/login',
        failureRedirect: '/signup',
        failureFlash : true 
}));
</pre>
<h4>sign up </h4>
<pre>

</pre>
<h4>Sign in</h4>
<pre>

</pre>
