import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';
import row from './row.js';
import Add from './add.js';
import update from './update.js';


exports.clearRows = clearRows;
function clearRows() {
	if(state.data.length > 0) {
		state.data = [];
		u.resetId();

		//find the fastest remove method
		Bindings.table.remove();

		var table = Bindings.table = u.create('tbody');
		table.setAttribute('name', 'table');
		Bindings.tableWrap.appendChild(table);
	} 
}

exports.refreshRows = refreshRows;
function refreshRows() {
	if(state.data.length > 0) {
		console.log('refresh');
		Bindings.table.remove();
		var table = Bindings.table = u.create('tbody');
		table.setAttribute('name', 'table');
		Bindings.tableWrap.appendChild(table);
		state.data.forEach(item => {
			item.ref = row.createRow(item);
			table.appendChild(item.ref);
		});
	}
}

exports.fetchData = fetchData;
function fetchData(count) {
	var host = 'http://localhost:8080/data-files/';
	var resource = 'data' + count + '.json';
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var newData = JSON.parse(this.responseText);
			clearRows();
			u.setId(count+1);
			Add.addRowsFirst(1, newData);
		}
	}
	xhttp.open('GET', host + resource, true);
	xhttp.send();
}

exports.editData = editData;
function editData() {
	var data = state.data;
	if(data.length > 0) {
		data[0].c1 = Bindings.inputEdit.value;
		update.updateRow(data[0]);
	} 
}

exports.searchData = searchData;
function searchData() {
	if(state.data.length > 0 ) {
		searchFor(Bindings.inputSearch.value);
	}
}

function searchFor(txt) {
	var col = ['c1', 'c2', 'c3', 'c4'];

	state.data.forEach(item => {
		for(var i = 0; i < 4; i++) {
			var prop = item[col[i]] + "";
			if(txt !== "" && prop.indexOf(txt) !== -1) {
				item.ref.cells[i+1].classList.add('search-selected');
				if(!item.search) {
					item.search = [null, null, null, null];
				}
				item.search[i] = txt;
			} else if (item.search && item.search[i]) {
				item.search[i] = null;
				item.ref.cells[i+1].classList.remove('search-selected');
			}
			
		}
	});
}