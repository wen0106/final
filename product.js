var app = new Vue({
  el:'#app',
  data:{
    itemList:[
      {
        id:1,
        itemName:'小巧方便小包',
        imgUrl:'picture/bag1/picture1.JPG',
        intro:'可放手機、錢包、小物化妝品\nW15.5*H11*D7/cm',
        price:'3000',
        count:'0'
      },
      {
        id:2,
        itemName:'多功能短皮夾',
        imgUrl:'picture/bag2/picture1.JPG',
        intro:'組合式可拆解獨立物件設計\n從識別證夾、零錢包到組合成錢包短夾\n可視當下單獨取用\n另有隱藏式夾層可放重要證件\nW10*H10*D2.5/cm',
        price:'2600',
        count:'0'
      },
      {
        id:3,
        itemName:'名片識別證小夾',
        imgUrl:'picture/bag3/picture1.JPG',
        intro:'可拉取式抽出名片，另一面存放悠遊卡\n植鞣革牛皮愈用愈油亮\nW7*H10.5/cm',
        price:'1600',
        count:'0'
      },
      {
        id:4,
        itemName:'手拿配件包',
        imgUrl:'picture/bag4/picture1.JPG',
        intro:'植鞣皮革包\n可放手機、短夾錢包、耳機小物\n另兩邊D環可搭肩背帶肩背\nW15*H9*D4/cm',
        price:'2800',
        count:'0'
      },
      {
        id:5,
        itemName:'純牛皮袋包',
        imgUrl:'picture/bag5/picture1.JPG',
        intro:'手機、日常小物，錢包\n有別於紙袋，真牛皮更加牢靠\n>隨時間養成，愈發皮革魅力\nW14*H18*D6/cm',
        price:'2800',
        count:'0'
      },
      {
        id:6,
        itemName:'長夾錢包',
        imgUrl:'picture/bag6/picture1.JPG',
        intro:'可放10張信用卡\n夾層可區隔百元千元紙鈔\n拉鏈袋夾可放零錢重要小物\n植鞣皮革養成時光歲月痕跡\nW19.5*H9.5*D2/cm',
        price:'3200',
        count:'0'
      },
      {
        id:7,
        itemName:'輕巧迷你肩包',
        imgUrl:'picture/bag7/picture1.JPG',
        intro:'日常出門正式場合用包\n取下肩背帶，可變身手提包\n兩側牛仔釦可衡量物品多寡調整容量\nW19*H15*D8/cm',
        price:'4200',
        count:'0'
      },
      {
        id:8,
        itemName:'經典小書包',
        imgUrl:'picture/bag8/picture1.JPG',
        intro:'雙肩背包，A4尺寸文件可放入\n袋身前面收納袋可放小物、化妝包\n拋軟植鞣皮革用料貼身好背\nW24*H35*D10/cm',
        price:'6800',
        count:'0'
      }
    ],
    showList:[
      {
          id:'',
          itemName:'',
          imgUrl:'',
          intro:'',
          price:'',
          count:''
      }
    ]
  },
  methods:{
      handlePlus: function(item){
          item.count++;
      },
      handleSub: function(item){
          if(item.count>1){
            item.count--;                
          }
      },
      handledelete: function(index){
          console.log(this);
          this.itemList.splice(index,1);
      },
      sum: function(item) {
        for(i=1; i<=index; i++) {

        }
      },
      setBy: function (index) {
        Vue.set(showList[0], showList[0].id, itemList[index].id);
        Vue.set(showList[0].itemName, itemList[index].itemName);
        Vue.set(showList[0].imgUrl, itemList[index].imgUrl);
        Vue.set(showList[0].intro, itemList[index].intro);
        Vue.set(showList[0].price, itemList[index].price);
        Vue.set(showList[0].count, itemList[index].count);
      },
    
      clear: function () {
        showList[0]=null;
      }
  },
  computed:{

  }
})