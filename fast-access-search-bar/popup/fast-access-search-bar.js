/* ************************************************************************* */ 
// Get html elements

var html_search_icon     = document.querySelector(".outer-wrapper .search-icon"); // img
var html_overlay_text    = document.querySelector(".outer-wrapper .overlay-text"); // div
var html_search_string   = document.querySelector(".outer-wrapper .search-string"); // input
var html_search_select   = document.querySelector(".outer-wrapper .search-select"); // select

/* ************************************************************************* */ 
// Listener

html_search_select.onclick = on_selection_change;
document.onkeydown = global_onkeydown;
document.onkeyup = global_onkeyup;
let input_search_string_item = browser.storage.local.get("search_string");
input_search_string_item.then(get_input_search_string, on_error_input_search_string);
let current_search_map_item = browser.storage.local.get("search_current");
current_search_map_item.then(get_current_search, on_error_current_search);

/* ************************************************************************* */ 
// Init search list

var filename   = "./searches.json";
var search_url = "";
var searches   = [];

function load_searches() {
    return fetch(filename)
        .then((response) => { 
            return response.json(); 
        })
        .then((json) => {
            console.log(json);
            searches = [];
            for (const key in json){
                if(json.hasOwnProperty(key))
                {            
                    var search_data = json[key];
                    var new_search = new Map();
                    new_search.set("search_name",     key);
                    new_search.set("search_url",      search_data.search_url);
                    new_search.set("icon_url",        search_data.icon_url);
                    new_search.set("icon_overlay",    search_data.icon_overlay);
                    searches.push(new_search);
                }
            }

            var searches_style = "height: %ipx;";
            var searches_height =  20 * searches.length;
            html_search_select.setAttribute("style", searches_style.replace("%i", searches_height.toString()));

            var array_length = searches.length;
            for (var i = 0; i < array_length; i++) {
                html_list_search(searches[i])
            }
        });
}
load_searches();

/* ************************************************************************* */ 
// Set search string input value

function set_search_input_focus() {
    var len = html_search_string.value.length; 
    if (html_search_string.setSelectionRange) { 
        html_search_string.focus(); 
        html_search_string.setSelectionRange(len, len); 
    }  
}

function get_input_search_string(item) {
    if (item.search_string !== undefined) {
        html_search_string.value = item.search_string.value;
    }
    else {
        // Default value
        html_search_string.value = "";
    }
    html_search_string.focus();
}

function on_error_input_search_string(error) { 
    console.log(error);
}

/* ************************************************************************* */ 
// Set current search

function apply_current_search(map) {
    search_url              = map.get("search_url");
    html_search_icon.src    = map.get("icon_url");
    html_search_icon.alt    = map.get("search_name");
    html_search_icon.title  = map.get("search_name");
    html_search_icon.title  = map.get("search_name");
    html_overlay_text.textContent  = map.get("icon_overlay");
    set_search_input_focus();
}

function get_current_search(item) {
  if (item.search_current !== undefined) {
      apply_current_search(item.search_current.value)
  }
  else {
      // Default value
      if (searches.length > 0) {
        apply_current_search(searches[1]);
        html_search_select.selectedIndex = 0;
      }
  }
}

function on_error_current_search(error) {
    console.log(error);    
}

/* ************************************************************************* */ 
// Create html search selection options 

function html_list_search(map) {
    var option_image      = "background-image: url(%i);"
    var search_option     = document.createElement("option");
    search_option.text    = map.get("search_name");
    search_option.setAttribute("class", "search-option"); 
    search_option.setAttribute("style", option_image.replace("%i", map.get("icon_url")));
    html_search_select.appendChild(search_option);
}

function on_selection_change() {
  var array_length = searches.length;
  for (var i = 0; i < array_length; i++) {
      if (searches[i].get("search_name") === html_search_select.value) {
          apply_current_search(searches[i])
          browser.storage.local.set({ "search_current" : { "value" : searches[i] }});
      }
  }
}

/* ************************************************************************* */ 
// Process global key events to change selection index

function global_onkeydown(event) {
  if (event.keyCode === 40) { // Key: Down
      html_search_select.selectedIndex++;
      if (html_search_select.selectedIndex < 0) {
          html_search_select.selectedIndex = 0;
      }
      on_selection_change();
  }
  else if (event.keyCode === 38) { // Key: Up
    html_search_select.selectedIndex--;
    if (html_search_select.selectedIndex < 0) {
        html_search_select.selectedIndex = html_search_select.length - 1;
    }    
    on_selection_change();
  }
  //else if (event.keyCode === 37) { // Key: Left
  //    html_search_string.value = "";
  //}  
}

function global_onkeyup(event) {
    // Force focus at end of input text when down key is pressed and focus is moved to beginning of line
    if (event.keyCode === 38) { // Key: Down
        set_search_input_focus();
    }
}

/* ************************************************************************* */ 
// Process search request on keypress in text input field

/// Listener
html_search_string.addEventListener("keyup", function(event) {
    // "Carriage Return" and "Enter"
    if ((event.keyCode === 13) || (event.keyCode === 10)) {
        // Insert search term into search url of selected search and open search URL in new tab
        browser.tabs.create({ url: browser.runtime.getURL(search_url.replace("%s", html_search_string.value)) });
        // Close pop-up
        window.close();
    }
});

/// Listener
html_search_string.addEventListener("change", function(event) {
    browser.storage.local.set({ "search_string" : { "value" : html_search_string.value }});
});

/* ************************************************************************* */ 
