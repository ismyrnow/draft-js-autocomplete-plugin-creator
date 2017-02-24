"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Whether or not the cursor should be considered within the search term.
// Used to determine if the suggestions list should be shown or hidden.
var defaultSelectionPredicate = function defaultSelectionPredicate(_ref) {
  var start = _ref.start,
      end = _ref.end,
      anchorOffset = _ref.anchorOffset;
  return anchorOffset >= start && anchorOffset <= end;
};

exports.default = defaultSelectionPredicate;