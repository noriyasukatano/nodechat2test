$.ajax({
  //読み込むファイル
    url: 'http://tequila73.at.webry.info/rss/index.rdf',
    type: "GET",
     success: function(data) {
       var rss_url = 'http://tequila73.at.webry.info/rss/index.rdf';

       $.get(rss_url, function(data) {
            $(data.responseText).find("item").each(function (i) {
              var el = $(this).text();
              var elHTML.innerHTML = $(data.responseText);
                 console.log(el);
                 console.log("innerHTML:" + elHTML);
               });
             });
     }
});
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
