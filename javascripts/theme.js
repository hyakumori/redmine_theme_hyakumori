// SPDX-FileCopyrightText: 2021 2021 Hyakumori contributors <info@hyakumori.com>
//
// SPDX-License-Identifier: GPL-3.0-or-later

$(function(){

  // Modifications inspired by Farend "basic" theme
  // https://github.com/farend/redmine_theme_farend_basic/blob/master/javascripts/theme.js
  $("a.external").attr("target","_blank");
  $("a.help").attr("target","_blank");

  var footer = $("div#footer").html();
  $("div#footer").html('<a href="https://github.com/hyakumori">Hyakumori</a> Task Manager - ' + footer);

  // Tweaks for better supporting Japanese
  var lang = $("a.help").text() == "ヘルプ" ? "ja" : $("html").attr("lang");
  if (lang == "ja") {
    $("a.help").attr("href", "http://guide.redmine.jp/");

    $("body").attr("class").match(/controller-[\S]+/);
    var controllerName = RegExp.lastMatch;
    var placeholderText = "Redmine内を検索"
    var placeholderStrings = [
      {controller: "controller-issues", text: "チケットを検索"},
      {controller: "controller-news", text: "ニュースを検索"},
      {controller: "controller-documents", text: "文書を検索"},
      {controller: "controller-changesets", text: "更新履歴を検索"},
      {controller: "controller-wiki_pages", text: "Wikiページを検索"},
      {controller: "controller-messages", text: "メッセージを検索"}
    ];
    jQuery.each(placeholderStrings, function() {
      if (controllerName === this.controller) {
      	placeholderText = this.text;
      	return false;
      }
    });
    $("#quick-search input#q").attr("placeholder", placeholderText);
  }

});
