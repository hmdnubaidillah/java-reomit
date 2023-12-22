import { quote, quoteImg, kesenian, kuliner, tradisi, jaranKepang, kasada, tariRemo } from "@/public/images/beranda";
import { profile1, profile2, profile3 } from "@/public/images/artikel";
import {
  kedukBeji,
  pecelTumpangKediri,
  karapanSapi,
  ludruk,
  reog,
  lontongBalap,
  rawon,
  rujak,
  soto,
  keboan,
  larungSembonyo,
} from "@/public/images/budaya";

import {
  bujangGanong,
  gulatOkol,
  jaranBodhag,
  jaranJenggo,
  jaranPegon,
  tariAmbarang,
  tariBeskalan,
  tariGandrung,
  tariBruto,
  tariKuda,
  tariKuntulan,
  tariMuang,
  ayamLodho,
  bakso,
  bebek,
  brem,
  gethuk,
  krengseng,
  sate,
  tahuCampur,
  tahuTek,
  manten,
  nyadran,
  undukan,
  yadyna,
} from "@/public/images/galeri";

import { carousel1, nasiGoreng } from "@/public/images";

import {
  ArticleCardTypes,
  ArticleDetail,
  CarouselHome,
  CategoryBudayaTypes,
  EventCardDetailTypes,
  EventCardTypes,
  Stats,
} from "@/types";

export const navLinks = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Artikel",
    link: "/artikel",
  },
  {
    name: "Galeri",
    link: "/galeri",
  },
  {
    name: "Budaya",
    link: "/budaya",
  },
  {
    name: "Kegiatan",
    link: "/kegiatan",
  },
];

export const carouselHome: CarouselHome[] = [
  {
    name: "bg-carousel1",
    heading: "Ini Heading Tolong Jangan Hujat Saya Karena Tulisan “Saksikan” yang Sebelumnya",
    paragraph:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    name: "bg-carousel2",
    heading: "Ini Heading Tolong Jangan Hujat Saya Karena Tulisan “Saksikan” yang Sebelumnya",
    paragraph:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
];

export const stats: Stats[] = [
  {
    heading: "80",
    sub: "Situs Budaya",
  },
  {
    heading: "80",
    sub: "Situs Budaya",
  },
  {
    heading: "80",
    sub: "Situs Budaya",
  },
];

export const articleCards: ArticleCardTypes[] = [
  {
    imgAuthor: profile1,
    author: "John Doe",
    date: "• April 2023",
    category: "Kesenian",
    title: "Jaran Kepang, Pesona Budaya yang Abadi",
    contentPreview:
      "Jaran kepang, sebuah tradisi yang tak pernah pudar, tetap memikat hati masyarakat hingga saat ini. Meskipun zaman terus berubah, keberadaan jaran kepang tetap memegang peranan penting dalam kehidupan budaya di Jawa dan beberapa wilayah lain di Indonesia. Kesenian ini masih diminati karena tidak hanya ",
    img: jaranKepang,
    imgAlt: "jaran-kepang",
  },
  {
    imgAuthor: profile2,
    author: "Lavina",
    date: "• Agustus 2023",
    category: "Tradisi",
    title: "Jejak Kehormatan dan Spiritualitas Upacara Kasadha",
    contentPreview:
      "Upacara Kasada, atau juga dikenal sebagai Tenggerese Kasada, adalah perayaan sakral yang mendalam di kalangan suku Tengger, Jawa Timur. Upacara ini merupakan bentuk penghormatan kepada Sang Hyang Widhi, Tuhan menurut kepercayaan suku Tengger, serta merupakan perayaan tradisional yang kaya akan makna spiritual.",
    img: kasada,
    imgAlt: "kasada",
  },
  {
    imgAuthor: profile3,
    author: "Robert Wilson",
    date: "• Juli 2023",
    category: "Kesenian",
    title: "Pesona Tari Remo, Keanggunan Gerak Jawa yang Menginspirasi Dunia",
    contentPreview:
      "Tari Remo, sebuah warisan budaya Jawa yang kaya akan nilai-nilai tradisional, telah berhasil menarik perhatian dunia internasional atas keindahan geraknya yang elegan dan keunikan artistiknya. Dalam tari ini, gerakan yang lembut, tetapi kuat, memikat para penonton",
    img: tariRemo,
    imgAlt: "tari-remo",
  },
];

export const articleDetail: ArticleDetail[] = [
  {
    imgAuthor: profile1,
    author: "John Doe",
    date: "• April 2023",
    category: "Kesenian",
    title: "Jaran Kepang, Pesona Budaya yang Abadi",
    content:
      "Jaran kepang, sebuah tradisi yang tak pernah pudar, tetap memikat hati masyarakat hingga saat ini. Meskipun zaman terus berubah, keberadaan jaran kepang tetap memegang peranan penting dalam kehidupan budaya di Jawa dan beberapa wilayah lain di Indonesia. Kesenian ini masih diminati karena tidak hanya sekadar tarian, melainkan simbol kekuatan, spiritualitas, dan kearifan lokal. Di setiap pertunjukan, jaran kepang tidak hanya menampilkan gerakan-gerakan yang memesona, tetapi juga menggambarkan cerita dan makna yang mendalam. Keunikan dari jaran kepang terletak pada prosesi ritualnya yang sarat dengan unsur mistis. Sebelum pertunjukan dimulai, sang pawang atau pemimpin kelompok jaran kepang melakukan serangkaian ritual untuk menghidupkan kuda-kudaan dari bambu tersebut. Ini tidak hanya menjadi hiburan bagi penonton, tetapi juga sebagai sarana untuk menjaga dan meneruskan tradisi spiritual yang kaya. Para penari jaran kepang biasanya bersiap dengan kostum warna-warni dan wajah dilukis sebagai bagian dari ritualisasi pertunjukan. Mereka kemudian menari dengan gerakan yang lincah dan penuh kekuatan, menggambarkan kejayaan kuda serta menggugah semangat dalam diri mereka. Daya tarik jaran kepang tak hanya bagi masyarakat lokal, tapi juga bagi wisatawan yang tertarik dengan keindahan budaya Indonesia. Ini telah membuatnya tetap bertahan dan terus diminati sebagai bagian dari warisan budaya yang harus dilestarikan. Jaran kepang adalah contoh cemerlang bagaimana tradisi yang kaya akan nilai dan simbolisme masih memiliki tempat istimewa di hati masyarakat, bahkan di tengah arus modernisasi yang terus bergulir.",
    img: jaranKepang,
    imgAlt: "jaran-kepang",
  },
  {
    imgAuthor: profile2,
    author: "Lavina",
    date: "• Agustus 2023",
    category: "Tradisi",
    title: "Jejak Kehormatan dan Spiritualitas Upacara Kasadha",
    content:
      "Upacara Kasada, atau juga dikenal sebagai Tenggerese Kasada, adalah perayaan sakral yang mendalam di kalangan suku Tengger, Jawa Timur. Upacara ini merupakan bentuk penghormatan kepada Sang Hyang Widhi, Tuhan menurut kepercayaan suku Tengger, serta merupakan perayaan tradisional yang kaya akan makna spiritual. Sejarah Kasada berkisar pada legenda Roro Anteng dan Joko Seger, sepasang suami istri yang memimpin suku Tengger dalam menghadapi kesulitan di masa lalu. Mereka dianggap sebagai leluhur suku Tengger. Upacara Kasada menjadi momen di mana suku Tengger memberikan penghormatan dan persembahan kepada leluhur mereka, memohon keselamatan, rejeki, dan kesuburan. Perayaan ini memuncak pada saat ritual dimulai di Gunung Bromo, gunung berapi yang disucikan bagi suku Tengger. Pada malam sebelumnya, para penduduk setempat dan para peziarah mempersiapkan sesajen seperti hasil pertanian, buah-buahan, hingga hewan kurban untuk dipersembahkan di puncak gunung. Pada pagi hari, suasana sakral semakin terasa saat prosesi dimulai. Masyarakat berkumpul di kaki Gunung Bromo, sementara para pemimpin adat serta tokoh agama memimpin doa-doa dan upacara. Di tengah ritual, sesaji-sesaji dinaikkan ke puncak gunung sebagai persembahan kepada Tuhan. Bagi masyarakat Tengger, Kasada bukan sekadar tradisi, tetapi juga momen spiritual yang mendalam. Upacara ini melambangkan kekompakan, kebersamaan, dan keyakinan yang kuat akan kekuatan spiritual yang melingkupi kehidupan mereka. Meskipun telah mengalami perubahan dari waktu ke waktu, Kasada tetap menjadi bagian penting dalam identitas dan budaya suku Tengger. Perayaan ini menjadi pengingat akan warisan leluhur serta penghormatan kepada alam dan Tuhan, yang masih dijunjung tinggi hingga saat ini.",
    img: kasada,
    imgAlt: "kasada",
  },
  {
    imgAuthor: profile3,
    author: "Robert Wilson",
    date: "• Juli 2023",
    category: "Kesenian",
    title: "Pesona Tari Remo, Keanggunan Gerak Jawa yang Menginspirasi Dunia",
    content:
      "Tari Remo, sebuah warisan budaya Jawa yang kaya akan nilai-nilai tradisional, telah berhasil menarik perhatian dunia internasional atas keindahan geraknya yang elegan dan keunikan artistiknya. Dalam tari ini, gerakan yang lembut, tetapi kuat, memikat para penonton dari berbagai belahan dunia. Langkah-langkah yang terkoordinasi dengan indah, harmoni gerakan, dan keanggunan kostum memberikan gambaran akan kekayaan budaya Jawa. Daya tarik utama Tari Remo tidak hanya terletak pada keindahan geraknya, tetapi juga pada cerita yang diungkapkan melalui setiap langkahnya. Cerita-cerita legendaris atau kisah-kisah sejarah seringkali menjadi dasar dari pertunjukan tari ini, memperkaya pengalaman penonton dengan nuansa sejarah dan mitologi Jawa. Melalui berbagai festival seni internasional, Tari Remo telah menjadi duta budaya Indonesia, memperkenalkan keindahan seni tari tradisional Jawa ke berbagai negara. Penampilan yang megah dan pesonanya yang memukau telah mengukuhkan posisinya sebagai salah satu keajaiban budaya yang harus dilihat di panggung internasional. Bukan hanya sekadar tarian, Tari Remo juga menjadi simbol kesatuan, keharmonisan, dan keindahan dalam kebudayaan Indonesia.Keberadaannya yang tetap lestari dan mampu menginspirasi generasi baru seniman adalah bukti kuat akan keagungan dan keabadian seni tari tradisional Indonesia.",
    img: tariRemo,
    imgAlt: "tari-remo",
  },
];

export const categoryHome = [
  {
    img: kesenian,
    heading: "Ragam Kesenian",
  },
  {
    img: tradisi,
    heading: "Berbagai Tradisi",
  },
  {
    img: kuliner,
    heading: "Kuliner Otentik",
  },
];

export const eventCard: EventCardTypes[] = [
  {
    title: "Festival Budaya Nusantara (FBN) VI Tahun 2023",
    date: "10 Des 2023",
    time: "09.00 WIB",
    location: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru",
    imgPath: carousel1,
  },
  {
    title: "Festival Budaya Nusantara (FBN) VI Tahun 2023",
    date: "10 Des 2023",
    time: "09.00 WIB",
    location: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru",
    imgPath: carousel1,
  },
  {
    title: "Festival Budaya Nusantara (FBN) VI Tahun 2023",
    date: "10 Des 2023",
    time: "09.00 WIB",
    location: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru",
    imgPath: carousel1,
  },
  {
    title: "Festival Budaya Nusantara (FBN) VI Tahun 2023",
    date: "10 Des 2023",
    time: "09.00 WIB",
    location: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru",
    imgPath: carousel1,
  },
  {
    title: "Festival Budaya Nusantara (FBN) VI Tahun 2023",
    date: "10 Des 2023",
    time: "09.00 WIB",
    location: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru",
    imgPath: carousel1,
  },
  {
    title: "Festival Budaya Nusantara (FBN) VI Tahun 2023",
    date: "10 Des 2023",
    time: "09.00 WIB",
    location: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru",
    imgPath: carousel1,
  },
];

export const eventCardDetail: EventCardDetailTypes[] = [
  {
    title: "Festival Budaya Nusantara (FBN) VI Tahun 2023",
    date: "10 Des 2023",
    time: "09.00 - 13.30",
    location: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru",
    fullAdress: "Gedung Graha Cakrawala, Universitas Negeri Malang, Sumbersari, Kec. Lowokwaru Jawa Timur",
    imgPath: "/images/carousel3.jpeg",

    decsriptionPreview:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",

    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    eventShedule: [
      {
        name: "Registrasi & Open Gate",
        startTime: "09.00",
        endTime: "10.00",
      },
      {
        name: "Opening Ceremony",
        startTime: "10.00",
        endTime: "10.05",
      },
      {
        name: "Sambutan - Sambutan",
        startTime: "10.05",
        endTime: "10.20",
      },
      {
        name: "Lomba Seni Lukis",
        startTime: "10.20",
        endTime: "11.20",
      },
      {
        name: "Tari Remo & Yosakai",
        startTime: "10.20",
        endTime: "11.20",
      },
      {
        name: "ISHOMA",
        startTime: "11.20",
        endTime: "13.00 ",
      },
      {
        name: "Penutupan",
        startTime: "13.00",
        endTime: "13.30",
      },
    ],
    sponsor: ["Amazon", "Apple", "Google", "Meta"],
    rincianTambahan: [{}],
    isGratis: true,
  },
];

export const schedule: Array<string> = ["Susunan Acara", "Sponsor", "Rincian Tambahan"];

export const categoryBudaya: CategoryBudayaTypes = {
  kuliner: [
    {
      img: soto,
      altImg: "Soto",
      title: "Harmoni Rasa Indonesia dalam Mangkok Soto",
      content:
        "Soto, sejatinya lebih dari sekadar semangkuk sup. Ia adalah simbol dari harmoni rasa Indonesia yang menggabungkan keanekaragaman rempah dan bahan lokal menjadi sebuah cita rasa yang menggoda. Setiap daerah di Indonesia memiliki varian soto yang unik, dengan perbedaan bumbu dan cara penyajiannya. Namun, satu hal yang tetap sama adalah esensi dari rasa yang memukau dan menggoda lidah siapa pun yang mencicipinya. Soto memamerkan perpaduan yang indah dari rempah-rempah tradisional seperti serai, lengkuas, daun jeruk, dan bawang merah, yang menyatu dalam kuah yang gurih dan kental. Tambahan bahan seperti daging ayam, daging sapi, atau seafood memberikan dimensi rasa yang berbeda-beda. Disajikan dengan nasi, mie, atau ketupat, soto adalah pencerminan dari keragaman Indonesia yang menyatu dalam satu mangkuk. Namun, soto tidak hanya menyajikan kenikmatan rasa. Ia juga menjadi cerminan dari kebersamaan, kehangatan, dan keragaman budaya Indonesia. Setiap suapan soto membawa kita pada perjalanan kuliner yang menghubungkan kita dengan warisan nenek moyang, serta mengajak kita untuk merayakan perbedaan dalam satu keharmonisan rasa. Mangkuk soto bukan hanya memuaskan selera, tetapi juga merangkul jiwa kita pada kekayaan budaya Indonesia yang tak ternilai. Ia adalah puncak dari keahlian kuliner yang melibatkan banyak elemen dan cerita dari setiap sudut negeri ini. Dengan soto, kita tidak hanya mencicipi rasa, tetapi juga merasakan sentuhan kebersamaan dan keagungan dari keanekaragaman Indonesia.",
    },
    {
      img: rawon,
      altImg: "Rawon",
      title: "Hitamnya Rawon, Kelezatan Tradisi Jawa Timur",
      content:
        "Hitam pekat yang menyelimuti sepiring rawon tidak hanya sekadar warna, tetapi juga menyimpan kelezatan yang melampaui sekadar cita rasa. Rawon, sejenis sup daging yang khas dari Jawa Timur, merupakan kelezatan tradisional yang telah menghiasi meja makan generasi demi generasi. Di balik keindahan warna hitam pekat yang menjadi ciri khasnya, rawon mengandung rahasia perpaduan rempah yang kaya, khususnya bumbu kluwek yang memberikan sentuhan unik pada masakan ini. Rempah-rempah seperti lengkuas, serai, dan kencur, yang meresap dalam kuahnya, menciptakan harmoni rasa yang khas dan menggoda lidah siapa pun yang menyantapnya. Namun, rawon bukan hanya sekadar sajian lezat. Ia juga menyimpan sejarah panjang di balik setiap sendoknya. Masakan ini sering menjadi bagian dari perayaan, upacara, dan momen-momen penting dalam budaya Jawa Timur. Dari keseharian hingga acara istimewa, rawon senantiasa menjadi simbol kehangatan keluarga dan persatuan. Kelezatan rawon tidak hanya terletak pada cita rasa, tetapi juga pada prosesnya yang membutuhkan kesabaran dan ketelatenan. Memasak rawon memerlukan waktu yang cukup lama untuk mendapatkan kepekatan dan keharuman bumbu yang pas. Proses ini menjadi metafora dari kesabaran dan dedikasi yang diperlukan dalam memelihara tradisi serta kearifan lokal. Rawon bukanlah sekadar hidangan, melainkan warisan budaya yang menggugah selera dan jiwa. Ia mengajarkan kita untuk menghargai sejarah, kearifan nenek moyang, dan keindahan dari keberagaman kuliner Indonesia. Ketika kita menikmati setiap suapannya, kita juga turut merasakan nikmatnya kebersamaan dan kekayaan warisan budaya yang mempersatukan kita sebagai satu bangsa.",
    },
    {
      img: lontongBalap,
      altImg: "Lontong Balap",
      title: "Petualangan Rasa Lontong Balap Surabaya",
      content:
        "Lontong Balap Surabaya adalah petualangan rasa yang menggoda lidah dan memanjakan pencinta kuliner. Sajian yang tampak sederhana ini sebenarnya menyimpan kelezatan yang tiada tara. Dibalut dalam kehangatan kuah kacang yang kental, lontong balap mempersembahkan perpaduan cita rasa yang memikat. Dibalut dengan irisan lontong yang lembut dan tauge yang segar, lontong balap tak lengkap tanpa tambahan bawang goreng, emping, serta irisan seledri yang memberikan sentuhan segar pada cita rasanya. Namun, mungkin yang paling memikat dari semua adalah kuah kacangnya yang kaya rempah, memberikan paduan rasa gurih, manis, dan sedikit pedas yang menggoyang lidah. Selain dari segi rasa yang memikat, lontong balap juga memiliki cerita dalam setiap suapannya. Sebagai salah satu kuliner legendaris Surabaya, hidangan ini menjadi bagian tak terpisahkan dari keseharian dan kehidupan sosial masyarakat. Di samping kelezatannya, lontong balap juga menyimpan nilai-nilai tradisional serta warisan budaya yang menjadikannya lebih dari sekadar sajian kuliner. Petualangan rasa lontong balap bukan hanya tentang mencicipi cita rasa yang lezat, tetapi juga mengalami perpaduan budaya, sejarah, dan kehangatan dari kisah yang mengiringi sajian ini. Setiap suap membawa kita pada perjalanan keaslian cita rasa tradisional yang menggugah kenangan, dan juga merangkul kekayaan budaya yang tak ternilai dari kota Surabaya.",
    },
    {
      img: rujak,
      altImg: "Rujak",
      title: "Rujak Segar dalam Goyangan Rasa yang Mencengangkan",
      content:
        "Rujak adalah perpaduan yang menakjubkan dari beragam buah-buahan segar yang dipadukan dengan bumbu yang mencengangkan. Dibalik setiap gigitannya, rujak menawarkan goyangan rasa yang memukau, menggabungkan cita rasa manis, asam, pedas, dan gurih dalam satu sajian. Di setiap daerah, rujak memiliki varian yang unik, dengan berbagai bahan tambahan dan cara penyajiannya. Namun, esensi dari rujak adalah paduan bumbu yang khas, seperti campuran cabe rawit, gula merah, terasi, dan air asam jawa yang memberikan sentuhan eksotis dan segar pada buah-buahan. Saat memasukkan potongan-potongan buah segar ke dalam saus rujak yang meresap dalam setiap celahnya, setiap gigitan rujak adalah perpaduan eksplosif rasa yang menyegarkan. Rasa manis dari buah-buahan segar bertemu dengan sentuhan asam dan pedas bumbu rujak, menciptakan sensasi yang menggoyang lidah dan memanjakan indera pengecap. Tidak hanya sekadar kuliner, rujak juga menyimpan cerita dari keberagaman budaya Indonesia. Sajian yang sering hadir di warung-warung pinggir jalan hingga acara keluarga ini, juga mencerminkan keberagaman dan kekayaan bahan-bahan lokal yang dimiliki negeri ini. Rujak adalah lebih dari sekadar hidangan, ia adalah kombinasi unik dari rasa, aroma, dan keanekaragaman yang merayakan kekayaan budaya Indonesia. Dalam goyangan rasa yang mencengangkan, rujak mengajak kita untuk merasakan kelezatan alami dan pesona dari bumi Nusantara.",
    },
  ],

  kesenian: [
    {
      img: jaranKepang,
      altImg: "Jaran Kepang",
      title: "Pesona Jaran Kepang dalam Seni Rakyat",
      content:
        "Pesona Jaran Kepang merupakan sebuah fenomena menakjubkan dalam seni rakyat Indonesia yang kaya akan warisan budaya. Terlahir dari akar tradisi yang dalam, seni ini menggambarkan keindahan serta keberagaman kreativitas masyarakatnya. Dalam kisahnya, Jaran Kepang menjadi cerminan dari kekayaan spiritual, kehidupan sehari-hari, dan harmoni antara manusia dengan alam. Seni Jaran Kepang tidak hanya sekadar pertunjukan tari atau pementasan kesenian, tetapi juga menjadi bagian penting dalam ritual atau upacara adat. Dipercaya memiliki makna sakral, gerakan yang dilakukan oleh penari atau pemain Jaran Kepang dianggap memiliki daya magis yang mampu menyatukan dunia nyata dan gaib. Melalui goyangan, langkah, dan ritme yang khas, mereka membawa pesan-pesan spiritual serta kearifan lokal yang tersembunyi di balik gerakannya. Pesona Jaran Kepang juga tercermin dalam keberagaman unsur-unsur seninya. Mulai dari kostum yang berwarna-warni, tata rias wajah yang khas, hingga alunan musik yang memukau, setiap elemen dalam pertunjukan ini menjadi cermin dari kekayaan budaya setempat. Perpaduan antara gerak tari yang dinamis, permainan musik yang menghentak, dan keselarasan antara para pemainnya menjadikan Jaran Kepang sebagai suatu keajaiban yang menawan. Tak hanya sebagai hiburan semata, seni Jaran Kepang juga memiliki peran sosial yang penting dalam masyarakat. Pertunjukan ini memperkuat ikatan antaranggota komunitas, menjaga kebersamaan, serta mewariskan nilai-nilai tradisional kepada generasi muda. Di samping itu, kehadiran Jaran Kepang juga menjadi wahana untuk memperkenalkan kekayaan budaya Indonesia kepada dunia, menjadikannya sebagai bagian tak terpisahkan dari identitas bangsa. Dengan segala keunikan dan pesonanya, seni rakyat Jaran Kepang tetap menggelorakan semangat keberagaman dan keindahan budaya Indonesia. Ia bukan hanya sekadar pertunjukan, melainkan sebuah cerminan dari kearifan lokal, spiritualitas yang mendalam, serta keindahan yang tak terpadai. Pesona Jaran Kepang mengundang kita semua untuk merenung, mengagumi, dan memeluk kekayaan budaya yang ada di sekitar kita.",
    },
    {
      img: karapanSapi,
      altImg: "Karapan Sapi",
      title: "Exploring the Tradition of Karapan Sapi",
      content:
        "Karapan Sapi, sebuah tradisi yang kental dengan kearifan lokal, merupakan salah satu perayaan yang tak terlupakan di Jawa Timur. Tradisi ini tidak sekadar ajang balapan, melainkan juga simbol kebersamaan, kegembiraan, dan kebanggaan masyarakat Madura. Sejak berabad-abad yang lalu, Karapan Sapi menjadi bagian integral dalam budaya Madura. Festival ini diwarnai dengan semangat persaingan yang sehat antara sapi-sapi yang dipersiapkan secara khusus untuk lomba. Tidak hanya memperlihatkan kecepatan, tetapi juga keindahan dan kekuatan hewan-hewan tersebut. Sebelum balapan dimulai, sapi-sapi yang akan berlomba dipersiapkan secara khusus. Diberi nutrisi terbaik, dilatih, dan bahkan dihiasi dengan dekorasi khusus sebagai tanda kehormatan bagi pemilik sapi. Karapan Sapi juga menjadi momen penting di mana petani dan pemilik sapi berkumpul, berbagi cerita, serta mempererat tali persaudaraan dalam komunitas mereka. Tidak hanya sekadar pertunjukan olahraga, Karapan Sapi juga mencerminkan kegigihan dan keuletan para pesertanya. Balapan ini bukan hanya tentang sapi yang berlari, tetapi juga tentang kebanggaan masyarakat dalam mewarisi dan melestarikan tradisi nenek moyang mereka. Karapan Sapi mengajarkan kita untuk menghargai keberanian, kerja keras, serta semangat kebersamaan yang menjadikan perayaan ini lebih dari sekadar lomba. Ia adalah pesta rakyat yang meriah, merangkul nilai-nilai kebersamaan, kearifan lokal, dan kecintaan terhadap budaya yang kaya akan tradisi.",
    },
    {
      img: ludruk,
      altImg: "Ludruk",
      title: "Ludruk, Perpaduan Komedi dan Kearifan Lokal Jawa Timur",
      content:
        "Ludruk adalah seni teater tradisional Jawa Timuran yang tak hanya menghibur, tetapi juga menyajikan kearifan lokal dan kritik sosial dengan sentuhan komedi yang menggelitik. Melalui aksi panggung, dialog, dan kekhasan adegan, ludruk mencerminkan kehidupan sehari-hari masyarakat Jawa Timur sambil menghadirkan pesan-pesan yang mendalam. Pertunjukan ludruk biasanya melibatkan sekelompok aktor yang memainkan berbagai peran dengan kostum yang mencolok, kadang-kadang dengan aksen humor yang khas. Para aktor ludruk tidak hanya menghibur penonton dengan komedi dan lelucon, tetapi juga menggunakan bahasa Jawa khas daerah setempat, menjadikan pertunjukan lebih dekat dengan hati dan pikiran para penonton. Di balik seni komedi yang dihadirkan, ludruk juga mengandung pesan-pesan moral dan kritik sosial yang disampaikan dengan cara yang cerdas dan menggelitik. Dalam pertunjukannya, ludruk sering kali menyelipkan pesan-pesan kearifan lokal, nilai-nilai tradisional, dan bahkan kritik terhadap isu-isu kontemporer yang memengaruhi masyarakat. Ludruk bukan sekadar hiburan, tetapi juga merupakan perpaduan yang indah antara seni komedi dan kearifan lokal yang mendalam. Ia adalah cerminan dari kekayaan budaya Jawa Timur yang menawarkan tawa sekaligus juga pesan-pesan yang bisa memotivasi, menghibur, dan mengajarkan makna kehidupan kepada para penontonnya.",
    },
    {
      img: reog,
      altImg: "Reog",
      title: "Pesona Mistis dan Kecantikan Reog Ponorogo",
      content:
        "Reog Ponorogo adalah pertunjukan seni tradisional Jawa Timur yang menyajikan pesona mistis, kecantikan, dan kekuatan dalam sebuah perpaduan yang memukau. Dalam setiap gerakannya, Reog mempersembahkan aura magis yang mengundang kekaguman sekaligus menantang batas-batas antara dunia nyata dan gaib. Pertunjukan Reog Ponorogo tidak hanya tentang tarian dan kostum yang megah, tetapi juga menyelipkan elemen mistis yang mendalam. Topeng singa yang besar (kerisik) yang dibawa oleh penari utama disebut dengan 'Singa Barong' yang melambangkan kekuatan gaib. Di samping itu, penari lainnya memainkan peran berbagai karakter mitos dan hewan mistis dalam pertunjukan. Keindahan dan kekuatan Reog terpancar melalui tarian dinamis dan gerakan lincah dari para penari yang mengenakan kostum yang megah dan berwarna-warni. Setiap gerakan dan ekspresi wajah mereka menggambarkan kekuatan dan kemisteriusan yang mempesona. Di balik penampilannya yang megah, Reog juga menyimpan nilai-nilai kearifan lokal dan spiritualitas yang dalam. Pertunjukan ini sering kali dianggap sebagai sarana komunikasi antara dunia manusia dan dunia spiritual, menjadikan Reog bukan hanya pertunjukan tarian tradisional biasa, tetapi juga sebuah ritual yang sarat dengan makna. Reog Ponorogo mempersembahkan pesona mistis yang memukau, kecantikan yang megah, serta kekuatan spiritual yang mendalam. Ia adalah perpaduan magis antara keindahan seni, kearifan lokal, dan keterhubungan manusia dengan dunia gaib, menciptakan pengalaman yang memikat bagi siapa pun yang menyaksikannya.",
    },
  ],

  tradisi: [
    {
      img: kasada,
      altImg: "Kasada",
      title: "Keharmonisan Spiritual dalam Tradisi Tengger",
      content:
        "Masyarakat Tengger, dengan keberagaman budayanya, menunjukkan keharmonisan spiritual yang luar biasa dalam berbagai tradisi mereka. Terletak di lereng Gunung Bromo, keberadaan masyarakat Tengger tercermin dalam perpaduan antara kepercayaan agama Hindu dan tradisi Jawa yang khas. Salah satu tradisi yang mencerminkan keharmonisan spiritual dalam kehidupan mereka adalah upacara Kasada, yang diadakan setiap tahun di Gunung Bromo. Dalam upacara ini, masyarakat Tengger melakukan persembahan kepada Dewa Hyang Widi Wasa dengan melemparkan berbagai hasil bumi ke dalam kawah gunung sebagai ungkapan rasa syukur dan permohonan keselamatan. Tradisi lain yang menonjol adalah kehidupan spiritual mereka yang terhubung erat dengan alam. Pandangan mereka tentang gunung sebagai tempat suci dan pohon suci yang diyakini memiliki kekuatan mistis menggambarkan keharmonisan antara manusia, alam, dan spiritualitas. Di tengah upaya pelestarian tradisi, masyarakat Tengger juga menghormati nilai-nilai budaya mereka yang kaya warisan, seperti dalam seni musik, tari, dan pahat batu yang menggambarkan cerita-cerita mistis dan mitologis. Keharmonisan spiritual dalam tradisi Tengger melampaui sekadar pengabdian ritual. Ia mencerminkan penghormatan yang mendalam terhadap alam, kepercayaan yang kuat, serta kesatuan spiritual dan budaya yang menjiwai kehidupan sehari-hari mereka. Tradisi ini menjadi cerminan dari kearifan lokal yang terus dijaga dan diselamatkan dalam merawat hubungan yang harmonis antara manusia, alam, dan spiritualitas.",
    },
    {
      img: keboan,
      altImg: "Keboan",
      title: "Kebo Keboan: Kebesaran Budaya Jawa Timur",
      content:
        "Di Jawa Timur, kebo keboan adalah tradisi yang menakjubkan yang menggambarkan kekuatan, keberanian, dan keindahan budaya lokal. Dalam perayaan ini, masyarakat setempat menghormati kebo atau kerbau sebagai simbol kekuatan yang melambangkan semangat gotong royong dan kebersamaan. Setiap tahun, perayaan kebo keboan diadakan dengan penuh kegembiraan. Para peserta mengenakan kostum yang megah meniru gerakan dan perilaku kebo. Mereka menampilkan aksi yang dramatis dan mengagumkan, seolah-olah mereka benar-benar berubah menjadi kebo. Dari tarian hingga pertunjukan teatrikal, setiap langkah dipelajari dengan cermat untuk mempersembahkan keindahan serta kekuatan binatang tersebut. Tradisi ini juga mencerminkan hubungan erat antara manusia dan hewan dalam kehidupan sehari-hari. Masyarakat Jawa Timur sangat menghargai peran kebo dalam pekerjaan pertanian dan sebagai bagian tak terpisahkan dari kehidupan desa. Kebo keboan bukan hanya sekadar pertunjukan, tapi juga perayaan kebersamaan dan solidaritas. Momen ini menjadi kesempatan bagi orang-orang untuk bersatu, melupakan perbedaan, dan merayakan warisan budaya yang kaya. Kebo keboan adalah suatu contoh gemilang bagaimana tradisi dan budaya lokal tetap hidup dan dijunjung tinggi oleh masyarakat. Sebuah perayaan yang mengesankan, merangkul nilai-nilai luhur dan mempererat ikatan sosial di tengah-tengah pesatnya perkembangan zaman.",
    },
    {
      img: kedukBeji,
      altImg: "Keduk Beji",
      title: "Ritual Kesucian Air yang Memperkaya Kebudayaan Jawa",
      content:
        "Ritual kesucian air memiliki kedalaman makna yang memperkaya kebudayaan Jawa. Dalam budaya Jawa, air bukan hanya menjadi sumber kehidupan fisik, tetapi juga dianggap sebagai simbol kesucian, keharmonisan, dan keberkahan. Salah satu ritual yang menonjol adalah Tedhak Siten, yang merupakan upacara tradisional Jawa yang dilakukan untuk mengenalkan anak kepada air untuk pertama kalinya. Air dianggap sebagai elemen yang suci dan penting dalam kehidupan, dan Tedhak Siten adalah momen sakral di mana anak diharapkan memiliki ikatan spiritual dengan air sejak usia dini. Selain itu, terdapat tradisi serupa yang disebut Sedaye. Upacara ini melibatkan prosesi memercikkan air suci ke bagian tubuh seseorang untuk membersihkan spiritual dan mendoakan keselamatan serta keberkahan. Air yang digunakan dalam ritual ini dianggap membawa energi positif dan keberkahan. Ritual-ritual ini mencerminkan kekayaan kebudayaan Jawa yang menghormati kesucian air dan kekuatan spiritualnya. Air tidak hanya dianggap sebagai elemen fisik yang memberi kehidupan, tetapi juga sebagai simbol yang memperkaya hubungan antara manusia dengan spiritualitas, kesucian, dan keberkahan dalam kehidupan sehari-hari. Ritual kesucian air menjadi warisan yang memelihara hubungan manusia dengan alam, kepercayaan, dan nilai-nilai spiritual yang mendalam dalam budaya Jawa.",
    },
    {
      img: larungSembonyo,
      altImg: "Larung Sembonyo",
      title: "Perwujudan Rasa Syukur Nelayan dengan Tradisi Larung Sembonyo",
      content:
        "Tradisi Larung Sembonyo adalah bentuk nyata dari ungkapan rasa syukur yang mendalam yang dilakukan oleh para nelayan. Tradisi ini berlangsung di Pantai Kalianda, Lampung, di mana para nelayan bersama-sama merayakan hasil tangkapan melalui prosesi keagamaan yang meriah. Larung Sembonyo merupakan perayaan yang diadakan secara tahunan untuk menghormati Dewi Ratu Mas Gandasari, yang diyakini sebagai pelindung para nelayan dan penjaga keamanan di laut. Dalam tradisi ini, perahu-perahu kecil yang dihiasi dengan berbagai hiasan dan persembahan meluncur bersamaan ke laut sebagai ungkapan terima kasih atas hasil tangkapan yang melimpah. Momentum ini dianggap sakral, dan para nelayan melakukan berbagai ritual serta membawa persembahan berupa hasil laut sebagai wujud syukur atas rejeki yang diberikan oleh alam. Mereka berdoa dan menyelenggarakan prosesi dengan penuh kehormatan kepada Dewi Ratu Mas Gandasari, sembari menganggap upacara ini sebagai bentuk persembahan dan tanda rasa syukur mereka atas keberlimpahan sumber daya laut. Larung Sembonyo bukan hanya sekadar perayaan, tetapi juga sebuah upacara yang merefleksikan hubungan spiritual yang erat antara nelayan dengan alam serta kepercayaan mereka kepada kekuatan yang melindungi mereka di laut. Tradisi ini menjadi simbol dari rasa syukur yang mendalam, kebersamaan komunitas nelayan, dan kepercayaan akan keajaiban alam yang memberikan rejeki kepada mereka.",
    },
  ],
};

export const gallery = {
  kuliner: [
    {
      img: soto,
      altImg: "soto",
    },
    {
      img: rawon,
      altImg: "rawon",
    },
    {
      img: lontongBalap,
      altImg: "lontongBalap",
    },
    {
      img: rujak,
      altImg: "rujak",
    },
  ],

  kesenian: [
    {
      img: jaranKepang,
      altImg: "JaranKepang",
    },
    {
      img: karapanSapi,
      altImg: "KarapanSapo",
    },
    {
      img: ludruk,
      altImg: "Ludruk",
    },
    {
      img: reog,
      altImg: "Reog",
    },
    {
      img: tariGandrung,
      altImg: "TariGandrung",
    },
    {
      img: tariRemo,
      altImg: "TariRemo",
    },
  ],

  tradisi: [
    {
      img: kasada,
      altImg: "kasada",
    },
    {
      img: keboan,
      altImg: "keboan",
    },
    {
      img: kedukBeji,
      altImg: "KedukBeji",
    },
    {
      img: larungSembonyo,
      altImg: "LarungSembonyo",
    },
  ],
};
