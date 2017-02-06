
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
     success: function(data) {

       var htmlstr = "";
       htmlstr += '<div class="recomend">';
       htmlstr += '<ul>';

       var xmlText = data["responseText"];
       var xmlDoc = $.parseXML(xmlText);
       console.log(xmlDoc);

        $(xmlDoc).find("item").each(function (i) {

          var elText = $(this).text();　//テキスト全体
          var elA = $(this).attr('about');　//URL全体
          var elDis = $(this).find('description').text();　//概要
          //タグの抽出
          $(this).find("subject").each(function (x) {
            console.log($(this).text());
          });

          //title要素の抽出
          var elTextRep = elText.replace(elDis,'');
          elTextRep = elTextRep.replace(elA,'')

          htmlstr += '<li class="section">';
          htmlstr += '<a href="' + elA + '" target="_bkank">';
          htmlstr += '<h2>' + elTextRep + '</h2>';
          htmlstr += '<span class="disc">' + elDis + '</span>';
          htmlstr += '</a></li>'

        });

        htmlstr += '</ul>';
        htmlstr += '</div>';
        //footer前に挿入する
        $('footer').before(htmlstr);
      }
   });
 };

/*
$.ajax({
		//はてなrssファイルを読み込む
		//ブログのアドレスの最後にrssをつける
     url:'http://tequila73.at.webry.info/rss/index.rdf',
     success: function(data){

			 		//はてなrssの読み込み
					var rss_url = 'http://tequila73.at.webry.info/rss/index.rdf';

          var htmlstr = "";
					htmlstr += '<div class="recomend">';
          htmlstr += '<ul>';

					//アイテムの調整
          $.get(rss_url, function(data) {
               $(data).find("item").each(function (i) {
                    var el = $(this);
										var elimg = el.find("enclosure").attr("url");

                    htmlstr += '<li class="section">';
                    htmlstr += '<p class="imgP"><img src="' + elimg + '" alt="" width="170" ></p>';
                    htmlstr += '<a href="' + el.find("link").text() + '" title="' + el.find("title").text() + '" target="_blank">' + el.find("title").text() + ' - ' + el.find("category").text() + '</a>';
                    htmlstr += '</li>';
										 if(i === 5) {
											// 表示件数の設定
											return false;
										};
               });

          htmlstr += '</ul>';
          htmlstr += '</div>';

          //footer前に挿入する
					$('footer').before(htmlstr);
          });
     }
});
*/
