import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';
import row from './row.js';

exports.swapRowsFirst = swapRowsFirst;
function swapRowsFirst() {
	if(state.data.length > 1) {
		var i = 0;
		var j = 1;
		swap(i, j);
	}
}

exports.swapRowsMid = swapRowsMid;
function swapRowsMid() {
	if(state.data.length > 1) {
		var i = Math.floor(state.data.length / 2) - 1;
		var j = i+1;
		swap(i, j);
	}
}

exports.swapRowsLast = swapRowsLast;
function swapRowsLast() {
	if(state.data.length > 1) {
		var i = state.data.length-2;
		var j = i+1;
		swap(i, j);
	}
}

//keyed swap
function swap(i, j) {
	var data = state.data,
		a = data[i],
		b = data[j],
		table = Bindings.table;

	//swap model
	data[i] = b;
	data[j] = a;

	//swap DOM
	table.insertBefore(b.ref, a.ref);//B goes before A
	var c = data[j+1];//next element
	if(c === undefined) {//that means B was last child
		table.appendChild(a.ref);//A goes last
	} else {
		table.insertBefore(a.ref, c.ref);//A goes before C (C was after B)
	}
}


