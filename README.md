# Firefox Add-on: Fast Access Search Bar

## Description
Provides custom search bar, which can be accessed fast and offers reuse of previous search term for other predefined search engines.

![screen](https://github.com/user-attachments/assets/43d1c07e-b1f6-4865-8be8-191312b6496d)


---

## Install

Download the XPI file of the latest release. In the add-on menu of Firefox, click the cogwheel and select *Install Add-on from File...*. 

### Debug Testing

- Download the code and extract it if downloaded as zip file.
- Open Firefox: 
  - Open *about:config* in new tab and set option *xpinstall.signatures.required* to *false*
  - Open *about:debugging#/runtime/this-firefox*
  - Click on *Load Temporary Add-on* and select manifest.json from add-on folder

**Note:** This add-on has only been tested with Firefox 111.0 (x64) on Ubuntu 22.04 LTS so far. 

## Usage
- Open add-on with a click on the new magnifier icon in the navigation bar or by using the shortcut **Alt + q**. 
  You can change the shortcut in Firefox via *Tools*/*Add-ons*/Settings Cogwheel/*Manage Extension Shortcut*.
- Enter a new search term and confirm (*Carriage Return* or *Enter*). New searches are always opened in a new tab.
- Select other predefined search engine with left mouse click or simply use *arrow up* or *arrow down*. 
  Selection of search engine does not have to be confirmed and is automatically used.
- Clear the input field by clicking on the `x` button on the right or with the shortcut **Alt + x**.

<!-- 
---

## Add further search engines
Open the file *searches.json* with any text editor and add a new entry for a new search.
Searches are listed in the add-on as they appear in the JSON file.

-->
