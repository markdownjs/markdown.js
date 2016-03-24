(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("markdown"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["markdown"], mod);
  else // Plain browser env
    mod(markdown);
})(function(markdown) {
	"use strict";

	markdown.Lexer = Lexer;
	markdown.lexer = Lexer.lex;

	markdown.InlineLexer = InlineLexer;
	markdown.inlineLexer = InlineLexer.output;
});