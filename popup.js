// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let botao = document.getElementById('botao');

botao.onclick = function(element) {  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {    
    chrome.tabs.executeScript(null, { file: "/js/jquery-3.5.1.min.js" }, function() {
      $("#loading").show()
      chrome.tabs.executeScript({
        file: "/content.js"
      });
    })
  });
};

chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse){
    $("#loading").hide()
    $("#news").html(message.titles.map(obj => obj.title + "<br />" + obj.url).join("<br /><br />"))
  }
);