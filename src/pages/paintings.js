import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import ImageList from '../components/ImageList/ImageList'
import * as queryString from "query-string";
import Dimensions from '../utils/dimensions'
import { Link } from 'gatsby'

const Home = ({location}) => {
    const [images, setImages] = useState([
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/140378842_203492781485375_2323413002929044257_n.jpg?_nc_cat=106&ccb=3&_nc_sid=8ae9d6&_nc_ohc=hIkl4_YSSLAAX8lU2Vk&_nc_ht=scontent.cdninstagram.com&oh=5bc7bc551b9bb92ec3deed2f0a403bfc&oe=604F5983",
          "permalink": "https://www.instagram.com/p/CKRFYmuFa-U/",
          "caption": "Продава се!\n~\nРазмери на картината: 30х40 см.\nРисувана с: черна темперна боя",
          "media_type": "IMAGE",
          "id": "17869458293276414",
          "altText": "Painting of two touching hands"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/140337157_3901052789946124_1535564025359719542_n.jpg?_nc_cat=107&ccb=3&_nc_sid=8ae9d6&_nc_ohc=Fojrtozl7-8AX_93iau&_nc_oc=AQlE4qr1s3IRiHmOmGx6xSp_P99sJevzV84vHOPw1-_7zcOS7MfD246YPu2L21iZVkc&_nc_ht=scontent.cdninstagram.com&oh=030b2b2a9135d77edfec9139c6a370f1&oe=60511318",
          "permalink": "https://www.instagram.com/p/CKMBElPlXp6/",
          "caption": "Продава се!\n~\nРазмери на картината: 40х50 см. \nРисувана с: Бяла темперна боя на черен картон",
          "media_type": "IMAGE",
          "id": "17951287666404192",
          "altText": "Painting of a city and a mountain"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123718689_397229414739754_7070285041023484997_n.jpg?_nc_cat=101&ccb=3&_nc_sid=8ae9d6&_nc_ohc=RejGhshJDPwAX9tBNvi&_nc_ht=scontent.cdninstagram.com&oh=e5922a1b0f1f9da2df63748350816dc5&oe=604F8609",
          "permalink": "https://www.instagram.com/p/CHKx_A8lrTt/",
          "caption": "Продава се!\n~\nРазмери на картината: 40х50 см.\nРисувана с: гримове",
          "media_type": "IMAGE",
          "id": "17874918457985146",
          "altText": "Painting of two lips kissing"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123500653_689038535382010_1805214269682624615_n.jpg?_nc_cat=109&ccb=3&_nc_sid=8ae9d6&_nc_ohc=W3uGuOhX14IAX8BgUxq&_nc_ht=scontent.cdninstagram.com&oh=e3f102d735d7ab472f6aa19a88f003c7&oe=604E67B3",
          "permalink": "https://www.instagram.com/p/CHKx9ATF86k/",
          "caption": "Продава се!\n~\nРазмери на картината: 30х40 см.\nРисувана с: бяла темперна боя на черен картон",
          "media_type": "IMAGE",
          "id": "17976195268322584",
          "altText": "Painting of a boy and a dog"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/123000324_690556458146610_8858826332290510354_n.jpg?_nc_cat=104&ccb=3&_nc_sid=8ae9d6&_nc_ohc=ktfSlNKPGm4AX8BAyrc&_nc_ht=scontent.cdninstagram.com&oh=4d36597c1aace2aa8ce3c83cdba52728&oe=60514E82",
          "permalink": "https://www.instagram.com/p/CHKw8NhFNLc/",
          "caption": "Продава се!\n~\nРазмери на картината: 40х50 см. \nРисувана с: Бяла темперна боя на черен картон",
          "media_type": "IMAGE",
          "id": "17847157064398449",
          "altText": "Painting of a boy on a planet"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/121234620_371485680876939_9102897190849833529_n.jpg?_nc_cat=106&ccb=3&_nc_sid=8ae9d6&_nc_ohc=rWcSAdpLzhMAX9l8fpB&_nc_ht=scontent.cdninstagram.com&oh=85a529cd2a466534630da9ec94ff5743&oe=60506FAB",
          "permalink": "https://www.instagram.com/p/CGSrJ5-FAJB/",
          "caption": "Продава се! \n~\nРазмери на картината: 30х40 см.\nРисувана с: бяла темперна боя върху черен картон",
          "media_type": "IMAGE",
          "id": "17868057092061196",
          "altText": "Painting of a boy holding a guitar"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/121272459_793031794819190_7750513508377010217_n.jpg?_nc_cat=107&ccb=3&_nc_sid=8ae9d6&_nc_ohc=O8_x6JOawP0AX8cm5aH&_nc_ht=scontent.cdninstagram.com&oh=b4168de463ba2c0a74b2bafd9e224e94&oe=60518AA4",
          "permalink": "https://www.instagram.com/p/CGPAdn8F5BW/",
          "caption": "😊😊😊\n~\nРазмери на картината: 25х25 см\nРисувана с: бяла темперна боя върху черен картон",
          "media_type": "IMAGE",
          "id": "18136899448128653",
          "altText": "Painting of a woman and books in front of her"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/121112171_2789857591292628_4245640302923082858_n.jpg?_nc_cat=109&ccb=3&_nc_sid=8ae9d6&_nc_ohc=JYOobmyU0RcAX8dOJo-&_nc_oc=AQl0qaXfK2N9vYMZKb7ke_JupRfFhvMbR67ytxQ2CsTnZjPgQUYUe1N17538CCGmAgM&_nc_ht=scontent.cdninstagram.com&oh=eb47c24ce7ed357d4e4b1b245e1f5e9e&oe=60511BD4",
          "permalink": "https://www.instagram.com/p/CGM-fQ3l4KI/",
          "caption": "Продава се! \n~\nРазмери на картината: 30х40 см.\nРисувана с: бяла темперна боя върху черен картон",
          "media_type": "IMAGE",
          "id": "17881538977812334",
          "altText": "Painting of a woman licking a popsicle in space"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/106696725_718260425660917_4269289158573457136_n.jpg?_nc_cat=104&ccb=3&_nc_sid=8ae9d6&_nc_ohc=dCyAWNEHTsgAX9ZZ0hv&_nc_ht=scontent.cdninstagram.com&oh=12ec928f362d240d110919c363a591d6&oe=604F5232",
          "permalink": "https://www.instagram.com/p/CCWn8R-FYpk/",
          "caption": "“Където и да отидеш, всяко място става част от теб, по някакъв начин.”",
          "media_type": "IMAGE",
          "id": "17902166716498573",
          "altText": "Painting of a coconut tree"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/106127588_1559498394221328_5430571699844819412_n.jpg?_nc_cat=104&ccb=3&_nc_sid=8ae9d6&_nc_ohc=WrjKMEViugEAX-XmvN-&_nc_ht=scontent.cdninstagram.com&oh=56dec601c9604287e827c49928dce7ea&oe=604F4031",
          "permalink": "https://www.instagram.com/p/CCDn1c1lDDA/",
          "caption": "“Art takes time - Monet grew  his gardens before he painted them.”",
          "media_type": "IMAGE",
          "id": "17881868386639227",
          "altText": "Painting of a house"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/106228560_574947930119402_914765535774726612_n.jpg?_nc_cat=102&ccb=3&_nc_sid=8ae9d6&_nc_ohc=gtnYTdnyoikAX8ZdAJl&_nc_ht=scontent.cdninstagram.com&oh=c676919058a95039739e99ac815b159a&oe=604E8652",
          "permalink": "https://www.instagram.com/p/CB3KHNjFOJC/",
          "caption": "~~~\nБоже, тя беше луда.\nВсеки ден тя беше различна жена.\nВеднъж избухлива, другият срамежлива. \nНесигурна и решителна.\nСладка и арогантна. \nТя беше хиляди жени... -Буковски",
          "media_type": "IMAGE",
          "id": "17867144998868245",
          "altText": "Painting of a woman with a big red hat"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104443472_1029125770836672_8501081700170976666_n.jpg?_nc_cat=108&ccb=3&_nc_sid=8ae9d6&_nc_ohc=tdxHbK-grdcAX9BGj9t&_nc_ht=scontent.cdninstagram.com&oh=f2893ddb931d0fc8bc71e2ef350e21e3&oe=604EDB3C",
          "permalink": "https://www.instagram.com/p/CB0gc_Pl_nu/",
          "caption": "😊😊😊\n~\nРазмери на картината: 25х25 см.\nРисувана с: бяла темперна боя върху черен картон",
          "media_type": "CAROUSEL_ALBUM",
          "children": {
            "data": [
              {
                "id": "17869735024839521",
                "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104443472_1029125770836672_8501081700170976666_n.jpg?_nc_cat=108&ccb=3&_nc_sid=8ae9d6&_nc_ohc=tdxHbK-grdcAX9BGj9t&_nc_ht=scontent.cdninstagram.com&oh=f2893ddb931d0fc8bc71e2ef350e21e3&oe=604EDB3C",
                "permalink": "https://www.instagram.com/p/CB0gc9DluIR/"
              },
              {
                "id": "18025537492274520",
                "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104435862_865791453908526_6551707729394658395_n.jpg?_nc_cat=105&ccb=3&_nc_sid=8ae9d6&_nc_ohc=LK3aGWhE2XwAX-wCuA3&_nc_ht=scontent.cdninstagram.com&oh=39f46b2100552f39357312ef19a6e138&oe=604F0C89",
                "permalink": "https://www.instagram.com/p/CB0gc9CldKS/"
              }
            ]
          },
          "id": "18105217312149295",
          "altText": "Painting of a photo camera"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/105971720_928571024273538_6113091060865551319_n.jpg?_nc_cat=105&ccb=3&_nc_sid=8ae9d6&_nc_ohc=X63PRNOc6hcAX-4KZXc&_nc_ht=scontent.cdninstagram.com&oh=343adc6b48b55129a6b16c722c499f9e&oe=605150F0",
          "permalink": "https://www.instagram.com/p/CB0gbx6FVXP/",
          "caption": "😊😊😊\n~\nРазмери на картината: 30х40 см.\nРисувана с: черна темперна боя върху бял картон",
          "media_type": "IMAGE",
          "id": "17916018379434946",
          "altText": "Painting of a movie roll"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104429081_1476885489367045_9068916355428760719_n.jpg?_nc_cat=111&ccb=3&_nc_sid=8ae9d6&_nc_ohc=9S83uzrgP8AAX8-ThEC&_nc_ht=scontent.cdninstagram.com&oh=e80b361e01c01cf71d0a49c257f44940&oe=60518030",
          "permalink": "https://www.instagram.com/p/CBz2F5IFxPq/",
          "caption": "😊😊😊\n~\nРазмери на картината: 25х25 см.\nРисувана с: бяла темперна боя върху черен картон",
          "media_type": "CAROUSEL_ALBUM",
          "altText": "Painting of Paris",
          "children": {
            "data": [
              {
                "id": "18065445118218399",
                "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104429081_1476885489367045_9068916355428760719_n.jpg?_nc_cat=111&ccb=3&_nc_sid=8ae9d6&_nc_ohc=9S83uzrgP8AAX8-ThEC&_nc_ht=scontent.cdninstagram.com&oh=e80b361e01c01cf71d0a49c257f44940&oe=60518030",
                "permalink": "https://www.instagram.com/p/CBz2F3ClFv6/"
              },
              {
                "id": "17869742593820851",
                "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/104430862_365866124386902_8313024145454835135_n.jpg?_nc_cat=109&ccb=3&_nc_sid=8ae9d6&_nc_ohc=51U47f3Y36cAX8_c9V4&_nc_oc=AQnpfeqPGPPd0kNQ3IWBZkZUQFjH2XVjOGvcx89ieLEvt6ZnG8YX1MvXVgZnoxZMFoI&_nc_ht=scontent.cdninstagram.com&oh=143dd9021b96e97387cead9cb45781db&oe=6050B172",
                "permalink": "https://www.instagram.com/p/CBz2F3DlEFC/"
              }
            ]
          },
          "id": "17953771006339602"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/100518717_177145247001212_2399566941239367491_n.jpg?_nc_cat=102&ccb=3&_nc_sid=8ae9d6&_nc_ohc=AQDEDJ0rp7EAX8rxI4e&_nc_oc=AQnQeE0EyYPXpelItVqSzbn6ZcBo2xDwGTBKGbwHIXrMLyd0UBF1yGnWB5X1BBB9_c0&_nc_ht=scontent.cdninstagram.com&oh=38eb49183a8e913d11f3a7c67488056e&oe=6051255A",
          "permalink": "https://www.instagram.com/p/CAm-qiZFerF/",
          "caption": "🏔🏔🏔\nРазмери:\nКартина ширина: 75см.\nКартина височина: 45см.\n~\nРисувана с: акрилни бои и безумно голямо удоволствие",
          "media_type": "CAROUSEL_ALBUM",
          "children": {
            "data": [
              {
                "id": "17892546220514447",
                "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/100518717_177145247001212_2399566941239367491_n.jpg?_nc_cat=102&ccb=3&_nc_sid=8ae9d6&_nc_ohc=AQDEDJ0rp7EAX8rxI4e&_nc_oc=AQnQeE0EyYPXpelItVqSzbn6ZcBo2xDwGTBKGbwHIXrMLyd0UBF1yGnWB5X1BBB9_c0&_nc_ht=scontent.cdninstagram.com&oh=38eb49183a8e913d11f3a7c67488056e&oe=6051255A",
                "permalink": "https://www.instagram.com/p/CAm-qgKllEw/"
              },
              {
                "id": "17877026098660635",
                "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/100942302_296634768405459_7862810442123727954_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8ae9d6&_nc_ohc=kLZdJBGzkNEAX_TViTo&_nc_ht=scontent.cdninstagram.com&oh=936dfda4bdf6580d3839ce92018d90c5&oe=605141E4",
                "permalink": "https://www.instagram.com/p/CAm-qgJl-NZ/"
              },
              {
                "id": "17928543865389326",
                "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/100481776_2369317153361660_5344794443215749364_n.jpg?_nc_cat=103&ccb=3&_nc_sid=8ae9d6&_nc_ohc=Cpc8BHgFtu0AX8rU73l&_nc_ht=scontent.cdninstagram.com&oh=84f5343776e959cef2bad45e4a462ec0&oe=604EF45C",
                "permalink": "https://www.instagram.com/p/CAm-qgKFIwE/"
              }
            ]
          },
          "id": "17877988000639476",
          "altText": "Painting of mountains"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/95127158_227361678520754_2856459592777886754_n.jpg?_nc_cat=101&ccb=3&_nc_sid=8ae9d6&_nc_ohc=WtPXLEdrCAYAX8e9s3A&_nc_ht=scontent.cdninstagram.com&oh=148d6ba2746a8bff44fb7ba58a5dc8b8&oe=60501DED",
          "permalink": "https://www.instagram.com/p/B_dGhiTlqMG/",
          "caption": "😊😊😊\n~~\nРазмери:\nКартина без паспарту, ширина: 32 см\nКартина без паспарту, височина: 32 см\nКартина с паспарту, ширина: 20 см\nКартина с паспарту, височина: 20 см\nОтвор на паспарту, ширина: 19 см\nОтвор на паспарту, височина: 19 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~~\nРисувана със: сухи пастели",
          "media_type": "IMAGE",
          "id": "18116973958098761",
          "altText": "Painting of a house"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94137463_117189879959327_4255330427346050142_n.jpg?_nc_cat=110&ccb=3&_nc_sid=8ae9d6&_nc_ohc=kSm43BirNcgAX_9ANRd&_nc_ht=scontent.cdninstagram.com&oh=2d9f65bdd46a91788189a2a299f54d7a&oe=604EEBEA",
          "permalink": "https://www.instagram.com/p/B_Zf5lElHMZ/",
          "caption": "😊😊😊\n~~\nРазмери:\nКартина без паспарту, ширина: 32 см\nКартина без паспарту, височина: 32 см\nКартина с паспарту, ширина: 20 см\nКартина с паспарту, височина: 20 см\nОтвор на паспарту, ширина: 19 см\nОтвор на паспарту, височина: 19 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~~\nРисувана със: сухи пастели",
          "media_type": "CAROUSEL_ALBUM",
          "children": {
            "data": [
              {
                "id": "17852388922989048",
                "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94137463_117189879959327_4255330427346050142_n.jpg?_nc_cat=110&ccb=3&_nc_sid=8ae9d6&_nc_ohc=kSm43BirNcgAX_9ANRd&_nc_ht=scontent.cdninstagram.com&oh=2d9f65bdd46a91788189a2a299f54d7a&oe=604EEBEA",
                "permalink": "https://www.instagram.com/p/B_Zf5itl8Vl/"
              },
              {
                "id": "18101960224135455",
                "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94245676_1566034930215138_7571840337882030010_n.jpg?_nc_cat=103&ccb=3&_nc_sid=8ae9d6&_nc_ohc=fYVnVdFCK6EAX9bFkKd&_nc_ht=scontent.cdninstagram.com&oh=f7f02d5d67a1b1d84c3f178954dc2036&oe=604F945D",
                "permalink": "https://www.instagram.com/p/B_Zf5itFKaF/"
              }
            ]
          },
          "id": "18033784507251773",
          "altText": "Painting of a forest"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94430232_521697505383391_4353410535067024730_n.jpg?_nc_cat=107&ccb=3&_nc_sid=8ae9d6&_nc_ohc=c7xhBLb2wWwAX_aAooN&_nc_ht=scontent.cdninstagram.com&oh=10802d15b3626b0b9ee678e7f9f7445c&oe=6051A704",
          "permalink": "https://www.instagram.com/p/B_SELxYloQ7/",
          "caption": "😊😊😊\n~\nРазмери:\nКартина, ширина: 32 см\nКартина, височина: 32 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~\nРисувана с: акрилни бои",
          "media_type": "IMAGE",
          "id": "17859223879854498",
          "altText": "Painting of two imaginary people at night"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/93918419_222345072164836_5905283655986704536_n.jpg?_nc_cat=101&ccb=3&_nc_sid=8ae9d6&_nc_ohc=8WIvUx5FGLoAX-RuSfh&_nc_ht=scontent.cdninstagram.com&oh=4d4250901337b7c3d737c66441526f36&oe=604F2568",
          "permalink": "https://www.instagram.com/p/B_SELHVlZ9U/",
          "caption": "Цена: 65лв\nРазмери:\nКартина без паспарту, ширина: 30см\nКартина без паспарту, височина: 40см\nКартина с паспарту, ширина: 21см\nКартина с паспарту, височина: 30см\nОтвор на паспарту, ширина: 20см\nОтвор напаспарту, височина: 29см\nРамка, ширина: 38см\nРамка, височина: 48см\n~\nРисувана с: гримове",
          "media_type": "IMAGE",
          "id": "18113631256110041",
          "altText": "Painting of a couple"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/94541098_130140525259048_1840774000960684985_n.jpg?_nc_cat=106&ccb=3&_nc_sid=8ae9d6&_nc_ohc=z4qMtajbf2QAX9ISW0U&_nc_ht=scontent.cdninstagram.com&oh=1dd3029720c82bece41d76b8ab505ff2&oe=6051996F",
          "permalink": "https://www.instagram.com/p/B_SEKYzlUnR/",
          "caption": "😊😊😊\n~\nРазмери:\nКартина, ширина: 32 см\nКартина, височина: 32 см\nРамка, ширина: 32.5 см\nРамка, височина: 32.5 см\n~\nРисуване с: бяла темперна боя на черен картон",
          "media_type": "IMAGE",
          "id": "17845649111096852",
          "altText": "Painting of two imaginary faces kissing"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/93223154_222428939038897_1856794016355704770_n.jpg?_nc_cat=104&ccb=3&_nc_sid=8ae9d6&_nc_ohc=Gq7qtRxhwXkAX_uAhEv&_nc_ht=scontent.cdninstagram.com&oh=b020c98800d05564bf9419cf9b5e88e1&oe=604F8643",
          "permalink": "https://www.instagram.com/p/B-_xHIylG-l/",
          "caption": "*",
          "media_type": "CAROUSEL_ALBUM",
          "children": {
            "data": [
              {
                "id": "18114528028102648",
                "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/93223154_222428939038897_1856794016355704770_n.jpg?_nc_cat=104&ccb=3&_nc_sid=8ae9d6&_nc_ohc=Gq7qtRxhwXkAX_uAhEv&_nc_ht=scontent.cdninstagram.com&oh=b020c98800d05564bf9419cf9b5e88e1&oe=604F8643",
                "permalink": "https://www.instagram.com/p/B-_xHHbFe0Y/"
              },
              {
                "id": "17850700943008424",
                "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/92994706_1548807435277202_8706568212598527708_n.jpg?_nc_cat=110&ccb=3&_nc_sid=8ae9d6&_nc_ohc=8HW4XYKs95cAX9U5Yt_&_nc_ht=scontent.cdninstagram.com&oh=0e6bda6523fcc3f42c46e8fe18a37570&oe=60517041",
                "permalink": "https://www.instagram.com/p/B-_xHHalL75/"
              }
            ]
          },
          "id": "17847281291047963",
          "altText": "Painting with many paintings"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/93154253_155099462675153_1303188506798322802_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8ae9d6&_nc_ohc=owtyMHF6dWEAX-aZef3&_nc_ht=scontent.cdninstagram.com&oh=7188c35e4b33349bed5fab8d838f43c1&oe=6050C3C1",
          "permalink": "https://www.instagram.com/p/B-_uy9zFX2Z/",
          "caption": "😊😊😊\nРазмери:\nКартина без паспарту, ширина: 30см.\nКартина без паспарту, височина: 40см.\nКартина с паспарту, ширина: 21см.\nКартина с паспарту, височина: 30см.\nОтвор на паспарту, ширина: 20см.\nОтвор напаспарту, височина: 29см.\nРамка, ширина: 32см.\nРамка, височина: 42см.\n~\nРисувана с: моливи",
          "media_type": "IMAGE",
          "id": "18050241367234641",
          "altText": "Painting of a bridge"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/93082436_224186528923081_6134507276299804567_n.jpg?_nc_cat=103&ccb=3&_nc_sid=8ae9d6&_nc_ohc=P6ElRuzsub0AX-BrnIL&_nc_ht=scontent.cdninstagram.com&oh=f7f318a6adbcf4538a1c98c3a2f5f7f5&oe=60518AD5",
          "permalink": "https://www.instagram.com/p/B-zDc3PFDH7/",
          "caption": "😊😊😊\nРазмери:\nКартина без паспарту, ширина: 30см.\nКартина без паспарту, височина: 40см.\nКартина с паспарту, ширина: 21см.\nКартина с паспарту, височина: 30см.\nОтвор на паспарту, ширина: 20см.\nОтвор напаспарту, височина: 29см.\nРамка, ширина: 32см.\nРамка, височина: 42см.\n~\nРисувана с: бяла темперна боя върху черен картон",
          "media_type": "IMAGE",
          "id": "17896507246476174",
          "altText": "Painting of the Eiffel Tower"
        },
        {
          "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/92473068_536192133708658_1780984530248344432_n.jpg?_nc_cat=107&ccb=3&_nc_sid=8ae9d6&_nc_ohc=T7FF6jmAf0gAX8_vZ9D&_nc_ht=scontent.cdninstagram.com&oh=cf40904407e5ab46286cd44d5e48de53&oe=604FAA68",
          "permalink": "https://www.instagram.com/p/B-zCae8lmRJ/",
          "caption": "😊😊😊\nРазмери:\nКартина без паспарту, ширина: 30см.\nКартина без паспарту, височина: 40см.\nКартина с паспарту, ширина: 21см.\nКартина с паспарту, височина: 30см.\nОтвор на паспарту, ширина: 20см.\nОтвор напаспарту, височина: 29см.\nРамка, ширина: 32см.\nРамка, височина: 42см.\n~\nРисувана с: моливи",
          "media_type": "IMAGE",
          "id": "17850378064988055",
          "altText": "Painting of old houses"
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
