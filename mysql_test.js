var db = {
	//connection database
	client: null,
	TEST_DATABASE: 'nodejs_mysql_db',
	TEST_TABLE: 'test_table',
	connection: function(response) {


		// console.log(require('mysql'));
		/* var    Client    = require('mysql').Client; 
		    client    = new Client();  
		client.user      = 'root';
		client.password  = 'root';
		client.connected = true;
		var    TEST_DATABASE    = dbname||'nodejs_mysql_db';  
		var    TEST_TABLE       = tableName||'test_table';
		console.log(client);
		*/
		//client.createClient({'host':'localhost','port':3306,'user':'root','password':'root'});   
		var Client = require('mysql').Client;
		var client = new Client();
		var TEST_DATABASE = 'nodejs_mysql_test';
		var TEST_TABLE = 'test';
		client.user = 'root';
		client.database = 'nodejs_mysql_test';
		client.password = 'root';
		client.host = 'localhost';
		//client.connect();  
		console.log(client);
		/*
		  client.query('CREATE DATABASE '+TEST_DATABASE, function(err) {
		                   if(err) {
		                      console.log('create databse wrong'+err);
		 return ;
		  }   
		  client.query('USE '+TEST_DATABASE);
		  client.query(  
		 'CREATE TABLE '+TEST_TABLE+  
		 '(id INT(11) AUTO_INCREMENT,'+  
		 'title VARCHAR(255),'+  
		 'text TEXT,'+  
		 'created DATETIME,'+  
		 'PRIMARY KEY (id))'  
		);  
		});
		*/
		client.query(
			'INSERT INTO ' + TEST_TABLE + ' ' +
			'SET title = ?, text = ?, created = ?', ['super cool', 'this is a nice text', '2010-08-16 10:00:23']
		);
		var html = '<html><body><table>';
		client.query(
			'SELECT * FROM ' + TEST_TABLE,
			function selectCb(err, results, fields) {
				if (err) {
					throw err;
				}

				if (results.length > 0) {
					for (var i = 0; i < results.length; i++) {
						html += "<tr>";

						var firstResult = results[i];
						var str = ('<td>' + firstResult['id'] + '</td>');
						str += ('<td>' + firstResult['title'] + '</td>');
						str += ('<td>' + firstResult['text'] + '</td>');
						html += (str + "</tr>");
					}

				}
				response.writeHead(200, {
					'Content-Type': 'text/html'
				});
				response.write(html);
				response.end();
				client.end();


			});

	}


};
exports.db = db;