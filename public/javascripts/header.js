var icon_search = document.getElementsByClassName('top-search')[0];
var headtopHeight = document.getElementsByClassName('head-top')[0];
function inputText() {
    this.style.border = '3px solid #940000';
}
function hiddInput() {
    this.style.border = '3px solid';
}
function showsearch() {
    var head_button = document.getElementsByClassName('head-button')[0];
    head_button.style.display = 'block';
}
var inputSearch = document.getElementsByClassName('input-search')[0];
inputSearch.addEventListener('focus',inputText);

inputSearch.addEventListener('blur',hiddInput);
icon_search.onclick = showsearch;