// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Chúc em năm mới thật nhiều sức khỏe và hạnh phúc",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "đây là giao thừa đầu tiên của anh với em",  // 同上...
        "mong rằng năm nào anh cũng được đón năm mới cùng em",
        "anh yêu em",
        "cho dù đôi khi em hơi ngang bướng",
        "cho dù tóc em có bết",
        "cho dù em ngủ ngáy",
        "vẫn",
        "mù quáng",
        "iu em=))",
        "sang năm mới mong bạn nhỏ nghe lời anh",
        "không được biếng ăn",
        "và iu anh hơn nữa",
        "chúc mừng năm mới~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Chúc em năm mới thật nhiều sức khỏe và hạnh phúc": "./imgs/songxinxin.jpeg",
        "đây là giao thừa đầu tiên của anh với em": "./imgs/nothing.jpg",
        "mong rằng năm nào anh cũng được đón năm mới cùng em": "./imgs/nothing.jpg",
        "anh yêu em": "./imgs/zaiyiqi.jpg",
        "cho dù đôi khi em hơi ngang bướng": "./imgs/c1.jpg",
        "cho dù tóc em có bết": "./imgs/c2.jpg",
        "cho dù em ngủ ngáy": "./imgs/c3.jpg",
        "vẫn": "./imgs/c4.jpg",
        "mù quáng": "./imgs/c5.jpg",
        "iu em=))": "./imgs/chuo.gif",
        "sang năm mới mong bạn nhỏ nghe lời anh": "./imgs/c8.jpg",
        "không được biếng ăn": "./imgs/c7.jpg",
        "và iu anh hơn nữa": "./imgs/c6.jpg",
        "chúc mừng năm mới~~": "./imgs/c9.gif"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "xin chào hà thối =))",
        play: "em nhớ ấn vào nút xanh xanh đó",
        bannar_coming: "năm nay là năm 2023 đúng không nhỉ ?",
        balloons_flying: "hình như là năm con mèo",
        cake_fadein: "em có iu anh không ？",
        light_candle: "nếu có thì bấm tiếp tục thui nào",
        wish_message: "chúc mừng năm mới em bé của anh ♥",
        story: "anh có mấy điều muốn gửi tới bạn nhỏ"
    },

    // 结束语
    loveText: 'From Trung Hieu with love ♥'
};
