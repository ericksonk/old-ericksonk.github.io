// source: http://slickmedia.co.uk/blog/glenns-blog/limit-number-of-characters-in-div-jquery-css/
$('li.posts p').each(function () {
  var len = $(this).text().length; // selects p element's text and length
  if ($(len > 140)) { // if length is greater than x
    $(this).text($(this).text().substring(0,140) + '...'); // return `p` elements characters between 0 and x plux `...`
  }
});

// `.text()` selects combined text contents of matched element
// `.substring(indexStart, indexEnd)` - returns part of string between the given indexes
