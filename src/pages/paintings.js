import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import ImageList from '../components/ImageList/ImageList'
import * as queryString from "query-string";
import Dimensions from '../utils/dimensions'
import { Link } from 'gatsby'

const Home = ({location}) => {
    const [images, setImages] = useState([
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/152953705_2802507546638548_1645699164568303097_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=kBHByLyCUaIAX84yHc8&_nc_ht=scontent.cdninstagram.com&oh=001457c091869b846a608d22ed765e11&oe=60E19F25",
            "permalink": "https://www.instagram.com/p/CLtdxzTlP8-/",
            "caption": "😊😊😊",
            "media_type": "IMAGE",
            "id": "17886761597009534"
        },
        {
            "media_url": "https://video.cdninstagram.com/v/t50.2886-16/143488895_426025765306962_5479782825493452580_n.mp4?_nc_cat=101&vs=17868268655257324_2252882363&_nc_vs=HBksFQAYJEdIOTNqUWhTQW1qYWQ0TUJBQ1RYMGxkeUdReE1ia1lMQUFBRhUAAsgBABUAGCRHQmVJbndnRWdQSlV3VnNBQUQ3VGswRnpuOThmYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACbYoY63j8a9PxUCKAJDMywXQBjul41P3zsYEmRhc2hfYmFzZWxpbmVfMl92MREAdeoHAA%3D%3D&ccb=1-3&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkIn0%3D&_nc_ohc=1_P-G3CoHvgAX8Kyp9C&_nc_ht=video.cdninstagram.com&oh=4ea2d206f47e1fd86e48189d7c591d94&oe=60DDD5A7&_nc_rid=21fc7cac57",
            "permalink": "https://www.instagram.com/p/CKzTN0-JiQP/",
            "media_type": "VIDEO",
            "id": "18065246638267852"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/140378842_203492781485375_2323413002929044257_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=WvpLJCY1ZqEAX-7BjKu&_nc_ht=scontent.cdninstagram.com&oh=040fe1c260efae36191c54ad12eeec03&oe=60E1B003",
            "permalink": "https://www.instagram.com/p/CKRFYmuFa-U/",
            "caption": "Продава се!\n~\nРазмери на картината: 30х40 см.\nРисувана с: черна темперна боя",
            "media_type": "IMAGE",
            "id": "17869458293276414"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/140337157_3901052789946124_1535564025359719542_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=KIjgtJy_JTwAX_kGqGZ&_nc_oc=AQmmK9QsSPSuYEYFUbSHtA38gh8_yyJ-idxZCQhZ6k70q8DS7ZEMBEZT01W_KMn8PIQ&_nc_ht=scontent.cdninstagram.com&oh=12656b443c2ce19500110012b1aeaa2c&oe=60E16F58",
            "permalink": "https://www.instagram.com/p/CKMBElPlXp6/",
            "caption": "Продава се!\n~\nРазмери на картината: 40х50 см. \nРисувана с: Бяла темперна боя на черен картон",
            "media_type": "IMAGE",
            "id": "17951287666404192"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123718689_397229414739754_7070285041023484997_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=xwkdVkfHN2QAX_V9xEt&_nc_ht=scontent.cdninstagram.com&oh=2b060dfc416f8cb60da4acb82736fd53&oe=60E1DC89",
            "permalink": "https://www.instagram.com/p/CHKx_A8lrTt/",
            "caption": "Продава се!\n~\nРазмери на картината: 40х50 см.\nРисувана с: гримове",
            "media_type": "IMAGE",
            "id": "17874918457985146"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123500653_689038535382010_1805214269682624615_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=zJ8CkxH5RawAX9AKkGl&_nc_ht=scontent.cdninstagram.com&oh=37d09337ee8b50a9832aad99b4f7a237&oe=60E2B873",
            "permalink": "https://www.instagram.com/p/CHKx9ATF86k/",
            "caption": "Продава се!\n~\nРазмери на картината: 30х40 см.\nРисувана с: бяла темперна боя на черен картон",
            "media_type": "IMAGE",
            "id": "17976195268322584"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123000324_690556458146610_8858826332290510354_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=d-lutSDKoC8AX_C0FeG&_nc_ht=scontent.cdninstagram.com&oh=3211c49ece92cdfdb0d629bccd61117b&oe=60E1AAC2",
            "permalink": "https://www.instagram.com/p/CHKw8NhFNLc/",
            "caption": "Продава се!\n~\nРазмери на картината: 40х50 см. \nРисувана с: Бяла темперна боя на черен картон",
            "media_type": "IMAGE",
            "id": "17847157064398449"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/121234620_371485680876939_9102897190849833529_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=nHzGeuXRFPIAX8yv8Ve&_nc_ht=scontent.cdninstagram.com&oh=4057ab18a7d82016ad00a5db1946739b&oe=60E2C62B",
            "permalink": "https://www.instagram.com/p/CGSrJ5-FAJB/",
            "caption": "Продава се! \n~\nРазмери на картината: 30х40 см.\nРисувана с: бяла темперна боя върху черен картон",
            "media_type": "IMAGE",
            "id": "17868057092061196"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/121272459_793031794819190_7750513508377010217_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=5BsCJQ7V0MQAX8PJjJr&_nc_ht=scontent.cdninstagram.com&oh=c720f6970270e0ad0f67448bbac33a0e&oe=60E1E6E4",
            "permalink": "https://www.instagram.com/p/CGPAdn8F5BW/",
            "caption": "😊😊😊\n~\nРазмери на картината: 25х25 см\nРисувана с: бяла темперна боя върху черен картон",
            "media_type": "IMAGE",
            "id": "18136899448128653"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/121112171_2789857591292628_4245640302923082858_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=puNzRmyjDW8AX_PNi_7&_nc_oc=AQm2bu_EhTDxzedueCM4YycffbMmWxqGt_k4A7mENtoqHxPbsRKdg5-rCT3XPLKQEU4&_nc_ht=scontent.cdninstagram.com&oh=2141d550cb53ba507c9fafe275e1c25e&oe=60E17814",
            "permalink": "https://www.instagram.com/p/CGM-fQ3l4KI/",
            "caption": "Продава се! \n~\nРазмери на картината: 30х40 см.\nРисувана с: бяла темперна боя върху черен картон",
            "media_type": "IMAGE",
            "id": "17881538977812334"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/106696725_718260425660917_4269289158573457136_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=SZUWG6I356oAX-5azte&_nc_ht=scontent.cdninstagram.com&oh=06c819d388e5ecffb6845c349e007ece&oe=60E1A8B2",
            "permalink": "https://www.instagram.com/p/CCWn8R-FYpk/",
            "caption": "“Където и да отидеш, всяко място става част от теб, по някакъв начин.”",
            "media_type": "IMAGE",
            "id": "17902166716498573"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/106127588_1559498394221328_5430571699844819412_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=lZNUpDc6kRYAX9ntX4y&_nc_ht=scontent.cdninstagram.com&oh=742e827ee132fa302f42918812e40249&oe=60E196B1",
            "permalink": "https://www.instagram.com/p/CCDn1c1lDDA/",
            "caption": "“Art takes time - Monet grew  his gardens before he painted them.”",
            "media_type": "IMAGE",
            "id": "17881868386639227"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/106228560_574947930119402_914765535774726612_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=3wG_0K5JhWoAX_xWg9g&_nc_ht=scontent.cdninstagram.com&oh=cdb3d8c3c7f49469e6bd410112fa6199&oe=60E2D712",
            "permalink": "https://www.instagram.com/p/CB3KHNjFOJC/",
            "caption": "~~~\nБоже, тя беше луда.\nВсеки ден тя беше различна жена.\nВеднъж избухлива, другият срамежлива. \nНесигурна и решителна.\nСладка и арогантна. \nТя беше хиляди жени... -Буковски",
            "media_type": "IMAGE",
            "id": "17867144998868245"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104443472_1029125770836672_8501081700170976666_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=QrktAE_-xygAX_J2Fsh&_nc_ht=scontent.cdninstagram.com&oh=0d1b7298d927b97410460682639ea643&oe=60E131BC",
            "permalink": "https://www.instagram.com/p/CB0gc_Pl_nu/",
            "caption": "😊😊😊\n~\nРазмери на картината: 25х25 см.\nРисувана с: бяла темперна боя върху черен картон",
            "media_type": "CAROUSEL_ALBUM",
            "children": {
                "data": [
                    {
                        "id": "17869735024839521",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104443472_1029125770836672_8501081700170976666_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=QrktAE_-xygAX_J2Fsh&_nc_ht=scontent.cdninstagram.com&oh=0d1b7298d927b97410460682639ea643&oe=60E131BC",
                        "permalink": "https://www.instagram.com/p/CB0gc9DluIR/"
                    },
                    {
                        "id": "18025537492274520",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104435862_865791453908526_6551707729394658395_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=IjYXS_d9c_IAX8VV6Cn&_nc_ht=scontent.cdninstagram.com&oh=a0e52320774208bd95bbc5ee0d6feaea&oe=60E16309",
                        "permalink": "https://www.instagram.com/p/CB0gc9CldKS/"
                    }
                ]
            },
            "id": "18105217312149295"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/105971720_928571024273538_6113091060865551319_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=_YyYJt08hmwAX94ewF8&_nc_ht=scontent.cdninstagram.com&oh=f441da3f59c81c5672427563a29c7c8e&oe=60E1AD30",
            "permalink": "https://www.instagram.com/p/CB0gbx6FVXP/",
            "caption": "😊😊😊\n~\nРазмери на картината: 30х40 см.\nРисувана с: черна темперна боя върху бял картон",
            "media_type": "IMAGE",
            "id": "17916018379434946"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104429081_1476885489367045_9068916355428760719_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=3bKSvIXtUeMAX-MN6VZ&_nc_ht=scontent.cdninstagram.com&oh=929315e0adcbdc0ebf24e92340adba8f&oe=60E1DC70",
            "permalink": "https://www.instagram.com/p/CBz2F5IFxPq/",
            "caption": "😊😊😊\n~\nРазмери на картината: 25х25 см.\nРисувана с: бяла темперна боя върху черен картон",
            "media_type": "CAROUSEL_ALBUM",
            "children": {
                "data": [
                    {
                        "id": "18065445118218399",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104429081_1476885489367045_9068916355428760719_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=3bKSvIXtUeMAX-MN6VZ&_nc_ht=scontent.cdninstagram.com&oh=929315e0adcbdc0ebf24e92340adba8f&oe=60E1DC70",
                        "permalink": "https://www.instagram.com/p/CBz2F3ClFv6/"
                    },
                    {
                        "id": "17869742593820851",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104430862_365866124386902_8313024145454835135_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=F85bl1g67D4AX9SbmON&_nc_oc=AQl0YoKOMLNiUefk_ntNO8JfUlH77W3t6ne59MsjQdFfwphX7RP4qYRZOAfVJtkf6ag&_nc_ht=scontent.cdninstagram.com&oh=f0910a04f5af1b62b3c6121da463bc76&oe=60E307F2",
                        "permalink": "https://www.instagram.com/p/CBz2F3DlEFC/"
                    }
                ]
            },
            "id": "17953771006339602"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/100518717_177145247001212_2399566941239367491_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=kMaNMGloGt8AX_HXJoa&_nc_oc=AQkNtIf7UZ6FCIoBvxC_p4MEHbJ_WrnWO9pxYKHWlTI4rDr3EVLMg-MYIrH9ofgM310&_nc_ht=scontent.cdninstagram.com&oh=ee491d85892098ee86d0ae2f7932262e&oe=60E1819A",
            "permalink": "https://www.instagram.com/p/CAm-qiZFerF/",
            "caption": "🏔🏔🏔\nРазмери:\nКартина ширина: 75см.\nКартина височина: 45см.\n~\nРисувана с: акрилни бои и безумно голямо удоволствие",
            "media_type": "CAROUSEL_ALBUM",
            "children": {
                "data": [
                    {
                        "id": "17892546220514447",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/100518717_177145247001212_2399566941239367491_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=kMaNMGloGt8AX_HXJoa&_nc_oc=AQkNtIf7UZ6FCIoBvxC_p4MEHbJ_WrnWO9pxYKHWlTI4rDr3EVLMg-MYIrH9ofgM310&_nc_ht=scontent.cdninstagram.com&oh=ee491d85892098ee86d0ae2f7932262e&oe=60E1819A",
                        "permalink": "https://www.instagram.com/p/CAm-qgKllEw/"
                    },
                    {
                        "id": "17877026098660635",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/100942302_296634768405459_7862810442123727954_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=z02EDku6pO0AX_C_E_E&_nc_ht=scontent.cdninstagram.com&oh=f481cbb3ff04f7b097d013279e31b90e&oe=60E19E24",
                        "permalink": "https://www.instagram.com/p/CAm-qgJl-NZ/"
                    },
                    {
                        "id": "17928543865389326",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/100481776_2369317153361660_5344794443215749364_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=hKn4-AZKf8wAX8whpId&_nc_ht=scontent.cdninstagram.com&oh=c0f5baec3c21fe28d79e59fc7c021c09&oe=60E14ADC",
                        "permalink": "https://www.instagram.com/p/CAm-qgKFIwE/"
                    }
                ]
            },
            "id": "17877988000639476"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/95127158_227361678520754_2856459592777886754_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=hdpCc5aV8X8AX_Gwa4X&_nc_ht=scontent.cdninstagram.com&oh=1b9bafc5fb963074b1ab68d911cc9666&oe=60E2746D",
            "permalink": "https://www.instagram.com/p/B_dGhiTlqMG/",
            "caption": "😊😊😊\n~~\nРазмери:\nКартина без паспарту, ширина: 32 см\nКартина без паспарту, височина: 32 см\nКартина с паспарту, ширина: 20 см\nКартина с паспарту, височина: 20 см\nОтвор на паспарту, ширина: 19 см\nОтвор на паспарту, височина: 19 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~~\nРисувана със: сухи пастели",
            "media_type": "IMAGE",
            "id": "18116973958098761"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94137463_117189879959327_4255330427346050142_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=yiDIU9cKOzQAX9VRcGS&_nc_ht=scontent.cdninstagram.com&oh=e91e718097cd1f00c11d6b10db90da21&oe=60E1426A",
            "permalink": "https://www.instagram.com/p/B_Zf5lElHMZ/",
            "caption": "😊😊😊\n~~\nРазмери:\nКартина без паспарту, ширина: 32 см\nКартина без паспарту, височина: 32 см\nКартина с паспарту, ширина: 20 см\nКартина с паспарту, височина: 20 см\nОтвор на паспарту, ширина: 19 см\nОтвор на паспарту, височина: 19 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~~\nРисувана със: сухи пастели",
            "media_type": "CAROUSEL_ALBUM",
            "children": {
                "data": [
                    {
                        "id": "17852388922989048",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94137463_117189879959327_4255330427346050142_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=yiDIU9cKOzQAX9VRcGS&_nc_ht=scontent.cdninstagram.com&oh=e91e718097cd1f00c11d6b10db90da21&oe=60E1426A",
                        "permalink": "https://www.instagram.com/p/B_Zf5itl8Vl/"
                    },
                    {
                        "id": "18101960224135455",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94245676_1566034930215138_7571840337882030010_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=0QXrT4uKaXIAX9h-AsR&_nc_ht=scontent.cdninstagram.com&oh=eb615f7e005b524fc3cacc6af2f38362&oe=60E1EADD",
                        "permalink": "https://www.instagram.com/p/B_Zf5itFKaF/"
                    }
                ]
            },
            "id": "18033784507251773"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94430232_521697505383391_4353410535067024730_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=r-uOAL0KBtUAX99Ljj4&_nc_ht=scontent.cdninstagram.com&oh=6cf80a292410982784debb43eacf3ddf&oe=60E20344",
            "permalink": "https://www.instagram.com/p/B_SELxYloQ7/",
            "caption": "😊😊😊\n~\nРазмери:\nКартина, ширина: 32 см\nКартина, височина: 32 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~\nРисувана с: акрилни бои",
            "media_type": "IMAGE",
            "id": "17859223879854498"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/93918419_222345072164836_5905283655986704536_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=j2CLWF9-OQ0AX9Rx6Fq&_nc_ht=scontent.cdninstagram.com&oh=ab426966a897f739f937b94e2da6d193&oe=60E17BE8",
            "permalink": "https://www.instagram.com/p/B_SELHVlZ9U/",
            "caption": "Цена: 65лв\nРазмери:\nКартина без паспарту, ширина: 30см\nКартина без паспарту, височина: 40см\nКартина с паспарту, ширина: 21см\nКартина с паспарту, височина: 30см\nОтвор на паспарту, ширина: 20см\nОтвор напаспарту, височина: 29см\nРамка, ширина: 38см\nРамка, височина: 48см\n~\nРисувана с: гримове",
            "media_type": "IMAGE",
            "id": "18113631256110041"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94541098_130140525259048_1840774000960684985_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=slmrr3Ahe2UAX_LEwnr&_nc_ht=scontent.cdninstagram.com&oh=cd3d8972e9f5c07ffde3e1b254312f94&oe=60E1F5AF",
            "permalink": "https://www.instagram.com/p/B_SEKYzlUnR/",
            "caption": "😊😊😊\n~\nРазмери:\nКартина, ширина: 32 см\nКартина, височина: 32 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~\nРисуване с: бяла темперна боя на черен картон",
            "media_type": "IMAGE",
            "id": "17845649111096852"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/93223154_222428939038897_1856794016355704770_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=yBl7GK05JygAX9sHldD&_nc_ht=scontent.cdninstagram.com&oh=8cf507037d89868c4851fd237da2636d&oe=60E1DCC3",
            "permalink": "https://www.instagram.com/p/B-_xHIylG-l/",
            "caption": "*",
            "media_type": "CAROUSEL_ALBUM",
            "children": {
                "data": [
                    {
                        "id": "18114528028102648",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/93223154_222428939038897_1856794016355704770_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=yBl7GK05JygAX9sHldD&_nc_ht=scontent.cdninstagram.com&oh=8cf507037d89868c4851fd237da2636d&oe=60E1DCC3",
                        "permalink": "https://www.instagram.com/p/B-_xHHbFe0Y/"
                    },
                    {
                        "id": "17850700943008424",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/92994706_1548807435277202_8706568212598527708_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=YmxKgl8PzrsAX8B10go&_nc_ht=scontent.cdninstagram.com&oh=d6732b0ee38731b4f46e210d251fc783&oe=60E1CC81",
                        "permalink": "https://www.instagram.com/p/B-_xHHalL75/"
                    }
                ]
            },
            "id": "17847281291047963"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/93154253_155099462675153_1303188506798322802_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=KoKJgsWXjTUAX9qUCZ3&_nc_ht=scontent.cdninstagram.com&oh=ec536a8310846af0cf81f4265a171a3c&oe=60E31A41",
            "permalink": "https://www.instagram.com/p/B-_uy9zFX2Z/",
            "caption": "😊😊😊\nРазмери:\nКартина без паспарту, ширина: 30см.\nКартина без паспарту, височина: 40см.\nКартина с паспарту, ширина: 21см.\nКартина с паспарту, височина: 30см.\nОтвор на паспарту, ширина: 20см.\nОтвор напаспарту, височина: 29см.\nРамка, ширина: 32см.\nРамка, височина: 42см.\n~\nРисувана с: моливи",
            "media_type": "IMAGE",
            "id": "18050241367234641"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/93082436_224186528923081_6134507276299804567_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=D2X7t9uFDjgAX91_AJI&_nc_ht=scontent.cdninstagram.com&oh=922406be4e44828015e101a0e2221288&oe=60E1E715",
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
