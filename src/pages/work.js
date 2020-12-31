import React from 'react'
import Layout from '../components/layout'
import ImageList from '../components/ImageList/ImageList'
const Home = ({location}) => {
  const response = {
    "data": [
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123718689_397229414739754_7070285041023484997_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8ae9d6&_nc_ohc=raldbZbjjR0AX_z4Db4&_nc_ht=scontent.cdninstagram.com&oh=b3f0382d626076c5e431e5a4f812eecf&oe=60103E09",
            "permalink": "https://www.instagram.com/p/CHKx_A8lrTt/",
            "caption": "Продава се!\n~\nРазмери на картината: 40х50 см.\nРисувана с: гримове",
            "media_type": "IMAGE",
            "id": "17874918457985146"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123500653_689038535382010_1805214269682624615_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8ae9d6&_nc_ohc=ztvHd2RwzE8AX8_l2DS&_nc_ht=scontent.cdninstagram.com&oh=66cda4f344d3fcf18e9aa2edcd0dd5c4&oe=600F1FB3",
            "permalink": "https://www.instagram.com/p/CHKx9ATF86k/",
            "caption": "Продава се!\n~\nРазмери на картината: 30х40 см.\nРисувана с: бяла темперна боя на черен картон",
            "media_type": "IMAGE",
            "id": "17976195268322584"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123000324_690556458146610_8858826332290510354_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8ae9d6&_nc_ohc=moEBLlt9tpsAX96Jg4K&_nc_ht=scontent.cdninstagram.com&oh=4ca06d6315e576d0ee7462aa10c83497&oe=600E1202",
            "permalink": "https://www.instagram.com/p/CHKw8NhFNLc/",
            "caption": "Продава се!\n~\nРазмери на картината: 40х50 см. \nРисувана с: Бяла темперна боя на черен картон",
            "media_type": "IMAGE",
            "id": "17847157064398449"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/121234620_371485680876939_9102897190849833529_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8ae9d6&_nc_ohc=jUpbTVqYJXIAX9bO2I9&_nc_ht=scontent.cdninstagram.com&oh=0a927343cc01da7a2a11ff3816475f40&oe=601127AB",
            "permalink": "https://www.instagram.com/p/CGSrJ5-FAJB/",
            "caption": "Продава се! \n~\nРазмери на картината: 30х40 см.\nРисувана с: бяла темперна боя върху черен картон",
            "media_type": "IMAGE",
            "id": "17868057092061196"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/121272459_793031794819190_7750513508377010217_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8ae9d6&_nc_ohc=QqQ7T8IlJTcAX8OXe5E&_nc_ht=scontent.cdninstagram.com&oh=793265f146a7fb7e5927720082bad722&oe=600E4E24",
            "permalink": "https://www.instagram.com/p/CGPAdn8F5BW/",
            "caption": "😊😊😊\n~\nРазмери на картината: 25х25 см\nРисувана с: бяла темперна боя върху черен картон",
            "media_type": "IMAGE",
            "id": "18136899448128653"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/121112171_2789857591292628_4245640302923082858_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8ae9d6&_nc_ohc=qYlqlzgQ37gAX8ro6-B&_nc_oc=AQljVe9XTnAHuSLNRlXIb9ENjhv4Fl1TZmY7rRleLR0xwZveOXj78tHZ5VSsMMDZSPE&_nc_ht=scontent.cdninstagram.com&oh=e605bacb68ab07df89d90d983de221f5&oe=600DDF54",
            "permalink": "https://www.instagram.com/p/CGM-fQ3l4KI/",
            "caption": "Продава се! \n~\nРазмери на картината: 30х40 см.\nРисувана с: бяла темперна боя върху черен картон",
            "media_type": "IMAGE",
            "id": "17881538977812334"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/106696725_718260425660917_4269289158573457136_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8ae9d6&_nc_ohc=jI1pR0AFSzUAX_JShB2&_nc_ht=scontent.cdninstagram.com&oh=742df67447fdaa257015844edf45af70&oe=60100A32",
            "permalink": "https://www.instagram.com/p/CCWn8R-FYpk/",
            "caption": "“Където и да отидеш, всяко място става част от теб, по някакъв начин.”",
            "media_type": "IMAGE",
            "id": "17902166716498573"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/106127588_1559498394221328_5430571699844819412_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8ae9d6&_nc_ohc=R7OFb3wBrXwAX9rw-6x&_nc_ht=scontent.cdninstagram.com&oh=9c2ab7696bd6f5f8b2ed698a1dfc4617&oe=600FF831",
            "permalink": "https://www.instagram.com/p/CCDn1c1lDDA/",
            "caption": "“Art takes time - Monet grew  his gardens before he painted them.”",
            "media_type": "IMAGE",
            "id": "17881868386639227"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/106228560_574947930119402_914765535774726612_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8ae9d6&_nc_ohc=60s0AzfAUmkAX-kVOdF&_nc_ht=scontent.cdninstagram.com&oh=ec3b5ec93640d3a2ab482e49e27ddb90&oe=600F3E52",
            "permalink": "https://www.instagram.com/p/CB3KHNjFOJC/",
            "caption": "~~~\nБоже, тя беше луда.\nВсеки ден тя беше различна жена.\nВеднъж избухлива, другият срамежлива. \nНесигурна и решителна.\nСладка и арогантна. \nТя беше хиляди жени... -Буковски",
            "media_type": "IMAGE",
            "id": "17867144998868245"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104443472_1029125770836672_8501081700170976666_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8ae9d6&_nc_ohc=Z1wwd1wL1mcAX9ToC_L&_nc_ht=scontent.cdninstagram.com&oh=eb62c5b976dfbff958db546c6067b92b&oe=600F933C",
            "permalink": "https://www.instagram.com/p/CB0gc_Pl_nu/",
            "caption": "😊😊😊\n~\nРазмери на картината: 25х25 см.\nРисувана с: бяла темперна боя върху черен картон",
            "media_type": "CAROUSEL_ALBUM",
            "children": {
                "data": [
                    {
                        "id": "17869735024839521",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104443472_1029125770836672_8501081700170976666_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8ae9d6&_nc_ohc=Z1wwd1wL1mcAX9ToC_L&_nc_ht=scontent.cdninstagram.com&oh=eb62c5b976dfbff958db546c6067b92b&oe=600F933C",
                        "permalink": "https://www.instagram.com/p/CB0gc9DluIR/"
                    },
                    {
                        "id": "18025537492274520",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104435862_865791453908526_6551707729394658395_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8ae9d6&_nc_ohc=wQbC4BA9MsEAX9yZ_K_&_nc_ht=scontent.cdninstagram.com&oh=2d2f63bdcb8116048e8315476a18c2c9&oe=600FC489",
                        "permalink": "https://www.instagram.com/p/CB0gc9CldKS/"
                    }
                ]
            },
            "id": "18105217312149295"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/105971720_928571024273538_6113091060865551319_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8ae9d6&_nc_ohc=VrECI7OemTgAX-1WqQ7&_nc_ht=scontent.cdninstagram.com&oh=e51f5d8a1e526a0f07086fc809191b0b&oe=600E1470",
            "permalink": "https://www.instagram.com/p/CB0gbx6FVXP/",
            "caption": "😊😊😊\n~\nРазмери на картината: 30х40 см.\nРисувана с: черна темперна боя върху бял картон",
            "media_type": "IMAGE",
            "id": "17916018379434946"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104429081_1476885489367045_9068916355428760719_n.jpg?_nc_cat=111&ccb=2&_nc_sid=8ae9d6&_nc_ohc=cU1dnZIeE9wAX9q16kY&_nc_ht=scontent.cdninstagram.com&oh=670c6461e27410aade11fb4493cb0aa6&oe=600E43B0",
            "permalink": "https://www.instagram.com/p/CBz2F5IFxPq/",
            "caption": "😊😊😊\n~\nРазмери на картината: 25х25 см.\nРисувана с: бяла темперна боя върху черен картон",
            "media_type": "CAROUSEL_ALBUM",
            "children": {
                "data": [
                    {
                        "id": "18065445118218399",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104429081_1476885489367045_9068916355428760719_n.jpg?_nc_cat=111&ccb=2&_nc_sid=8ae9d6&_nc_ohc=cU1dnZIeE9wAX9q16kY&_nc_ht=scontent.cdninstagram.com&oh=670c6461e27410aade11fb4493cb0aa6&oe=600E43B0",
                        "permalink": "https://www.instagram.com/p/CBz2F3ClFv6/"
                    },
                    {
                        "id": "17869742593820851",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104430862_365866124386902_8313024145454835135_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8ae9d6&_nc_ohc=ghQtIqseA9MAX9ZTs1L&_nc_oc=AQl8uTs6qg4d96GBnaPC8zHWglqstrxFB_W0rURDVLZOiV9fmj2uVwyDEuH7hNq5vrQ&_nc_ht=scontent.cdninstagram.com&oh=ee603f59f5bda290604770e12cfe8e7c&oe=60116972",
                        "permalink": "https://www.instagram.com/p/CBz2F3DlEFC/"
                    }
                ]
            },
            "id": "17953771006339602"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104108480_763213424216914_4963472263021198685_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8ae9d6&_nc_ohc=g1WBGQnOPIMAX-s05PU&_nc_oc=AQnImFWksjqw5TG1uC1t79EAUvNf9CsnLtS-B12zsu05KSIS2QliihnCMZA-CWQcXdY&_nc_ht=scontent.cdninstagram.com&oh=78ca97db8729de7978217e59b9d02ae4&oe=60112CC5",
            "permalink": "https://www.instagram.com/p/CBpzMLdl8o-/",
            "caption": "“In reality, my art is a free confession, an attempt to clarify to myself my own relation to life.”\n- Edvard Munch",
            "media_type": "IMAGE",
            "id": "17872179601776480"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104168578_2494830450829600_9011123947355657740_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8ae9d6&_nc_ohc=FUWsg_GjLB0AX-enirJ&_nc_ht=scontent.cdninstagram.com&oh=de106e933c76c133748569d9f7da918c&oe=600E679A",
            "permalink": "https://www.instagram.com/p/CBpy0XRFMvy/",
            "caption": "😊😊😊\n~\nРазмери на картината 35х45 см.\nРисувана с: черна темперна боя на бял картон",
            "media_type": "IMAGE",
            "id": "18104740039182736"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104294864_333058977689204_7353347264440814185_n.jpg?_nc_cat=111&ccb=2&_nc_sid=8ae9d6&_nc_ohc=_i6fKJf5wX8AX-3hmtB&_nc_ht=scontent.cdninstagram.com&oh=c2f84d90a050dc057a2144c58ba0adca&oe=6010A825",
            "permalink": "https://www.instagram.com/p/CBpyzLOlgPw/",
            "caption": "😊😊😊\n~\nРазмери на картината: 70х50 см \nРисувана с: черна темперна боя на бял картон",
            "media_type": "IMAGE",
            "id": "17861447005923138"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/103937092_274702137136740_3124992066008680001_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8ae9d6&_nc_ohc=vkoqVu_j8dIAX-5Q3jf&_nc_ht=scontent.cdninstagram.com&oh=5f881b2a41e150263683d9b20540ec69&oe=600DB21B",
            "permalink": "https://www.instagram.com/p/CBatL3clEBQ/",
            "caption": "Размери:\nКартина без паспарту, ширина: 27см\nКартина без паспарту, височина: 17см\nКартина с паспарту, ширина: 30см\nКартина с паспарту, височина: 21см\nРамка, ширина: 36 см\nРамка, височина: 27см\n~~\nРисувана със: сухи пастели\n~~\nЦена: 30лв.",
            "media_type": "IMAGE",
            "id": "18140530009066634"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/100518717_177145247001212_2399566941239367491_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8ae9d6&_nc_ohc=VbIMoXXS1qAAX-xhMUh&_nc_oc=AQmLVOBsmnfcq89KhFxSG5EHoNVq3pw08tr7reDFI4aENGTfT4KxVQgwvpAtbyURGQw&_nc_ht=scontent.cdninstagram.com&oh=abe444b250d2995e1aec9e639da6a418&oe=600DE8DA",
            "permalink": "https://www.instagram.com/p/CAm-qiZFerF/",
            "caption": "🏔🏔🏔\nРазмери:\nКартина ширина: 75см.\nКартина височина: 45см.\n~\nРисувана с: акрилни бои и безумно голямо удоволствие",
            "media_type": "CAROUSEL_ALBUM",
            "children": {
                "data": [
                    {
                        "id": "17892546220514447",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/100518717_177145247001212_2399566941239367491_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8ae9d6&_nc_ohc=VbIMoXXS1qAAX-xhMUh&_nc_oc=AQmLVOBsmnfcq89KhFxSG5EHoNVq3pw08tr7reDFI4aENGTfT4KxVQgwvpAtbyURGQw&_nc_ht=scontent.cdninstagram.com&oh=abe444b250d2995e1aec9e639da6a418&oe=600DE8DA",
                        "permalink": "https://www.instagram.com/p/CAm-qgKllEw/"
                    },
                    {
                        "id": "17877026098660635",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/100942302_296634768405459_7862810442123727954_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8ae9d6&_nc_ohc=QLQRvca-5MEAX9U1XsQ&_nc_ht=scontent.cdninstagram.com&oh=2f160e8ef838d0c905c1edc1115ae584&oe=600E0564",
                        "permalink": "https://www.instagram.com/p/CAm-qgJl-NZ/"
                    },
                    {
                        "id": "17928543865389326",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/100481776_2369317153361660_5344794443215749364_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8ae9d6&_nc_ohc=2Sae-2P3Ob8AX97LbkZ&_nc_ht=scontent.cdninstagram.com&oh=ee32051bd5e9a86a30a16abbde78bbf4&oe=600FAC5C",
                        "permalink": "https://www.instagram.com/p/CAm-qgKFIwE/"
                    }
                ]
            },
            "id": "17877988000639476"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/96424468_534313603908781_1580515559067913892_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8ae9d6&_nc_ohc=G0aIDRoK6ksAX8qjD9j&_nc_ht=scontent.cdninstagram.com&oh=00d04c6294f805136cd6f1466663ba94&oe=601143FD",
            "permalink": "https://www.instagram.com/p/CAFn2KJlkZI/",
            "caption": "Размери:\nРамка, височина: 53 см\nКартина, ширина: 40 см\nКартина, височина: 50 см\nРамка, ширина: 43 см\n~~\nРисувана със: сухи пастели",
            "media_type": "IMAGE",
            "id": "18143874142038405"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/95127158_227361678520754_2856459592777886754_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8ae9d6&_nc_ohc=ONrH4pNMDggAX9nzNUa&_nc_ht=scontent.cdninstagram.com&oh=0a9d13885ad3f30be1f812303247bfa6&oe=6010D5ED",
            "permalink": "https://www.instagram.com/p/B_dGhiTlqMG/",
            "caption": "😊😊😊\n~~\nРазмери:\nКартина без паспарту, ширина: 32 см\nКартина без паспарту, височина: 32 см\nКартина с паспарту, ширина: 20 см\nКартина с паспарту, височина: 20 см\nОтвор на паспарту, ширина: 19 см\nОтвор на паспарту, височина: 19 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~~\nРисувана със: сухи пастели",
            "media_type": "IMAGE",
            "id": "18116973958098761"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94137463_117189879959327_4255330427346050142_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8ae9d6&_nc_ohc=0AlrHfLoPxQAX8bASnG&_nc_ht=scontent.cdninstagram.com&oh=1bfc81f0f8eea20fd9cecdec84ea36a1&oe=600FA3EA",
            "permalink": "https://www.instagram.com/p/B_Zf5lElHMZ/",
            "caption": "😊😊😊\n~~\nРазмери:\nКартина без паспарту, ширина: 32 см\nКартина без паспарту, височина: 32 см\nКартина с паспарту, ширина: 20 см\nКартина с паспарту, височина: 20 см\nОтвор на паспарту, ширина: 19 см\nОтвор на паспарту, височина: 19 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~~\nРисувана със: сухи пастели",
            "media_type": "CAROUSEL_ALBUM",
            "children": {
                "data": [
                    {
                        "id": "17852388922989048",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94137463_117189879959327_4255330427346050142_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8ae9d6&_nc_ohc=0AlrHfLoPxQAX8bASnG&_nc_ht=scontent.cdninstagram.com&oh=1bfc81f0f8eea20fd9cecdec84ea36a1&oe=600FA3EA",
                        "permalink": "https://www.instagram.com/p/B_Zf5itl8Vl/"
                    },
                    {
                        "id": "18101960224135455",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94245676_1566034930215138_7571840337882030010_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8ae9d6&_nc_ohc=jNK1Pm0qtwMAX-U44Ju&_nc_ht=scontent.cdninstagram.com&oh=70a87bfa153b8e36ce2fc3104e17c144&oe=60104C5D",
                        "permalink": "https://www.instagram.com/p/B_Zf5itFKaF/"
                    }
                ]
            },
            "id": "18033784507251773"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/95000349_926441667812730_7006658351803570005_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8ae9d6&_nc_ohc=qTh_mSxFdMMAX_L2RfY&_nc_ht=scontent.cdninstagram.com&oh=d3effc486375b2603fc8519a7e1acb35&oe=600EBF6F",
            "permalink": "https://www.instagram.com/p/B_Xf2cCloPG/",
            "caption": "😊😊😊\n~~\nРазмери:\nКартина без паспарту, ширина: 32 см\nКартина без паспарту, височина: 32 см\nКартина с паспарту, ширина: 20 см\nКартина с паспарту, височина: 20 см\nОтвор на паспарту, ширина: 19 см\nОтвор на паспарту, височина: 19 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~~\nРисувана със: сухи пастели",
            "media_type": "IMAGE",
            "id": "17849640941050763"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94430232_521697505383391_4353410535067024730_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8ae9d6&_nc_ohc=EPKfAlacVfQAX8SLG9z&_nc_ht=scontent.cdninstagram.com&oh=a2bcace6741bdaa95f09dd76d9739f40&oe=600E6A84",
            "permalink": "https://www.instagram.com/p/B_SELxYloQ7/",
            "caption": "😊😊😊\n~\nРазмери:\nКартина, ширина: 32 см\nКартина, височина: 32 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~\nРисувана с: акрилни бои",
            "media_type": "IMAGE",
            "id": "17859223879854498"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/93918419_222345072164836_5905283655986704536_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8ae9d6&_nc_ohc=AGwZjWy2F-sAX9MsFO_&_nc_ht=scontent.cdninstagram.com&oh=629ca738e82c1ba6382d2132ccfc26ac&oe=600FDD68",
            "permalink": "https://www.instagram.com/p/B_SELHVlZ9U/",
            "caption": "Цена: 65лв\nРазмери:\nКартина без паспарту, ширина: 30см\nКартина без паспарту, височина: 40см\nКартина с паспарту, ширина: 21см\nКартина с паспарту, височина: 30см\nОтвор на паспарту, ширина: 20см\nОтвор напаспарту, височина: 29см\nРамка, ширина: 38см\nРамка, височина: 48см\n~\nРисувана с: гримове",
            "media_type": "IMAGE",
            "id": "18113631256110041"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94541098_130140525259048_1840774000960684985_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8ae9d6&_nc_ohc=-jo0N8s3jaoAX-JOHtC&_nc_ht=scontent.cdninstagram.com&oh=765fa23c3f0cf73843bab8afd2eab5c8&oe=600E5CEF",
            "permalink": "https://www.instagram.com/p/B_SEKYzlUnR/",
            "caption": "😊😊😊\n~\nРазмери:\nКартина, ширина: 32 см\nКартина, височина: 32 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~\nРисуване с: бяла темперна боя на черен картон",
            "media_type": "IMAGE",
            "id": "17845649111096852"
        },
        {
            "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/93223154_222428939038897_1856794016355704770_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8ae9d6&_nc_ohc=ALcdEfl5ebwAX-j9hYD&_nc_ht=scontent.cdninstagram.com&oh=0957213e01968fbea64b6a534fb2997e&oe=60103E43",
            "permalink": "https://www.instagram.com/p/B-_xHIylG-l/",
            "caption": "*",
            "media_type": "CAROUSEL_ALBUM",
            "children": {
                "data": [
                    {
                        "id": "18114528028102648",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/93223154_222428939038897_1856794016355704770_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8ae9d6&_nc_ohc=ALcdEfl5ebwAX-j9hYD&_nc_ht=scontent.cdninstagram.com&oh=0957213e01968fbea64b6a534fb2997e&oe=60103E43",
                        "permalink": "https://www.instagram.com/p/B-_xHHbFe0Y/"
                    },
                    {
                        "id": "17850700943008424",
                        "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/92994706_1548807435277202_8706568212598527708_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8ae9d6&_nc_ohc=D9-nmI4ZySAAX9f7kbf&_nc_ht=scontent.cdninstagram.com&oh=a9b1bba430a5fb971eb0e17c982fa01c&oe=600E33C1",
                        "permalink": "https://www.instagram.com/p/B-_xHHalL75/"
                    }
                ]
            },
            "id": "17847281291047963"
        }
    ],
    "paging": {
        "cursors": {
            "before": "QVFIUmVJRi1EYUNRZA2JvTFdVaDBUMkpWQ0xfRk91djZA2bG91WXktWVphOVFSVVNUamlxU2VlMC10VWlDa21yZAXk2Q29wU0JsNVRpWkZAMdXlyZA0xNZATh2S1lR",
            "after": "QVFIUmdLd0I2eS1HOFp2ZAGhfekNEbUtXUFlqeWFfZAEZAJTWNZAQjAxd2pSMk5HX1g5b0Y1dldqMkVPUV9kWXA5N0R5VUNkOVZAuMklFVTE1MnpVTnpyT1Rsa0x3"
        },
        "next": "https://graph.instagram.com/v1.0/17841401825384772/media?access_token=IGQVJVVm15MDJKVDVRZAFBBUDI5NUc1bDFibDJWaHVNc1FBUkJqWS1MSlEyVDRGNEYyOXVsQ0x3T0pMckR2MC1EeGllQXlwLVM1NDFIM1IzUmladVplT3Fhdng5LXVHX0ZA2Y2hPOUFPS1NQVUdnbEZAQMAZDZD&fields=media_url%2Cpermalink%2Ccaption%2Cmedia_type%2Cchildren%7Bid%2Cmedia_url%2Cpermalink%7D&limit=25&after=QVFIUmdLd0I2eS1HOFp2ZAGhfekNEbUtXUFlqeWFfZAEZAJTWNZAQjAxd2pSMk5HX1g5b0Y1dldqMkVPUV9kWXA5N0R5VUNkOVZAuMklFVTE1MnpVTnpyT1Rsa0x3"
    }
}

    // to-do: move to adaptor
    const imageSizes = {
        thumbnail: 't',
        medium: 'm',
        large: 'l'
    }
    // const imageDimensions = {
    //     thumbnail: { width, height}
    // }
    // to-do: move to adaptor
    const getImageURL = (permalink) => {
        if (!permalink) {
            return '' // missing img
        }
        const defaultImageSize = 'medium'
        return `${permalink}media/?size=${imageSizes[defaultImageSize] ?? imageSizes['thumbnail']}`
    }
    

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
    //     
    // })
    return (
        <Layout location={location}>
            <ImageList images={response.data} />
        </Layout>
    )
}

export default Home
