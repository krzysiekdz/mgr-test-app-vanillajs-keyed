import Bindings from './bind.js';
import Add from './add.js';
import Repl from './replace.js';
import Fns from './other-fns.js';
import Update from './update.js';
import Swap from './swap.js';
import Filter from './filter.js';

document.addEventListener('DOMContentLoaded', function() {

	Bindings.bind();

	//clear, refresh
	Bindings.btnClear.addEventListener('click', function() {
		Fns.clearRows();
	}, false);
	Bindings.btnRefresh.addEventListener('click', function() {
		Fns.refreshRows();
	}, false);

	//init
	Bindings.btnInit.addEventListener('click', function() {
		Add.addRowsLast(Bindings.inputInit.value);
	}, false);

	//add
	Bindings.btnAddFirst.addEventListener('click', function() {
		Add.addRowsFirst(Bindings.inputAdd.value);
	}, false);
	Bindings.btnAddMid.addEventListener('click', function() {
		Add.addRowsMid(Bindings.inputAdd.value);
	}, false);
	Bindings.btnAddLast.addEventListener('click', function() {
		Add.addRowsLast(Bindings.inputAdd.value);
	}, false);

	//replace
	Bindings.btnReplaceFirst.addEventListener('click', function() {
		Repl.replaceRowsFirst(Bindings.inputReplace.value);
	}, false);
	Bindings.btnReplaceMid.addEventListener('click', function() {
		Repl.replaceRowsMid(Bindings.inputReplace.value);
	}, false);
	Bindings.btnReplaceLast.addEventListener('click', function() {
		Repl.replaceRowsLast(Bindings.inputReplace.value);
	}, false);

	//update
	Bindings.btnUpdateFirst.addEventListener('click', function() {
		Update.updateRowsFirst(Bindings.inputUpdate.value);
	}, false);
	Bindings.btnUpdateMid.addEventListener('click', function() {
		Update.updateRowsMid(Bindings.inputUpdate.value);
	}, false);
	Bindings.btnUpdateLast.addEventListener('click', function() {
		Update.updateRowsLast(Bindings.inputUpdate.value);
	}, false);
	Bindings.btnUpdateEvery.addEventListener('click', function() {
		Update.partialUpdate(Bindings.inputUpdateEvery.value);
	}, false);

	//swap
	Bindings.btnSwapFirst.addEventListener('click', function() {
		Swap.swapRowsFirst();
	}, false);
	Bindings.btnSwapMid.addEventListener('click', function() {
		Swap.swapRowsMid();
	}, false);
	Bindings.btnSwapLast.addEventListener('click', function() {
		Swap.swapRowsLast();
	}, false);

	//fetch
	Bindings.btnFetch1.addEventListener('click', function() {
		Fns.fetchData(1000);
	}, false);
	Bindings.btnFetch2.addEventListener('click', function() {
		Fns.fetchData(2000);
	}, false);

	//edit
	Bindings.inputEdit.addEventListener('input', function() {
		Fns.editData();
	}, false);
	Bindings.btnEdit.addEventListener('click', function() {
		Fns.editData();
	}, false);

	//filter
	Bindings.checkboxFilter.addEventListener('click', function() {
		Filter.filter();
	}, false);

	//search
	Bindings.inputSearch.addEventListener('input', function() {
		Fns.searchData();
	}, false);
	Bindings.btnSearch.addEventListener('click', function() {
		Fns.searchData();
	}, false);

});