import {Map} from 'immutable';

const initialState = Map({
  movies: [
	  {"img": "http://7xlphv.com1.z0.glb.clouddn.com/develop/film/001.jpg", "title": "师父", "description": "民国年间南派咏春传人陈识（廖凡 饰）来到天津，结识了天津武术泰斗郑山傲（金士杰 饰），为在武术界开馆立足，郑山傲建议陈识用教徒弟踢馆的传统方式达成目的。几经周折，陈识娶了一名天津绝色女子赵国卉（宋佳 饰）为妻，还收下了本地青年耿良辰（宋洋 饰）为徒代其踢馆，夫妻二人暂居 在贫民窟，防被踢馆的仇家前来寻仇。"},
	  {"img": "http://7xlphv.com1.z0.glb.clouddn.com/develop/film/002.jpg", "title": "八恶人", "description": "寒冷的怀俄明州山谷中，一辆马车载着赏金猎人“绞刑者”约翰·鲁斯（库尔特·拉塞尔 Kurt Russell 饰）及其价值一万美元的猎物黛西·多摩格（詹妮弗·杰森·李 Jennifer Jason Leigh 饰）踏雪而行。途中，黑人赏金猎人马奎斯·沃伦少校（塞缪尔·杰克逊 Samuel L. Jackson 饰）和新人警长克里斯·马尼克斯（沃尔顿·戈金斯 Walton Goggins 饰）相继登上马车，红石镇是他们共同的目标。"},
	  {"img": "http://7xlphv.com1.z0.glb.clouddn.com/develop/film/003.jpg", "title": "聚焦", "description": "“聚焦”是波士顿环球报的一个专栏，罗比·罗宾森（迈克尔·基顿饰）是聚焦栏目的编辑，栏目拥有一个独立的调查小组，组员包括萨夏·菲弗（瑞秋·麦克亚当斯饰），迈克尔（马克·鲁弗洛饰），马特·卡罗尔（布莱恩·达西·詹姆斯饰）。当马蒂·巴伦（列维·施瑞博尔饰）接替了环球报的总编辑一职，他开始指派罗宾森和他的团队，紧跟一桩被雪藏已久的案件，一个天主教牧师性骚扰教区里的孩子。"},
	  {"img": "http://7xlphv.com1.z0.glb.clouddn.com/develop/film/004.jpg", "title": "神鬼猎人", "description": "休·格拉斯（莱昂纳多·迪卡普里奥 Leonardo DiCaprio 饰）是一名皮草猎人，在一次打猎途中被一头熊殴打成重伤后被同行的乘船船长安德鲁·亨利（多姆纳尔·格里森 Domhnall Gleeson 饰）救下，船长雇佣了两个人约翰·菲茨杰拉德（汤姆·哈迪 Tom Hardy 饰）和吉姆·布里杰（威尔·保尔特 Will Poulter 饰）来照顾他。"},
	  {"img": "http://7xlphv.com1.z0.glb.clouddn.com/develop/film/005.jpg", "title": "功夫熊猫", "description": "当熊猫阿宝（杰克·布莱克 Jack Black 配音）为成为真正的神龙大侠做准备的时候，他的生父——熊猫李山（布莱恩·科兰斯顿 Bryan Cranston 配音）突然到访。与此同时，拥有神秘力量的反派天煞（J·K·西蒙斯 J.K. Simmons 配音）登场，妄图制服所有高手，统治武林。"},
	  {"img": "http://7xlphv.com1.z0.glb.clouddn.com/develop/film/006.jpg", "title": "死侍", "description": "该片是《X战警》系列电影的外传。讲述了前任特种兵韦德·威尔逊得了不治之症，而自愿加入“X武器计划”获得了快速自愈能力。在饱受虐待折磨后他成功逃脱并对Ajax进行追杀的故事。"},
	  {"img": "http://7xlphv.com1.z0.glb.clouddn.com/develop/film/007.jpg", "title": "鬼乡", "description": "改编自姜日出老奶奶的真实故事。小时候在父亲的疼爱下长大，却在花样年华的少女时节被日军拉走成为慰安妇的故事。"},
	  {"img": "http://7xlphv.com1.z0.glb.clouddn.com/develop/film/008.jpg", "title": "美国队长", "description": "美国队长史蒂夫·罗杰斯（克里斯·埃文斯 Chris Evans 饰）带领着全新组建的复仇者联盟，继续维护世界和平。然而，一次执行任务时联盟成员不小心造成大量平民伤亡，从而激发政治压力，政府决定通过一套监管系统来管理和领导复仇者联盟。"},
	  {"img": "http://7xlphv.com1.z0.glb.clouddn.com/develop/film/009.jpg", "title": "百鸟朝凤", "description": "老一代唢呐艺人焦三爷（陶泽如 饰）是个外冷内热的老人，看起来严肃古板，其实心怀热血。影片表现了在社会变革、民心浮躁的年代里，新老两代唢呐艺人为了信念的坚守所产生的真挚的师徒情、父子情、兄弟情。 "},
	  {"img": "http://7xlphv.com1.z0.glb.clouddn.com/develop/film/010.jpg", "title": "北京遇上西雅图", "description": "焦姣（汤唯 饰）15岁就随父亲移民到澳门，从此在赌城安家，并成为赌场公关。罗大牛（吴秀波 饰）则生活在洛杉矶，是一位房地产经纪人。姣爷和大牛通过一本书，巧合地通过手写书信的方式互相联系，两人从最初的完全陌生，到一步步敞开自己的心扉，逐渐进行心灵的交流，再到最后爱上对方。"}
  ]
})

// Reducer
export default function ListReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
