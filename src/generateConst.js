var fs = require('fs');

var data1, data2, data3;

function randomObjects(count = 100) {

	var col1 = ['John', 'Paulo', 'Anthony', 'Roger', 'Graham', 'Robin', 'Terry', 'Erick', 'Michael', 'Carol', 'Simon', 'Sir'];
	var col2 = ['Champman', 'Cleese', 'Gillman', 'Idle', 'Jones', 'Palin', 'Cohen', 'Centurion', 'Dirk', 'Lorett', 'Lancelot', 'Robin', 'Galahad'];
	var col3 = ['Leader', 'Wise man', 'Warden', 'Revolutionary', 'Prophet', 'Assistant', 'Singer', 'Officer', 'Tradesman', 'Knight', 'Wizard'];
	var col4 = [100, 200, 500, 1000, 1500, 2000, 3000, 5000, 8000, 10000];

	var id = 1;
    var data = [];
    for (var i = 0; i < count; i++) {
        data.push({ 
        	id: id++, 
        	c1: col1[rand(col1.length)],
        	c2: col2[rand(col2.length)],
        	c3: col3[rand(col3.length)],
        	c4: col4[rand(col4.length)]
        });
    }
    return data;
}

function definedObjects(count = 100) {
    var col1 = ['Jeohan', 'Anthony', 'Roger', 'Grahame', 'Roabein', 'Terare', 'Ericka', 'Michael', 'Carole', 'Simoena'];
    var col2 = ['Champman', 'Calebese', 'Gillmane', 'Idle', 'Joanes', 'Palein', 'Cohyena','Dierak', 'Loretta', 'Lancelote'];
    var col3 = ['Leader', 'Wise man', 'Wardben', 'Revoltionary', 'Praophet', 'Assistant', 'Sianger', 'Officero', 'Tradesman', 'Knieghta'];
    var col4 = [100, 200, 500, 1000, 1500, 2000, 3000, 5000, 8000, 10000];

    var id = 1;
    var data = [];
    for (var i = 0, j = 0; i < count; i++, j++) {
        if(j === 10) {
            j = 0;
        }
        data.push({ 
            id: id++, 
            c1: col1[j],
            c2: col2[j],
            c3: col3[j],
            c4: col4[j]
        });
    }
    return data;
}

function rand(mod) { //max modulo === 1000
    return Math.floor(Math.random() * 1000 ) % mod;
}

data1 = definedObjects(1000);
data2 = definedObjects(2000);
data3 = definedObjects(10000);


fs.writeFile('./data1000.json', JSON.stringify(data1), function(err) {
	if(err) return console.error(err);

	console.log('data1 sucessfully saved.');
});

fs.writeFile('./data2000.json', JSON.stringify(data2), function(err) {
	if(err) return console.error(err);

	console.log('data2 sucessfully saved.');
});

fs.writeFile('./data10000.json', JSON.stringify(data3), function(err) {
	if(err) return console.error(err);

	console.log('data3 sucessfully saved.');
});