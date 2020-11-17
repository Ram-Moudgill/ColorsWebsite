const bgGradientData = [
  {
    _id: 'id1',
    bg:
      'linear-gradient(45deg, rgba(188, 164, 6, 0.5) 0%, rgba(188, 164, 6, 0.5) 12.5%,rgba(165, 158, 18, 0.5) 12.5%, rgba(165, 158, 18, 0.5) 25%,rgba(142, 152, 31, 0.5) 25%, rgba(142, 152, 31, 0.5) 37.5%,rgba(119, 146, 43, 0.5) 37.5%, rgba(119, 146, 43, 0.5) 50%,rgba(96, 140, 56, 0.5) 50%, rgba(96, 140, 56, 0.5) 62.5%,rgba(73, 134, 68, 0.5) 62.5%, rgba(73, 134, 68, 0.5) 75%,rgba(50, 128, 81, 0.5) 75%, rgba(50, 128, 81, 0.5) 87.5%,rgba(27, 122, 93, 0.5) 87.5%, rgba(27, 122, 93, 0.5) 100%),linear-gradient(135deg, rgb(197, 183, 45) 0%, rgb(197, 183, 45) 12.5%,rgb(177, 167, 44) 12.5%, rgb(177, 167, 44) 25%,rgb(158, 152, 44) 25%, rgb(158, 152, 44) 37.5%,rgb(138, 136, 43) 37.5%, rgb(138, 136, 43) 50%,rgb(118, 121, 42) 50%, rgb(118, 121, 42) 62.5%,rgb(98, 105, 41) 62.5%, rgb(98, 105, 41) 75%,rgb(79, 90, 41) 75%, rgb(79, 90, 41) 87.5%,rgb(59, 74, 40) 87.5%, rgb(59, 74, 40) 100%)',
  },
  {
    _id: 'id2',
    bg:
      'linear-gradient(45deg, rgba(99, 165, 225, 0.5) 0%, rgba(99, 165, 225, 0.5) 14.286%,rgba(93, 143, 222, 0.5) 14.286%, rgba(93, 143, 222, 0.5) 28.572%,rgba(87, 120, 218, 0.5) 28.572%, rgba(87, 120, 218, 0.5) 42.858%,rgba(81, 98, 215, 0.5) 42.858%, rgba(81, 98, 215, 0.5) 57.144%,rgba(74, 75, 211, 0.5) 57.144%, rgba(74, 75, 211, 0.5) 71.43%,rgba(68, 53, 208, 0.5) 71.43%, rgba(68, 53, 208, 0.5) 85.716%,rgba(62, 30, 204, 0.5) 85.716%, rgba(62, 30, 204, 0.5) 100.002%),linear-gradient(135deg, rgb(128, 8, 46) 0%, rgb(128, 8, 46) 14.286%,rgb(134, 43, 72) 14.286%, rgb(134, 43, 72) 28.572%,rgb(140, 77, 97) 28.572%, rgb(140, 77, 97) 42.858%,rgb(147, 112, 123) 42.858%, rgb(147, 112, 123) 57.144%,rgb(153, 146, 149) 57.144%, rgb(153, 146, 149) 71.43%,rgb(159, 181, 174) 71.43%, rgb(159, 181, 174) 85.716%,rgb(165, 215, 200) 85.716%, rgb(165, 215, 200) 100.002%)',
  },
  {
    _id: 'id3',
    bg:
      'repeating-linear-gradient(0deg, hsla(211,72%,98%,0.12) 0px, hsla(211,72%,98%,0.12) 55px,transparent 55px, transparent 110px),repeating-linear-gradient(90deg, hsla(211,72%,98%,0.12) 0px, hsla(211,72%,98%,0.12) 55px,transparent 55px, transparent 110px),linear-gradient(90deg, hsl(199,94%,71%),hsl(199,94%,71%))',
  },
  {
    _id: 'id4',
    bg:
      'repeating-linear-gradient(0deg, hsla(83,49%,5%,0.1) 0px, hsla(83,49%,5%,0.1) 50px,transparent 50px, transparent 100px),repeating-linear-gradient(90deg, hsla(83,49%,5%,0.1) 0px, hsla(83,49%,5%,0.1) 50px,transparent 50px, transparent 100px),linear-gradient(90deg, hsl(89,81%,42%),hsl(89,81%,42%))',
  },
  {
    _id: 'id5',
    bg:
      'repeating-linear-gradient(135deg, rgb(201, 122, 81) 0px, rgb(201, 122, 81) 19px,rgb(179, 61, 37) 19px, rgb(179, 61, 37) 122px,rgb(223, 183, 125) 122px, rgb(223, 183, 125) 206px)',
  },
  {
    _id: 'id6',
    bg:
      'repeating-linear-gradient(135deg, hsl(204,76%,70%) 0px, hsl(204,76%,70%) 105px,hsl(249,76%,70%) 105px, hsl(249,76%,70%) 210px,hsl(294,76%,70%) 210px, hsl(294,76%,70%) 315px,hsl(339,76%,70%) 315px, hsl(339,76%,70%) 420px,hsl(24,76%,70%) 420px, hsl(24,76%,70%) 525px,hsl(69,76%,70%) 525px, hsl(69,76%,70%) 630px,hsl(114,76%,70%) 630px, hsl(114,76%,70%) 735px,hsl(159,76%,70%) 735px, hsl(159,76%,70%) 840px)',
  },
  {
    _id: 'id7',
    bg:
      'repeating-linear-gradient(90deg, rgb(127, 226, 176) 0px, rgb(127, 226, 176) 70px,rgb(192, 252, 165) 70px, rgb(192, 252, 165) 140px,rgb(149, 235, 172) 140px, rgb(149, 235, 172) 210px,rgb(41, 192, 190) 210px, rgb(41, 192, 190) 280px,rgb(63, 201, 186) 280px, rgb(63, 201, 186) 350px,rgb(106, 218, 179) 350px, rgb(106, 218, 179) 420px,rgb(84, 209, 183) 420px, rgb(84, 209, 183) 490px,rgb(170, 243, 169) 490px, rgb(170, 243, 169) 560px)',
  },
  {
    _id: 'id8',
    bg:
      'repeating-linear-gradient(90deg, rgb(216, 216, 216) 0px, rgb(216, 216, 216) 37px,rgb(230, 230, 230) 37px, rgb(230, 230, 230) 74px,rgb(203, 203, 203) 74px, rgb(203, 203, 203) 111px,rgb(223, 223, 223) 111px, rgb(223, 223, 223) 148px,rgb(236, 236, 236) 148px, rgb(236, 236, 236) 185px,rgb(243, 243, 243) 185px, rgb(243, 243, 243) 222px,rgb(209, 209, 209) 222px, rgb(209, 209, 209) 259px,rgb(196, 196, 196) 259px, rgb(196, 196, 196) 296px)',
  },
  {
    _id: 'id9',
    bg:
      'repeating-linear-gradient(45deg, rgb(27, 27, 27) 0px, rgb(27, 27, 27) 97px,rgb(24, 24, 24) 97px, rgb(24, 24, 24) 194px,rgb(20, 20, 20) 194px, rgb(20, 20, 20) 291px)',
  },
  {
    _id: 'id10',
    bg:
      'linear-gradient(45deg, rgb(67, 147, 163) 0%, rgb(67, 147, 163) 59%,rgb(93, 161, 169) 59%, rgb(93, 161, 169) 65%,rgb(119, 175, 175) 65%, rgb(119, 175, 175) 70%,rgb(145, 190, 181) 70%, rgb(145, 190, 181) 73%,rgb(171, 204, 187) 73%, rgb(171, 204, 187) 78%,rgb(197, 218, 193) 78%, rgb(197, 218, 193) 100%)',
  },
  {
    _id: 'id11',
    bg:
      'linear-gradient(45deg, rgb(86, 95, 151) 0%, rgb(86, 95, 151) 63%,rgb(105, 118, 165) 63%, rgb(105, 118, 165) 75%,rgb(125, 141, 179) 75%, rgb(125, 141, 179) 81%,rgb(144, 165, 193) 81%, rgb(144, 165, 193) 85%,rgb(164, 188, 207) 85%, rgb(164, 188, 207) 90%,rgb(183, 211, 221) 90%, rgb(183, 211, 221) 100%)',
  },
  {
    _id: 'id12',
    bg: 'linear-gradient(to right, #4568dc, #b06ab3)',
  },
  {
    _id: 'id13',
    bg: 'linear-gradient(to right, #43c6ac, #191654)',
  },
  {
    _id: 'id14',
    bg: 'linear-gradient(to right, #093028, #237a57)',
  },
  {
    _id: 'id15',
    bg: 'linear-gradient(to right, #43c6ac, #f8ffae)',
  },
  {
    _id: 'id16',
    bg: 'linear-gradient(to right, #ffafbd, #ffc3a0)',
  },
  {
    _id: 'id17',
    bg: 'linear-gradient(to right, #f0f2f0, #000c40)',
  },
  {
    _id: 'id18',
    bg: 'linear-gradient(to right, #e8cbc0, #636fa4)',
  },
  {
    _id: 'id19',
    bg: 'linear-gradient(to right, #dce35b, #45b649)',
  },
  {
    _id: 'id20',
    bg: 'linear-gradient(to right, #c0c0aa, #1cefff)',
  },

  {
    _id: 'id21',
    bg: 'linear-gradient(to right, #f7ff00, #db36a4)',
  },
  {
    _id: 'id22',
    bg: 'linear-gradient(to right, #000000, #434343)',
  },
  {
    _id: 'id23',
    bg: 'linear-gradient(to right, #0099f7, #f11712)',
  },
  {
    _id: 'id24',
    bg: 'linear-gradient(to right, #1e3c72, #2a5298)',
  },
  {
    _id: 'id25',
    bg: 'linear-gradient(to right, #fd746c, #ff9068)',
  },
  {
    _id: 'id26',
    bg: 'linear-gradient(to right, #eacda3, #d6ae7b)',
  },
  {
    _id: 'id27',
    bg: 'linear-gradient(to right, #6a3093, #a044ff)',
  },
  {
    _id: 'id28',
    bg: 'linear-gradient(to right, #457fca, #5691c8)',
  },
  {
    _id: 'id29',
    bg: 'linear-gradient(to right, #b24592, #f15f79)',
  },
  {
    _id: 'id30',
    bg: 'linear-gradient(to right, #c02425, #f0cb35)',
  },
  {
    _id: 'id31',
    bg: 'linear-gradient(to top, #c02425, #f0cb35)',
  },
  {
    _id: 'id32',
    bg: ' linear-gradient(to top, #ffb75e, #ed8f03)',
  },
  {
    _id: 'id33',
    bg: ' linear-gradient(to top, #8e0e00, #1f1c18)',
  },
  {
    _id: 'id34',
    bg: ' linear-gradient(to top, #76b852, #8dc26f)',
  },
  {
    _id: 'id35',
    bg: ' linear-gradient(to top, #673ab7, #512da8)',
  },
  {
    _id: 'id36',
    bg: 'linear-gradient(to top, #00c9ff, #92fe9d)',
  },
  {
    _id: 'id37',
    bg: ' linear-gradient(to top, #f46b45, #eea849)',
  },
  {
    _id: 'id38',
    bg: ' linear-gradient(to top, #fc00ff, #00dbde)',
  },
  {
    _id: 'id39',
    bg: ' linear-gradient(to top, #304352, #d7d2cc)',
  },
  {
    _id: 'id40',
    bg: ' linear-gradient(to top, #ba8b02, #181818)',
  },

  {
    _id: 'id41',
    bg: ' linear-gradient(to top, #004ff9, #fff94c)',
  },
  {
    _id: 'id42',
    bg: ' linear-gradient(to top, #d1913c, #ffd194)',
  },
  {
    _id: 'id43',
    bg: ' linear-gradient(to top, #7b4397, #dc2430)',
  },
  {
    _id: 'id44',
    bg: ' linear-gradient(to top, #8e9eab, #eef2f3)',
  },
  {
    _id: 'id45',
    bg: ' linear-gradient(to top, #136a8a, #267871)',
  },
  {
    _id: 'id46',
    bg: ' linear-gradient(to top, #00bf8f, #001510)',
  },
  {
    _id: 'id47',
    bg: ' linear-gradient(to top, #ff0084, #33001b)',
  },
  {
    _id: 'id48',
    bg: ' linear-gradient(to top, #833ab4, #fd1d1d, #fcb045)',
  },
  {
    _id: 'id49',
    bg: ' linear-gradient(to top, #feac5e, #c779d0, #4bc0c8)',
  },
  {
    _id: 'id50',
    bg: ' linear-gradient(to top, #fdfc47, #24fe41)',
  },
  {
    _id: 'id51',
    bg: 'linear-gradient(45.34deg, #EA52F8 5.66%, #0066FF 94.35%)',
  },
  {
    _id: 'id52',
    bg: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
  },
  {
    _id: 'id53',
    bg: ' linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
  },
  {
    _id: 'id54',
    bg: ' linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)',
  },
  {
    _id: 'id55',
    bg: 'linear-gradient(to right, #c33764, #1d2671)',
  },
  {
    _id: 'id56',
    bg: ' linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)',
  },
  {
    _id: 'id57',
    bg: 'linear-gradient(to right, #34e89e, #0f3443)',
  },
  {
    _id: 'id58',
    bg: 'linear-gradient(to right, #6190e8, #a7bfe8)',
  },
  {
    _id: 'id59',
    bg: 'linear-gradient(to right, #44a08d, #093637)',
  },
  {
    _id: 'id60',
    bg: 'linear-gradient(to right, #200122, #6f0000)',
  },

  {
    _id: 'id61',
    bg: 'linear-gradient(to right, #0575e6, #021b79)',
  },
  {
    _id: 'id62',
    bg: 'linear-gradient(to right, #4568dc, #b06ab3)',
  },
  {
    _id: 'id63',
    bg: 'linear-gradient(to right, #43c6ac, #191654)',
  },
  {
    _id: 'id64',
    bg: 'linear-gradient(360deg,red,deepskyblue)',
  },
]

export default bgGradientData
