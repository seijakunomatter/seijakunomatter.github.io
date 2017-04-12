function seeAlso(article){

      $("#seeAlso").html(`
<div class="see">
<a href="${article.toLowerCase()}.html">
<div class="cropic" style="background:url('img/${article.toLowerCase()}.png');"></div>
<span class="seetit">${article}</span>
</a>
</div>
`)

  };

 function splitTest(str) {
    return str.split('\\').pop().split('/').pop();
}
