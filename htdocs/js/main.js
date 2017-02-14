
var urls = [
  'http://tequila73.at.webry.info/rss/index.rdf',
  'http://nke.seesaa.net/index.rdf',
  'http://blogs.yahoo.co.jp/kabutarounokabuttemasu/rss.xml'];

for ( var x =0; x < urls.length; ++x ){
$.ajax({
  //読み込むファイル
    url: urls[x],
    type: "GET",
    dataType:"xml",
    jsonpCallback: "_stdout",
     success: function(data) {

       var htmlstr = "";
       htmlstr += '<div class="recomend">';
       htmlstr += '<ul>';

       var xmlText = data["responseText"];
       var xmlDoc = $.parseXML(xmlText);

        $(xmlDoc).find("item").each(function (i) {

          /*
          *Biglobe Blogの整形
          */
          var elText = $(this).text();　//テキスト全体
          var elTextRep = elText.replace(elDis,'');

          var elA = $(this).attr('about');　//URL全体
          var elDis = $(this).find('description').text();　//概要
          //時間の抽出
          var elDate = '';
          $(this).find('date').each(function (x) {
            elDate = $(this).text();
          });

          var elCre = $(this).find('creator').text();

          //タグの抽出
          var htmlultag = '<ul>';
          $(this).find('subject').each(function (y) {
            var eltag = $(this).text();
            htmlultag += '<li class="tag">' + eltag + '</li>';
          });
          htmlultag += '</ul>';


          //title要素の抽出
          elTextRep = elTextRep.replace(elA,'');
          elTextRep = elTextRep.replace(elDate, '');
          elTextRep = elTextRep.replace(elCre, '');

          var elCont = $(this).find('content').text();

          htmlstr += '<li class="section">';
          htmlstr += '<a href="' + elA + '" target="_bkank">';
          htmlstr += '<h2>' + elTextRep + '</h2>';
          htmlstr += '<span class="disc">' + elDis + '</span>';
          htmlstr += htmlultag;
          htmlstr += '</a></li>'

        });

        htmlstr += '</ul>';
        htmlstr += '</div>';
        //footer前に挿入する
        $('footer').before(htmlstr);
      }
   });
 };
