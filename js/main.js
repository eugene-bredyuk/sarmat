(function(global, $) {
  // 'new' an object
  var bredek = function(options) {
    return new bredek.init(options);
  };

  // prototype holds methods (to save memory space)
  bredek.prototype = {
    verticalSwiper: {},
    // initSwipers: function() {
    //   var simpleSwiper = new Swiper(".header-slider .swiper-container", {
    //     loop: true,
    //     speed: 400,
    //     nextButton: ".swiper-button-next",
    //     prevButton: ".swiper-button-prev",
    //     slidesPerView: 4,
    //     breakpoints: {
    //       768: {
    //         slidesPerView: 2
    //       },
    //       414: {
    //         slidesPerView: 1
    //       }
    //     }
    //   });
    //   if (this.checkMedia("(min-width: 414px)")) {
    //     this.verticalSwiper = new Swiper(".vertical-slider .swiper-container", {
    //       pagination: ".swiper-pagination",
    //       direction: "vertical",
    //       slidesPerView: 1,
    //       paginationClickable: true,
    //       onlyExternal: true
    //     });
    //   }
    //   var bottomSwiper = new Swiper(".bottom-slider .swiper-container", {
    //     slidesPerView: 2.5,
    //     spaceBetween: 30,
    //     slidesOffsetBefore: 150,
    //     slidesOffsetAfter: 150,
    //     grabCursor: true,
    //     breakpoints: {
    //       1439: {
    //         slidesPerView: "auto",
    //         slidesOffsetBefore: 30,
    //         slidesOffsetAfter: 30
    //       },
    //       768: {
    //         slidesPerView: 1.25,
    //         spaceBetween: 25,
    //         slidesOffsetBefore: 20,
    //         slidesOffsetAfter: 20
    //       },
    //       414: {
    //         slidesPerView: 1.25,
    //         spaceBetween: 25,
    //         slidesOffsetBefore: 20,
    //         slidesOffsetAfter: 20
    //       }
    //     }
    //   });
    // },

    // initTabs: function(tabsContainer) {
    //   var tabsContainer = tabsContainer || $(".custom-tabs");
    //   tabsContainer.on("click", function(e) {
    //     var ct = $(e.target);
    //     that = this;
    //     if ($(ct).is(".tab-link")) {
    //       var openTab = ct.data("open"),
    //         tabs = $(that).find(".tab-content"),
    //         tabLinks = $(that).find(".tab-link"),
    //         currentLink = $(ct);
    //       // hide all tabs
    //       tabs.hide();
    //       tabLinks.removeClass("active");
    //       // show only active
    //       currentLink.addClass("active");
    //       $("#" + openTab).show();
    //     }
    //   });
    // },

    // preventDefault: function(e) {
    //   e = e || window.event;
    //   if (e.preventDefault) e.preventDefault();
    //   e.returnValue = false;
    // },

    // preventDefaultForScrollKeys: function(e) {
    //   if (keys[e.keyCode]) {
    //     preventDefault(e);
    //     return false;
    //   }
    // },

    disableScroll: function() {
      var plg = this;
      if (window.addEventListener)
        // older FF
        window.addEventListener("DOMMouseScroll", plg.preventDefault, false);
      window.onwheel = plg.preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = plg.preventDefault; // older browsers, IE
      window.ontouchmove = plg.preventDefault; // mobile
      document.onkeydown = plg.preventDefaultForScrollKeys;
    },

    enableScroll: function() {
      var plg = this;
      if (window.removeEventListener)
        window.removeEventListener("DOMMouseScroll", plg.preventDefault, false);
      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
    },

    fixBody: function() {
      $("html")
        .add("body")
        .addClass("fixBody");
    },

    unfixBody: function() {
      $("html")
        .add("body")
        .removeClass("fixBody");
    },

    checkMedia: function(resolution) {
      return window.matchMedia(resolution).matches;
    },

    // scroll: function(scrollTo, speed) {
    //   $("html, body").animate(
    //     {
    //       scrollTop: $(scrollTo).offset().top - 100
    //     },
    //     speed
    //   );
    // },

    // openPopUp: function(popupSelector) {
    //   $(popupSelector).show();
    // },

    // closePopUp: function(popupSelector) {
    //   $(popupSelector).hide();
    // },

    // initPopUps: function() {
    //   var plg = this;
    //   $(".triger-pop-up").on("click", function(e) {
    //     if ($(this).data("target")) {
    //       var t = $(this).data("target");
    //       if (t !== "#mobile-navigation") {
    //         $(".cross").show();
    //         plg.openPopUp(t);
    //         plg.fixBody();
    //       } else {
    //         $(".cross.inner").show();
    //         plg.openPopUp(t);
    //         plg.fixBody();
    //         plg.disableScroll();
    //       }
    //     }
    //   });
    //   $(".cross").on("click", function() {
    //     plg.closePopUp(".pop-up");
    //     $(".cross").hide();
    //     plg.unfixBody();
    //     plg.enableScroll();
    //   });
    // },

    // initStickyHeader: function() {
    //   var t = $("#sticky-header");

    //   var controller = new ScrollMagic.Controller({
    //     globalSceneOptions: {
    //       triggerHook: "onLeave"
    //     }
    //   });

    //   // build scene
    //   var scene = new ScrollMagic.Scene({
    //     triggerElement: "#initSticky",
    //     duration: 1
    //   })
    //     .addTo(controller)
    //     .on("enter", function(e) {
    //       if (e.target.controller().info("scrollDirection") === "FORWARD") {
    //         t.fadeIn(300);
    //       } else {
    //         t.fadeOut(300);
    //       }
    //     });
    // },

    // initHiddenGallery: function() {
    //   var t = $("a.show-more"),
    //     hiddenImages = $(".col-hidden"),
    //     clicks = 0;
    //   t.on("click", function() {
    //     hiddenImages.toggle();
    //     ++clicks % 2
    //       ? $(this)
    //           .text("Скрыть")
    //           .addClass("opened")
    //       : $(this)
    //           .text("Больше")
    //           .removeClass("opened");
    //   });
    // },

    // initScroller: function() {
    //   var t = $(".scroll"),
    //     scrollTo,
    //     plg = this;
    //   t.on("click", function(e) {
    //     scrollTo = $(e.target).data("scrol-to");
    //     if (scrollTo === "top") {
    //       plg.scroll("body", 500);
    //     } else {
    //       plg.scroll("." + scrollTo, 500);
    //     }
    //   });
    // },

    // initPins: function() {
    //   var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    //   var slider = this.verticalSwiper,
    //     plg = this,
    //     multiplier = 1,
    //     step = 3.5,
    //     progress,
    //     offset = 100,
    //     duration = 4200,
    //     canScroll = true,
    //     media1440 = this.checkMedia("(min-width: 1440px)");
    //   media1024 = this.checkMedia(
    //     "(min-width: 1024px) and (max-width: 1439px)"
    //   );
    //   tablet = this.checkMedia("(min-width: 768px) and (max-width: 1023px)");
    //   mobile = this.checkMedia("(min-width: 320px) and (max-width: 767px)");

    //   var controller = new ScrollMagic.Controller({
    //     globalSceneOptions: {
    //       triggerHook: "onLeave"
    //     }
    //   });

    //   if (media1440 || tablet) {
    //     offset = 100;
    //     duration = 2200;
    //   }
    //   if (media1024) {
    //     offset = 120;
    //     duration = 2200;
    //   }

    //   if (!mobile) {
    //     function delay() {
    //       plg.fixBody();
    //       setTimeout(function() {
    //         plg.unfixBody();
    //         slider.unlockSwipes();
    //       }, 500);
    //     }

    //     // Add one more handler for this event
    //     slider.on("onSlideChangeEnd", function() {
    //       slider.lockSwipes();
    //     });

    //     // build scene
    //     var scene = new ScrollMagic.Scene({
    //       triggerElement: "#pin",
    //       duration: duration,
    //       offset: -offset
    //     })
    //       .addTo(controller)
    //       .setPin("#pin")
    //       .on("enter", function(e) {
    //         if (e.target.controller().info("scrollDirection") === "FORWARD") {
    //           multiplier = 1;
    //         } else {
    //           multiplier = 2;
    //         }
    //       })
    //       .on("progress", function(e) {
    //         progress = 10 * e.progress.toFixed(2);
    //         if (e.target.controller().info("scrollDirection") === "FORWARD") {
    //           if (progress > step * multiplier) {
    //             slider.slideNext();
    //             multiplier++;
    //             delay();
    //           }
    //         } else {
    //           if (progress < step * multiplier) {
    //             slider.slidePrev();
    //             multiplier--;
    //             delay();
    //           }
    //         }
    //       });
    //   }
    // },

    // preloader: function() {
    //   var ovrl = $(".preloader"),
    //     img = $("img"),
    //     status = $(".preloader-status"),
    //     c = 0,
    //     tot = img.length;

    //   function imgLoaded() {
    //     c += 1;
    //     var perc = (((100 / tot) * c) << 0) + "%";
    //     status.css({
    //       width: perc
    //     });
    //     if (c === tot) return doneLoading();
    //   }

    //   function doneLoading() {
    //     $(".preloader").addClass("zoomOut");
    //     setTimeout(function() {
    //       $(".preloader").remove();
    //     }, 1000);
    //   }

    //   function processImageLoad() {
    //     for (var i = 0; i < tot; i++) {
    //       var tImg = new Image();
    //       tImg.onload = imgLoaded;
    //       tImg.onerror = imgLoaded;
    //       tImg.src = img[i].src;
    //     }
    //   }
    //   processImageLoad();
    // },

    initShowSubMenu: function() {
      var btn = $("#js-menu-toggle"),
        menu = $("#js-sub-menu");

      btn.on("click", function(e) {
        e.preventDefault();

        btn.toggleClass("opened");
        menu.fadeToggle(function() {
          menu.toggleClass("opened");
        });
      });
    },

    initShowMobileMenu: function() {
      var btn = $("#js-burger-toggle"),
        menu = $("#js-mobile-menu");

      btn.on("click", function(e) {
        e.preventDefault();

        btn.toggleClass("is-active");
        menu.fadeToggle();
      });
    },

    initShowOrderForm: function() {
      var showBtn = $(".js-show-form"),
        formHolder = $(".js-form-holder"),
        form = $(".js-form-holder form"),
        contentHolder = $(".js-content-holder"),
        thanksHolder = $(".js-thanks-holder"),
        closeBtn = $(".js-close-form");
      (submitBtn = $(".js-form-submit")), (_this = this);

      showBtn.on("click", function(e) {
        _this.fixBody();
        formHolder.show();
        contentHolder.hide();
      });

      form.submit(function(e) {
        var inputs = [];
        e.preventDefault();
        $(e.target)
          .find("input")
          .each(function(index, item) {
            inputs.push(item.value);
          });

        var templateParams = {
          email: inputs[0],
          name: inputs[1],
          phone: inputs[2]
        };

        emailjs.send("gmail", "template_FeSMoiTc", templateParams).then(
          function(response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function(error) {
            console.log("FAILED...", error);
          }
        );

        thanksHolder.show();
        formHolder.hide();
      });

      closeBtn.on("click", function(e) {
        _this.unfixBody();
        formHolder.hide();
        thanksHolder.hide();
        contentHolder.show();
      });
    },

    initShowContactForm: function() {
      var showBtn = $("#js-show-contact-form"),
        formHolder = $("#js-contact-form-holder"),
        form = $("#js-contact-form-holder form"),
        tip = $(".js-contact-form-tip "),
        thanksHolder = $("#js-thanks-contact-holder"),
        closeBtn = $(".js-close-contact-form");
      submitBtn = $("#js-contact-form-submit");

      showBtn.on("click", function(e) {
        formHolder.show();
        tip.hide();
      });
      
      form.submit(function(e) {
        var inputs = [];
        e.preventDefault();
        $(e.target)
          .find("input")
          .each(function(index, item) {
            inputs.push(item.value);
          });

        var templateParams = {
          email: inputs[0],
          name: inputs[1],
          phone: inputs[2]
        };

        emailjs.send("gmail", "template_FeSMoiTc", templateParams).then(
          function(response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function(error) {
            console.log("FAILED...", error);
          }
        );

        thanksHolder.show();
        formHolder.hide();
      });
      // submitBtn.on("click", function(e) {
      //   thanksHolder.show();
      //   formHolder.hide();
      // });
      closeBtn.on("click", function(e) {
        formHolder.hide();
        thanksHolder.hide();
        tip.show();
      });
    },

    initSlider: function() {
      if (this.checkMedia("(max-width: 1024px)")) {
        // MOBILE
        $(".hide-mobile").remove();
        $(".desktop-services").remove();
        $("#js-transporting-slider").slick({});
        $("#js-vip-estate-slider").slick({});
        $("#js-vip-buildings-slider").slick({});
        $("#js-cyber-security-slider").slick({});
      } else {
        // DESKTOP
        $(".show-mobile").remove();
        $(".mobile-services").remove();
      }
      $("#js-security-slider").slick({});
      $("#js-security-inner-slider").slick({});
    },

    menuClickEmitter: function(el) {
      var trigger = $(el).data("triger");
      $(el)
        .siblings()
        .removeClass("active");
      $(el).addClass("active");
      $(".service").removeClass("service-active");
      $("#service-" + trigger).addClass("service-active");

      if (trigger != "security") {
        $("#js-" + trigger + "-slider").slick({
          variableWidth: true,
          responsive: [
            {
              breakpoint: 480,
              settings: {
                variableWidth: false
              }
            }
          ]
        });
      }

      $(".service.service-active")
        .find(".content-holder")
        .addClass("animated faster fadeInLeftLonger");
      $(".service.service-active")
        .find(".slider-holder")
        .addClass("animated faster delay-short fadeInRight");
    },

    initMenuAnimations: function() {
      var _this = this;
      $("ul.inner-sub-menu").on("click", function(e) {
        _this.menuClickEmitter(e.target);
      });
    },

    initScroller: function() {
      var _this = this;

      $(".main").onepage_scroll({
        // // sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        // easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        //                                  // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: _this.checkMedia("(min-width: 1024px)") ? 1000 : 1500, // AnimationTime let you define how long each section takes to animate
        pagination: false, // You can either show or hide the pagination. Toggle true for show, false for hide.
        // updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        // beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {
          console.log(index);
          if (index === 2 && _this.checkMedia("(min-width: 1024px)")) {
            $(".avoid-assasination .col:first-child h1").addClass(
              "animated fadeInLeft"
            );
            $(".avoid-assasination .col:first-child p").addClass(
              "animated fadeInLeft"
            );
            $(".avoid-assasination .col:last-child .image-holder").addClass(
              "animated fadeInRight"
            );
          } else if (index === 3 && _this.checkMedia("(min-width: 1024px)")) {
            $(".service.service-active")
              .find(".content-holder")
              .addClass("animated fadeInLeft");
            $(".service.service-active")
              .find(".slider-holder")
              .addClass("animated fadeInRight");
            $(".inner-sub-menu").addClass("animated fadeInUp");
          } else if (index === 4 && _this.checkMedia("(min-width: 1024px)")) {
            $(".become-partner")
              .find(".content-holder")
              .add(".form-holder")
              .addClass("animated fadeInLeft");
          } else if (index === 5 && _this.checkMedia("(min-width: 1024px)")) {
            $(".map .section-container .content-holder").addClass(
              "animated fadeInLeft"
            );
            $(".map .footer").addClass("animated fadeInUp");
          }
        }, // This option accepts a callback function. The function will be called after the page moves.
        loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        // keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: 600 // You can fallback to normal page scroll by defining the width of the browser in which
        //                                  // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        //                                  // the browser's width is less than 600, the fallback will kick in.
        // direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
      });

      $(".menu")
        .add(".sub-menu")
        .on("click", function(e) {
          var scrollTo = $(e.target).data("scroll-to");
          var emitClick = $(e.target).data("emit-click");
          if (scrollTo) {
            $(".main").moveTo(scrollTo);
          }
          if (emitClick) {
            setTimeout(function() {
              _this.menuClickEmitter($('li[data-triger="' + emitClick + '"]'));
            }, 700);
          }
        });

      // $(".main").moveTo(3);
    },

    initAllPlugins: function() {
      this.initSlider();
      this.initShowMobileMenu();
      this.initMenuAnimations();
      this.initShowSubMenu();
      this.initScroller();
      emailjs.init("user_vpTJtdbrvPQy4LMPhsP27")
      this.initShowOrderForm();
      this.initShowContactForm();
    }
  };

  bredek.init = function(options) {
    var self = this;
    self.initAllPlugins();
  };

  bredek.init.prototype = bredek.prototype;
  global.bredek = global.BREDEK = bredek;
})(window, jQuery);

$(document).ready(function() {
  var plg = BREDEK();
  // document.addEventListener("DOMContentLoaded", plg.preloader(), false);
  // plg.initPins();
});

// (function($) {
//   $.fn.swipeEvents = function() {
//     return this.each(function() {

//       var startX,
//           startY,
//           $this = $(this);

//       $this.bind('touchstart', touchstart);

//       function touchstart(event) {
//         var touches = event.originalEvent.touches;
//         if (touches && touches.length) {
//           startX = touches[0].pageX;
//           startY = touches[0].pageY;
//           $this.bind('touchmove', touchmove);
//           $this.bind('touchend', touchend);
//         }
//         event.preventDefault();
//       }

//       function touchmove(event) {
//         var touches = event.originalEvent.touches;
//         if (touches && touches.length) {
//           var deltaX = startX - touches[0].pageX;
//           var deltaY = startY - touches[0].pageY;

//           if (deltaX >= 50) {
//             $this.trigger("swipeLeft");
//           }
//           if (deltaX <= -50) {
//             $this.trigger("swipeRight");
//           }
//           if (deltaY >= 50) {
//             $this.trigger("swipeUp");
//           }
//           if (deltaY <= -50) {
//             $this.trigger("swipeDown");
//           }
//           if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
//             $this.unbind('touchmove', touchmove);
//             $this.unbind('touchend', touchend);
//           }
//         }
//         event.preventDefault();
//       }

//       function touchend(event) {
//         $this.unbind('touchmove', touchmove);
//         event.preventDefault();
//       }

//     });
//   };
// })(jQuery);
