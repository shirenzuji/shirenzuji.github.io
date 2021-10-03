console.log("Detail.js运行成功！");

const YEARS_for_Detail = [
    710, 715, 718, 720, 721, 724, 725, 726,
    727, 728, 730, 731, 732, 733, 734, 735,
    736, 737, 738, 739, 740, 741, 742, 743,
    744, 745, 746, 747, 748, 749, 750, 751,
    752, 753, 754, 755, 756, 757, 758, 759,
    760, 761, 762
];

const BACKGROUND_for_Detail = [
    "唐睿宗景云元年",
    "唐玄宗开元三年",
    "开元六年",
    "开元八年",
    "开元九年",
    "开元十二年",
    "开元十三年",
    "开元十四年",
    "开元十五年",
    "开元十六年",
    "开元十八年",
    "开元十九年",
    "开元二十年",
    "开元二十一年",
    "开元二十二年",
    "开元二十三年",
    "开元二十四年",
    "开元二十五年",
    "开元二十六年",
    "开元二十七年",
    "开元二十八年",
    "开元二十九年",
    "天宝元年",
    "天宝二年",
    "天宝三载",
    "天宝四载",
    "天宝五载",
    "天宝六载",
    "天宝七载",
    "天宝八载",
    "天宝九载",
    "天宝十载",
    "天宝十一载",
    "天宝十二载",
    "天宝十三载",
    "天宝十四载",
    "天宝十五载、唐肃宗至德元载",
    "至德二载",
    "乾元元年",
    "乾元二年",
    "上元元年",
    "上元二年",
    "宝应元年"
];

const EVENT_for_Detail = [
    "10岁。读诸子百家，通诗书。“余小时，大人令诵《子虚赋》，私心慕之”（《秋于敬亭送从侄卷游庐山序》）。",
    "15岁。观奇书，学剑术，好神仙。作《明堂赋》、《拟恨赋》。",
    "18岁。隐居大匡山，往来旁郡。从赵蕤学纵横术。《访戴天山道士不遇》约作于此年。",
    "20岁。《大猎赋》初稿疑作于是年。",
    "21岁。在成都瞻仰司马相如琴台、扬雄故宅。此后几年游历蜀中各地。作《登锦城散花楼》。",
    "24岁。辞亲远游。有《别匡山》诗。游峨眉山，写有《登峨眉山》、《峨眉山月歌》。出三峡，至江陵，遇司马承祯，作《大鹏遇希有鸟赋》，还写有《渡荆门送别》、《秋下荆门》等诗。",
    "25岁。游洞庭，南穷苍梧。写有《江上望皖公山》、《望天门山》、《金陵城西月下吟》、《杨叛儿》、《长干行》等诗。",
    "26岁。春，自金陵至广陵，又东南游苏州、杭州、越州、台州，东涉溟海。然后回舟北上，复至扬州，散金三十万。卧病。写有《金陵酒肆留别》、《夜下征虏亭》、《苏台览古》、《乌栖曲》、《越中览古》、《淮南卧病书怀寄蜀中赵征君蕤》、《望九华赠青阳韦仲堪》、《静夜思?[20]??》等诗。在九华山题刻“金沙泉”三字。",
    "27岁。沿江西上，观云梦，寓安州北寿山。北游汝海、襄州，结识孟浩然。回安陆，冲撞李长史车马。与元丹丘一起受安州都督马正会和李京之长史接见。与故相许圉师的孙女结婚。写有《代寿山答孟少府移文书》、《上安州李长史书》等。",
    "28岁。春至江夏，改葬吴指南。暮春，送孟浩然之广陵。回安陆，寓居白兆山。写有《早春于江夏送蔡十还家云梦序》、《黄鹤楼送孟浩然之广陵》、《江夏行》等诗。",
    "30岁。隐于安陆白兆山，有《安陆白兆山桃花岩寄刘侍御绾》、《山中间答》诗。遭受谤毁，有《上安州裴长史书》，要求雪谤。寓居终南山玉真公主别馆。写有《酬崔五郎中》、《玉真公主别馆苦雨赠卫尉张卿二首》、《乌夜啼》等。李白因元丹丘推荐，欲上终南山结交玉真公主，未果。",
    "31岁。下终南山。有《下终南山过斛斯山人宿置酒》诗。写有《古风》（大车扬飞上）。西游邠州，有《赠裴十四》、《登新平楼》、《赠新平少年》等诗。",
    "32岁。春游坊州，有《春归终南山松龙旧隐》诗。友人元丹丘寄书问候，作《以诗代书答元丹丘》诗。在长安穷途失路，作《行路难三首》（其一、其二）。送友人入蜀，作《蜀道难》，寄寓功业难求之意。五月，离长安，由黄河东下梁园，作《梁园吟》。期间，李白二上终南山，欲结识玉真公主。",
    "33岁。应元丹丘邀请，赴嵩山隐居。有《题元丹丘颖阳山居》、《元丹三歌》、《秋夜宿龙门香山寺奉寄王方城十七丈奉国莹上人从弟幼成令问》、《冬夜宿龙门觉起言志》、《梁甫吟》等诗。",
    "34岁。春在洛阳，写有《古风》其十八（天津三月时）、《春夜洛城闻笛》。过襄阳，拜见荆州长史韩朝宗。写有《与韩荆州书》。秋至江夏，有《江夏别宋之悌》等诗。",
    "35岁。五月与元演越太行游太原，并曾北游雁门关。写有《太原早秋》诗及《秋日于太原南栅饯阳曲王赞公贾少公石艾尹少公应举赴上都序》等。期间，曾在北岳恒山题“壮观”二字。",
    "36岁。春由太原经洛阳口安陆。岑勋千里寻访李白至嵩山，元丹丘请李白再至嵩山相会。写有《酬岑勋见寻就元丹丘对酒相待以诗见招》，著名乐府诗《将进酒》有“岑夫子，丹丘生”语，当作于此时。",
    "37岁。闲居安陆。《春夜宴从弟桃花园序》或作于此年。",
    "38岁。游襄阳，有《赠孟浩然》诗。至颖阳元丹丘山居，旋别，有《颖阳别元丹丘之淮阳》。至陈州、宋城、下邳、淮阴、楚州，写有《送侯十一》、《淮阴书怀寄王宋城》、《经下邳圯桥怀张子房》等诗。",
    "39岁。春在楚州安宜，有《赠徐安宜》、《白田马上闻莺》等诗，重游扬州、苏州、杭州，《见京兆韦参军量移东阳二首》：“潮水还归海，流人却到吴。”有《与从侄杭州刺史良游天竺寺》。秋至巴陵，遇王昌龄。昌龄有《巴陵送李十二》诗。",
    "40岁。许夫人约卒于上年或是年。李白带子女离安陆至东鲁。写有《五月东鲁行答汉上翁》诗等。与韩准、裴政、孔巢父、张叔明、陶沔等隐于徂徕山，酣歌纵酒，时号“竹溪六逸”，写有《送韩准、裴政、孔巢父还山》等诗。",
    "41岁。居东鲁，游东鲁各地。",
    "42岁。四、五月间，游泰山，有《游泰山六首》。这一年，元丹丘将李白多年前撰写的《玉真仙人词》呈给玉真公主，成功地将李白推荐给了玉真公主。秋，李白自南陵奉诏入京，有《南陵别儿童入京》诗。玄宗召见于金銮殿，命待诏翰林。冬，侍从温泉宫。写有《侍从游宿温泉宫作》、《驾去温泉宫后赠杨山人》、《温泉侍从归逢故人》等诗。",
    "43岁。待诏翰林，草《和番书》或《出师诏》，醉写《清平调》《宫中行乐词》，自以为升迁有望，有《金门答苏秀才》诗。秋，遭谗见疏，遂有归隐之念。有《玉壶吟》、《翰林读书言怀呈集贤诸学士》等诗。",
    "44岁。正月，贺知章请度为道士还乡，李白有《送贺宾客归越》诗。三月，上疏请还山，玄宗赐金放还。写有《出金门后书怀留别翰林诸公》、《春陪商州裴使君游石娥溪》等诗。秋，在梁宋间会见杜甫、高适，畅游梁宋，纵猎孟诸。冬，从高如贵道士受道箓于齐州紫极宫。写有《秋猎孟诸夜归置酒单父东楼观妓》、《奉饯高尊师如贵道士传道箓毕归北海》等诗。",
    "四十五岁。春，与杜甫同游东鲁，写有《鲁郡东石门送杜二甫》诗。",
    "46岁。卧病东鲁。秋，怀念杜甫，写有《沙丘城下寄杜甫》诗。复思游越，告别东鲁诸公，写有《梦游天姥吟留别》。",
    "47岁。至越中，吊贺知章，写有《对酒忆贺监二首并序》、《重忆一首》。返舟至金陵。",
    "48岁。在金陵，与崔成甫相遇，写有《酬崔侍御》、《玩月金陵城西孙楚酒楼达曙歌吹日晚乘醉著紫绮裘乌纱巾与酒客数人棹歌秦淮往石头访崔四侍御》等诗。游扬州江阳县、庐江、舒州等地，写有《叙旧赠江阳宰陆调》、《寄上吴王三首》等诗。期间，隐居舒州皖水之滨，写有《避地司空原言怀》、《瀑布》等六首诗，并题刻于二祖寺石壁上。",
    "49岁。在金陵，怀念子女，写有《寄东鲁二稚子》、《送萧三十一之鲁中兼问稚子伯禽》等诗。《闻王昌龄左迁龙标遥有此寄》诗约作于是年暮春。冬，写有《答王十二寒夜独酌有怀》诗。",
    "50岁。归鲁郡，写有《任城县厅壁记》、《崇明寺佛顶尊胜陀罗尼幢颂井序》。秋，访元丹丘石门幽居，写有《寻高凤石门山中元丹丘》、《秋日炼药院镊白发赠元六兄林宗》等诗。",
    "51岁。在梁苑，与宗楚客孙女结婚当在是年或此前。写有《虞城县令李公去思颂碑》。冬，离梁苑北上幽州，写有《留别于十一兄逖裴十三游塞垣》诗。",
    "52岁。北上途中游广平郡邯郸、临洺、清漳等地。写有《登邯郸洪波台置酒观发兵》、《赠临洺县令皓弟》、《赠清漳明府侄聿》等诗。十月，抵幽州。初有立功边疆思想，在边地习骑射。有《行行且游猎篇》、《幽州胡马客歌》等。后发现安禄山野心，登黄金台痛哭。不久即离幽州南下，写有《北风行》、《远别离》等诗。",
    "53岁。南下过魏州贵乡，县令韦良宰盛情招持。又西北游汾州，写有《魏郡别苏明府因北游》诗。回到梁园。又从梁园经曹南南下宣城。写有《留别曹南群官至江南》、《自梁国至敬亭山见会公谈陵阳山水》、《独坐敬亭山》、《赠宣城宇文太守兼呈崔侍御》、《陪侍御叔华登楼歌》等诗。",
    "54岁。春游金陵，有《春日陪杨江宁及诸官宴北湖感古作》等诗。五月至扬州，与魏万相遇，同返金陵，尽出诗文，请魏万编集。写有《送王屋山人魏万还王屋》诗。闻晁衡回国途中遇难，写有《哭晁卿衡》诗。秋冬，游秋浦、泾县，写有《秋浦歌十七首》、《赠汪伦》等诗。",
    "55岁。游皖南。回到宣城。与宣城太守赵悦交游，写有《赠宣城赵太守悦》、《为赵宣城与杨右相书》、《赵公西候新亭颂》。反对杨国忠发动的两次征南诏之战，写有《书怀赠南陵常赞府》等，冬，北上梁国。适逢安禄山陷陈留、洛阳，李白携宗夫人自梁园经洛阳西上华山。",
    "56岁。从华山南下宣城，写有《奔亡道中五首》。过当涂，写有《春于姑熟送赵四流炎方序》。抵宣城，又往越中，写有《经乱后将避地剡中留赠崔宣城》诗。过溧阳，写有《扶风豪士歌》、《猛虎行》、《溧阳濑水贞义女碑铭》。至杭州，写有《感时留别从记徐王延年从弟延陵》诗。秋，与宗夫人隐于庐山屏风叠，有《赠王判官时余隐居庐山屏风叠》。冬，永王璘水军至寻阳，三次遣使聘请，李白下山入幕。写有《赠韦秘书子春二首》、《别内赴征三首》等诗。",
    "57岁。在永王璘水军幕，随军东下。写有《在水军宴赠幕府诸侍御》、《永王东巡歌》诗。二月，永王兵败，李白自丹阳郡南奔，有《南奔书怀》诗。被系浔阳狱，写有《狱中上崔相涣》、《上崔相百忧章》、《万愤词投魏郎中》、《寻阳非所寄内》等诗。宗夫人奔走营救，经宋若思与崔涣为之清雪。出狱，入宋若思幕。写有《中丞宋公以吴兵三千赴河南军次寻阳脱余之囚参谋幕府因赠之》诗、《为宋中丞自荐表》等。旋卧病宿松，有《赠张相镐二首》，及《赠闾丘宿松》。在宿松鲤鱼山上题刻“聪明泉”三字。岁末，被判长流夜郎。",
    "58岁。在流放途中。自寻阳启程，宗夫人弟宗璟送别，写有《窜夜郎于乌江留别宗十六憬》诗。至江夏、约州，写有《流夜郎题葵叶》、《流夜郎至江夏陪长史叔及薛明府宴兴德寺南阁》、《泛沔州城南郎官湖》等诗。至洞庭，遇郄昂被贬，写有《送郄昂谪巴中》诗。入三峡，写有《上三峡》诗等。",
    "59岁。至白帝城遇赦，立即返舟东下江陵，写有《早发白帝城》。在江夏停留很久，写有《江夏赠韦南陵冰》、《经乱离后天恩流夜郎忆旧游书怀赠江夏韦太守良宰》等诗。秋至岳州，遇贾至、李晔被贬，同游洞庭，写有《巴陵赠贾舍人》、《陪族叔刑部侍郎晔及中书贾舍人至游洞庭五首》等诗。获悉崔成甫已卒，写《泽畔吟序》。闻襄州叛将张嘉延袭破荆州，写有《荆州贼乱临洞庭言怀作》、《九日登巴陵旨酒望洞庭水军》等诗。至零陵，有《赠卢司户》诗。",
    "60岁。自零陵返江夏，有《早春寄王汉阳》、《江夏送倩公归汉东序》等诗文。下寻阳，上庐山，有《庐山谣寄卢侍御虚舟》诗。赴豫章，有《下寻阳城泛彭蠡寄黄判官》、《对酒醉题屈突明府厅》、《豫章行》等诗。",
    "61岁。暮春，送宗夫人上庐山，有《送内寻庐山女道士李腾空二首》。东下重游皖南。有《宿五松山下荀媪家》等诗，来往于金陵、宣城间，有《饯李副使藏用移军广陵序》、《宣城送刘副使入秦》诗。欲投李光弼军未果，写有《闻李太尉大举秦兵百万出征东南，懦夫请缨，冀申一割之用，半道病还，留别金陵崔侍御》。至当涂依族叔李阳冰。写有《献从叔当涂宰阳冰》诗。",
    "62岁。在当涂养病，有《夏日陪司马武公与群贤宴姑熟亭序》、《天门山铭》，及《姑孰十咏》、《九月龙山饮》、《九月十日即事》诗。冬，病重，“枕上授简”，将诗文交李阳冰编集。十一月，赋《临终歌》而卒。葬今安徽省马鞍山市当涂县龙山。",
];

var ALLDIV = document.getElementById("DETAIL");
const Input_for_Detail = document.getElementById("INPUT_TIME");

Input_for_Detail.onmousedown = function(){
    ALLDIV.style.filter = "blur(5px)"
}
Input_for_Detail.onmouseup = function(){
    ALLDIV.style.filter = "blur(0px)"
}

// Input_for_detail.addEventListener("input", () => {
//     show_years.textContent = "现在是：" + YEARS_for_map[Input_for_map.value] + "年";
// });