import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { FocusAwareStatusBar } from 'components'
import colors from 'assets/colors/colors'
import { GiftAdvertisement, GiftPagesBackground } from 'assets'
import { GiftCategory, GiftGuide } from 'components/cards'
import { GiftGuideImages } from 'utils/helper'
import GiftGuideCard from 'components/cards/giftGuideCard/giftGuideCard'
export function GiftGuidePages() {
    const B = (props) => <Text style={{ fontWeight: 'bold', color: colors.black }}>{props.children}</Text>
    const C = (props) => <Text style={{ color: colors.blue }}>{props.children}</Text>
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.container}>
                <FocusAwareStatusBar
                    barStyle="dark-content"
                    backgroundColor={colors.white}
                />
                <View style={style.backGroundImageView}>
                    <Image
                        style={style.backGroundImage}
                        source={GiftPagesBackground}
                    />
                </View>
                <View style={style.contentView}>
                    <Text style={style.contentViewTitle}>
                        Kim için aradığını seç, hediyeni bulalım
                    </Text>
                    <GiftGuide />
                </View>
                <View style={style.giftIdeasView}>
                    <Text style={[style.contentViewTitle, { color: colors.black, fontWeight: "bold" }]}>
                        Süper Hediye Fikirleri!
                    </Text>
                    <View style={style.giftIdeasContent}>
                        {
                            GiftGuideImages.slice(7, 13).map((item) => <GiftGuideCard key={item.id} list={item} color={"black"} />)
                        }
                    </View>
                </View>
                <View style={style.advertisement}>
                    <Image
                        source={GiftAdvertisement}
                        style={[style.backGroundImage, { borderRadius: 10 }]}
                    />
                </View>
                <GiftCategory />
                <View style={style.footerView}>
                    <Text style={style.title}>
                        Hediye Rehberi
                    </Text>
                    <Text style={style.text}>
                        Hediye almak insanlar arasında oldukça yaygındır. Doğum günlerinde, yılbaşında, özel günlerde ya da içlerinden geldiği için insanlar birbirine hediye almaktadır. Birbirlerine vermiş oldukları hediyeler ile insanlar karşısındaki kişiye değer verdiğini gösterir. Bazı zamanlarda hediye seçmek çok kolay olsa da bazı zamanlarda da oldukça zor bir iş haline gelebiliyor. Sevdiğiniz ya da değer verdiğiniz kişiye hediye olarak ne alacağınızı bilmeyebilirsiniz. Bu durumda da insanlar genellikle kişinin karakterine göre ya da ilgi alanına göre bir hediye tercih etmektedir. Ne hediye alacağınıza dair bir fikriniz yok ise hediye rehberi sizlere yardımcı olacaktır. Elektronik, kitap, saat, takı gibi pek çok kategori ile almak istediğiniz hediyeyi kolayca bulabileceksiniz.
                    </Text>
                    <Text style={style.title}>
                        Sevgiliye Hediye - 14 Şubat Sevgililer Günü Hediye Fikirleri
                    </Text>
                    <Text style={style.text}>
                        Sevgililer için 14 Şubat günü oldukça önemli bir gündür. Aşıkların, sevgililerin ve eşlerin beraber olmalarını kutladığı gün, şubat ayını daha sevgi dolu ve sıcak bir hale getirir. 14 Şubat gününde sevgilinize ya da eşinize onları sevdiğinizi, değer verdiğinizi göstermenin en güzel yollarından birisi onu düşünerek alınmış olan bir hediyedir. Sevgililer günü için hazırlanmış olan birçok hediye çeşidine kolayca sahip olabilirsiniz.{"\n"}{"\n"}Her yıl şubat ayının 14'ünde kutlanan Sevgililer Günü, herkes tarafından sevginin, aşkın en yoğun olduğu bir gün olan biliniyor. Hediye almak istediğiniz kişi için birçok seçenek bulunabilir. Ancak böyle bir özel günde almak istediğiniz hediyenin daha anlamlı ve daha özel olmasını isteyebilirsiniz. Anlamlı ve <B>özel hediye çeşitleri</B> gün geçtikçe artıyor. İnce düşünülmüş bu <B>romantik hediyeler</B> için sizlere sunulmuş olan birçok <B>sevgiliye hediye fikirleri</B> arasından aradığınız hediyeye kavuşabilirsiniz.
                    </Text>
                    <Text style={style.title}>
                        Erkek Sevgiliye Ne Hediye Alınır?
                    </Text>
                    <Text style={style.text}>
                        Kadınlar için alınacak hediye çeşidi çok fazladır. Ancak konu bir <B>erkeğe hediye</B> almaya geldiğinde oldukça zor bir duruma girilebiliyor. Ancak kadınlar için kıyafetten aksesuara kadar pek çok seçenek bulunsa da erkekler için de hediye çeşitleri de fazladır. Sevgililer Günü için erkeklere alınabilecek hediye çeşitleri sizlere sunulan pek çok kategori içerisinde beğenilerinize sunuluyor. Sizler de bir <B>erkek sevgiliye hediye</B> almanın zor olduğunu düşünüyorsanız aradığınız hediyeyi sayfalarımızda kolayca bulabilirsiniz.{"\n"}
                        Sevgililer Günü için <B>erkeklere hediye</B> olarak alınabilecek alternatifler arasında en çok tercih edilen kategori <C>elektronik</C> olarak öne çıkar. Erkek arkadaşınızın ya da eşinizin ihtiyacına göre bir <C>tablet</C>, <C>bilgisayar</C> veya <C>cep telefonu</C> alabilirsiniz. Oyun oynamaktan hoşlanıyorsa da bir <C>oyun konsolu</C> ya da <C>konsol oyunları</C> gibi ürünler de bulunmaktadır.{"\n"}
                        <B>Erkek için hediye seçenekleri</B> arasından alınabilecek en anlamlı hediyelerden bir diğeri de kişiye özel olarak hazırlanan hediyelerdir. Bu hediyeler ile erkek arkadaşınızın ya da eşinizin adının yer alacağı bir hediye daha anlamlı bir hale gelecektir. <C>Ayrıca kol düğmesi</C> ya da <C>saat</C> gibi aksesuar türleri uzun süre boyunca kullanılabilecek şık ve kaliteli hediyeler arasında yer alıyor.
                        Bu gibi seçeneklerin dışında hediye önerileri arasında bulunan <C>erkek parfüm</C> çeşitleri de sizler için bir alternatif olabilir. Bu parfüm seçeneği ile erkek arkadaşınızın her zaman kullanmış olduğu parfümü alarak ona kokusunu sevdiğinize dair bir belirti gösterebilirsiniz. Bu birbirinden farklı hediye seçenekleri ile siz de sevgilinize onu ne kadar sevdiğinizi ve değer verdiğinizi gösterebilirsiniz.
                    </Text>
                    <Text style={style.title}>
                        Kadın Sevgiliye Ne Hediye Alınabilir?
                    </Text>
                    <Text style={style.text}>
                        Sevgililer Günü’nde en az erkekler için hediye seçeneği kadar kadınlar için hediye seçeneği de bulunmaktadır. Ancak bu seçeneğin fazla olması bazı zamanlar daha da zorlayıcı olabilir. Bu nedenle sevgilinize hediye almadan önce iyice düşünmeniz gerekir. Kadınlara alınacak hediyelerin en başında aksesuarlar gelmektedir. Kadınlar için sizlere sunulan aksesuar hediye fikirlerinden ilki de <C>gümüş takılar</C> ya da <C>pırlanta</C> takılardır. Takı takmak çoğu kadın için oldukça önemlidir. Çünkü kombinlerinin tamamlayıcısı olarak gördükleri en değerli aksesuar takılardır. Takmış oldukları aksesuarla özellikle sevdikleri kişi tarafından hediye edildiyse kadınlar için daha farklı bir yere sahiptir.{"\n"}
                        Bir diğer hediye olarak alabileceğiniz aksesuar seçenekleri de <C>güneş gözlüğü</C> ve <C>çanta</C> olarak öne çıkar. Bu aksesuarlar kadınlar için önemlidir. Sizin de alacağınız bu hediyeler ile sevgiliniz daha mutlu olacaktır. Bu nedenle sevgilinize takı hediye ederek günü daha romantik ve anlamlı hale getirebilirsiniz. Bir başka hediye fikri de makyaj malzemesidir. Özellikle trendleri takip eden ve <C>makyaj</C> yapmaktan hoşlanan kadınlar için bu hediye oldukça mutlu edici olabilir.{"\n"}
                        <B>Kız arkadaşa hediye</B> olarak alınabilecek seçeneklerin en başında aksesuarlar gelmektedir. Ayakkabıları çok seven ve ayakkabı koleksiyonu bulunan kadınlar için de <C>ayakkabı</C> hediyesi oldukça heyecan verici olacaktır. Birbirinden farklı kadın ayakkabı modelleri arasından sevgiliniz için beğendiğiniz ayakkabı modeline kolaylıkla karar verebilirsiniz. Tercih edeceğiniz bu birçok hediye seçeneği arasından sevgilinize en yakışacak olan ürünü seçerek onu çok iyi bir şekilde tanıdığınızı belli etmek mümkündür. Bu sayede de Sevgililer Günü’nü daha romantik bir olacaktır.
                    </Text>
                    <Text style={style.title}>
                        Anneye Hediye - Anneler Günü Hediye Fikirleri
                    </Text>
                    <Text style={style.text}>
                        Mayıs ayını diğer aylardan daha anlamlı ve daha farklı kılan özelliği Anneler Günü’nün olmasıdır. Böyle bir günde her anne hatırlanmak ister. Bu yüzden sizlerin anneniz için alacağınız en ufak bir hediye dahi onlara mutlu etmeye yetecektir. <B>Annelere hediye</B> olarak alacağınız en ufak bir şey ile onu yalnızca bir gün değil her gün sevdiğinizi ve hatırladığınızı hissettirebilirsiniz. Bunun için de pek çok hediye seçeneği bulunmaktadır.
                        Anneler Günü için hediye olarak <C>kadın giyim</C>ine dair seçenekler düşünülebilir. Mevsimlerin değişkenlik gösterdiği bu aylarda annenize alacağınız bir yazlık ayakkabı ya da kışlık bir ayakkabı onu oldukça mutlu edecektir. Birbirinden şık ve farklı ayakkabı modelleri arasından annenizin tarzına ve zevkine uygun bir ayakkabı modeli tercih ederek onları sevindirebilirsiniz. Bakımına her an dikkat eden anneler için de <C>kozmetik ve kişisel bakım</C> ürünleri oldukça yardımcı bir seçenek olabilir. <B>Anneler için hediye</B> fikirlerinden en anlamlı olabilecek hediye ise takıdır. Anneler günü <B>hediye fikirleri</B> arasından düşünerek alacağınız bir takı, onu çok daha fazla mutlu edeceği gibi baktıkça sizi hatırlamasını da sağlayabileceksiniz.
                    </Text>
                    <Text style={style.title}>
                        Babaya Hediye - Babalar Günü Hediye Fikirleri
                    </Text>
                    <Text style={style.text}>
                        Özel günler arasındaki önemli bir başka gün de Babalar Günü’dür. Her şeyin en iyisini hak eden babalara siz de bu özel günde onu her an sevdiğinizi hissettirebilirsiniz. Babanıza hediye almadan önce babanızın ilgi alanlarını ve ihtiyaçlarını göz önünde bulundurmanız gerekir. Bu sayede hediye almanız daha kolay hale gelecektir. Her özel günde olduğu gibi böyle günde de alınacak hediyelerin olmazsa olmaz seçeneği kıyafet ya da ayakkabı ürünleridir.{"\n"}
                        <B>Babalara hediye</B> olarak sunulan seçenekler arasından alacağınız şık bir <C>gömlek</C>, <C>tişört</C> ya da <C>pantolon</C> gibi seçenekler ile babanızın kombinini tamamlayabilirsiniz. Babalar Günü, haziran ayının sıcak günlerinde olduğu için tercih edeceğiniz hediyenin bu mevsime uygun olmasına da dikkat etmeniz gerekir. Bunun için bu mevsime yakışacak bir <C>ceket</C> ya da şort gibi seçenekler de yer alıyor. Ayrıca bu hediye seçeneğinden farklı olarak kombinin tamamlanması için <C>bir ayakkabı</C> da alabilirsiniz. Babalar Günü için hediye olarak alabileceğiniz seçenekler arasında olan <C>kemer</C> seçenekleriyle de şıklığından ödün vermeyen babalarınız için iyi bir tercih yapabilirsiniz.{"\n"}
                        Saat koleksiyonu bulunan ya da saat takmaktan hoşlanan babalar için de şık bir saat oldukça anlamlı ve mutlu edici bir hediye olacaktır. Bu hediyelerin yanı sıra babalarınızın zararlı güneş ışığına maruz kalmaması için bir tarzına ve zevkine uygun bir güneş gözlüğü alabilirsiniz. Bakımına önem veren babalar için de <B>erkek bakım ürünleri</B> arasından babanızın ihtiyaç duyduğu bakım ürününü alabilirsiniz. Aynı zamanda hemen hemen her babanın yapmaktan zevk aldığı bir aktivite haline gelen mangal içinde alacağınız <C>barbekü ve mangal</C> ürünleri daha mutlu edecek mangal yapmaya daha çok teşvik edecektir. Babanız yemek yapmaktan keyif alıyorsa da yine mutfak için gerekli olan elektronik aletler onu mutlu ve motive edebilir.
                        Tüm bu hediye fikirlerinin yanı sıra babanızın ne yapmaktan hoşlandığını, zevkini ve tarzını en iyi bilen sizlersiniz. Bunun için hediye alırken bu noktalara dikkat etmeyi unutmamanız gerekir. Birçok hediye çeşidine kolay bir şekilde ulaşabileceğiniz ürünler sayfalarımızda sizleri bekliyor. Birbirinden farklı hediye seçeneği ile sizler de babalarınızı kolayca mutlu edebilirsiniz.
                    </Text>
                    <Text style={style.title}>
                        Yılbaşı Hediye Fikirleri
                    </Text>
                    <Text style={style.text}>
                        Yeni bir yılın gelmesi ile herkesi bir heyecan sarmaktadır. Bu heyecanın sebeplerinden birisi de sevdiğiniz ve değer verdiğiniz kişilere hediye alma fikridir. Sevdiğiniz insanlara bu zamanda hediye alarak yeni yıla daha anlamlı bir şekilde girebilirsiniz. Yılbaşı için hazırlanan pek çok <B>yılbaşı hediye fikirleri</B> bulunmaktadır. Aileye, sevgiliye, arkadaşlara, eşinize ve çocuklara hediye alarak yılbaşı gecesinin mutluluğunu onlara da yansıtabilirsiniz. Yılbaşı için sizlere sunulan hediye seçenekleri, hediye alınacak kişiye göre çeşitlilik göstermektedir. Anne ya da babanıza hediye alacaksanız onlara duyduğunuz sevgiyi yansıtacak bir hediye daha iyi bir seçenek olacaktır. Evin ihtiyacı olan ya da anne ve babanızın ihtiyacı olan bir hediye seçeneği olduğu gibi onların ilgi alanlarına uygun bir hediye de onları fazlası ile mutlu edecektir.
                        Arkadaşlarınız için de alabileceğiniz pek çok hediye seçeneği bulunmaktadır. Kar küresi, film gibi hediyelerin yanı sıra en yakın arkadaşa hediye alacaksanız ise daha sempatik ve sembolik değerler taşıyan şapka, eşarp ya da ilgi alanına uygun olarak video oyunu gibi seçenekler de <B>popüler hediye çeşitleri</B> arasında yerini alıyor.
                        Yılbaşı gecesini heyecanla bekleyen kişiler arasında en hevesli olanlar da çocuklardır. <B>Çocuk hediye fikirleri</B> arasında da <C>kıyafet</C>, <C>çocuk oyuncakları</C> gibi hediye seçenekleri bulunuyor. Çocuklar için seçilecek hediye, çocuğunu yaşına göre de farklılık gösterebiliyor. Hediye seçenekleri arasında bulunan <C>pelüş oyuncaklar</C> gibi alternatifler daha küçük yaştaki çocuklara hitap ederken <C>çocuk kitapları</C>, bilgisayar oyunu gibi alternatifler de biraz daha büyük yaştaki çocuklara hitap etmektedir.
                        Yeni bir yıla girilen bu özel gece de sevdiklerinizle bir arada vakit geçirip, birbirinizi düşünerek aldığınız hediyeler ile değer verdiğiniz kişileri mutlu edebilirsiniz. Sizlere sunulan bu hediye seçenekleri ile de istediğiniz tarzda hediyeye kolayca sahip olmanız mümkündür.
                    </Text>
                    <Text style={style.title}>
                        Evlilik Yıldönümü Hediye Fikirleri
                    </Text>
                    <Text style={style.text}>
                        Evlilik yıldönümü, evli çiftler için en özel günlerden birisidir. Bu oldukça özel günü eşinize alacağınız bir hediye ile daha anlamlı bir hale getirebilirsiniz. Bu günde eşe hediye almak kişiler evli çiftler arasında değerli bir yere sahiptir. Evliliğinizin kaçıncı yılını kutlarsanız kutlayın bu gün her zaman en özel gün olarak sizinle kalacaktır. Evlilik yıldönümünüz geldiği zaman çoğu kişi ne hediye alacağını bilemez. Bu gibi kararsızlığa kapılmamak için eşinizin ilgi alanına ya da beğeni ile baktığı bir şeye dikkat etmeniz gerekir. Kıyafet, aksesuar gibi seçenekler bu zamanda en çok tercih edilen hediye seçenekleri arasında yer almaktadır.{"\n"}
                        Eşinizin çok beğendiği ama almadığı bir kıyafeti siz böyle özel bir günde ona hediye olarak alabilirsiniz ya da eşinizde çok yakışacağını düşünerek alacağınız bir aksesuar da onu çok mutlu edecektir. Bu gibi seçeneklerin dışında kişiselleştirilmiş hediye seçenekleri de bulunuyor. Birlikte geçirdiğiniz bir yılı daha geride bıraktığınız bu özel günde düşünülerek alınan hediye eşinizin daha mutlu olmasını sağlayacaktır. Birbirinden farklı hediye seçenekleri arasından eşinizi düşünerek alacağınız bir evlilik yıldönümü hediyesi ile onun yıllar boyunca sizi hatırlayarak kullanmasını sağlayabilirsiniz.
                    </Text>
                    <Text style={style.title}>
                        Doğum Günü Hediye Fikileri
                    </Text>
                    <Text style={style.text}>
                        Bir yıl içerisinde sevdiğiniz insanlara pek çok <B>özel gün için hediye</B> alabilirsiniz. Ancak bu özel günler arasından en önemlisi doğum günleridir. Anneniz, babanız, kardeşiniz, sevgiliniz, arkadaşınız gibi sizin için önemli olan kişilerin doğduğu gün de önemli bir yere sahip olmaktadır. Böyle özel bir günde sevdiğiniz kişiye hediye almak da önemlidir. Böyle özel günlerde hediye seçmek oldukça zor bir iştir. Doğum günü olan kişi için hediye almadan önce o kişinin zevkleri önemlidir. Ayrıca bu kişinin yakınlık derecesi de önemli bir detaydır.{"\n"}
                        Doğum günleri için en çok tercih edilen hediye seçeneklerinden birisi kıyafet ya da <C>altın takılar</C>dır. Bu hediye seçeneği hemen hemen herkesin sevdiği ve önem verdiği bir seçenektir. Bunun dışında ayrıca hediye alacağınız kişinin hobisine göre bir hediye de düşünebilirsiniz ya da kişinin ihtiyacı olan bir hediye o kişiyi yine fazlası ile mutlu edecektir. Böyle özel günlerde önemli olan almış olduğunuz hediyenin maddî değeri değildir. Onu düşünerek almış olduğunuz bir hediye daha anlamlı ve özel olacaktır. Bu nedenle sizler için sunulan birçok doğum günü hediye fikirleri arasından sevdiğiniz kişiye uygun olan hediyeyi tercih etmek daha uygun olacaktır.
                    </Text>
                    <Text style={style.title}>
                        Öğretmene Hediye - 24 Kasım Öğretmenler Günü Hediye Fikirleri
                    </Text>
                    <Text style={style.text}>
                        En kutsal ve anlamlı mesleklerden birisi öğretmenliktir. Bir kişinin zihinsel olarak gelişmesinde etkili olan kişiler arasında yer alan öğretmenler herkes için önemli bir yerdedir. Yalnız bir gün değil her gün değeri bilinmesi ve hatırlanması gereken öğretmenler için olan böyle bir gün, öğretmenlerin de çok sevindikleri ve mutlu oldukları bir gündür. Bir öğretmen için en değerli ve özel hediye, öğrencileri için vermiş oldukları emeklerin boşa gitmediğini görmektir. Ancak yine de böyle bir gün de öğretmeninize onu düşünerek aldığınız bir hediye onu daha mutlu edecektir. Bir öğretmene hediye olarak alacağınız her şey öğretmeni fazlası ile mutlu edecektir. Ancak bazı <B>Öğretmenler Günü hediye</B> fikirleri sıklıkla tercih edilir. Alacağınız hediye seçenekleri arasında <C>cüzdan</C>, <C>parfüm</C>, ya da <C>kalem</C> gibi öğretmeninizi sevindirecek hediye seçenekleri bulunmaktadır. Bu seçenekler arasından öğretmeniniz için beğendiğiniz modele karar verebilirsiniz.
                    </Text>
                    <Text style={style.title}>
                        Doktor Hediye - 14 Mart Tıp Bayramı Hediye Fikirleri
                    </Text>
                    <Text style={style.text}>
                        En kutsal mesleklerden bir başkası da doktorluktur. İnsanların hayatlarını kurtaran, onların sağlık sorunlarını gidermekte yardımcı olan doktorlar için kutlanan 14 Mart gününde teşekkür amacı ile alınacak bir hediye onların kendilerini iyi hissetmelerinde yardımcı olacaktır. Bir <B>doktora hediye</B> almak bazı kişiler için zor bir iş olarak görülebilir. Böyle bir günde alınan en popüler hediye fikri bir kalemdir. Hediye alacağınız kişinin adının bulunduğu bir kalem hediyesi her kullandığında sizi hatırlamasını sağlayacaktır. Aynı zamanda onlar için güzel bir <C>kupa</C> da alabilirsiniz. Oldukça zor çalışma saatlerine ve şartlarına sahip olan doktorlar, bu kupalar ile içtikleri çay ya da kahve sayesinde kendilerini iyi hissedeceklerdir.
                    </Text>
                    <Text style={style.title}>
                        Asker Hediye Fikirleri
                    </Text>
                    <Text style={style.text}>
                        Asker olan sevdikleriniz ya da yakınlarınız için alacağınız bir hediye onların kendilerini iyi hissetmelerini ve morallerinin yükselmesini sağlayacaktır. Sevdiklerinden ayrı kalmak zorunda kalan <B>askerler için alınacak hediye</B>, onların yanında olduğunuzu hissettirmeniz mümkündür. Asker olan kişiler için alınacak hediyeler arasında <C>anahtarlık</C>, kalem, <C>termos</C> gibi sizleri hatırlatacak hediye seçeneklerine başvurabilirsiniz. Ayrıca seçeceğiniz hediyeleri güzel bir <B>hediye paketi</B> ya da <B>hediye kutusu</B> ile vermek hem karşınızdakini hem de sizi mutlu edecektir. Bu hediyeler, askerlerle özdeşleştirildiğinde daha anlamlı bir hale gelecektir.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}