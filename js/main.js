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


//Switching logo when changing theme
var plus = './assets/nocxa_title.svg';
var minus = './assets/nocxa_title_b.svg';

$('#switch').click(function () {
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

//Nav bar CSS
$('.nav__list-item a').on('click', function () {
  // $( '.nav__list' ).find( '.nav__list-item.active-nav-btn' ).removeClass( 'active-nav-btn' );
  // $( this ).parent( '.nav__list-item' ).addClass( 'active-nav-btn' );
  $('.nav__list').find('.nav__list-item a.active-nav-btn').removeClass('active-nav-btn');
  $(this).addClass('active-nav-btn');
});

// Vertical tab
// tabbed content
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function () {
  $(".tab_content").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();

  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");

  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

  /*$(".tabs").css("margin-top", function(){ 
       return ($(".tab_container").outerHeight() - $(".tabs").outerHeight() ) / 2;
    });*/
});
$(".tab_container").css("min-height", function () {
  return $(".tabs").outerHeight() + 50;
});
/* if in drawer mode */
$(".tab_drawer_heading").click(function () {
  $(".tab_content").hide();
  var d_activeTab = $(this).attr("rel");
  $("#" + d_activeTab).fadeIn();

  $(".tab_drawer_heading").removeClass("d_active");
  $(this).addClass("d_active");

  $("ul.tabs li").removeClass("active");
  $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");

  var allTabs = document.querySelectorAll(".tab_drawer_heading");

  $(allTabs).removeClass("active-h");
  $(this).addClass("active-h");
});
