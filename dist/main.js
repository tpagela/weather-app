/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/fetch.js":
/*!******************************!*\
  !*** ./src/modules/fetch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weather = (() => {
    function convertData(data) {
      const {
        name: cityName,
        main: { temp: temperature, feels_like: feelsLike, humidity },
        wind: { speed: windSpeed },
      } = data;
      return { cityName, temperature, feelsLike, humidity, windSpeed };
    }
  
    async function getData(city) {
      const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=28fe7b5f9a78838c639143fc517e4343`;
      try {
        const response = await fetch(endpoint, { mode: "cors" });
        if (!response.ok) throw new Error(`City ${city} not found`);
        const data = convertData(await response.json());
        return data;
      } 
      catch (error) {
        alert(error);
        return null;
      }
    }
    return { getData };
  })();
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);

/***/ }),

/***/ "./src/modules/setValues.js":
/*!**********************************!*\
  !*** ./src/modules/setValues.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const view = (() => {
    function setSearchResult(weatherData) {
      if (!weatherData) return;
  
      const searchResult = document.getElementById("searchResult");
      searchResult.classList.add("active");
  
      const cityName = document.getElementById("cityName");
      const temperature = document.getElementById("temperature");
      const feelsLike = document.getElementById("feelsLike");
      const humidity = document.getElementById("humidity");
      const wind = document.getElementById("wind");
  
      cityName.textContent = `${weatherData.cityName}`;
      temperature.textContent = `${weatherData.temperature} °F`;
      feelsLike.textContent = `Feels like: ${weatherData.feelsLike} °F`;
      humidity.textContent = `Humidity: ${weatherData.humidity}%`;
      wind.textContent = `Wind Speed: ${weatherData.windSpeed} mph`;
    }
  
    return { setSearchResult };
  })();
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetch */ "./src/modules/fetch.js");
/* harmony import */ var _modules_setValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/setValues */ "./src/modules/setValues.js");




const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
  if (searchInput.value === "") return;
  const weatherData = await _modules_fetch__WEBPACK_IMPORTED_MODULE_0__["default"].getData(searchInput.value);
  _modules_setValues__WEBPACK_IMPORTED_MODULE_1__["default"].setSearchResult(weatherData);
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFvRDtBQUNwRSxnQkFBZ0Isa0JBQWtCO0FBQ2xDLFFBQVE7QUFDUixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLEtBQUs7QUFDakY7QUFDQSxpREFBaUQsY0FBYztBQUMvRCxrREFBa0QsTUFBTTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEdBQUc7QUFDSDtBQUNBLEVBQUUsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUMxQnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCxtQ0FBbUMseUJBQXlCO0FBQzVELDZDQUE2Qyx1QkFBdUI7QUFDcEUsMENBQTBDLHFCQUFxQjtBQUMvRCx3Q0FBd0MsdUJBQXVCO0FBQy9EO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsR0FBRztBQUNIO0FBQ0EsRUFBRSxpRUFBZSxJQUFJOzs7Ozs7VUN2QnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0M7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsOERBQWU7QUFDM0MsRUFBRSwwRUFBb0I7QUFDdEIsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvbW9kdWxlcy9mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9tb2R1bGVzL3NldFZhbHVlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdlYXRoZXIgPSAoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gY29udmVydERhdGEoZGF0YSkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgbmFtZTogY2l0eU5hbWUsXHJcbiAgICAgICAgbWFpbjogeyB0ZW1wOiB0ZW1wZXJhdHVyZSwgZmVlbHNfbGlrZTogZmVlbHNMaWtlLCBodW1pZGl0eSB9LFxyXG4gICAgICAgIHdpbmQ6IHsgc3BlZWQ6IHdpbmRTcGVlZCB9LFxyXG4gICAgICB9ID0gZGF0YTtcclxuICAgICAgcmV0dXJuIHsgY2l0eU5hbWUsIHRlbXBlcmF0dXJlLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCB3aW5kU3BlZWQgfTtcclxuICAgIH1cclxuICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoY2l0eSkge1xyXG4gICAgICBjb25zdCBlbmRwb2ludCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9aW1wZXJpYWwmYXBwaWQ9MjhmZTdiNWY5YTc4ODM4YzYzOTE0M2ZjNTE3ZTQzNDNgO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHsgbW9kZTogXCJjb3JzXCIgfSk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBDaXR5ICR7Y2l0eX0gbm90IGZvdW5kYCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGNvbnZlcnREYXRhKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gXHJcbiAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgZ2V0RGF0YSB9O1xyXG4gIH0pKCk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgd2VhdGhlcjsiLCJjb25zdCB2aWV3ID0gKCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIHNldFNlYXJjaFJlc3VsdCh3ZWF0aGVyRGF0YSkge1xyXG4gICAgICBpZiAoIXdlYXRoZXJEYXRhKSByZXR1cm47XHJcbiAgXHJcbiAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoUmVzdWx0XCIpO1xyXG4gICAgICBzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBcclxuICAgICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHlOYW1lXCIpO1xyXG4gICAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcGVyYXR1cmVcIik7XHJcbiAgICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHNMaWtlXCIpO1xyXG4gICAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XHJcbiAgICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRcIik7XHJcbiAgXHJcbiAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuY2l0eU5hbWV9YDtcclxuICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS50ZW1wZXJhdHVyZX0gwrBGYDtcclxuICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7d2VhdGhlckRhdGEuZmVlbHNMaWtlfSDCsEZgO1xyXG4gICAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt3ZWF0aGVyRGF0YS5odW1pZGl0eX0lYDtcclxuICAgICAgd2luZC50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke3dlYXRoZXJEYXRhLndpbmRTcGVlZH0gbXBoYDtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiB7IHNldFNlYXJjaFJlc3VsdCB9O1xyXG4gIH0pKCk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgdmlldzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB3ZWF0aGVyIGZyb20gXCIuL21vZHVsZXMvZmV0Y2hcIjtcclxuaW1wb3J0IHZpZXcgZnJvbSBcIi4vbW9kdWxlcy9zZXRWYWx1ZXNcIjtcclxuXHJcblxyXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hGb3JtXCIpO1xyXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIik7XHJcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnRuXCIpO1xyXG5cclxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gIGlmIChzZWFyY2hJbnB1dC52YWx1ZSA9PT0gXCJcIikgcmV0dXJuO1xyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlci5nZXREYXRhKHNlYXJjaElucHV0LnZhbHVlKTtcclxuICB2aWV3LnNldFNlYXJjaFJlc3VsdCh3ZWF0aGVyRGF0YSk7XHJcbn0pO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9