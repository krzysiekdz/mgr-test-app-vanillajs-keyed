import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';
import row from './row.js';

exports.replaceRowsFirst = replaceRowsFirst;
function replaceRowsFirst(count) {
	count = u.parseNumber(count, 1, 2000);
	var {data} = state;
	if(data.length >= count) {
		var start = 0, end = count;

		replaceModel(start, end);

		replaceView(start, end);
	} 
}

exports.replaceRowsMid = replaceRowsMid;
function replaceRowsMid(count) {
	count = u.parseNumber(count, 1, 2000);
	var {data} = state;
	if(state.data.length >= count) {
		var start = Math.floor(data.length / 2) - Math.floor(count/2);
		var end = start + count;

		replaceModel(start, end);

		replaceView(start, end);
	} 
}

exports.replaceRowsLast = replaceRowsLast;
function replaceRowsLast(count) {
	count = u.parseNumber(count, 1, 2000);
	var {data} = state;
	if(state.data.length >= count) {
		var start = data.length - count;
		var end = start + count;

		replaceModel(start, end);

		replaceView(start, end);
	} 
}

function replaceModel(start, end) {
	var newData = u.randomObjects(end-start);
	$$replaceModel(start, end, newData);
}

function $$replaceModel(start, end, newData) {
	var {data} = state;
	for(var i = start, j = 0; i < end; i++, j++) {
		newData[j].ref = data[i].ref;
		data[i] = newData[j];
	}
}

//keyed replace 
function replaceView(start, end) {
	//remove elements and add new elements -> add + remove

	var {data} = state;
	var docFragment = document.createDocumentFragment();
	for(var i = start; i < end; i++) {
		var item = data[i];
		item.ref.remove();
		item.ref = row.createRow(item);
		docFragment.appendChild(item.ref);
	}

	var table = Bindings.table;
	if(table.children.length > 0) {
		table.insertBefore(docFragment, table.children.item(start));
	} else {
		table.appendChild(docFragment);	
	}
}