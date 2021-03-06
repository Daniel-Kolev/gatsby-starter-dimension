import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'


class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} isHomePage>
        <div className='rights' >
            <h1>Общи условия за ползване на уеб сайта</h1>
            <ul>
                <li>Потребителят има право да използва този сайт, както информацията и материалите, съдържащи се в него, само за позволени от закона цели, без да накърнява правата и да ограничава достъпа до този сайт на трета страна.</li>
                <li>Ползването на сайта е по инициатива, желание и за сметка на Потребителя, при спазване ограниченията в ЗАПСП в полза на титуляря на авторското право – Йоана Миткова или трета страна.</li>
                <li>Потребителят има право да разглежда, съхранява, копира и отпечатва материалите от този сайт единствено за лична употреба с цел да се информира за услугите, предлагани от Доставчика, и/или да възлага поръчки или иска оферти относно услугите в сайта.</li>
                <h2>На потребителя е забранено следното:</h2>
                <li>Да променя, копира, възпроизвежда (цялостно или частично), публикува, изпраща (по какъвто и да е начин), заема, продава, създава вторични материали на базата на съдържанието в сайта, да използва с търговска цел или да разпространява по какъвто и да е друг начин никакъв елемент от съдържанието на този сайт, без предварително писмено разрешение от Йоана Миткова. Без такова разрешение не се разрешава никакво използване на съдържанието в друг сайт или електронна среда с каквато и да е цел.</li>
                <li>Да използва неправомерно сайта или съдържанието в него (в т.ч., но не само, изпращане или предаване на материали със заплашително, невярно, подвеждащо, оскърбително, обидно, нарушаващо конкуренцията, оклеветяващо, неприлично, порнографско или друг вид незаконно съдържание или каквито и да са материали, които представляват или подбуждат поведение, което може да бъде квалифицирано като престъпление, да доведе до гражданска или наказателна отговорност или по друг начин да наруши законите на Република България).</li>
                <li>Изрично не се разрешава използването на какъвто и да е софтуер или устройства с цел достъп и масово копиране/сваляне на съдържанието в сайта.</li>
                <li>Да използва сайта, за да получи неоторизиран достъп до други компютърни системи или мрежи.</li>
                <li>Йоана Миткова си запазва правото да осъвременява (добавя, променя, премества и изтрива) съдържанието или части от него (вкл. цени, публикации, данни, услуги или друга информация, показана на или свързана с настоящия сайт), да коригира евентуални допуснати грешки, неточности и пропуски по всяко време без предизвестие.
                </li>
            </ul>
            <h1>Ограничаване на отговорността</h1>
            <ul>
                <li>Използването на сайта, както и действията, които потребителят предприема вследствие на това, са отговорност изцяло на потребителя.</li>
            </ul>
            <h1>Авторско право</h1>
            <ul>
                <li>Дизайнът, структурата и съдържанието на този уеб сайт са защитени с авторско право. Последните са собственост на Йоана Миткова, която притежава изключителното право за ползването им. Всяко неоторизирано ползване на съдържанието е нарушение на авторски права или други законови разпоредби.</li>
                <li>Потребителите нямат право да копират, публикуват, продават, променят или лицензират части или цялото Съдържание на този уеб сайт, както и да го използват с каквато и да е публична или търговска цел, освен като информация за популяризиране на услугите на Йоана Миткова.</li>
                <li>Този уеб сайт може да съдържа материали, названия или търговски марки, които са собственост на други компании, организации и сдружения, защитени от Закона за авторското право и сродните му права (ЗАПСП).</li>
                <li> Изрично не се разрешава използването на каквото и да е Съдържание от сайта, освен по начин, който не противоречи на настоящите условия за ползване, без писменото разрешение на собственика Йоана Миткова.
                </li>
                <li> Достъпът до този сайт както и до всяка част от съдържанието му не дава по никакъв начин право за ползване на интелектуалната собственост без предварителното писмено разрешение на автора Йоана Миткова.
                </li>
            </ul>
            <h1>Препратки (хипервръзки)</h1>
            <ul>
                <li> Възможно е в сайта да има хипервръзки към уебсайтове, източници или рекламодатели, които са собственост на трети страни. Доставчикът не наблюдава тези препратки в Сайта , тъй като те са предоставени само за улеснение на потребителите.</li>
                <li> Използвайки препратките, Потребителят е наясно, че напуска този сайт. Доставчикът Йоана Миткова не носи отговорност за достъпа към тези външни сайтове, както и за тяхното съдържание, пълнота, актуалност, достоверност и полезност на информацията, рекламите, продуктите или други материали, станали достъпни на или чрез тях. Доставчикът не носи отговорност за политиката относно защитата на личните данни или сигурността на тези сайтове. Ползването им е отговорност единствено на Потребителя. Потребителите следва да предявяват претенциите си към администратора или уебмастъра на съответния външен сайт.
                </li>
            </ul>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
