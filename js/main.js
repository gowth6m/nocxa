(function ($) {
  "use strict";

  //Page cursors

  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      (t.style.left = n.clientX + "px"),
        (t.style.top = n.clientY + "px"),
        (e.style.left = n.clientX + "px"),
        (e.style.top = n.clientY + "px"),
        (i.style.left = n.clientX + "px"),
        (i.style.top = n.clientY + "px");
    });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }
  s();
  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }

  //Navigation

  var app = (function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector("body");
      menu = document.querySelector(".menu-icon");
      menuItems = document.querySelectorAll(".nav__list-item");
      applyListeners();
    };

    var applyListeners = function applyListeners() {
      menu.addEventListener("click", function () {
        return toggleClass(body, "nav-active");
      });
    };

    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass))
        element.classList.remove(stringClass);
      else element.classList.add(stringClass);
    };

    init();
  })();

  //Nav clicks
  var menuItems = document.querySelectorAll(".nav__list-item");
  var stringClass = "nav-active";
  var element = document.querySelector(".nav__list-item");

  $(menuItems).on("click", function () {
    if ($("body").hasClass("nav-active")) {
      $("body").removeClass("nav-active");
    }
    if (element.classList.contains(stringClass))
        element.classList.remove(stringClass);
      else element.classList.add(stringClass);
  });

  //Switch light/dark
  $("#switch").on("click", function () {
    if ($("body").hasClass("light")) {
      $("body").removeClass("light");
      $("#switch").removeClass("switched");
    } else {
      $("body").addClass("light");
      $("#switch").addClass("switched");
    }
  });
})(jQuery);


var plus = './assets/nocxa_title.svg';
var minus = './assets/nocxa_title_b.svg';

$('#switch').click(function() {
  if ($('.header-logo').attr('src') === plus) {
    $('.header-logo').attr('src', minus);
  } else {
    $('.header-logo').attr('src', plus)
  }
})


//Header background on scoll for navbar
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".cd-header").addClass("cd-header-dark");
    } else {
      $(".cd-header").removeClass("cd-header-dark");
    }
  });
});

