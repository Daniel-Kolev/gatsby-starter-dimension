import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import ImageList from '../components/ImageList/ImageList'
import * as queryString from "query-string";
import Dimensions from '../utils/dimensions'
import { Link } from 'gatsby'

const Home = ({location}) => {
    const [images, setImages] = useState([
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/152953705_2802507546638548_1645699164568303097_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=qfD-841bUZkAX_flVUF&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=d5f2fdb3d43187ed691fa5419933a0fd&oe=608C9665",
          "permalink": "https://www.instagram.com/p/CLtdxzTlP8-/",
          "caption": "😊😊😊",
          "media_type": "IMAGE",
          "id": "17886761597009534"
      },
      {
          "media_url": "https://video-sof1-1.cdninstagram.com/v/t50.2886-16/143488895_426025765306962_5479782825493452580_n.mp4?_nc_cat=101&vs=17868268655257324_2252882363&_nc_vs=HBksFQAYJEdIOTNqUWhTQW1qYWQ0TUJBQ1RYMGxkeUdReE1ia1lMQUFBRhUAAsgBABUAGCRHQmVJbndnRWdQSlV3VnNBQUQ3VGswRnpuOThmYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACbYoY63j8a9PxUCKAJDMywXQBjul41P3zsYEmRhc2hfYmFzZWxpbmVfMl92MREAdeoHAA%3D%3D&ccb=1-3&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkIn0%3D&_nc_ohc=3I2IQDrf2RgAX8-lc66&_nc_ht=video-sof1-1.cdninstagram.com&oh=a530cccf94c432766c1da6a909172355&oe=608B37A7&_nc_rid=27b9e3ad5b",
          "permalink": "https://www.instagram.com/p/CKzTN0-JiQP/",
          "media_type": "VIDEO",
          "id": "18065246638267852"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/140378842_203492781485375_2323413002929044257_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=Oi6EZi_x-s8AX-7cSF1&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=3ebb22cb227af13fb2b56e317271d4e1&oe=608AAD03",
          "permalink": "https://www.instagram.com/p/CKRFYmuFa-U/",
          "caption": "Продава се!\n~\nРазмери на картината: 30х40 см.\nРисувана с: черна темперна боя",
          "media_type": "IMAGE",
          "id": "17869458293276414"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/140337157_3901052789946124_1535564025359719542_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=7GH6bjX6dVkAX_3P3Qr&_nc_oc=AQkhGfmxsAvOGlnqMMIK9BycDvItBsfddmeh6MOziK4pwUrzs73b6IlhwYBe0Z2QDvg&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=3b6fc956034187c4ef1c26c62cf875cf&oe=608C6698",
          "permalink": "https://www.instagram.com/p/CKMBElPlXp6/",
          "caption": "Продава се!\n~\nРазмери на картината: 40х50 см. \nРисувана с: Бяла темперна боя на черен картон",
          "media_type": "IMAGE",
          "id": "17951287666404192"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/123718689_397229414739754_7070285041023484997_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=Bxx4DPLzOkQAX-ha6OB&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=0bf8834747e2331de96431063916a2c7&oe=608AD989",
          "permalink": "https://www.instagram.com/p/CHKx_A8lrTt/",
          "caption": "Продава се!\n~\nРазмери на картината: 40х50 см.\nРисувана с: гримове",
          "media_type": "IMAGE",
          "id": "17874918457985146"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/123500653_689038535382010_1805214269682624615_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=aUL6x0rnDI8AX_DQ39g&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=ee43492d69f9a42dc5cda3cb3b242991&oe=6089BB33",
          "permalink": "https://www.instagram.com/p/CHKx9ATF86k/",
          "caption": "Продава се!\n~\nРазмери на картината: 30х40 см.\nРисувана с: бяла темперна боя на черен картон",
          "media_type": "IMAGE",
          "id": "17976195268322584"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/123000324_690556458146610_8858826332290510354_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=ONqIdkn1FIgAX-PUujG&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=b3a01756226bfe361c404efb4227af6e&oe=608CA202",
          "permalink": "https://www.instagram.com/p/CHKw8NhFNLc/",
          "caption": "Продава се!\n~\nРазмери на картината: 40х50 см. \nРисувана с: Бяла темперна боя на черен картон",
          "media_type": "IMAGE",
          "id": "17847157064398449"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/121234620_371485680876939_9102897190849833529_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=M4QA50Vll6wAX8UvF0G&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=e8287df116ce303431ac08087622ab81&oe=608BC32B",
          "permalink": "https://www.instagram.com/p/CGSrJ5-FAJB/",
          "caption": "Продава се! \n~\nРазмери на картината: 30х40 см.\nРисувана с: бяла темперна боя върху черен картон",
          "media_type": "IMAGE",
          "id": "17868057092061196"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/121272459_793031794819190_7750513508377010217_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=rvIe7ChXoeEAX-lgOLT&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=4ac0cf5684d4d2a2bc1b64d063652bf6&oe=608CDE24",
          "permalink": "https://www.instagram.com/p/CGPAdn8F5BW/",
          "caption": "😊😊😊\n~\nРазмери на картината: 25х25 см\nРисувана с: бяла темперна боя върху черен картон",
          "media_type": "IMAGE",
          "id": "18136899448128653"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/121112171_2789857591292628_4245640302923082858_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=CbqFh45g_JcAX_xtQyw&_nc_oc=AQmYLKi4LqKfugXtZtaaDT5wCr85-vo5RHF2pxti2YQ6T4nELuwzMxZcAmjraHVUem8&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=f5b1a650eb58cf7f72a25dd3d832c850&oe=608C6F54",
          "permalink": "https://www.instagram.com/p/CGM-fQ3l4KI/",
          "caption": "Продава се! \n~\nРазмери на картината: 30х40 см.\nРисувана с: бяла темперна боя върху черен картон",
          "media_type": "IMAGE",
          "id": "17881538977812334"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/106696725_718260425660917_4269289158573457136_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=AGBLSOX_MNYAX_uflPz&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=d4503d0492188e702e56c159f5fbed83&oe=608AA5B2",
          "permalink": "https://www.instagram.com/p/CCWn8R-FYpk/",
          "caption": "“Където и да отидеш, всяко място става част от теб, по някакъв начин.”",
          "media_type": "IMAGE",
          "id": "17902166716498573"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/106127588_1559498394221328_5430571699844819412_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=h7xtPlOhhjAAX-TTcFq&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=82449639be34b0ec946715762821fbd5&oe=608A93B1",
          "permalink": "https://www.instagram.com/p/CCDn1c1lDDA/",
          "caption": "“Art takes time - Monet grew  his gardens before he painted them.”",
          "media_type": "IMAGE",
          "id": "17881868386639227"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/106228560_574947930119402_914765535774726612_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=-FE8G0KjUfoAX8qchEd&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=2ae7cb04e72cd8af5c60e7cc87154bfc&oe=6089D9D2",
          "permalink": "https://www.instagram.com/p/CB3KHNjFOJC/",
          "caption": "~~~\nБоже, тя беше луда.\nВсеки ден тя беше различна жена.\nВеднъж избухлива, другият срамежлива. \nНесигурна и решителна.\nСладка и арогантна. \nТя беше хиляди жени... -Буковски",
          "media_type": "IMAGE",
          "id": "17867144998868245"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/104443472_1029125770836672_8501081700170976666_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=aedM0PfCLxEAX9Qe_r3&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=fd0fbc38e2445b18f9e1856b82835cf5&oe=608A2EBC",
          "permalink": "https://www.instagram.com/p/CB0gc_Pl_nu/",
          "caption": "😊😊😊\n~\nРазмери на картината: 25х25 см.\nРисувана с: бяла темперна боя върху черен картон",
          "media_type": "CAROUSEL_ALBUM",
          "children": {
              "data": [
                  {
                      "id": "17869735024839521",
                      "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/104443472_1029125770836672_8501081700170976666_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=aedM0PfCLxEAX9Qe_r3&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=fd0fbc38e2445b18f9e1856b82835cf5&oe=608A2EBC",
                      "permalink": "https://www.instagram.com/p/CB0gc9DluIR/"
                  },
                  {
                      "id": "18025537492274520",
                      "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/104435862_865791453908526_6551707729394658395_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=5XmYRDT-5mgAX-9DKtI&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=8869398ad8fb080ea4c036f08c8a8b4d&oe=608A6009",
                      "permalink": "https://www.instagram.com/p/CB0gc9CldKS/"
                  }
              ]
          },
          "id": "18105217312149295"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/105971720_928571024273538_6113091060865551319_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=uCDnNvE7OQgAX9ZHNXO&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=88585f8a1c82957aa3a55c93a09bbad8&oe=608CA470",
          "permalink": "https://www.instagram.com/p/CB0gbx6FVXP/",
          "caption": "😊😊😊\n~\nРазмери на картината: 30х40 см.\nРисувана с: черна темперна боя върху бял картон",
          "media_type": "IMAGE",
          "id": "17916018379434946"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/104429081_1476885489367045_9068916355428760719_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=XqRoCEze5RYAX83ejRg&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=13711d6ae6058a1ed57534dc75e084e4&oe=608CD3B0",
          "permalink": "https://www.instagram.com/p/CBz2F5IFxPq/",
          "caption": "😊😊😊\n~\nРазмери на картината: 25х25 см.\nРисувана с: бяла темперна боя върху черен картон",
          "media_type": "CAROUSEL_ALBUM",
          "children": {
              "data": [
                  {
                      "id": "18065445118218399",
                      "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/104429081_1476885489367045_9068916355428760719_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=XqRoCEze5RYAX83ejRg&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=13711d6ae6058a1ed57534dc75e084e4&oe=608CD3B0",
                      "permalink": "https://www.instagram.com/p/CBz2F3ClFv6/"
                  },
                  {
                      "id": "17869742593820851",
                      "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/104430862_365866124386902_8313024145454835135_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=8RYbJvEhSc8AX8xj-gi&_nc_oc=AQktFgLHYkO1pN0vYnPSRJmGbcNMKf_pugELjbxw24FUIlLZacBMbJQq_lr20B6CiaM&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=a4bbcb5c01281703158c7f509230d58a&oe=608C04F2",
                      "permalink": "https://www.instagram.com/p/CBz2F3DlEFC/"
                  }
              ]
          },
          "id": "17953771006339602"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/100518717_177145247001212_2399566941239367491_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=K__U3Y1wtysAX9DlNVa&_nc_oc=AQmUIt012FYJxkjKaj3I5P1Fplj9oS6IlmllWdQmG6HWD1_NGu3BdDHPpsLd9hYvC2w&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=ee9be5dbfd8da42588f4f6dc9803abbc&oe=608C78DA",
          "permalink": "https://www.instagram.com/p/CAm-qiZFerF/",
          "caption": "🏔🏔🏔\nРазмери:\nКартина ширина: 75см.\nКартина височина: 45см.\n~\nРисувана с: акрилни бои и безумно голямо удоволствие",
          "media_type": "CAROUSEL_ALBUM",
          "children": {
              "data": [
                  {
                      "id": "17892546220514447",
                      "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/100518717_177145247001212_2399566941239367491_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=K__U3Y1wtysAX9DlNVa&_nc_oc=AQmUIt012FYJxkjKaj3I5P1Fplj9oS6IlmllWdQmG6HWD1_NGu3BdDHPpsLd9hYvC2w&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=ee9be5dbfd8da42588f4f6dc9803abbc&oe=608C78DA",
                      "permalink": "https://www.instagram.com/p/CAm-qgKllEw/"
                  },
                  {
                      "id": "17877026098660635",
                      "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/100942302_296634768405459_7862810442123727954_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=x_zDvHurHLwAX9sKKi0&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=daf809ff4351cac00d8795c0144b96c8&oe=608C9564",
                      "permalink": "https://www.instagram.com/p/CAm-qgJl-NZ/"
                  },
                  {
                      "id": "17928543865389326",
                      "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/100481776_2369317153361660_5344794443215749364_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=z66SpNBYd8wAX-hNPLh&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=e84b82c5afa7f6a0e1e8d8599e51b543&oe=608A47DC",
                      "permalink": "https://www.instagram.com/p/CAm-qgKFIwE/"
                  }
              ]
          },
          "id": "17877988000639476"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/95127158_227361678520754_2856459592777886754_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=6MAxvAR6r3QAX-uo--2&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=b4db8907b1b3c4f7bbc99038ee86f96d&oe=608B716D",
          "permalink": "https://www.instagram.com/p/B_dGhiTlqMG/",
          "caption": "😊😊😊\n~~\nРазмери:\nКартина без паспарту, ширина: 32 см\nКартина без паспарту, височина: 32 см\nКартина с паспарту, ширина: 20 см\nКартина с паспарту, височина: 20 см\nОтвор на паспарту, ширина: 19 см\nОтвор на паспарту, височина: 19 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~~\nРисувана със: сухи пастели",
          "media_type": "IMAGE",
          "id": "18116973958098761"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/94137463_117189879959327_4255330427346050142_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=O6zJqEAll_EAX9UoBgY&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=7d8060cac0c414300cf6257d5d2fdf72&oe=608A3F6A",
          "permalink": "https://www.instagram.com/p/B_Zf5lElHMZ/",
          "caption": "😊😊😊\n~~\nРазмери:\nКартина без паспарту, ширина: 32 см\nКартина без паспарту, височина: 32 см\nКартина с паспарту, ширина: 20 см\nКартина с паспарту, височина: 20 см\nОтвор на паспарту, ширина: 19 см\nОтвор на паспарту, височина: 19 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~~\nРисувана със: сухи пастели",
          "media_type": "CAROUSEL_ALBUM",
          "children": {
              "data": [
                  {
                      "id": "17852388922989048",
                      "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/94137463_117189879959327_4255330427346050142_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=O6zJqEAll_EAX9UoBgY&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=7d8060cac0c414300cf6257d5d2fdf72&oe=608A3F6A",
                      "permalink": "https://www.instagram.com/p/B_Zf5itl8Vl/"
                  },
                  {
                      "id": "18101960224135455",
                      "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/94245676_1566034930215138_7571840337882030010_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=sdAFGKBpRk0AX85YGcU&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=0e2aa9658fff71056a7c33813abaed4a&oe=608AE7DD",
                      "permalink": "https://www.instagram.com/p/B_Zf5itFKaF/"
                  }
              ]
          },
          "id": "18033784507251773"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/94430232_521697505383391_4353410535067024730_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=ZvUNwtdlm60AX94gxMg&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=ec9ffffbff229d984edd50378d8d8603&oe=608CFA84",
          "permalink": "https://www.instagram.com/p/B_SELxYloQ7/",
          "caption": "😊😊😊\n~\nРазмери:\nКартина, ширина: 32 см\nКартина, височина: 32 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~\nРисувана с: акрилни бои",
          "media_type": "IMAGE",
          "id": "17859223879854498"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/93918419_222345072164836_5905283655986704536_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=1InpDEoP92AAX8NuPqj&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=f87fc03b1490476d9f1f8d30942a963f&oe=608A78E8",
          "permalink": "https://www.instagram.com/p/B_SELHVlZ9U/",
          "caption": "Цена: 65лв\nРазмери:\nКартина без паспарту, ширина: 30см\nКартина без паспарту, височина: 40см\nКартина с паспарту, ширина: 21см\nКартина с паспарту, височина: 30см\nОтвор на паспарту, ширина: 20см\nОтвор напаспарту, височина: 29см\nРамка, ширина: 38см\nРамка, височина: 48см\n~\nРисувана с: гримове",
          "media_type": "IMAGE",
          "id": "18113631256110041"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/94541098_130140525259048_1840774000960684985_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=OEnQyxEipBwAX9E89sr&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=a4437e9e8eb0effcf555dc7899a4ed81&oe=608CECEF",
          "permalink": "https://www.instagram.com/p/B_SEKYzlUnR/",
          "caption": "😊😊😊\n~\nРазмери:\nКартина, ширина: 32 см\nКартина, височина: 32 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~\nРисуване с: бяла темперна боя на черен картон",
          "media_type": "IMAGE",
          "id": "17845649111096852"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/93223154_222428939038897_1856794016355704770_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=wFOdmzCkTosAX88Lrb7&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=421667d84b79933e124092ee42aeb02e&oe=608AD9C3",
          "permalink": "https://www.instagram.com/p/B-_xHIylG-l/",
          "caption": "*",
          "media_type": "CAROUSEL_ALBUM",
          "children": {
              "data": [
                  {
                      "id": "18114528028102648",
                      "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/93223154_222428939038897_1856794016355704770_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=wFOdmzCkTosAX88Lrb7&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=421667d84b79933e124092ee42aeb02e&oe=608AD9C3",
                      "permalink": "https://www.instagram.com/p/B-_xHHbFe0Y/"
                  },
                  {
                      "id": "17850700943008424",
                      "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/92994706_1548807435277202_8706568212598527708_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=xuSqJbeWlNUAX8WawpU&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=c0564374ed26911efa26c58cc9617b5c&oe=608CC3C1",
                      "permalink": "https://www.instagram.com/p/B-_xHHalL75/"
                  }
              ]
          },
          "id": "17847281291047963"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/93154253_155099462675153_1303188506798322802_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=Y92jCNdLluoAX-KZu6J&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=e0348e2cb079234e6c1346e691853b52&oe=608C1741",
          "permalink": "https://www.instagram.com/p/B-_uy9zFX2Z/",
          "caption": "😊😊😊\nРазмери:\nКартина без паспарту, ширина: 30см.\nКартина без паспарту, височина: 40см.\nКартина с паспарту, ширина: 21см.\nКартина с паспарту, височина: 30см.\nОтвор на паспарту, ширина: 20см.\nОтвор напаспарту, височина: 29см.\nРамка, ширина: 32см.\nРамка, височина: 42см.\n~\nРисувана с: моливи",
          "media_type": "IMAGE",
          "id": "18050241367234641"
      },
      {
          "media_url": "https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/93082436_224186528923081_6134507276299804567_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=aKfROd5625oAX84xPMU&_nc_ht=scontent-sof1-1.cdninstagram.com&oh=8abaab529c4639fe9e1d649981b58374&oe=608CDE55",
          "permalink": "https://www.instagram.com/p/B-zDc3PFDH7/",
          "caption": "😊😊😊\nРазмери:\nКартина без паспарту, ширина: 30см.\nКартина без паспарту, височина: 40см.\nКартина с паспарту, ширина: 21см.\nКартина с паспарту, височина: 30см.\nОтвор на паспарту, ширина: 20см.\nОтвор напаспарту, височина: 29см.\nРамка, ширина: 32см.\nРамка, височина: 42см.\n~\nРисувана с: бяла темперна боя върху черен картон",
          "media_type": "IMAGE",
          "id": "17896507246476174"
      }
  ]);
      
      const { filter: filterParam } = queryString.parse(location.search);
    // useEffect(() => {
    //     const token = 'IGQVJWOUstZAjhtNXJUU2RoLXZApSmZAGNmx5VGVKMzU1WGpNT2V2QXhrcEI4ZAW5NS01mR25tUDRiRGtLb3psZAmt4YW1SUUR0czdEeWt5UkxJM3FjeVVhekdtdjhlMFRnX0RxSGhKb3h1SG45TmgyLWM0YgZDZD'
    //     fetch('https://graph.instagram.com/me/media?access_token=' + token + '&fields=media_url,permalink,caption,media_type,children{id,media_url,permalink}', {
    //         method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //         mode: 'cors', // no-cors, *cors, same-origin
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         redirect: 'follow', // manual, *follow, error
    //         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //       })
    //         .then(response => response.json())
    //         .then(data => {
                //     setImages(data.data.filter((image) => image.media_type !== 'VIDEO'))
                // })
    // }, [])


    // to-do: move to adaptor
    // const imageSizes = {
    //     thumbnail: 't',
    //     medium: 'm',
    //     large: 'l'
    // }
    // // const imageDimensions = {
    // //     thumbnail: { width, height}
    // // }
    // // to-do: move to adaptor
    // const getImageURL = (permalink) => {
    //     if (!permalink) {
    //         return '' // missing img
    //     }
    //     const defaultImageSize = 'medium'
    //     return `${permalink}media/?size=${imageSizes[defaultImageSize] ?? imageSizes['thumbnail']}`
    // }
    

    // const images = response.data.map((image) => {
    //     const imgURL = getImageURL(image.permalink)
    //     console.log('getImageURL',getImageURL(image.permalink))
    //     if (imgURL) {
    //         fetch(imgURL, {
    //             method: 'GET',
    //             mode: 'cors',
    //             redirect: 'manual',
    //             cache: 'default',
    //         })
    //         .then(response => console.log(response))
    //     }
        
    // })

    const isImageForSale = (image) => {
        return image.caption.toLowerCase().includes('продава') || image.caption.toLowerCase().includes('цена')
    }
    const filters = {
      'none': { value: 'Всички'},
      'forSale': { rule: (image) => isImageForSale(image), value: "За Продажба" },
      'others': { rule: (image) => !isImageForSale(image), value: "Галерия" }
    }
    const filterNames = Object.keys(filters)
    const imageSizes = {
      [Dimensions.xlarge]: 301,
      [Dimensions.large]: 301,
      [Dimensions.medium]: 290,
      [Dimensions.small]: 330,
      [Dimensions.xsmall]: 401,
      [Dimensions.xxsmall]: 330,
      [Dimensions.xxxsmall]: 293
    }

    const renderFilters = () => {
      const filterLinks = []
      for (var filterName of filterNames) {
        filterLinks.push(
          <Link key={filterName} to={`${location.pathname}${filterName !== 'none' ? '?filter=' + filterName : ''}`} replace>
            <button>
              {filters[filterName].value}
            </button>
          </Link>
        )
      }
      return filterLinks
    }

    return (
        <Layout location={location}>
            <h1>Картини</h1>
            <div className='filters'>
            {renderFilters()}
            </div>
            <ImageList images={filterParam !== 'none' && filters[filterParam] ? images.filter(filters[filterParam].rule) : images} imageSize={typeof window !== 'undefined' ? imageSizes[Dimensions.current] : 301} />
        </Layout>
    )
}

export default Home
