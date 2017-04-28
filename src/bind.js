import u from './util.js';

var b = {};
module.exports = b;
b.bind = bind;

function bind() {
	b.btnClear = u.byName('clear'),  
	b.btnRefresh = u.byName('refresh'), 

	b.table = u.byName('table'),
	b.tableWrap = u.byName('tableWrap'),

	b.btnInit = u.byName('btn-init'), 
	b.inputInit = u.byName('input-init'),

	b.btnAddFirst = u.byName('addFirst'), 
	b.btnAddMid = u.byName('addMid'), 
	b.btnAddLast = u.byName('addLast'), 
	b.inputAdd = u.byName('input-add'),

	b.btnReplaceFirst = u.byName('replaceFirst'), 
	b.btnReplaceMid = u.byName('replaceMid'), 
	b.btnReplaceLast = u.byName('replaceLast'), 
	b.inputReplace = u.byName('input-replace'),

	b.btnUpdateFirst = u.byName('updateFirst'), 
	b.btnUpdateMid = u.byName('updateMid'), 
	b.btnUpdateLast = u.byName('updateLast'), 
	b.btnUpdateEvery = u.byName('updateEvery'), 
	b.inputUpdate = u.byName('input-update'), 
	b.inputUpdateEvery = u.byName('input-update-every'), 

	b.btnSwapFirst = u.byName('swapFirst'), 
	b.btnSwapMid = u.byName('swapMid'), 
	b.btnSwapLast = u.byName('swapLast'),

	b.btnFetch1 = u.byName('fetch1'), 
	b.btnFetch2 = u.byName('fetch2'), 

	b.inputInput = u.byName('input-input'),  

	b.inputEdit = u.byName('input-edit'), 
	b.btnEdit = u.byName('btn-edit'),

	b.checkboxFilter = u.byName('checkbox-filter'), 

	b.inputSearch = u.byName('input-search'), 
	b.btnSearch = u.byName('btn-search');
}

