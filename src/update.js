import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';
import row from './row.js';

exports.updateRowsFirst = updateRowsFirst;
function updateRowsFirst(count) {
	count = u.parseNumber(count, 1, 2000);
	var {data} = state;
	if(data.length >= count) {
		var start = 0, end = count;

		updateModel(start, end);

		updateView(start, end);
	} 
}

exports.updateRowsMid = updateRowsMid;
function updateRowsMid(count) {
	count = u.parseNumber(count, 1, 2000);
	var {data} = state;
	if(state.data.length >= count) {
		var start = Math.floor(data.length / 2) - Math.floor(count/2);
		var end = start + count;

		updateModel(start, end);

		updateView(start, end);
	} 
}

exports.updateRowsLast = updateRowsLast;
function updateRowsLast(count) {
	count = u.parseNumber(count, 1, 2000);
	var {data} = state;
	if(state.data.length >= count) {
		var start = data.length - count;
		var end = start + count;

		updateModel(start, end);

		updateView(start, end);
	} 
}

function updateModel(start, end) {
	var newData = u.randomObjects(end-start);
	$$updateModel(start, end, newData);
}

//updating model; in replace we are replacing all objects, in update we only replace properties
function $$updateModel(start, end, newData) {
	var {data} = state;
	for(var i = start, j = 0; i < end; i++, j++) {
		data[i].id = newData[j].id;
		data[i].c1 = newData[j].c1;
		data[i].c2 = newData[j].c2;
		data[i].c3 = newData[j].c3;
		data[i].c4 = newData[j].c4;
	}
}

function updateView(start, end) {
	var {data} = state;
	for(var i = start; i < end; i++) {
		updateRow(data[i]);
	}
}

exports.updateRow = updateRow;
function updateRow(item) {
	var tr = item.ref;
	tr.cells[0].innerText = item.id;
	tr.cells[1].innerText = item.c1;
	tr.cells[2].innerText = item.c2;
	tr.cells[3].innerText = item.c3;
	tr.cells[4].innerText = item.c4;

	//cleaning for possible existing styles
	// for(var i = 1; i <= 4; i++) {
	// 	if(tr.cells[i].classList.contains('search-selected')) {
	// 		tr.cells[i].classList.remove('search-selected');
	// 	}
	// }
}

exports.partialUpdate = partialUpdate;
function partialUpdate(every) {
	every = u.parseNumber(every, 1, 10);
	if(state.data.length > 0) {
		updateModelEvery(every);
		updateViewEvery(every);	
	} 
}

function updateModelEvery(every) {
	var {data} = state;
	var count = Math.ceil(data.length / every);
	var newData = u.randomObjects(count);
	$$updateModelEvery(every, newData);
}

function $$updateModelEvery(every, newData) {
	var {data} = state;
	for(var i = 0, j = 0; i < data.length; i += every, j++) {
		data[i].id = newData[j].id;
		data[i].c1 = newData[j].c1;
		data[i].c2 = newData[j].c2;
		data[i].c3 = newData[j].c3;
		data[i].c4 = newData[j].c4;
	}
}

function updateViewEvery(every) {
	var {data} = state;
	for(var i = 0; i < data.length; i += every ) {
		updateRow(data[i]);
	}
}



