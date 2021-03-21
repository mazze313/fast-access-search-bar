/* ************************************************************************* */ 
// Get html elements

var html_search_icon     = document.querySelector(".outer-wrapper .search-icon"); // img
var html_overlay_text    = document.querySelector(".outer-wrapper .overlay-text"); // div
var html_search_string   = document.querySelector(".outer-wrapper .search-string"); // input
var html_search_select   = document.querySelector(".outer-wrapper .search-select"); // select

/* ************************************************************************* */ 
// Init search list

var search_list = [];

// STARTPAGE
var startpage_map = new Map();
startpage_map.set("search_name",     "startpage [com]");
startpage_map.set("search_url",      "https://www.startpage.com/do/dsearch?query=%s");
startpage_map.set("icon_url",        "https://www.startpage.com/sp/cdn/favicons/favicon-144x144.png");
startpage_map.set("icon_overlay",    "");
search_list.push(startpage_map);

// DICT.CC
var dictcc_map = new Map();
dictcc_map.set("search_name",        "dict.cc [EN <-> DE]");
dictcc_map.set("search_url",         "https://www.dict.cc/?s=%s");
dictcc_map.set("icon_url",           "https://www4.dict.cc/img/favicons/favicon4.png");
dictcc_map.set("icon_overlay",       "");
search_list.push(dictcc_map);

// LEO
var leo_map = new Map();
leo_map.set("search_name",           "leo.org [EN <-> DE]");
leo_map.set("search_url",            "https://dict.leo.org/german-english/%s");
leo_map.set("icon_url",              "https://dict.leo.org/img/favicons/ende-32-c9e27561.png");
leo_map.set("icon_overlay",          "");
search_list.push(leo_map);

// WIKIPEDIA DE
var wikipedia_de_map = new Map();
wikipedia_de_map.set("search_name",  "wikipedia [DE]");
wikipedia_de_map.set("search_url",   "https://de.wikipedia.org/w/index.php?search=%s");
wikipedia_de_map.set("icon_url",     "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/263px-Wikipedia-logo-v2.svg.png");
wikipedia_de_map.set("icon_overlay", "DE");
search_list.push(wikipedia_de_map);
    
// WIKIPEDIA ENG
var wikipedia_en_map = new Map();
wikipedia_en_map.set("search_name",  "wikipedia [EN]");
wikipedia_en_map.set("search_url",   "https://en.wikipedia.org/wiki/Special:Search?search=%s");
wikipedia_en_map.set("icon_url",     "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/263px-Wikipedia-logo-v2.svg.png");
wikipedia_en_map.set("icon_overlay", "EN");
search_list.push(wikipedia_en_map);

// Ebay DE
var ebay_de_map = new Map();
ebay_de_map.set("search_name",       "ebay [de]");
ebay_de_map.set("search_url",        "https://www.ebay.de/sch/i.html?_nkw=%s&_sacat=0");
ebay_de_map.set("icon_url",          "https://cdn.icon-icons.com/icons2/729/PNG/512/ebay_icon-icons.com_62730.png");
ebay_de_map.set("icon_overlay",      "DE");
search_list.push(ebay_de_map);

// Ebay COM
var ebay_com_map = new Map();
ebay_com_map.set("search_name",      "ebay [com]");
ebay_com_map.set("search_url",       "https://www.ebay.com/sch/i.html?_nkw=%s&_sacat=0");
ebay_com_map.set("icon_url",         "https://cdn.icon-icons.com/icons2/729/PNG/512/ebay_icon-icons.com_62730.png");
ebay_com_map.set("icon_overlay",     "COM");
search_list.push(ebay_com_map);

// Ebay UK
var ebay_uk_map = new Map();
ebay_uk_map.set("search_name",       "ebay [uk]");
ebay_uk_map.set("search_url",        "https://www.ebay.co.uk/sch/i.html?_nkw=%s&_sacat=0");
ebay_uk_map.set("icon_url",          "https://cdn.icon-icons.com/icons2/729/PNG/512/ebay_icon-icons.com_62730.png");
ebay_uk_map.set("icon_overlay",      "UK");
search_list.push(ebay_uk_map);

// AMAZON DE
var amazon_de_map = new Map();
amazon_de_map.set("search_name",     "amazon [de]");
amazon_de_map.set("search_url",      "https://www.amazon.de/s?k=%s");
amazon_de_map.set("icon_url",        "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png");
amazon_de_map.set("icon_overlay",    "DE");
search_list.push(amazon_de_map);

// AMAZON COM
var amazon_com_map = new Map();
amazon_com_map.set("search_name",    "amazon [com]");
amazon_com_map.set("search_url",     "https://www.amazon.com/s?k=%s");
amazon_com_map.set("icon_url",       "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png");
amazon_com_map.set("icon_overlay",   "COM");
search_list.push(amazon_com_map);

// IDEALO DE
var idealo_de_map = new Map();
idealo_de_map.set("search_name",     "idealo [de]");
idealo_de_map.set("search_url",      "https://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q=%s");
idealo_de_map.set("icon_url",        "https://cdn.idealo.com/storage/ipc/favicon.ico");
idealo_de_map.set("icon_overlay",    "");
search_list.push(idealo_de_map);

// YOUTUBE
var youtube_com_map = new Map();
youtube_com_map.set("search_name",   "youtube [com]");
youtube_com_map.set("search_url",    "https://www.youtube.com/results?search_query=%s");
youtube_com_map.set("icon_url",      "https://www.youtube.com/s/desktop/4fc9328c/img/favicon_144.png");
youtube_com_map.set("icon_overlay",  "");
search_list.push(youtube_com_map);

// IMDB
var imdb_com_map = new Map();
imdb_com_map.set("search_name",      "imdb [com]");
imdb_com_map.set("search_url",       "https://www.imdb.com/find?q=%s");
imdb_com_map.set("icon_url",         "https://m.media-amazon.com/images/G/01/imdb/images-ANDW73HA/favicon_iPhone_retina_180x180._CB1582158069_.png");
imdb_com_map.set("icon_overlay",     "");
search_list.push(imdb_com_map);

// GOOGLE
var google_com_map = new Map();
google_com_map.set("search_name",     "google [com]");
google_com_map.set("search_url",      "https://www.google.de/search?q=%s");
google_com_map.set("icon_url",        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png");
google_com_map.set("icon_overlay",    "");
search_list.push(google_com_map);

// DUCKDUCKGO
var duckduck_com_map = new Map();
duckduck_com_map.set("search_name",     "duckduckgo [com]");
duckduck_com_map.set("search_url",      "https://duckduckgo.com/?q=%s");
duckduck_com_map.set("icon_url",        "https://duckduckgo.com/assets/icons/meta/DDG-iOS-icon_152x152.png");
duckduck_com_map.set("icon_overlay",    "");
search_list.push(duckduck_com_map);

/* ADD CUSTOM SEARCH ENGINE
/// Replace <NEW> with an unique name of your new search engine.
/// Replace other <tags> with appropriate content.

// <NEW>
var <NEW>_map = new Map();
<NEW>_map.set("search_name",     "<NAME>");
<NEW>_map.set("search_url",      "<SEARCH_URL>"); //! Add %s to position where the search string should be placed inside url
<NEW>_map.set("icon_url",        "<FAVICON_URL>");
<NEW>_map.set("icon_overlay",    "<ICON_OVERLAY_TEXT>");
search_list.push(<NEW>_map);

*/

/* ************************************************************************* */ 
// Set search string input value

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

let input_search_string_item = browser.storage.local.get("search_string");
input_search_string_item.then(get_input_search_string, on_error_input_search_string);

/* ************************************************************************* */ 
// Set current search

var search_url;

function apply_current_search(map) {
    search_url              = map.get("search_url");
    html_search_icon.src    = map.get("icon_url");
    html_search_icon.alt    = map.get("search_name");
    html_search_icon.title  = map.get("search_name");
    html_search_icon.title  = map.get("search_name");
    html_overlay_text.textContent  = map.get("icon_overlay");
}

function get_current_search(item) {
  if (item.search_current !== undefined) {
      apply_current_search(item.search_current.value)
  }
  else {
      // Default value
      apply_current_search(startpage_map);
      html_search_select.selectedIndex = 0;
  }
}

function on_error_current_search(error) {
    console.log(error);    
}

let current_search_map_item = browser.storage.local.get("search_current");
current_search_map_item.then(get_current_search, on_error_current_search);

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
var array_length = search_list.length;
for (var i = 0; i < array_length; i++) {
    html_list_search(search_list[i])
}

function on_selection_change() {
  var array_length = search_list.length;
  for (var i = 0; i < array_length; i++) {
      if (search_list[i].get("search_name") === html_search_select.value) {
          apply_current_search(search_list[i])
          browser.storage.local.set({ "search_current" : { "value" : search_list[i] }});
      }
  }
};
/// Listener
html_search_select.onclick = on_selection_change;

/* ************************************************************************* */ 
// Process global key events to change selection index

function global_onkeydown(event) {
  if (event.keyCode === 40) { // Key: Down
      html_search_select.selectedIndex++;
      if (html_search_select.selectedIndex < 0) {
          html_search_select.selectedIndex = 0;
      }
      on_selection_change();

      var len = html_search_string.value.length; 
      if (html_search_string.setSelectionRange) { 
          html_search_string.focus(); 
          html_search_string.setSelectionRange(len, len); 
      }

  }
  else if (event.keyCode === 38) { // Key: Up
    html_search_select.selectedIndex--;
    if (html_search_select.selectedIndex < 0) {
        html_search_select.selectedIndex = html_search_select.length - 1;
    }    
    on_selection_change();
  }

  var len = 2* html_search_string.value.length;
  html_search_string.value.focus(); 
  html_search_string.value.setSelectionRange(len, len);  
}
/// Listener
document.onkeydown = global_onkeydown;

function global_onkeyup(event) {
    // Force focus at end of input text when down key is pressed and focus is moved to beginning of line
    if (event.keyCode === 38) { // Key: Down
        var len = html_search_string.value.length; 
        if (html_search_string.setSelectionRange) { 
            html_search_string.focus(); 
            html_search_string.setSelectionRange(len, len); 
        }
    }
}
/// Listener
document.onkeyup = global_onkeyup;

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

