/* ************************************************************************* */ 
// Get html elements

const html_search_icon     = document.querySelector(".outer-wrapper .search-icon"); 
const html_overlay_text    = document.querySelector(".outer-wrapper .overlay-text"); 
const html_search_string   = document.querySelector(".outer-wrapper .search-string"); 
const html_search_select   = document.querySelector(".outer-wrapper .search-select");
const html_delete_search   = document.querySelector(".outer-wrapper .delete-icon");

/* ************************************************************************* */ 
// Listener

html_search_select.onclick = on_selection_change;
html_delete_search.onclick = delete_search_text;
document.onkeydown         = global_onkeydown;
document.onkeyup           = global_onkeyup;

let storage_search_string = browser.storage.local.get("search_string");
storage_search_string.then(event_storage_search_string, on_error_storage);

let storage_search_map_entry = browser.storage.local.get("search_map_entry");
storage_search_map_entry.then(event_storage_search_map_entry, on_error_storage);

function on_error_storage(error) { 
    console.log(error);
}


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
            searches = [];
            for (const key in json){
                if(json.hasOwnProperty(key))
                {            
                    var search_data = json[key];
                    var search_entry  = new Map();
                    search_entry.set("search_name",  key);
                    search_entry.set("search_url",   search_data.search_url);
                    search_entry.set("icon_url",     search_data.icon_url);
                    search_entry.set("icon_overlay", search_data.icon_overlay);
                    searches.push(search_entry);
                }
            }

            var search_select_style  = "height: %ipx;";
            var search_select_height =  (20 * searches.length);
            html_search_select.setAttribute("style", search_select_style.replace("%i", search_select_height.toString()));

            var array_length = searches.length;
            for (var i = 0; i < array_length; i++) {
                html_list_search(searches[i]);
            }
            
            set_search_input_focus();
        });
}
load_searches();


/* ************************************************************************* */ 
// Search String 

function set_search_input_focus() {
    html_search_string.focus();
    var search_length = html_search_string.value.length; 
    var search_value = html_search_string.value;
    html_search_string.value = "";
    if (search_length > 0) {
        html_search_string.value = search_value;
        html_search_string.setSelectionRange(search_length, search_length);
    }
}

function event_storage_search_string(item) {
    if (item.search_string !== undefined) {
        html_search_string.value = item.search_string.value;
    }
    else {
        html_search_string.value = "";
    }
    set_search_input_focus();
}

function delete_search_text() {
    html_search_string.value = "";
    set_search_input_focus();
    browser.storage.local.set({ "search_string" : { "value" : "" }});
}


/* ************************************************************************* */ 
// Search Entry

function apply_search(map) {
    search_url                     = map.get("search_url");
    html_search_icon.src           = map.get("icon_url");
    html_search_icon.alt           = map.get("search_name");
    html_search_icon.title         = map.get("search_name");
    html_overlay_text.textContent  = map.get("icon_overlay");
    set_search_input_focus();
    set_search_index(map);
}

function event_storage_search_map_entry(item) {
  if (item.search_map_entry !== undefined) {
      apply_search(item.search_map_entry.value);
  }
  else {
      apply_search(searches[0]);
  }
}


/* ************************************************************************* */ 
// Html search selection options 

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
          apply_search(searches[i]);
          browser.storage.local.set({ "search_map_entry" : { "value" : searches[i] }});
      }
  }
}

function set_search_index(map) {
    var array_length = searches.length;
    for (var i = 0; i < array_length; i++) {
        if (searches[i].get("search_name") === map.get("search_name")) {
            html_search_select.selectedIndex = i;
        }
    }
}


/* ************************************************************************* */ 
// Global key events to change selection index

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
    else if (event.altKey && (event.keyCode === 88)) { // Key: Alt + x
        delete_search_text();
    }  
}

function global_onkeyup(event) {
    // Force focus at end of input text when up key is pressed and focus is moved to beginning of line
    if (event.keyCode === 38) { // Key: Up
        set_search_input_focus();
    }
}


/* ************************************************************************* */ 
// Search request on keypress in text input field

/// Listener
html_search_string.addEventListener("keyup", function(event) {
    // "Carriage Return" and "Enter"
    if ((event.keyCode === 13) || (event.keyCode === 10)) {
        // Insert search term into search url of selected search and open search URL in new tab
        var url_string = search_url.replace("%s", html_search_string.value);
        browser.tabs.create({ url: url_string });
        // Close pop-up
        window.close();
    }
});

/// Listener
html_search_string.addEventListener("change", function(event) {
    browser.storage.local.set({ "search_string" : { "value" : html_search_string.value }});
});


/* ************************************************************************* */ 
