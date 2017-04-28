import u from './util.js';
import state from './app-state.js';
import Bindings from './bind.js';
import row from './row.js';

var filterOn = false;

exports.filter = filter1;


function filter1() {
	var data = state.data;

	if(data.length > 0 && !filterOn) {
		filterOn = true;

		for(var i = 0; i < data.length; i++) {
			//update model and view 
			if(data[i].id % 10 === 0) {
				data[i].visible = true;
			} else {
				data[i].visible = false;
				var tr = data[i].ref;
				// var tr = table.children.item(i);
				tr.className = 'visible-off';
			}
		}
	} else if (data.length > 0 && filterOn) {
		filterOn = false;

		for(var i = 0; i < data.length; i++) {
			//update model and view 
			if(!data[i].visible) {
				data[i].visible = true;
				var tr = data[i].ref;
				// var tr = table.children.item(i);
				tr.className = 'visible-on';
			}
		}
	}
}


function filter2() {
	var data = state.data;
	var {tableWrap, table} = Bindings;

	if(data.length > 0 && !filterOn) {
		filterOn = true;
		tableWrap.removeChild(table);
	} else if (data.length > 0 && filterOn) {
		filterOn = false;
		tableWrap.appendChild(table);
	}
}


function filter3() {
	var data = state.data;
	var {tableWrap} = Bindings;

	if(data.length > 0 && !filterOn) {
		filterOn = true;
		tableWrap.classList.add('visible-off');
	} else if (data.length > 0 && filterOn) {
		filterOn = false;
		tableWrap.classList.remove('visible-off');
	}
}