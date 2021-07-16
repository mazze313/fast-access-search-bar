# Firefox Add-on: Fast Access Search Bar

## Description
Provides custom search bar, which can be accessed fast and offers reuse of previous search term for other predefined search engines.

<img src="https://user-images.githubusercontent.com/81079563/124627387-cb6c0900-de7f-11eb-977a-5caa1b03e54b.png" width="500">

---

## Install
**Note:** This plugin has only been tested with Firefox 86.0 (x64) on Ubuntu 20.04 LTS so far.  
        *Support of other browsers or operating systems is unknown.*

You can also test the add-on temporarily by calling *about:debugging#/runtime/this-firefox* in a new firefox tab. Click *Load Temporary Add-on...* and open *manifest.json* of this plugin.

### Linux
- Download code and create new *zip* file containing only the files of the sub-folder *fast-access-search-bar*.  
- Firefox: 
  - Open *about:config* in new tab and set option *xpinstall.signatures.required* to *false*.
  - Open *Tools*/*Add-ons* and click on cogwheel for further settings.   
    Click *Install Add-on From File...* and select previously created *zip* file of add-on.  

## Usage
- Open add-on with click on icon in navigation bar or using the shortcut **Alt + Q**.  
  (you can change the shortcut in Firefox via *Tools*/*Add-ons*/Settings Cogwheel/*Manage Extension Shortcut*).  
- Enter search term and confirm (*Carriage Return* or *Enter*). Delete previously entered search term with *left arrow key*. New searches are always opened in a new tab.
- Select other predefined search engine with left mouse click or simply use *arrow up* or *arrow down*.  
  Selection of search engine does not have to be confirmed and is automatically used.

---

## Add further search engines
Open *fast-access-search-bar.js* and see description at line stating *ADD CUSTOM SEARCH ENGINE*.
