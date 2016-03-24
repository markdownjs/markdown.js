(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("markdown"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["markdown"], mod);
  else // Plain browser env
    mod(markdown);
})(function(markdown) {
	"use strict";

	markdown.Renderer = Renderer;
});