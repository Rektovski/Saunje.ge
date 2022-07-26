import React, {useContext} from 'react';
import ThemeContext from "../../context/ThemeContext";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

export default function LeftLayout() {
    const {theme} = useContext(ThemeContext);

    return (
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {

                // window.location.replace("http://localhost:3000" + itemId)

                document.getElementById('yle').innerHTML = "<td valign=\"top\">\n" +
                    "<p style=\"text-align: center;\"><img src=\"http://amigo.ge/saunjegallery/albums/userpics/10001/mapr~0.gif\" border=\"0\"></p>\n" +
                    "<p style=\"text-align: left;\">&nbsp;</p>\n" +
                    "<h2>\n" +
                    "<ul>\n" +
                    "</ul>\n" +
                    "<ul>\n" +
                    "<li><a href=\"http://www.saunje.ge/index.php?id=11\"><strong>ეკლესია - მონასტრები</strong></a><span style=\"text-align: center;\"> &lt;&lt;&lt;&lt;&lt;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &gt;&gt;&gt;&gt;&gt;&gt;</span><a href=\"http://www.saunje.ge/index.php?id=17\"><strong>ტრადიციები (ეთნოგრაფია) და სიმბოლიკა</strong></a><strong class=\"caption\" style=\"text-align: center;\"> .</strong></li>\n" +
                    "<li class=\"caption\"><a href=\"http://www.saunje.ge/index.php?id=12\"><strong>ციხე - ქალაქები</strong></a><strong class=\"caption\"> -&lt;&lt;&lt;&lt;&lt;.&nbsp; &nbsp; &nbsp;.&nbsp; &nbsp;..&gt;&gt;&gt;&gt;&gt; </strong><a href=\"http://www.saunje.ge/index.php?id=83\"><strong>ქართველები</strong></a></li>\n" +
                    "</ul>\n" +
                    "<ul>\n" +
                    "<li class=\"caption\"><strong><a href=\"http://www.saunje.ge/index.php?id=15\"><strong>მითები და ლეგენდები</strong></a> .&lt;&lt;&lt;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&gt;&gt;&gt; - </strong><a href=\"http://www.saunje.ge/index.php?id=1209\"><strong>პროზა და პოეზია</strong></a><strong> .&lt;&lt;&lt;&lt;...&gt;&gt;&gt;&gt;&gt; </strong><a href=\"http://www.saunje.ge/index.php?id=296\"><strong>საინტერესო სტატიები</strong></a></li>\n" +
                    "</ul>\n" +
                    "<ul>\n" +
                    "<li><span class=\"caption\"><strong class=\"caption\"><a href=\"http://www.saunje.ge/index.php?id=2\"><strong>ეპარქიები</strong></a> &lt;&lt;&lt;.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&gt;&gt;&gt;- </strong><span class=\"caption\"><a href=\"http://www.saunje.ge/index.php?id=16\"><strong>საქართველოს მეფეები</strong></a></span><strong class=\"caption\"> .&lt;&lt;&lt;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&gt;&gt;&gt;- </strong><span class=\"caption\"><a href=\"http://www.saunje.ge/index.php?id=559\"><strong>სიმღერები, საგალობლები</strong></a></span></span></li>\n" +
                    "</ul>\n" +
                    "<ul>\n" +
                    "<li class=\"caption\"><a href=\"http://www.saunje.ge/index.php?id=1208\"><strong>მემატიანე//საქართველოს ისტორია</strong></a> .&lt;&lt;&lt;&nbsp; &nbsp; &nbsp; &nbsp; &gt;&gt;&gt;. -<a href=\"http://www.saunje.ge/index.php?id=117\"> <strong>სიახლეები, აღმოჩენები</strong></a></li>\n" +
                    "</ul>\n" +
                    "<ul>\n" +
                    "<li class=\"caption\"><a href=\"http://www.saunje.ge/index.php?id=13\"><strong>უძველესი საქართველო</strong></a><strong class=\"caption\"> .&lt;&lt;&lt;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&gt;&gt;&gt;- </strong><span class=\"caption\"><a href=\"http://www.saunje.ge/index.php?id=18\"><strong>ბმულები, ბიბლიოგრაფია </strong></a></span></li>\n" +
                    "</ul>\n" +
                    "<ul>\n" +
                    "<li class=\"caption\" style=\"text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=14\"><strong>ექსპონატები</strong></a><strong class=\"caption\"> . &lt;&lt;&lt;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&gt;&gt;&gt;- </strong><span class=\"caption\"><a href=\"http://www.saunje.ge/index.php?option=com_content&amp;view=article&amp;id=364%3A2010-04-05-14-40-36&amp;catid=2%3A2010-01-29-17-30-44&amp;Itemid=18&amp;lang=ka\"><strong>ენა და დამწერლობა</strong></a></span><strong class=\"caption\"> . &lt;&lt;&lt;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&gt;&gt;&gt; - </strong><a href=\"http://www.saunje.ge/index.php?id=19\"><strong>ქართული იარაღი</strong></a></li>\n" +
                    "<li><a href=\"http://www.saunje.ge/index.php?option=com_content&amp;view=article&amp;id=84%3A2010-02-13-08-56-16&amp;catid=2%3A2010-01-29-17-30-44&amp;Itemid=14&amp;lang=ka\"><strong>რუკები და მარშრუტები</strong></a><strong class=\"caption\" style=\"text-align: center;\"> . &lt;&lt;&lt;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &gt;&gt;&gt; - </strong><span class=\"caption\" style=\"text-align: center;\"><a href=\"http://www.saunje.ge/index.php?option=com_content&amp;view=article&amp;id=560%3A2010-07-29-07-27-15&amp;catid=2%3A2010-01-29-17-30-44&amp;Itemid=20&amp;lang=ka\"><strong>ბუნება</strong></a></span><strong class=\"caption\" style=\"text-align: center;\"> .&lt;&lt;&lt;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&gt;&gt;&gt; - </strong><a href=\"http://www.saunje.ge/index.php?id=20\"><strong>ჩვენს შესახებ</strong></a></li>\n" +
                    "</ul>\n" +
                    "<ul>\n" +
                    "</ul>\n" +
                    "</h2>\n" +
                    "<p style=\"text-align: justify;\"><em>საქართველოს მიწა - წყალზე მგონი არ მოიძებნება არც ერთი კუთხე, არც ერთი ხეობა და სოფელი, რომ წარსულის რაიმე ნაშთი არ იყოს დარჩენილი </em><em>- ან ძველი ეკლესია და სამრეკლო, ან ციხის ნანგრევი, ან სადარაჯო კოშკი, ან ნასახლარი</em><em>... </em><em>ეს ყველაფერი მოწმობს, რომ მრავალი ათეული საუკუნის მანძილზე ჩვენი ხალხის შემოქმედება უწყვეტი და უშრეტი იყო... </em></p>\n" +
                    "<p style=\"text-align: right;\"><em style=\"text-align: left;\">ვ.ბერიძე</em></p>\n" +
                    "<p style=\"text-align: center;\"><a href=\"http://dzeglebi.ge/\"><img src=\"http://amigo.ge/saunjegallery/albums/userpics/10001/dzeglebis_baneri_160.jpg\" border=\"0\" width=\"160\"></a><a href=\"http://pshavi.ge/\"><img src=\"http://amigo.ge/saunjegallery/albums/userpics/10001/pshavi_banner_250x50.jpg\" border=\"0\"></a></p>\n" +
                    "<p style=\"text-align: right;\"><a href=\"/index.php?id=1626&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>\"დაეხმარე საუნჯეს\"</strong></a></p>\n" +
                    "<p style=\"text-align: center;\"><strong>ინტერნეტ ტელევიზია მარტივი</strong></p>\n" +
                    "<p style=\"text-align: center;\"><strong><img src=\"/images/stories/logo.jpg\" border=\"0\"><br></strong></p>\n" +
                    "<p style=\"text-align: center;\"><strong>MarTV</strong></p>\n" +
                    "<p style=\"text-align: center;\"><a href=\"https://www.youtube.com/channel/UCkYq3d0MhkI0cpNawWvYCrw?view_as=subscriber\">https://www.youtube.com/channel/UCkYq3d0MhkI0cpNawWvYCrw?view_as=subscriber</a></p>\n" +
                    "<p style=\"text-align: center;\"><a href=\"https://www.youtube.com/channel/UC9cMX7PjqbW2-0d7OeEEMKQ\">https://www.youtube.com/channel/UC9cMX7PjqbW2-0d7OeEEMKQ</a> (ძველი იუტუბი-არხი)</p>\n" +
                    "<h2 style=\"text-align: center;\"><strong>ხორნაბუჯის ისტორია</strong></h2>\n" +
                    "<p style=\"text-align: center;\"><a href=\"https://www.youtube.com/watch?v=sVpD6Yq-DtY&amp;t=58s\">https://www.youtube.com/watch?v=sVpD6Yq-DtY&amp;t=58s</a></p>\n" +
                    "<p style=\"text-align: center;\"><img src=\"http://s019.radikal.ru/i643/1706/d5/b6c3bd1ff811.jpg\" border=\"0\" width=\"230\"></p>\n" +
                    "<h2 style=\"text-align: center;\"><a href=\"/index.php?id=13&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>უძველესი კავკასია</strong></a></h2>\n" +
                    "<h3 style=\"text-align: center;\"><a href=\"https://www.youtube.com/watch?v=RXhtD34_hpU&amp;t=3223s\"><strong>პრეზენტაციის ვიდეოჩანაწერი (კავკასიური სახლი)</strong></a></h3>\n" +
                    "<div style=\"text-align: center;\"><a href=\"https://www.youtube.com/watch?v=RXhtD34_hpU&amp;t=3223s\">https://www.youtube.com/watch?v=RXhtD34_hpU&amp;t=3223s</a></div>\n" +
                    "<h3 style=\"text-align: center;\"><em style=\"font-weight: normal;\">(პროექტი განხორციელდა კავკასიური სახლის მხარდაჭერით)</em></h3>\n" +
                    "<p style=\"text-align: center;\"><strong>* * * * * * *</strong></p>\n" +
                    "<h2 style=\"text-align: center;\"><a href=\"/index.php?id=1219&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>ჩრდილოეთ კავკასიის ქართული ძეგლები<br></strong></a></h2>\n" +
                    "<h3 style=\"text-align: center;\"><em style=\"font-weight: normal;\">(პროექტი განხორციელდა კავკასიური სახლის მხარდაჭერით)</em></h3>\n" +
                    "<p style=\"text-align: center;\"><img src=\"http://amigo.ge/saunjegallery/albums/userpics/10001/tkobaierdi.jpg\" border=\"0\"></p>\n" +
                    "<h2 style=\"text-align: center;\"><a href=\"https://www.youtube.com/watch?v=SeyCjTuPhL4\"><strong>პრეზენტაციის ვიდეოჩანაწერი (კავკასიური სახლი)</strong></a></h2>\n" +
                    "<p style=\"text-align: center;\"><a href=\"https://www.youtube.com/watch?v=SeyCjTuPhL4\"> https://www.youtube.com/watch?v=SeyCjTuPhL4</a></p>\n" +
                    "<h2 style=\"text-align: center;\"><a href=\"https://www.youtube.com/watch?v=BqUY6_VTXcc\"><strong>პრეზენტაციის შესახებ (საპატრიარქოს ტელევიზია - \"ერთსულოვნება\") </strong></a></h2>\n" +
                    "<p style=\"text-align: center;\"><a href=\"http://amigo.ge/saunjegallery/albums/userpics/10001/mefeni.jpg\"><img src=\"http://amigo.ge/saunjegallery/albums/userpics/10001/normal_mefeni.jpg\" border=\"0\"></a></p>\n" +
                    "<p style=\"text-align: center;\"><strong>გაყიდვაში გამოვიდა პოსტერი - \"საქართველოს მეფეთა ნუსხა\"</strong></p>\n" +
                    "<p style=\"text-align: center;\"><strong>შეგიძლიათ შეიძინოთ&nbsp; დიდ სამებაში</strong></p>\n" +
                    "<div style=\"border: 2px solid #dec685; text-align: left;\">\n" +
                    "<p style=\"text-align: center;\"><strong>ვუხდით დიდ მადლობას</strong><strong> ბ-ნ ზ.ინჯიას </strong><strong>და ლ.ნიკვაშვილს </strong><strong>ფასდაუდებელი დახმარებისთვის</strong></p>\n" +
                    "<p style=\"text-align: center;\"><strong><img src=\"http://amigo.ge/saunjegallery/albums/userpics/10001/thumb_6a00e54f9f8f8c883400e54ff3c1998833-800wi.jpg\" border=\"0\" width=\"150\"><br></strong></p>\n" +
                    "<p style=\"text-align: center;\"><strong>* * * * *</strong></p>\n" +
                    "<h2 style=\"text-align: center;\"><a href=\"http://www.amigo.ge/saunjegallery/index.php\"><strong><span style=\"text-decoration: underline;\">საუნჯეს &nbsp;ფოტოალბომი</span></strong></a></h2>\n" +
                    "<p style=\"text-align: center;\"><strong><img src=\"http://www.amigo.ge/saunjegallery/albums/userpics/10001/normal_IMG_0584.JPG\" border=\"0\" height=\"170\"><br></strong></p>\n" +
                    "<p style=\"text-align: center;\"><strong>* * * * *</strong></p>\n" +
                    "<p style=\"text-align: justify; padding-left: 30px;\"><strong>ყურადღება! ჩვენს საიტზე საკუთარი ფოტოების გარდა, გამოყენებულია სხვადასხვა ინტერნეტ რესურსებიდან აღებული ფოტომასალებიც. თუ ვინმე იცნობს საკუთარ ფოტოს, რომელზეც არაა მითითებული ავტორი, გთხოვთ დაგვიკავშრდეთ <a href=\"/index.php?id=20&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>ელ.ფოსტით</strong></a> ან <a href=\"https://www.facebook.com/Saunje.ge\"><strong>fb-გვერდზე</strong></a> რათა დაფიქსირდეს თქვენი სახელი და გვარი. უნებლიე შეცდომის გამო წინასწარ გიხდით ბოდიშს!</strong></p>\n" +
                    "<p style=\"text-align: center;\"><strong>* * * * *</strong></p>\n" +
                    "<h2 style=\"text-align: center;\"><a href=\"https://www.facebook.com/Saunje.ge\"><strong>https://www.facebook.com/Saunje.ge</strong></a></h2>\n" +
                    "<p style=\"text-align: center;\"><a href=\"https://www.facebook.com/groups/223653721038423/\"><strong>fb ჯგუფი: https://www.facebook.com/groups/223653721038423/</strong></a></p>\n" +
                    "<p style=\"text-align: center;\"><img src=\"http://www.amigo.ge/saunjegallery/albums/userpics/10001/33~1.jpg\" border=\"0\" width=\"230\"></p>\n" +
                    "<p style=\"text-align: center;\"><strong>სიახლეები საიტზე:</strong></p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=2054\">ფოთოლეთის ეკლესია - თ. გოგოლაძე</a> - 5.05.2021</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?option=com_content&amp;view=article&amp;id=2051%3A2021-02-02-16-54-44&amp;catid=1%3A2010-01-24-19-54-07&amp;Itemid=1&amp;lang=ka\">თ. ლეთოდიანი - ორბელის ციხე </a>- 2.02.2021</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=2046\">დ. ჭითანავა - სიცოცხლის აღდგენა-განახლების იდეა \"ქვევრსამარხებში\" და ზედაშეს კულტურა</a> - 13.01.2021</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=2043\">მოქცევაჲ ქართლისაჲ - შატბერდისეული ვერსია</a> - 13.12.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=2042\"> ბ. ცხადაძე - ზოგი გარეული ცხოველის სახელებისაგან წარმოქმნილი საკუთარი სახელისა (მგელა // გელა,....) და გვარის (მგელაძე, გელაშვილი.) ეტიმოლოგიისათვის</a> - 10.12.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=2030\">გ. სოხაშვილი - სამთავისი</a> - 17.11.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=2038\">ისტორიანი და აზმანი შარავანდედთანი</a> - 24.11.2020</p>\n" +
                    "<p style=\"padding-left: 30px;\"><a href=\"http://www.saunje.ge/index.php?id=1237\"> ჯუანშერი - ცხოვრება ვახტანგ გორგასლისა </a>- 23.11.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=2034\">გეტას დარბაზული ეკლესია</a> - 21.11.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=2026\">ე. კოჭლამაზაშვილი - ხურსიმე მოციქულის ვინაობისათვის</a> - 12.10.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=2024\">ქუმის, ხომის მონასტერი</a> - 14.09.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=2022\">ე. ჩხეიძე - მგელთან დაკავშირებული რწმენა-წარმოდგენები</a> - 14.07.2020</p>\n" +
                    "<img class=\"la\" src=\"http://www.amigo.ge/saunjegallery/albums/userpics/10001/thumb_88052974_2916002531791163_3427160336275341312_n.jpg\" border=\"0\" width=\"96\" height=\"128\" align=\"left\"><a href=\"/index.php?id=2020&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>ო. ჯაფარიძე - წინა აზიის ურთიერთობის ისტორიისთვის</strong></a> - 11.07.2020\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"/index.php?id=2020&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"></a><a href=\"http://www.saunje.ge/index.php?id=2013\">გ. სინაურიძე, თ. ბერიძე - კაზრეთის ანტიკური და ადრეფეოდალური ხანის ძეგლები</a> - 23.06.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=2005\">მ. ინაძე - ლეგენდა და ისტორიული სინამდვილე კოლხეთის შესახებ პლინიუს უფროსის ცნობებში </a>- 9.06.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=2004\"> ო. ჯაფარიძე - მონაწილეობდნენ თუ არა ქართველი ტომები ტროას ომში</a> - 9.06.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=2003\">ვ. გაბაშვილი - საქართველოს სავაჭრო ურთიერთობანი XII საუკუნეში</a> - 8.06.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=2002\">ვ. ჯაფარიძე - ადრეული შუა საუკუნეების არქეოლოგიური ძეგლები ქვემო ქართლიდან </a>- 7.06.2020</p>\n" +
                    "<p style=\"text-align: justify; padding-left: 30px;\"><a href=\"http://www.saunje.ge/index.php?id=2001\">ე. გაბლიანი - არქეოლოგიური გათხრები სვანეთში</a> - 5.06.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=1998\">მ. ვაშაყმაძე - ბრინჯაოს პლასტიკა ვანში</a> - 3.06.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=1996\"> მ. ივანიშვილი - ხეების სახელები ქართველურში: ნეკერჩხალ-, ურთხელ-, ძმერხლ-, წყავ-</a> 29.05.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=1995\">იგორ კეკელია - ძიებანი აფხაზეთის ტოპონიმიიდან</a> - 29.05.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=1994\">ვილჰელმ ფონ ჰუმბოლდტი - სხვადასხვა ეპოქის მიხედვით ენათა განვითარების შედარებითი შესწავლა</a> - 28.05.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=1991\">ს. ჭანტურია - კვირის შვიდეულის ძველქართულ სახელდებათა შესახებ</a> - 19.05.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"http://www.saunje.ge/index.php?id=1993\">თ. ჩიქოვანი - გვირგვინიან-ერდოიანი საცხოვრებლის და ვიტრუვის კოლხური სახლის ურთიერთობისათვის</a> - 8.05.2020</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"/index.php?id=1812&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ჩანგლის ეკლესია</a> - 2.05.2017</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"https://www.youtube.com/watch?v=SeyCjTuPhL4&amp;t=1861s\">ჩრდილოეთ კავკასიის ქართული ძეგლები (ვიდეოჩანაწერი)</a> - 10.12.2016</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"/index.php?id=1730&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">დვალები და დვალეთი - Двалы и Двалетия - В.Н.Гамрекели </a>- 25.12.2016</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"/index.php?id=1631&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ა.ვოლსკაია - კედლის მხატვრობის ფრაგმენტები \"ხოზიტა–მაირამის\" ქართულ ტაძარში</a> - 4.10.2016</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"/index.php?id=1630&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ვ.დოლიძე - ხოზიტა-მაირამი - საქართველოსა და ჩრდილო კავკასიის ხალხთა კულტურული ურთიერთობის საბუთი</a> - 4.10.2016</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"/index.php?id=1412&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ბაიების კომპლექსი - ვ.ბერიძე // სამცხის ხუროთმოძღვრული ძეგლები</a> - 7.06.2016</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"/index.php?id=326&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ყვარლის რაიონის ისტორიული ძეგლები (გაახლებული სია)</a> - 3.04.2016</p>\n" +
                    "<p style=\"padding-left: 30px;\"><a href=\"/index.php?id=1482&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">საყდრისი - ოქროს უძველესი წარმოების კერა</a> - 2.04.2014</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"/index.php?id=1620&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ვაზოვანის ეკლესია</a> - 1.04.2016</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"/index.php?id=321&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">დედოფლისწყაროს რაიონის ისტორიული ძეგლები - განახლებული სია</a> - 25.03.2016</p>\n" +
                    "<p style=\"padding-left: 30px; text-align: justify;\"><a href=\"/index.php?id=320&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">გურჯაანის მუნიციპალიტეტის ისტორიული და კულტურული ძეგლები - განახლებული სია</a> - 22.03.2016</p>\n" +
                    "<p style=\"padding-left: 560px;\"><a href=\"/index.php?id=561&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"> .....&lt;&lt;დანარჩენი აქ.....&lt;&lt;</a></p>\n" +
                    "</div>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<ul>\n" +
                    "<strong>\n" +
                    "<p style=\"text-align: center;\"><strong><strong style=\"line-height: 15.8079996109009px;\"><br></strong></strong></p>\n" +
                    "<li><a href=\"/index.php?id=109&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>საქართველოს&nbsp;ისტორიული&nbsp;მხარეების მოკლე ისტორიულ - გეოგრაფიული აღწერა</strong></a></li>\n" +
                    "</strong> \n" +
                    "</ul>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<h2 style=\"text-align: center;\"><strong><span style=\"text-decoration: underline;\"><strong>საქართველოს &nbsp;ისტორიული &nbsp;ძეგლები &nbsp;ადმინისტრაციული &nbsp;რაიონების &nbsp;მიხედვით</strong></span></strong></h2>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p><strong><strong>ქართლი - </strong><a href=\"/index.php?id=799&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>თბილისი</strong></a></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<ul>\n" +
                    "<strong>\n" +
                    "<li><a href=\"/index.php?id=309&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ბოლნისის რაიონი (ქვემო ქართლი)</a> </li>\n" +
                    "<li><a href=\"/index.php?id=316&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">გარდაბნის რაიონი&nbsp;(ქვემო ქართლი)</a> </li>\n" +
                    "<li><a href=\"/index.php?id=289&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">გორის რაიონი (შიდა ქართლი)</a></li>\n" +
                    "<li><a href=\"/index.php?id=317&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">დმანისის რაიონი&nbsp;(ქვემო ქართლი)</a></li>\n" +
                    "<li><a href=\"/index.php?id=306&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">თეთრი წყაროს რაიონი&nbsp;(ქვემო ქართლი)</a></li>\n" +
                    "<li><a href=\"/index.php?id=292&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">კასპის რაიონი (შიდა ქართლი)</a></li>\n" +
                    "<li><a href=\"/index.php?id=318&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">მარნეულის რაიონი&nbsp;(ქვემო ქართლი)</a></li>\n" +
                    "<li><a href=\"/index.php?id=295&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ქარელის რაიონი&nbsp;(შიდა ქართლი)</a></li>\n" +
                    "<li><a href=\"/index.php?id=308&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">წალკის რაიონი&nbsp;(ქვემო ქართლი, თრიალეთი</a>)</li>\n" +
                    "<li><a href=\"/index.php?id=293&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ხაშურის რაიონი&nbsp;(შიდა ქართლი)</a></li>\n" +
                    "<li><a href=\"/index.php?id=319&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ჯავის რაიონი&nbsp;(შიდა ქართლი)</a></li>\n" +
                    "</strong> \n" +
                    "</ul>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p><strong><strong>მცხეთა - თიანეთი </strong></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<ul>\n" +
                    "<strong>\n" +
                    "<li><a href=\"/index.php?id=310&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ახალგორის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=294&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">მცხეთის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=288&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">დუშეთის რაიონი</a> (<strong>ფშავი, ხევსურეთი,&nbsp;გუდამაყარი,&nbsp;მთიულეთი)</strong></li>\n" +
                    "<li><a href=\"/index.php?id=290&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">თიანეთის რაიონი </a></li>\n" +
                    "<li><a href=\"/index.php?id=291&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ყაზბეგის რაიონი</a> (<strong>ხევი)</strong></li>\n" +
                    "</strong> \n" +
                    "</ul>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p><strong><strong>კახეთი</strong></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<ul>\n" +
                    "<strong>\n" +
                    "<li><a href=\"/index.php?id=253&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ახმეტის რაიონი</a> </li>\n" +
                    "<li><a href=\"/index.php?id=320&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">გურჯაანის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=321&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">დედოფლისწყაროს რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=322&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">თელავის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=323&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ლაგოდეხის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=324&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">საგარეჯოს რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=325&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">სიღნაღის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=326&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ყვარლის რაიონი</a></li>\n" +
                    "</strong> \n" +
                    "</ul>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p><strong><strong>მესხეთი: (სამცხე - ჯავახეთი - თორი)</strong></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p><strong><strong>სამცხე </strong></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<ul>\n" +
                    "<strong>\n" +
                    "<li><a href=\"/index.php?id=305&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ადიგენის რაიონი</a> (სამცხე) </li>\n" +
                    "<li><a href=\"/index.php?id=315&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ასპინძის რაიონი (სამცხე) </a></li>\n" +
                    "<li><a href=\"/index.php?id=304&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ახალციხის რაიონი </a>(სამცხე) </li>\n" +
                    "</strong> \n" +
                    "</ul>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p><strong><strong> ჯავახეთი - თორი</strong></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<ul>\n" +
                    "<strong>\n" +
                    "<li><a href=\"/index.php?id=327&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ახალქალაქის რაიონი </a></li>\n" +
                    "<li><a href=\"/index.php?id=328&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ნინოწმინდის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=329&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ბორჯომის რაიონი (თორი) </a></li>\n" +
                    "</strong> \n" +
                    "</ul>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p><strong><strong>რაჭა&nbsp;-&nbsp;ლეჩხუმი&nbsp;- </strong> <a href=\"/index.php?id=1024&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>(რაჭის ისტორიული ძეგლები)</strong></a></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<ul>\n" +
                    "<strong>\n" +
                    "<li><a href=\"/index.php?id=330&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ამბროლაურის რაიონი (რაჭა)</a></li>\n" +
                    "<li><a href=\"/index.php?id=331&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ონის რაიონი (რაჭა)</a></li>\n" +
                    "<li><a href=\"/index.php?id=332&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ლენტეხის რაიონი (ქვემო სვანეთი)</a></li>\n" +
                    "<li><a href=\"/index.php?id=333&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ცაგერის რაიონი</a></li>\n" +
                    "</strong> \n" +
                    "</ul>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p><strong><strong>სამეგრელოს და ზემო სვანეთის მხარე</strong></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p><strong><strong> სამეგრელო:</strong></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<ul>\n" +
                    "<strong>\n" +
                    "<li><a href=\"/index.php?id=334&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">აბაშის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=335&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ზუგდიდის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=336&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">მარტვილის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=337&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">სენაკის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=338&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ჩხოროწყუს რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=339&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">წალენჯიხის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=340&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ხობის რაიონი</a></li>\n" +
                    "</strong> \n" +
                    "</ul>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p><strong><strong> ზემო სვანეთი</strong></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<ul>\n" +
                    "<strong>\n" +
                    "<li><a href=\"/index.php?id=307&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">მესტიის რაიონი</a></li>\n" +
                    "</strong> \n" +
                    "</ul>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<div><strong><a href=\"/index.php?id=303&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>აფხაზეთი</strong></a></strong></div>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<ul>\n" +
                    "<strong>\n" +
                    "<li>ქალაქი სოხუმი</li>\n" +
                    "<li>ოჩამჩირის რაიონი</li>\n" +
                    "<li>გუდაუთის რაიონი</li>\n" +
                    "<li>გაგრის რაიონი</li>\n" +
                    "<li>გულრიფშის რაიონი</li>\n" +
                    "<li><a href=\"/index.php?id=1481&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">გალის რაიონი</a></li>\n" +
                    "</strong> \n" +
                    "</ul>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p><strong><strong>აჭარა</strong></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<ul>\n" +
                    "<strong>\n" +
                    "<li><a href=\"/index.php?id=341&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ქედის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=342&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ქობულეთის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=343&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ხელვაჩაურის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=344&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">შუახევის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=345&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ხულოს რაიონი</a></li>\n" +
                    "</strong> \n" +
                    "</ul>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p><strong><strong>გურია</strong></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<ul>\n" +
                    "<strong>\n" +
                    "<li><a href=\"/index.php?id=346&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ლანჩხუთის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=347&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ოზურგეთის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=348&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ჩოხატაურის რაიონი</a></li>\n" +
                    "</strong> \n" +
                    "</ul>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p><strong><strong>იმერეთი</strong></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<ul>\n" +
                    "<strong>\n" +
                    "<li><a href=\"/index.php?id=370&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ქალაქი ქუთაისი</a></li>\n" +
                    "<li><a href=\"/index.php?id=349&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ვანის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=350&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ბაღდათის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=351&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ზესტაფონის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=352&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">თერჯოლის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=353&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">სამტრედიის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=354&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">საჩხერის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=355&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ტყიბულის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=356&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ჭიათურის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=357&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">წყალტუბოს რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=358&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ხარაგაულის რაიონი</a></li>\n" +
                    "<li><a href=\"/index.php?id=359&amp;option=com_content&amp;Itemid=1&amp;lang=ka\">ხონის რაიონი</a></li>\n" +
                    "</strong> \n" +
                    "</ul>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p style=\"text-align: center;\"><strong><a href=\"/index.php?id=1115&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>საქართველოს ისტორიული ძეგლები საზღვარგარეთ: </strong></a></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p style=\"padding-left: 90px;\"><strong><a href=\"/index.php?id=360&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>ტაო - კლარჯეთი და ლაზეთი</strong></a></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p style=\"padding-left: 90px;\"><strong><a href=\"/index.php?id=361&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>ჰერეთი (საინგილო)</strong></a></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p style=\"padding-left: 90px;\"><strong><a href=\"/index.php?id=362&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>ლორე - ტაშირი (ქართული ძეგლები სასომხეთში)</strong></a></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p style=\"padding-left: 90px;\"><strong><a href=\"/index.php?id=1219&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>ჩრდ.კავკასიის ქართული ძეგლები:</strong></a> <a href=\"/index.php?id=363&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>ალბიერდი,</strong></a><a href=\"/index.php?id=1220&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>თხაბა-ერდი (ტყობაერდი)</strong></a></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p style=\"padding-left: 90px;\"><strong><a href=\"/index.php?id=1139&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>წმინდა მიწა: (ათონის მთა, პალესტინა, ანტიოქია)</strong></a></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p style=\"padding-left: 90px;\"><strong><a href=\"/index.php?id=603&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>ათონის ივერთა მონასტერი (საბერძნეთი)</strong></a></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p style=\"padding-left: 90px;\"><strong><a href=\"/index.php?id=674&amp;option=com_content&amp;Itemid=1&amp;lang=ka\"><strong>ბ.კანდელაკი - ანთიმოზ ივერიელის ტაძარი (ბუქარესტი, რუმინეთი)</strong></a></strong></p>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<ul>\n" +
                    "<strong> </strong> \n" +
                    "</ul>\n" +
                    "<p><strong> </strong></p>\n" +
                    "<p style=\"text-align: center;\"><strong><a href=\"http://amigo.ge/saunjegallery/albums/userpics/10001/poster_.jpg\"><img src=\"http://amigo.ge/saunjegallery/albums/userpics/10001/normal_poster_.jpg\" border=\"0\" width=\"200\"></a> <em style=\"line-height: 1.3em;\"><sup>გადიდებისთვის დააწკაპუნეთ - (+)</sup></em></strong></p>\n" +
                    "\n" +
                    "</td>"

            }}
            items={[
                {
                    title: 'ეპარქიები',
                    itemId: '/epa',
                }, {
                    title: 'ეკლესია-მონასტრები',
                    itemId: '/management',
                }, {
                    title: 'ციხე-ქალაქები',
                    itemId: '/another',
                },
            ]}
        />

    );
}