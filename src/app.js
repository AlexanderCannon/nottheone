import "./css/style.css";
import "./css/stars.css"
import 'babel-polyfill';
import $ from 'jquery';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Barba from "barba.js";
import inView from "in-view"

$('link[rel=stylesheet][href*="bin/default.css"]').remove();

// document.addEventListener("DOMContentLoaded", function () {
//   var lastElementClicked;
//   Barba.Pjax.init();
//   Barba.Prefetch.init();

//   Barba.Dispatcher.on('linkClicked', function (el) {
//     lastElementClicked = el;
//   });

//   var ExpandTransition = Barba.BaseTransition.extend({
//     start: function () {
//       this.originalThumb = lastElementClicked;

//       Promise
//         .all([this.newContainerLoading, this.enlargeThumb()])
//         .then(this.showNewPage.bind(this));
//     },

//     enlargeThumb: function () {
//       var deferred = Barba.Utils.deferred();
//       var thumbPosition = this.originalThumb.getBoundingClientRect();

//       this.cloneThumb = this.originalThumb.cloneNode(true);
//       this.cloneThumb.style.position = 'absolute';
//       this.cloneThumb.style.top = thumbPosition.top + 'px';

//       this.oldContainer.appendChild(this.cloneThumb);

//       TweenLite.to(this.cloneThumb, 0.3, {
//         top: 0,
//         height: window.innerHeight,
//         width: window.innerWidth,
//         onComplete: function () {
//           deferred.resolve();
//         }
//       });

//       return deferred.promise;
//     },

//     showNewPage: function () {
//       this.newContainer.style.visibility = 'visible';
//       this.done();
//     }
//   });


//   var ShrinkTransition = Barba.BaseTransition.extend({
//     start: function () {
//       this.newContainerLoading.then(this.shrinkImage.bind(this));
//     },

//     shrinkImage: function () {
//       var _this = this;

//       this.oldContainer.style.zIndex = '10';
//       this.newContainer.style.visibility = 'visible';

//       var href = Barba.HistoryManager.prevStatus().url.split('/').pop();
//       var destThumb = this.newContainer.querySelector('a[href="' + href + '"]');
//       var destThumbPosition = destThumb.getBoundingClientRect();
//       var fullImage = this.oldContainer.querySelector('.full');

//       TweenLite.to(this.oldContainer.querySelector('.back'), 0.2, { opacity: 0 });

//       TweenLite.to(fullImage, 0.3, {
//         top: destThumbPosition.top,
//         height: destThumb.clientHeight,
//         width: destThumb.clientWidth,
//         onComplete: function () {
//           _this.done();
//         }
//       });
//     }
//   });

//   Barba.Pjax.getTransition = function () {
//     var transitionObj = ExpandTransition;

//     if (Barba.HistoryManager.prevStatus().namespace === 'detail') {
//       transitionObj = ShrinkTransition;
//     }

//     return transitionObj;
//   };

// });
inView.offset({top: 100, bottom: 100});
inView('.key')
    .on('enter', el => {
      el.className = "highlight";
    })
    .on('exit', el => {
        el.className = "key";
    });

    inView('.dor')
    .on('enter', el => {
      el.setAttribute('class', 'ugg');
    })
    .on('exit', el => {
        el.setAttribute('class', 'dor');
    });

// $(window).on('load resize scroll', function (e) {
//   $('.key').each(function (index) {
//     var keyHeight = parseInt($(this)[0].getBoundingClientRect().height);
//     var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//     if ($(this)[0].getBoundingClientRect().top < (viewHeight - keyHeight)) {
//       $('.key').eq(index).addClass('highlight');
//     } else if ($(this)[0].getBoundingClientRect().top > (viewHeight - keyHeight)) {
//       $('.key').eq(index).removeClass('highlight');
//     }
//   });
// });