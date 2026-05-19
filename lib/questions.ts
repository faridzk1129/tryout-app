// lib/questions.ts
export type Category = "TWK" | "TIU" | "TKP";

export interface Option {
  label: string;
  text: string;
  image?: string;
  points: number;
}

export interface QuestionContent {
  type: "text" | "image";
  value: string;
}

export interface ExplanationContent {
  type: "text" | "image";
  value: string;
}

export interface Question {
  id: number;
  category: Category;
  content: QuestionContent[];
  options: Option[];

  explanation?: ExplanationContent[];
}

export const questions: Question[] = [
  {
    id: 1,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Berikut ini yang bukan termasuk perilaku nasionalisme yang tercermin pada kehidupan bernegara adalah….",
      },
    ],
    options: [
      { label: "A", text: "Menghormati keputusan hakim", points: 0 },
      { label: "B", text: "Ikut serta dalam pasukan perdamaian dunia", points: 0 },
      { label: "C", text: "Mematuhi rambu-rambu lalu lintas", points: 0 },
      {
        label: "D",
        text: "Tidak menyelenggarakan PTM saat pelarangan PTM diberlakukan",
        points: 0,
      },
      { label: "E", text: "Melakukan modifikasi batik tulis dengan batik cap", points: 5 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: E**\n\n Berikut ini yang termasuk perilaku nasionalisme yang tercermin pada kehidupan bernegara adalah…. \n\n Menghormati keputusan hakim \n\n Ikut serta dalam pasukan perdamaian dunia \n\nMematuhi rambu-rambu lalu lintas \n\nTidak menyelenggarakan PTM saat pelarangan PTM diberlakukan",
      },
    ],
  },

  {
    id: 2,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Selain suku bangsa, di Indonesia juga terdapat 6 agama yang diakui oleh negara kita. Mulai dari agama Islam, Kristen, Katolik, Hindu, Budha, dan Konghuchu hidup rukun berdampingan. Pengakuan terhadap keberagaman agama merupakan wujud semangat nasionalisme dalam mempersatukan keberagaman nasional. Landasan dari pengakuan tersebut adalah….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Agama merupakan salah satu cara mendekatkan diri kepada Yang Maha Kuasa",
        points: 0,
      },
      { label: "B", text: "Semua agama memiliki ajaran yang sama", points: 0 },
      { label: "C", text: "Beragama merupakan kewajiban masyarakat Indonesia", points: 0 },
      {
        label: "D",
        text: "Agama merupakan nilai positif warga negara yang wajib dijamin",
        points: 5,
      },
      {
        label: "E",
        text: "Agama merupakan identitas Tuhan Yang Maha Esa yang harus dijamin",
        points: 0,
      },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: D**\n\nPengakuan terhadap keberagaman agama merupakan wujud semangat nasionalisme dalam mempersatukan keberagaman nasional. Landasan dari pengakuan tersebut adalah Agama merupakan nilai positif warga negara yang wajib dijamin.",
      },
    ],
  },
  {
    id: 3,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Masyarakat Indonesia merupakan masyarakat yang majemuk. Kemajemukan tersebut ditunjukkan dengan terdapat berbagai macam suku bangsa, agama, adat istiadat, rumah adat, Bahasa daerah, dan lain sebagainya. Melihat kenyataan tersebut, diperlukan adanya sikap nasionalisme berdasarkan keanekaragaman tersebut. Hal ini bertujuan agar….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Agar bangsa Indonesia tidak kehilangan kepribadian bangsanya",
        points: 5,
      },
      { label: "B", text: "Identitas nasional terjaga", points: 0 },
      { label: "C", text: "Budaya daerah dapat dilestarikan", points: 0 },
      { label: "D", text: "Agar tercipta kedaulatan bangsa", points: 0 },
      { label: "E", text: "Agar bangsa Indonesia tetap menjadi bangsa yang majemuk", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: A**\n\nMelihat kenyataan tersebut, diperlukan adanya sikap nasionalisme berdasarkan keanekaragaman tersebut. Hal ini bertujuan agar bangsa Indonesia tidak kehilangan kepribadian bangsanya. Keanekaragaman tersebut merupakan ciri khas yang membedakan bangsa Indonesia dengan bangsa lain.",
      },
    ],
  },
  {
    id: 4,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Lunturnya nasionalisme salah satunya disebabkan permasalahan kompleks yang dialami oleh bangsa Indonesia. Permasalahan kompleks yang dihadapi Indonesia adalah….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Meningkatnya KKN dimasa pandemi yang dilakukan oleh pejabat negara",
        points: 0,
      },
      { label: "B", text: "Gerakan PKI yang mengancam ideologi negara", points: 5 },
      { label: "C", text: "Penyerangan oleh KKB Papua yang memakan korban jiwa", points: 0 },
      { label: "D", text: "Meningkatnya prosentase kecanduan hp selama pandemic", points: 0 },
      { label: "E", text: "Menurunnya angka kematian akibat Covid-19", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: B**\n\nLunturnya nasionalisme salah satunya disebabkan permasalahan kompleks yang dialami oleh bangsa Indonesia. Permasalahan kompleks yang dihadapi Indonesia adalah Gerakan PKI yang mengancam ideologi negara.",
      },
    ],
  },
  {
    id: 5,
    category: "TWK",
    content: [
      {
        type: "text",
        value: "Peristiwa nasionalisme yang dilakukan pada saat sumpah pemuda tahun 1928 adalah….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Pengikraran sumpah pemuda yang dilakukan oleh semua tokoh pemuda kala itu",
        points: 0,
      },
      {
        label: "B",
        text: "Diperdengarkannya lagu Indonesia Raya pertama kali dengan diiringi oleh biola",
        points: 5,
      },
      { label: "C", text: "Penetapan Pancasila sebagai ideologi negara", points: 0 },
      {
        label: "D",
        text: "Pengesahan Soekarno dan Moh. Hatta sebagai presiden dan wakil presiden",
        points: 0,
      },
      { label: "E", text: "Penetapan bhineka tunggal ika sebagai semboyan negara", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: B**\n\nPeristiwa nasionalisme yang dilakukan pada saat sumpah pemuda tahun 1928 adalah Diperdengarkannya lagu Indonesia Raya pertama kali dengan diiringi oleh biola. Nasionalisme berhubungan dengan identitas negara. Salah satunya adalah lagu Indonesia Raya.",
      },
    ],
  },
  {
    id: 6,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Sarekat islam yang dahulunya bernama Sarekat Dagang Islam merupakan organisasi politik yang didirikan oleh Haji Samanhudi. Namun, seiring berjalannya waktu untuk memperluas anggota, maka H.O.S. Cokroaminoto mengubah Sarekat Dagang Islam menjadi Sarekat Islam. Pada tahun 1921, Sarekat Islam pecah menjadi dua kubu, yaitu Si Merah dan Si Putih. Berikut ini yang termasuk kedalam kubu si Merah adalah….",
      },
    ],
    options: [
      { label: "A", text: "Abdul Muis", points: 0 },
      { label: "B", text: "Haji Agus Salim", points: 0 },
      { label: "C", text: "Suryopranoto", points: 0 },
      { label: "D", text: "Soepomo", points: 0 },
      { label: "E", text: "Alimin", points: 5 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: E**\n\nBerikut ini yang termasuk kedalam kubu si Merah adalah Semaun, Darsono, dan Alimin.",
      },
    ],
  },
  {
    id: 7,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Perhatikan wacana berikut ini! Ada pemandangan yang tidak biasa saat K.H. Idham Chalid dan Buya Hamka melakukan perjalanan ke tanah suci. Di tengah perjalanan, mereka melaksanakan salat shubuh bersama. Sebagai pemimpin organisasi Nahdatul Ulama kala itu, K.H. Idham Chalid tidak membaca doa qunut saat salat shubuh berlangsung. Buya hamka dan jamaah lainnya pun terheran dengan sikap yang ditunjukkan oleh Idham Chalid tersebut. Padahal, dalam tuntunan orang Nahdatul Ulama membaca qunut saat salat shubuh dihukumi sunnah muakad. Berdasarkan wacana di atas, nilai integritas yang selayaknya dicontoh dari seorang K.H. Idham Chalid adalah….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Toleransi sangat diperlukan dalam kehidupan antar pemeluk agama",
        points: 5,
      },
      {
        label: "B",
        text: "Kita harus menjunjung tinggi nilai-nilai keislaman dalam kehidupan sehari-hari",
        points: 0,
      },
      { label: "C", text: "Cara beribadah boleh saja berbeda, namun tujuannya sama", points: 0 },
      {
        label: "D",
        text: "Dalam hal akidah, hendaknya tidak perlu memerhatikan toleransi",
        points: 0,
      },
      { label: "E", text: "Kita harus memiliki sikap empati terhadap perbedaan agama", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: A**\n\nBerdasarkan wacana di atas, nilai integritas yang selayaknya dicontoh dari seorang K.H. Idham Chalid adalah Toleransi sangat diperlukan dalam kehidupan antar pemeluk agama.",
      },
    ],
  },
  {
    id: 8,
    category: "TWK",
    content: [
      {
        type: "text",
        value: "Sikap integritas sesuai dengan pengamalan Pancasila sila ke-2 adalah….",
      },
    ],
    options: [
      { label: "A", text: "Zakky selalu menjadi pencoblos pertama setiap kali pemilu", points: 0 },
      { label: "B", text: "Aniek membagikan pengamalan positifnya usai divaksin", points: 0 },
      { label: "C", text: "Bang Onim menjadi koki di dapur umum Palestina", points: 5 },
      {
        label: "D",
        text: "Pak Fakih selalu memperlakukan siswanya istimewa saat penilaian",
        points: 0,
      },
      { label: "E", text: "Pak Joko memberikan bantuan modal untuk tetangganya", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: C**\n\nSikap integritas sesuai dengan pengamalan Pancasila sila ke-2 adalah Bang Onim menjadi koki di dapur umum Palestina. Hal ini sesuai butir gemar melakukan kegiatan kemanusiaan.",
      },
    ],
  },
  {
    id: 9,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Saat perundingan sila-sila Pancasila terjadi perdebatan diantara anggota PPKI, terutama dalam pembahasan sila ke-1. Hal ini dikarenakan tidak semua warga negara Indonesia beragama islam sehingga sila tersebut jika tidak diubah kurang menunjukkan kemajemukan Indonesia. Sebagai salah satu anggota PPKI, Kasman Dimejo membujuk teman-temannya yang lain untuk menghilangkan tujuh kata tersebut. Tindakan yang dilakukan Kasman tergambar melalui sikap….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Kepedulian yang tinggi terhadap nasib saudara lain yang berbeda agama",
        points: 0,
      },
      {
        label: "B",
        text: "Profesionalisme dalam menjalankan tugasnya sebagai anggota PPKI",
        points: 0,
      },
      { label: "C", text: "Bekerja keras dalam mempertahankan pendapat", points: 0 },
      { label: "D", text: "Rasa tanggung jawab yang dilandasi oleh semangat persatuan", points: 5 },
      { label: "E", text: "Rela berkorban mengutamakan kepentingan bangsa", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: D**\n\nTindakan yang dilakukan Kasman tergambar melalui sikap Rasa tanggung jawab yang dilandasi oleh semangat persatuan.",
      },
    ],
  },
  {
    id: 10,
    category: "TWK",
    content: [
      {
        type: "text",
        value: "Sikap integritas sesuai dengan kompetensi KPK tercermin pada perilaku….",
      },
    ],
    options: [
      { label: "A", text: "Marizha selalu melaporkan kekayaannya kepada negara", points: 0 },
      {
        label: "B",
        text: "Apapun yang Wisnu katakan dan lakukan memang sesuai dengan hati nuraninya",
        points: 5,
      },
      { label: "C", text: "Kewa selalu bersikap ramah kepada turis asing", points: 0 },
      { label: "D", text: "Muzali selalu bersikap lemah lembut kepada orangtuanya", points: 0 },
      { label: "E", text: "Qera membuat mural bertemakan nusantara", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: B**\n\nBerikut ini sikap integritas sesuai dengan kompetensi KPK tercermin pada perilaku Apapun yang Wisnu katakan dan lakukan memang sesuai dengan hati nuraninya.",
      },
    ],
  },
  {
    id: 11,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Pernahkah kalian mendengar nama Herman Johannes? Kalau belum pernah mendengarnya, akan aku ceritakan sedikit tentang kisahnya. Herman Johannes berasal dari Kepulauan Rote, Nusa Tenggara Timur. Selama menempuh pendidikan, ia tidak hanya rajin belajar, namun juga aktif berorganisasi. Saat kampusnya ditutup sementara, Pak Jo sapaannya tetap belajar dan sudah dipercaya mengajar di beberapa Sekolah Menengah Tinggi di Jakarta, Sekolah Tinggi Kedokteran, dan Akmil Yogyakarta. Setelah Indonesia merdeka, Belanda menunjukkan sikapnya untuk kembali lagi menjajah Indonesia. Para pejuang bangsa berusaha mempertahankan kemerdekaan Indonesia, termasuk Pak Jo. Pak Jo bergerak menyelamatkan bahan-bahan peledak peninggalan Jepang yang ada di beberapa gudang penyimpanan. Berkat pengetahuan tentang sika dan kimia, Pak Jo seringkali dimintai bantuan untuk merakit senjata api, membuat detonator serta alat peledak oleh para pejuang muda. Seiring berjalannya waktu, Pak Jo berhasil memproduksi berbagai macam bahan peledak seperti bom asap dan granat. Pengetahuannya tentang bom pun diuji, pada 19 Desember 1948, Pak Jo diminta untuk memasang bom di jembatan kereta api Sungai Progo oleh Letkol Soeharto. Berdasarkan penggalan cerita di atas, nilai integritas yang dimiliki oleh Herman Johannes adalah….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Berani menggunakan ilmu yang dimiliki untuk melakukan upaya bela negara",
        points: 5,
      },
      {
        label: "B",
        text: "Peduli dengan nasib bangsanya yang seperti akan dijajah Kembali",
        points: 0,
      },
      { label: "C", text: "Patuh terhadap pimpinan yang memerintahkannya", points: 0 },
      { label: "D", text: "Kerja keras merakit bom demi mempertahankan NKRI", points: 0 },
      { label: "E", text: "Bertanggung jawab terhadap ilmu yang dimiliki", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: A**\n\nBerdasarkan penggalan cerita di atas, nilai integritas yang dimiliki oleh Herman Johannes adalah berani menggunakan ilmu yang dimiliki untuk melakukan upaya bela negara.",
      },
    ],
  },
  {
    id: 12,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Salah satu ciri globalisasi adalah tidak ada batas yang jelas antara dua negara dimana globalisasi telah mendekatkan yang jauh dan menjauhkan yang dekat. Sebagai negara yang memiliki ideologi terbuka, sudah menjadi hal pasti kita merasakan dampak dari globalisasi. Berikut ini sikap yang bijak dalam menghadapi globalisasi adalah….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Menerimanya sebagai tantangan negara karena dapat mengancam kedaulatan",
        points: 0,
      },
      { label: "B", text: "Menerimanya sebagai gangguan negara sehingga perlu apatis", points: 0 },
      {
        label: "C",
        text: "Menerimanya sebagai hambatan negara karena dapat menghambat integrasi",
        points: 0,
      },
      {
        label: "D",
        text: "Menerimanya sebagai ancaman negara sehingga perlu mempertahankan kepribadian bangsa",
        points: 5,
      },
      {
        label: "E",
        text: "Menerimanya sebagai gangguan negara karena melunturkan nasionalisme",
        points: 0,
      },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: D**\n\nBerikut ini sikap yang bijak dalam menghadapi globalisasi adalah Menerimanya sebagai ancaman negara sehingga perlu mempertahankan kepribadian bangsa.",
      },
    ],
  },
  {
    id: 13,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Apabila negara mendapatkan ancaman militer, sikap warga negara sebagai perwujudan bela negara adalah….",
      },
    ],
    options: [
      { label: "A", text: "Membiarkan begitu saja penjajah masuk ke Indonesia", points: 0 },
      { label: "B", text: "Pergi ke luar negeri untuk mendapatkan suaka politik", points: 0 },
      {
        label: "C",
        text: "Bersatu padu dengan seluruh komponen masyarakat mengusir penjajah",
        points: 5,
      },
      { label: "D", text: "Meminta bantuan kepada Dewan Keamanan PBB", points: 0 },
      { label: "E", text: "Memberikan semangat dan dorongan kepada TNI dan POLRI", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: C**\n\nApabila negara kita mendapatkan ancaman militer, sikap yang tepat dilakukan oleh warga negara sebagai perwujudan bela negara adalah Bersatu padu dengan seluruh komponen masyarakat mengusir penjajah.",
      },
    ],
  },
  {
    id: 14,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Salah satu faktor yang menyebabkan menurunnya sikap bela negara pemuda Indonesia adalah pemahaman bela negara yang hanya dicerminkan dalam hal mengangkat senjata. Padahal, dalam kondisi seperti sekarang ini bela negara dapat diwujudkan dalam beberapa hal. Berdasarkan UUD 1945 pasal 30 ayat 1, perilaku yang dapat diwujudkan adalah….",
      },
    ],
    options: [
      { label: "A", text: "Ponce selalu senang menggunakan baju batik setiap hari", points: 0 },
      { label: "B", text: "Dea menyimpan senjata untuk mengantisipasi penjajah", points: 0 },
      {
        label: "C",
        text: "Pak Dio lebih mengutamakan menerima karyawan dari Indonesia",
        points: 0,
      },
      { label: "D", text: "Luky mengikuti ekstrakurikuler pramuka di sekolah", points: 5 },
      { label: "E", text: "Uni mengikuti kursus batik di Solo", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: D**\n\nBerdasarkan UUD 1945 pasal 30 ayat 1, perilaku bela negara yang dapat diwujudkan adalah Luky mengikuti ekstrakurikuler pramuka di sekolah.",
      },
    ],
  },
  {
    id: 15,
    category: "TWK",
    content: [
      {
        type: "text",
        value: "Salah satu hak bela negara bagi warga negara Indonesia adalah….",
      },
    ],
    options: [
      { label: "A", text: "Hak untuk berpegang teguh terhadap Pancasila", points: 0 },
      { label: "B", text: "Hak untuk mematuhi peraturan hukum yang berlaku", points: 0 },
      { label: "C", text: "Hak untuk memeroleh jaminan sosial", points: 5 },
      { label: "D", text: "Hak untuk menaati UUD 1945", points: 0 },
      { label: "E", text: "Hak untuk mempertahankan kedaulatan negara", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: C**\n\nSalah satu hak bela negara bagi warga negara Indonesia adalah hak untuk memeroleh jaminan sosial.",
      },
    ],
  },
  {
    id: 16,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Semua warga memiliki peran yang sama dalam upaya pembelaan negara. Hal ini menunjukkan adanya keseimbangan antara hak dan kewajiban yang berarti….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Semua komponen masyarakat berhak untuk melakukan bela negara",
        points: 0,
      },
      { label: "B", text: "Hanya TNI dan POLRI yang memiliki kewajiban bela negara", points: 0 },
      {
        label: "C",
        text: "Upaya bela negara merupakan kehormatan bagi seluruh warga negara",
        points: 5,
      },
      {
        label: "D",
        text: "Bela negara merupakan perwujudan rasa cinta tanah air seluruh komponen",
        points: 0,
      },
      {
        label: "E",
        text: "Warga negara dapat memilih perannya dalam upaya bela negara",
        points: 0,
      },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: C**\n\nSemua warga memiliki peran yang sama dalam upaya pembelaan negara. Hal ini menunjukkan adanya keseimbangan antara hak dan kewajiban yang berarti Upaya bela negara merupakan kehormatan bagi seluruh warga negara.",
      },
    ],
  },
  {
    id: 17,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Cinta tanah air merupakan salah satu perwujudan bela negara. Hal tersebut tercermin dalam sikap….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Membuat aplikasi ojek online untuk meningkatkan kesejahteraan masyarakat",
        points: 5,
      },
      {
        label: "B",
        text: "Lebih memilih kuliah di luar negeri daripada di dalam negeri",
        points: 0,
      },
      { label: "C", text: "Rasti memiliki idola tokoh dunia yang berasal dari Jerman", points: 0 },
      { label: "D", text: "Memadukan gaya berpakaian orang barat dengan orang timur", points: 0 },
      { label: "E", text: "Mempertahankan nilai kebudayan ortodoks yang hampir punah", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: A**\n\nCinta tanah air merupakan salah satu perwujudan dalam upaya bela negara. Hal tersebut tercermin dalam sikap membuat aplikasi ojek online untuk meningkatkan kesejahteraan masyarakat Indonesia.",
      },
    ],
  },
  {
    id: 18,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Meningkatnya ilmu pengetahuan dan teknologi menyebabkan berita apa saja bisa beredar secara cepat. Apalagi literasi yang rendah menyebabkan orang untuk dengan cepat langsung menyebarkan berita tersebut tanpa mempertimbangkan kebenaran informasi tersebut. Fenomena tersebut berdampak pada bidang….",
      },
    ],
    options: [
      { label: "A", text: "Bidang Pendidikan", points: 0 },
      { label: "B", text: "Bidang sosial budaya", points: 0 },
      { label: "C", text: "Bidang hukum", points: 0 },
      { label: "D", text: "Bidang pertahanan dan keamanan", points: 5 },
      { label: "E", text: "Bidang ekonomi", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: D**\n\nFenomena tersebut berdampak pada bidang pertahanan dan keamanan.",
      },
    ],
  },
  {
    id: 19,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Demo yang terjadi belum lama ini meresahkan masyarakat. Bagaimana tidak, disaat pemerintah menggembor gemborkan PPKM, pengurangan kerumunan, namun aliansi BEM dari seluruh Indonesia melakukan demonstrasi. Demo tersebut diisinyalir terkait dengan pemecatan 57 pegawai KPK yang tidak lulus Tes Wawasan Kebangsaan. Padahal, sebenarnya mahasiswa bisa melakukan audiensi dengan pemerintah secara baik-baik tanpa harus menggunakan cara demonstrasi. Tindakan yang dilakukan oleh mahasiswa tersebut bertentangan dengan Pancasila khususnya sila ke….",
      },
    ],
    options: [
      { label: "A", text: "sila ke-1", points: 0 },
      { label: "B", text: "sila ke-3", points: 0 },
      { label: "C", text: "sila ke-5", points: 0 },
      { label: "D", text: "sila ke-4", points: 5 },
      { label: "E", text: "sila ke-2", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: D**\n\nTindakan yang dilakukan oleh mahasiswa tersebut bertentangan dengan Pancasila khususnya sila ke-4. Hal ini sesuai butir mengutamakan musyawarah dalam mengambil keputusan untuk kepentingan bersama.",
      },
    ],
  },
  {
    id: 20,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Di negara demokrasi seperti di Indonesia, kebebasan berpendapat dilindungi Undang-undang. Meskipun demikian, dalam berpendapat harus menerapkan prinsip kebebasan yang bertanggung jawab, artinya….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Setiap pendapat yang dilontarkan harus dapat dipertanggungjawabkan",
        points: 0,
      },
      {
        label: "B",
        text: "Seseorang bebas mengeluarkan pendapat tanpa paksaan pihak lain",
        points: 0,
      },
      { label: "C", text: "Seseorang bebas berpendapat tanpa memikirkan resiko", points: 0 },
      {
        label: "D",
        text: "Kebebasan berpendapat harus memperhatikan norma dan aturan yang berlaku",
        points: 5,
      },
      { label: "E", text: "Setiap pendapat harus menjaga hak asasi milik orang lain", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: D**\n\nMeskipun demikian, dalam berpendapat harus menerapkan prinsip kebebasan yang bertanggung jawab, artinya Kebebasan berpendapat harus memperhatikan norma dan aturan yang berlaku di Indonesia.",
      },
    ],
  },
  {
    id: 21,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Dalam pelaksanaan pembangunan di Indonesia harus memenuhi prinsip yang telah ada. Salah satunya adalah pembangunan tidak boleh merugikan kepentingan umum. Misalnya saja, jika akan dibangun lapangan golf di wilayah pesisir. Padahal wilayah pesisir merupakan tempat permukiman para nelayan. Selain itu, pembangunan lapangan golf juga dapat memberikan dampak negatif bagi lingkungan. Hal ini bertentangan dengan sila Pancasila yang berlambangkan….",
      },
    ],
    options: [
      { label: "A", text: "Garuda Pancasila", points: 0 },
      { label: "B", text: "Padi dan kapas", points: 5 },
      { label: "C", text: "Rantai emas", points: 0 },
      { label: "D", text: "Kepala banteng", points: 0 },
      { label: "E", text: "Pohon beringin", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: B**\n\nSelain itu, pembangunan lapangan golf juga dapat memberikan dampak negatif bagi lingkungan. Hal ini bertentangan dengan sila Pancasila yang berlambangkan Padi dan kapas. Hal ini sesuai butir menghormati hak orang lain.",
      },
    ],
  },
  {
    id: 22,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Presiden dan wakil presiden memegang jabatan selama 5 tahun dan dapat dipilih kembali dalam satu kali jabatan yang sama. Hal ini sesuai dengan prinsip yang dimiliki oleh Presiden Joko Widodo yang menolak mengamandemen pasal tersebut. Namun, jika pada akhirnya DPR mengamandemen pasal tersebut dan mengubahnya baik itu menambah masa jabatan presiden maupun dapat dipilih kembali dalam 3 kali masa jabatan, maka….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Tidak terjadi pergantian kepemimpinan dalam periode yang lama",
        points: 0,
      },
      { label: "B", text: "Kekuasaan presiden akan semakin otoriter", points: 0 },
      { label: "C", text: "Adanya kemungkinan dalam penyalahgunaan wewenang", points: 5 },
      {
        label: "D",
        text: "Jabatan presiden dapat diturunkan kepada keturunan sebelumnya",
        points: 0,
      },
      { label: "E", text: "Semakin kuatnya kekuasaan eksekutif", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: C**\n\n Namun, jika pada akhirnya DPR mengamandemen pasal tersebut dan mengubahnya baik itu menambah masa jabatan presiden maupun dapat dipilih kembali dalam 3 kali masa jabatan, maka adanya kemungkinan dalam penyalahgunaan wewenang.",
      },
    ],
  },
  {
    id: 23,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Indonesia adalah negara demokrasi dimana kedaulatan rakyat memegang kekuasaan tertinggi. Berikut ini perilaku yang mencerminkan demokrasi di kehidupan masyarakat adalah….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Adanya perasaan senasib sepenanggungan saat terjadi konflik daerah",
        points: 0,
      },
      {
        label: "B",
        text: "Setiap permasalahan yang dihadapi dilakukan musyawarah untuk mufakat",
        points: 5,
      },
      { label: "C", text: "Voting menjadi cara utama dalam pengambilan keputusan", points: 0 },
      { label: "D", text: "Kekuasaan kepala negara tidak tak terbatas", points: 0 },
      { label: "E", text: "Presiden berhak menetapkan Keputusan Presiden", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: B**\n\nBerikut ini perilaku yang mencerminkan demokrasi di kehidupan masyarakat adalah Setiap permasalahan yang dihadapi dilakukan musyawarah untuk memakai mufakat.",
      },
    ],
  },
  {
    id: 24,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Sebagai pilar negara, pembukaan UUD tidak boleh diamandemen karena apabila pembukaan UUD diamandemen berarti mengubah NKRI. Hal ini bermakna….",
      },
    ],
    options: [
      { label: "A", text: "Bagian yang boleh diamandemen hanya batang tubuh saja", points: 0 },
      {
        label: "B",
        text: "Pembukaan UUD mengandung dasar negara, tujuan, dan pernyataan kemerdekaan",
        points: 5,
      },
      { label: "C", text: "Merupakan hasil sidang PPKI yang tidak boleh diubah", points: 0 },
      { label: "D", text: "Pembukaan UUD 1945 memuat ideologi negara", points: 0 },
      { label: "E", text: "Pembukaan UUD 1945 mengandung jiwa bangsa Indonesia", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: B**\n\nSebagai pilar negara, pembukaan UUD tidak boleh diamandemen karena apabila pembukaan UUD diamandemen berarti mengubah NKRI. Hal ini bermakna Di dalam pembukaan UUD mengandung dasar negara, tujuan negara, dan pernyataan kemerdekaan.",
      },
    ],
  },
  {
    id: 25,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Perhatikan wacana berikut ini! Baru dua bulan sejak Sasa dan Suma menikah, namun kehidupan rumah tangga mereka memprihatinkan. Bagaimana tidak, sejak sebelum akad sampai dengan sekarang Suma tergeletak sakit. Jantungnya terdapat kelainan yang menyebabkan dirinya susah untuk bernapas. Bahkan, terkadang wajahnya bengkak bengkak karena sakit jantung yang dideritanya. Sebagai pengantin baru, wajar jika Sasa sedih dengan keadaan suaminya. Pernikahan yang dahulunya ia idamkan menjadi pernikahan yang membahagiakan berubah menjadi air mata. Sasa harus setia mendampingi Suma yang terbujur sakit di rumah sakit. Ada sedikit perasaan menyesal di benaknya. Kenapa ia tidak memikirkan masak-masak menikah dengan seorang lelaki yang kurang sehat. Namun, nasi sudah menjadi bubur dan saat ini Sasa sudah menjadi istri Suma. Sasa hanya bisa mendoakan kesembuhan suaminya. Ia berharap suaminya bisa sembuh dan bisa hidup bahagia bersamanya. Nilai sosial pada penggalan cerita di atas adalah….",
      },
    ],
    options: [
      { label: "A", text: "Suma memiliki penyakit jantung", points: 0 },
      { label: "B", text: "Sasa menyesal kenapa menikah dengan Suma", points: 5 },
      { label: "C", text: "Sasa sangat mencintai Suma", points: 0 },
      { label: "D", text: "Kehidupan rumah tangga yang jauh dari kata bahagia", points: 0 },
      { label: "E", text: "Sasa durhaka pada suaminya", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: B**\n\nNilai sosial pada penggalan cerita di atas adalah Sasa menyesal kenapa menikah dengan Suma.",
      },
    ],
  },
  {
    id: 26,
    category: "TWK",
    content: [
      {
        type: "text",
        value: "Di bawah ini kalimat efektif yang benar adalah….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Mari kita semua saling bantu membantu membersihkan halaman sekolah",
        points: 0,
      },
      { label: "B", text: "Meskipun sakit, namun Ari tetap belajar dengan giat", points: 0 },
      { label: "C", text: "Saya mandi sebelum saya sarapan", points: 0 },
      {
        label: "D",
        text: "Para pejabat-pejabat negara seharusnya dapat hidup sederhana",
        points: 0,
      },
      { label: "E", text: "Para peserta rapat dipersilahkan masuk ke dalam ruangan", points: 5 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: E**\n\nPenggunaan kalimat baku yang tepat ditunjukkan pada kalimat…. \n\n -> Mari kita semua saling membantu membersihkan halaman sekolah \n\n -> Meskipun sakit, Ari tetap belajar dengan giat \n\n -> Saya mandi sebelum sarapan \n\n -> Para pejabat negara seharusnya dapat hidup sederhana  \n\n -> Para peserta rapat dipersilahkan masuk ke dalam ruangan.",
      },
    ],
  },
  {
    id: 27,
    category: "TWK",
    content: [
      {
        type: "text",
        value: "Penggunaan kalimat baku yang tepat ditunjukkan pada kalimat….",
      },
    ],
    options: [
      {
        label: "A",
        text: "Sumilir saat ini menjadi salah satu desa wisata di Kabupaten Purbalingga yang patut dikunjungi",
        points: 5,
      },
      {
        label: "B",
        text: "Rencana ini masih tentatip sekali, masih jauh dari kata pasti",
        points: 0,
      },
      {
        label: "C",
        text: "Queen harus mendapatkan pengawasan extra ketika di rumah sendirian",
        points: 0,
      },
      {
        label: "D",
        text: "Nana mengambil jurusan Tehnik Sipil di Universitas Sebelas Maret",
        points: 0,
      },
      { label: "E", text: "Komoditi Desa Pratin adalah sayur mayur", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: A**\n\nPenggunaan kalimat baku yang tepat ditunjukkan pada kalimat….\n\n -> Sumilir saat ini menjadi salah satu desa wisata di Kabupaten Purbalingga yang patut dikunjungi. \n\n -> Rencana ini masih tentatif sekali, masih jauh dari kata pasti. \n\n -> Queen harus mendapatkan pengawasan ekstra ketika di rumah sendirian. \n\n -> Nana mengambil jurusan Teknik Sipil di Universitas Sebelas Maret. \n\n -> Komoditi Desa Pratin adalah sayur mayur.",
      },
    ],
  },
  {
    id: 28,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Bantuan rumah tidak layak huni diperuntukan kepada masyarakat miskin yang belum memiliki tempat tinggal dalam kondisi yang layak. Bantuannya berupa bahan bangunan senilai dua puluh juta. Masyarakat yang menerima bantuan tersebut harus menyediakan uang sendiri untuk membiayai pembanguman perbaikan rumahnya. Tak sedikit yang tidak mau diberi bantuan ini, karena tidak memiliki biaya untuk membayar tukang. Perbaikan kata yang tepat pada wacana di atas adalah….",
      },
    ],
    options: [
      { label: "A", text: "bantuan seharusnya pembantuan", points: 0 },
      { label: "B", text: "menyediakan seharusnya bersedia", points: 0 },
      { label: "C", text: "perbaikan seharusnya memperbaiki", points: 0 },
      { label: "D", text: "penghilangan tanda koma sebelum kata 'karena'", points: 5 },
      { label: "E", text: "membayar seharusnya pembayaran", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: D**\n\nPerbaikan kata yang tepat pada wacana di atas adalah menghilangkan tanda koma sebelum kata 'karena'.",
      },
    ],
  },
  {
    id: 29,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Berdasarkan wacana Yahya dan Uge yang mengadopsi Uya, nilai moral dalam cerita tersebut adalah….",
      },
    ],
    options: [
      { label: "A", text: "Uya sangat menyayangi ibu angkatnya", points: 0 },
      { label: "B", text: "Wajah Uya hampir sama dengan ibu angkatnya", points: 0 },
      { label: "C", text: "Yahya dan Uge sangat menyayangi Uya", points: 5 },
      { label: "D", text: "Uya tidak memiliki ayah kandung", points: 0 },
      { label: "E", text: "Suatu hari, Ibu kandung Uya pasti menyesali perbuatannya", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: C**\n\nNilai moral dalam cerita tersebut adalah Yahya dan Uge sangat menyayangi Uya.",
      },
    ],
  },
  {
    id: 30,
    category: "TWK",
    content: [
      {
        type: "text",
        value:
          "Perhatikan paragraf berikut ini! Fatma sepertinya menyesal menikah dengan Deni. Kehidupannya setelah berumah tangga jauh dari kata bahagia. Setelah mereka berdua menikah, memang tak selang berapa lama Fatma hamil. Namun, disaat yang sama, Deni resign dari pekerjannya. Deni tak ingin lagi bekerja di perusahaan yang telah mengharumkan namanya. Kini, Deni hanya makan dan tidur saja di rumah. Sebagai seorang istri, Fatma sangat kecewa dengan sikap Deni saat ini. Saat Fatma bekerja, Deni masih saja tidur. Ketika pulang dari kantor pun, Deni masih saja tidur. Berdasarkan penggalan paragraph di atas, ide pokoknya adalah….",
      },
    ],
    options: [
      { label: "A", text: "Kehidupannya setelah berumah tangga jauh dari kata bahagia", points: 0 },
      {
        label: "B",
        text: "Setelah mereka berdua menikah, memang tak selang berapa lama Fatma hamil",
        points: 0,
      },
      { label: "C", text: "Namun, disaat yang sama, Deni resign dari pekerjannya", points: 0 },
      { label: "D", text: "Fatma sepertinya menyesal menikah dengan Deni", points: 5 },
      {
        label: "E",
        text: "Sebagai seorang istri, Fatma sangat kecewa dengan perbuatan Deni",
        points: 0,
      },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: D**\n\nBerdasarkan penggalan paragraph di atas, ide pokoknya adalah Fatma sepertinya menyesal menikah dengan Deni.",
      },
    ],
  },
  {
    id: 31,
    category: "TIU",
    content: [
      {
        type: "text",
        value:
          "Suatu seri angka sebagai berikut: 58, 96, 73, 86, 88, 76, …, … seri selanjutnya adalah…",
      },
    ],
    options: [
      { label: "A", text: "104, 55", points: 0 },
      { label: "B", text: "102, 88", points: 0 },
      { label: "C", text: "103, 66", points: 5 },
      { label: "D", text: "88, 100", points: 0 },
      { label: "E", text: "200, 100", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: C**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-31.png",
      },
    ],
  },
  {
    id: 32,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Suatu seri angka sebagai berikut: 4, 6, 10, 16, 26, … seri selanjutnya adalah…",
      },
    ],
    options: [
      { label: "A", text: "10", points: 0 },
      { label: "B", text: "16", points: 0 },
      { label: "C", text: "42", points: 5 },
      { label: "D", text: "26", points: 0 },
      { label: "E", text: "50", points: 0 },
    ],

    explanation: [
      {
        type: "text",
        value: "**Jawaban: C**\n\n Deret Fibonaci",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-32.png",
      },
    ],
  },
  {
    id: 33,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Suatu seri angka sebagai berikut: 3, 12, 48, 192, … seri selanjutnya adalah…",
      },
    ],
    options: [
      { label: "A", text: "700", points: 0 },
      { label: "B", text: "855", points: 0 },
      { label: "C", text: "768", points: 5 },
      { label: "D", text: "777", points: 0 },
      { label: "E", text: "488", points: 0 },
    ],

    explanation: [
      {
        type: "text",
        value: "**Jawaban: C**\n\n ",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-33.png",
      },
    ],
  },
  {
    id: 34,
    category: "TIU",
    content: [
      {
        type: "text",
        value:
          "Suatu seri angka sebagai berikut: 60, 10, 70, 7, 80, 4, 90, … seri selanjutnya adalah..",
      },
    ],
    options: [
      { label: "A", text: "4", points: 0 },
      { label: "B", text: "1", points: 5 },
      { label: "C", text: "100", points: 0 },
      { label: "D", text: "5", points: 0 },
      { label: "E", text: "70", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n ",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-34.png",
      },
    ],
  },
  {
    id: 35,
    category: "TIU",
    content: [
      { type: "text", value: "Sebuah pabrik memproduksi 50 roti dalam waktu 60 menit." },
      { type: "image", value: "/tryout-1/question-35.png" },
      { type: "text", value: "Manakah hubungan yang benar antara kuantitas A dan B berikut?" },
    ],
    options: [
      { label: "A", text: "A > B", points: 0 },
      { label: "B", text: "2A > B", points: 0 },
      { label: "C", text: "2A > 2B", points: 0 },
      { label: "D", text: "A < B", points: 5 },
      { label: "E", text: "A = B", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: D**\n\n ",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-35.png",
      },
    ],
  },
  {
    id: 36,
    category: "TIU",
    content: [
      { type: "text", value: "Diketahui x = 2, y = 3." },
      { type: "image", value: "/tryout-1/question-36.png" },
    ],
    options: [
      { label: "A", text: "A > B", points: 0 },
      { label: "B", text: "A + 2 = B", points: 5 },
      { label: "C", text: "A < 2B", points: 0 },
      { label: "D", text: "A = B", points: 0 },
      { label: "E", text: "2A = 3B", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n ",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-36.png",
      },
    ],
  },
  {
    id: 37,
    category: "TIU",
    content: [
      {
        type: "text",
        value:
          "Satu lusin baju dibeli dengan harga Rp. 480.000. berapakah harga 15 baju yang sama?",
      },
    ],
    options: [
      { label: "A", text: "Rp. 540.000", points: 0 },
      { label: "B", text: "Rp. 560.000", points: 0 },
      { label: "C", text: "Rp. 600.000", points: 5 },
      { label: "D", text: "Rp. 720.000", points: 0 },
      { label: "E", text: "Rp. 800.000", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: C**\n\n Perbandingan Senilai",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-37.png",
      },
    ],
  },
  {
    id: 38,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Harga 14 buku adalah Rp. 65.800, maka harga 35 buku adalah…",
      },
    ],
    options: [
      { label: "A", text: "Rp. 142.100", points: 0 },
      { label: "B", text: "Rp. 142.450", points: 0 },
      { label: "C", text: "Rp. 162.500", points: 0 },
      { label: "D", text: "Rp. 164.500", points: 5 },
      { label: "E", text: "Rp. 165.400", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: D**\n\n Perbandingan Senilai ",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-38.png",
      },
    ],
  },
  {
    id: 39,
    category: "TIU",
    content: [
      {
        type: "text",
        value: `Bacalah informasi berikut untuk menjawab pertanyaan nomor 39 – 43! \n\n
6 orang pelari yang bernama Ayu, Budi, Cica, Dede, dan Egi serta Fajar melakukan lomba lari untuk memperebutkan medali emas. Budi tidak mampu mengungguli kecepatan Cica, Dede berlari lebih cepat dari Cica, Egi tidak bisa mendahului Dede, Fajar lebih cepat dibanding Budi, Ayu berlari dan lebih unggul dari Dede.
Siapa yang mendapatkan medali emas?`,
      },
    ],
    options: [
      { label: "A", text: "Ayu", points: 5 },
      { label: "B", text: "Budi", points: 0 },
      { label: "C", text: "Cica", points: 0 },
      { label: "D", text: "Dede", points: 0 },
      { label: "E", text: "Egi", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: A**",
      },
    ],
  },
  {
    id: 40,
    category: "TIU",
    content: [
      {
        type: "text",
        value:
          "Berdasarkan informasi pelari di atas, siapa yang mencapai garis finish di urutan ke-2?",
      },
    ],
    options: [
      { label: "A", text: "Ayu", points: 0 },
      { label: "B", text: "Budi", points: 0 },
      { label: "C", text: "Cica", points: 0 },
      { label: "D", text: "Dede", points: 5 },
      { label: "E", text: "Egi", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: D**",
      },
    ],
  },
  {
    id: 41,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Berdasarkan informasi pelari di atas, Cica finish di urutan ke berapa?",
      },
    ],
    options: [
      { label: "A", text: "2", points: 0 },
      { label: "B", text: "3", points: 0 },
      { label: "C", text: "4", points: 5 },
      { label: "D", text: "5", points: 0 },
      { label: "E", text: "6", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: C**",
      },
    ],
  },
  {
    id: 42,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Berdasarkan informasi pelari di atas, Fajar hanya berlari lebih cepat dari?",
      },
    ],
    options: [
      { label: "A", text: "Ayu", points: 0 },
      { label: "B", text: "Budi", points: 5 },
      { label: "C", text: "Cica", points: 0 },
      { label: "D", text: "Dede", points: 0 },
      { label: "E", text: "Egi", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**",
      },
    ],
  },
  {
    id: 43,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Urutan pelari dari yang tercepat adalah?",
      },
    ],
    options: [
      { label: "A", text: "Ayu – Dede – Egi – Cica – Fajar – Budi", points: 5 },
      { label: "B", text: "Ayu – Egi – Dede – Cica – Fajar – Budi", points: 0 },
      { label: "C", text: "Egi – Dede – Ayu – Cica – Budi – Fajar", points: 0 },
      { label: "D", text: "Fajar – Egi – Dede – Cica – Budi – Ayu", points: 0 },
      { label: "E", text: "Egi – Cica – Dede – Ayu – Fajar – Budi", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: A**",
      },
    ],
  },
  {
    id: 44,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Nilai dari $\\frac{3}{4} \\div \\frac{2}{3} = \\dots$",
      },
    ],
    options: [
      { label: "A", text: "$\\frac{8}{9}$", points: 0 },
      { label: "B", text: "$\\frac{9}{8}$", points: 5 },
      { label: "C", text: "$\\frac{7}{8}$", points: 0 },
      { label: "D", text: "$\\frac{6}{7}$", points: 0 },
      { label: "E", text: "$\\frac{5}{9}$", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-44.png",
      },
    ],
  },
  {
    id: 45,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Nilai $12 \\times 11 \\div \\frac{1}{10} = \\dots$",
      },
    ],
    options: [
      { label: "A", text: "1320", points: 5 },
      { label: "B", text: "1321", points: 0 },
      { label: "C", text: "1319", points: 0 },
      { label: "D", text: "1400", points: 0 },
      { label: "E", text: "1330", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: A**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-45.png",
      },
    ],
  },
  {
    id: 46,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Nilai dari $\\frac{1}{6} - 3 \\frac{1}{2} + \\frac{6}{3} = \\dots$",
      },
    ],
    options: [
      { label: "A", text: "$-\\frac{1}{4}$", points: 0 },
      { label: "B", text: "$\\frac{4}{3}$", points: 0 },
      { label: "C", text: "$\\frac{2}{3}$", points: 0 },
      { label: "D", text: "$\\frac{3}{4}$", points: 0 },
      { label: "E", text: "$-\\frac{4}{3}$", points: 5 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: E**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-46.png",
      },
    ],
  },
  {
    id: 47,
    category: "TIU",
    content: [
      {
        type: "text",
        value:
          "Semua peserta CPNS wajib menggunakan kemeja putih dan celana hitam. Aldi adalah peserta CPNS, simpulan yang tepat adalah…",
      },
    ],
    options: [
      { label: "A", text: "Aldi menggunakan kemeja putih", points: 0 },
      { label: "B", text: "Aldi menggunakan celana hitam", points: 0 },
      { label: "C", text: "Aldi menggunakan kemeja putih dan celana hitam", points: 5 },
      { label: "D", text: "Aldi menggunakan kemeja putih atau celana hitam", points: 0 },
      { label: "E", text: "Aldi tidak menggunakan kemeja putih atau celana hitam", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: C**\n\n**Premis 1** &nbsp;&nbsp;&nbsp;&nbsp;: Semua peserta CPNS wajib menggunakan kemeja putih dan celana hitam.\n**Premis 2** &nbsp;&nbsp;&nbsp;&nbsp;: Aldi adalah peserta CPNS.\n**Kesimpulan** : Aldi menggunakan kemeja putih dan celana hitam.",
      },
    ],
  },
  {
    id: 48,
    category: "TIU",
    content: [
      {
        type: "text",
        value:
          "Jika rajin belajar, Adi dapat diterima di sekolah kedinasan favorit. Adi tidak diterima di sekolah kedinasan. Simpulan yang tepat adalah…",
      },
    ],
    options: [
      { label: "A", text: "Adi rajin belajar", points: 0 },
      { label: "B", text: "Adi tidak rajin belajar", points: 5 },
      { label: "C", text: "Adi diterima di sekolah perguruan tinggi negeri", points: 0 },
      { label: "D", text: "Adi tidak menyukai matakuliah di sekolah kedinasan", points: 0 },
      { label: "E", text: "Adi harus bersaing dengan banyak orang", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: B**\n\n **Premis 1** &nbsp;&nbsp;&nbsp;&nbsp;: Jika rajin belajar, Adi dapat diterima di sekolah kedinasan favorit. \n**Premis 2** &nbsp;&nbsp;&nbsp;&nbsp;: Adi tidak diterima di sekolah kedinasan.\n**Kesimpulan** : Adi tidak rajin belajar.",
      },
    ],
  },
  {
    id: 49,
    category: "TIU",
    content: [
      {
        type: "text",
        value:
          "Tidak semua pengusaha kaya. Beberapa peserta seleksi adalah pengusaha. Simpulan yang tepat adalah…",
      },
    ],
    options: [
      { label: "A", text: "Semua pengusaha adalah peserta seleksi", points: 0 },
      { label: "B", text: "Semua peserta seleksi tidak kaya", points: 0 },
      { label: "C", text: "Beberapa pengusaha tidak kaya", points: 0 },
      { label: "D", text: "Beberapa peserta seleksi tidak kaya", points: 5 },
      { label: "E", text: "Semua peserta seleksi kaya", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: D**\n\n **Premis 1** &nbsp;&nbsp;&nbsp;&nbsp;: Tidak semua pengusaha kaya. \n**Premis 2** &nbsp;&nbsp;&nbsp;&nbsp;: Beberapa peserta seleksi adalah pengusaha.\n**Kesimpulan** : Beberapa peserta seleksi tidak kaya.",
      },
    ],
  },
  {
    id: 50,
    category: "TIU",
    content: [
      {
        type: "text",
        value:
          "Semua siswa kelas 9 SMP adalah murid yang pintar. Agung bukan siswa kelas 9 SMP. Simpulan yang tepat adalah...",
      },
    ],
    options: [
      { label: "A", text: "Agung adalah murid yang pintar", points: 0 },
      { label: "B", text: "Agung adalah murid yang tidak pintar", points: 5 },
      { label: "C", text: "Agung adalah murid kelas 10 SMP", points: 0 },
      { label: "D", text: "Agung adalah murid yang rajin", points: 0 },
      { label: "E", text: "Agung adalah siswa SMP", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: B**\n\n **Premis 1** &nbsp;&nbsp;&nbsp;&nbsp;: Semua siswa kelas 9 SMP adalah murid yang pintar. \n**Premis 2** &nbsp;&nbsp;&nbsp;&nbsp;: Agung bukan siswa kelas 9 SMP.\n**Kesimpulan** : Agung adalah murid yang tidak pintar.",
      },
    ],
  },
  {
    id: 51,
    category: "TIU",
    content: [
      {
        type: "text",
        value:
          "Semua peserta CPNS tahun 2023 melaksanakan SKD di BKN dan menggunakan kemeja putih. Budi berada di BKN, namun ia menggunakan pakaian batik. Simpulan yang tepat adalah...",
      },
    ],
    options: [
      { label: "A", text: "Budi tidak berada di BKN", points: 0 },
      { label: "B", text: "Budi sedang di rumahnya", points: 0 },
      { label: "C", text: "Budi adalah peserta CPNS tahun 2023", points: 0 },
      { label: "D", text: "Budi bukan peserta CPNS tahun 2023", points: 5 },
      { label: "E", text: "Budi adalah panitia CPNS tahun 2023", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: D**\n\n **Premis 1** &nbsp;&nbsp;&nbsp;&nbsp;: Semua peserta CPNS tahun 2023 melaksanakan SKD di Badan Kepegawaian Negara, mereka menggunakan kemeja putih. \n**Premis 2** &nbsp;&nbsp;&nbsp;&nbsp;: Budi berada di Badan Kepegawaian Negara, ia menggunakan pakaian batik.\n**Kesimpulan** : Budi bukan peserta CPNS tahun 2023.",
      },
    ],
  },
  {
    id: 52,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Dosen : Universitas = …",
      },
    ],
    options: [
      { label: "A", text: "Mahasiswa : Kuliah", points: 0 },
      { label: "B", text: "Guru : Murid", points: 0 },
      { label: "C", text: "Dokter : Rumah sakit", points: 5 },
      { label: "D", text: "Perawat : Pasien", points: 0 },
      { label: "E", text: "Nelayan : Ikan", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: C**\n\n➡ &nbsp; Dosen adalah tenaga pengajar di universitas.\n\n➡ &nbsp; Dokter adalah tenaga medis di rumah sakit.",
      },
    ],
  },
  {
    id: 53,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Memasak : Kompor = Menulis : …",
      },
    ],
    options: [
      { label: "A", text: "Sekolah", points: 0 },
      { label: "B", text: "Pulpen", points: 5 },
      { label: "C", text: "Gunting", points: 0 },
      { label: "D", text: "Penggaris", points: 0 },
      { label: "E", text: "Buku", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: B**\n\n➡ &nbsp; Kompor digunakan untuk memasak.\n➡ &nbsp; Pulpen digunakan untuk menulis.",
      },
    ],
  },
  {
    id: 54,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Sutradara : Film = …",
      },
    ],
    options: [
      { label: "A", text: "Penulis : Buku", points: 5 },
      { label: "B", text: "Bermain musik : Orkestra", points: 0 },
      { label: "C", text: "Masakan : Koki", points: 0 },
      { label: "D", text: "Insinyur : Jembatan", points: 0 },
      { label: "E", text: "Lukisan : Pelukis", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: A**\n\n➡ &nbsp; 	Film dibuat oleh sutradara. \n➡ &nbsp; 	Buku dibuat oleh penulis.",
      },
    ],
  },
  {
    id: 55,
    category: "TIU",
    content: [
      {
        type: "text",
        value:
          "Tukang kebun mencari sekop yang hilang di halaman. Pola kalimat tersebut sama dengan pola kalimat…",
      },
    ],
    options: [
      { label: "A", text: "Petani berladang di tengah perkebunan", points: 0 },
      { label: "B", text: "Mereka bertani dengan penuh dedikasi", points: 0 },
      { label: "C", text: "Di perkebunan banyak tanaman yang subur", points: 0 },
      { label: "D", text: "Hasil panen dijual di pasar", points: 0 },
      { label: "E", text: "Petani itu juga menjual hasil panen di pagi hari", points: 5 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: E**\n\n**Soal** : Benda itu (s) belum dapat dimanfaatkan (p) di dunia teknologi (ket).\n\n**A** : Privasi seseorang (s) harus dijaga dengan baik (p) di setiap situasi (ket).\n**B** : Presentasi itu (s) memerlukan (p) persiapan yang serius (o) dalam kurung waktu lima jam (ket).\n**C** : Aktivitas sosial (s) mewakili (p) pandangan mereka (o) di forum pemerintahan (s).\n**D** : Konflik apapun (s) selalu merugikan (p) warga kurang mampu (o).\n**E** : Saya (s) masih belum tahu tentang (p) insiden menegangkan itu (o).",
      },
    ],
  },
  {
    id: 56,
    category: "TIU",
    content: [
      {
        type: "text",
        value:
          "Benda itu belum dapat dimanfaatkan di dunia teknologi. Pola kalimat tersebut sama dengan pola kalimat…",
      },
    ],
    options: [
      {
        label: "A",
        text: "Privasi seseorang harus dijaga dengan baik di setiap situasi",
        points: 5,
      },
      { label: "B", text: "Presentasi itu memerlukan persiapan yang serius", points: 0 },
      { label: "C", text: "Aktivitas sosial mewakili pandangan mereka", points: 0 },
      { label: "D", text: "Konflik apapun selalu merugikan warga", points: 0 },
      { label: "E", text: "Saya masih belum tahu tentang insiden itu", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: A**\n\n**Soal** : Benda itu (s) belum dapat dimanfaatkan (p) di dunia teknologi (ket).\n\n**A** : Privasi seseorang (s) harus dijaga dengan baik (p) di setiap situasi (ket).\n**B** : Presentasi itu (s) memerlukan (p) persiapan yang serius (o) dalam kurung waktu lima jam (ket).\n**C** : Aktivitas sosial (s) mewakili (p) pandangan mereka (o) di forum pemerintahan (s).\n**D** : Konflik apapun (s) selalu merugikan (p) warga kurang mampu (o).\n**E** : Saya (s) masih belum tahu tentang (p) insiden menegangkan itu (o).",
      },
    ],
  },
  {
    id: 57,
    category: "TIU",
    content: [
      {
        type: "text",
        value:
          "Bunga mawar merah muda memiliki warna yang sangat memikat. Pola kalimat tersebut setara dengan pola kalimat…",
      },
    ],
    options: [
      { label: "A", text: "Dani menjual pepaya yang sangat manis", points: 5 },
      { label: "B", text: "Populasi pohon durian di Medan cukup besar", points: 0 },
      { label: "C", text: "Pedagang menjajakan manggis di pasar", points: 0 },
      { label: "D", text: "Aroma anggrek tercium pada jarak 2-3 meter", points: 0 },
      { label: "E", text: "Lahan kurang produktif dimanfaatkan sebagai kebun", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: A**\n\n**Soal** : Bunga mawar merah muda (s) memiliki (p) warna yang sangat memikat (o).\n\n**A** : Dani (s) menjual (p) papaya yang sangat manis (o).\n**B** : populasi pohon durian (s) di Medan (ket) cukup besar (p).\n**C** : Pedagang (s) menjajakan (p) manggis (o) di pasar (ket).\n**D** : Aroma anggrek (s) tercium (p) pada jarak 2-3 meter (ket).\n**E** : Lahan-lahan yang kurang produktif (s) dimanfaatkan (p) sebagai kebun stroberi (ket).",
      },
    ],
  },
  {
    id: 58,
    category: "TIU",
    content: [
      {
        type: "text",
        value:
          "Saya menyelesaikan tugas ini dengan hati-hati. Pola kalimat tersebut sama dengan pola kalimat…",
      },
    ],
    options: [
      { label: "A", text: "Acara tersebut akan diadakan minggu depan", points: 0 },
      {
        label: "B",
        text: "Dia memberikan laporan tentang hasil kunjungannya pekan lalu",
        points: 5,
      },
      { label: "C", text: "Dia tiba bersama seorang teman", points: 0 },
      { label: "D", text: "Wadah yang berisi sup tumpah", points: 0 },
      { label: "E", text: "Beberapa siswa mempertanyakan kebijakan tersebut", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: B**\n\n**Soal** : Saya (s) menyelesaikan (p) tugas ini (o) dengan hati-hati (ket).\n\n**A** : Acara tersebut (s) akan diadakan (p) minggu depan (ket).\n**B** : Dia (s) memberikan (p) laporan tentang hasil kunjungannya (o) pekan lalu (ket).\n**C** : Dia (s) tiba (p) bersama seorang teman (ket).\n**D** : Wadah yang berisi sup (s) tumpah (p).\n**E** : Beberapa siswa (s) mempertanyakan (p) kebijakan tersebut (o).",
      },
    ],
  },
  {
    id: 59,
    category: "TIU",
    content: [
      { type: "text", value: "Perhatikan tabel berikut ini!" },
      { type: "image", value: "/tryout-1/question-59.png" },
      {
        type: "text",
        value:
          "Jika belajar sebelum pukul 18.00 dianggap belajar lebih awal dan belajar pukul 21.00 ke atas dianggap belajar lebih malam, pernyataan yang benar adalah…",
      },
    ],
    options: [
      { label: "A", text: "Pelajar kelas 8 cenderung belajar lebih malam", points: 5 },
      { label: "B", text: "Pelajar kelas 12 cenderung belajar lebih awal", points: 0 },
      { label: "C", text: "Pelajar kelas 8 cenderung belajar lebih awal", points: 0 },
      { label: "D", text: "Pelajar kelas 8 dan kelas 12 cenderung belajar lebih malam", points: 0 },
      { label: "E", text: "Pelajar kelas 12 cenderung belajar lebih malam", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: A**\n\n➡ &nbsp; **Belajar lebih awal**\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kelas 8 &nbsp;&nbsp;=> 10 + 20 + 30 = 60\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kelas 12 => 15 + 25 + 35 = 75\n\n➡ &nbsp; **Belajar lebih malam**\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kelas 8 &nbsp;&nbsp;=> 15 + 50 + 45 = 110\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kelas 12 => 25 + 10 + 5 = 40\n\nMaka kesimpulannya adalah pelajar kelas 8 cenderung belajar lebih malam.",
      },
    ],
  },
  {
    id: 60,
    category: "TIU",
    content: [
      {
        type: "text",
        value:
          "Pilihlah salah satu dari gambar A, B, C, D dan E untuk mengisi kotak nomor 4 sehingga memiliki hubungan yang sama dengan gambar 1 dan 2!",
      },
      {
        type: "image",
        value: "/tryout-1/question-60.png",
      },
    ],
    options: [
      { label: "A", text: "Opsi A", image: "/tryout-1/question-60-opsi-A.png", points: 0 },
      { label: "B", text: "Opsi B", image: "/tryout-1/question-60-opsi-B.png", points: 0 },
      { label: "C", text: "Opsi C", image: "/tryout-1/question-60-opsi-C.png", points: 0 },
      { label: "D", text: "Opsi D", image: "/tryout-1/question-60-opsi-D.png", points: 5 },
      { label: "E", text: "Opsi E", image: "/tryout-1/question-60-opsi-E.png", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: D**\n\n➡ &nbsp; Gambar kedua merupakan hasil dari gambar pertama yang diputar 180°\n➡ &nbsp; Kemudian dibagian kanan atas gambar kedua ditambahkan bentuk persegi warna hitam.",
      },
    ],
  },
  {
    id: 61,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Analogi Gambar",
      },
      {
        type: "text",
        value: "Pilihlah gambar yang sesuai untuk mengisi kotak kosong!",
      },
      {
        type: "image",
        value: "/tryout-1/question-61.png",
      },
    ],
    options: [
      { label: "A", text: "Opsi A", image: "/tryout-1/question-61-opsi-A.png", points: 0 },
      { label: "B", text: "Opsi B", image: "/tryout-1/question-61-opsi-B.png", points: 5 },
      { label: "C", text: "Opsi C", image: "/tryout-1/question-61-opsi-C.png", points: 0 },
      { label: "D", text: "Opsi D", image: "/tryout-1/question-61-opsi-D.png", points: 0 },
      { label: "E", text: "Opsi E", image: "/tryout-1/question-61-opsi-E.png", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: B**\n\n➡ &nbsp; Pada analogi pertama, gambar diputar 45° searah jarum jam. Maka pada analogi kedua juga demikian.\n➡ &nbsp; Pada analogi pertama, ditambahkan simbol ditengah badan. Maka pada analogi kedua, gambar pertama tidak memiliki simbol dibadannya.\n➡ &nbsp; Pada analogi pertama, warna kepala berubah sedangkan warna badan tidak. Maka pada analogi kedua, warna kepala awalnya adalah putih (kemudian berubah menjadi hitam).",
      },
    ],
  },
  {
    id: 62,
    category: "TIU",

    content: [
      {
        type: "text",
        value: "Analogi Gambar: Tentukan gambar ke-4 berdasarkan pola hubungan gambar 1 dan 2!",
      },
      {
        type: "image",
        value: "/tryout-1/question-62.png",
      },
    ],
    options: [
      { label: "A", text: "Opsi A", image: "/tryout-1/question-62-opsi-A.png", points: 0 },
      { label: "B", text: "Opsi B", image: "/tryout-1/question-62-opsi-B.png", points: 0 },
      { label: "C", text: "Opsi C", image: "/tryout-1/question-62-opsi-C.png", points: 5 },
      { label: "D", text: "Opsi D", image: "/tryout-1/question-62-opsi-D.png", points: 0 },
      { label: "E", text: "Opsi E", image: "/tryout-1/question-62-opsi-E.png", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: C**\n\n➡ &nbsp; Pada analogi yang pertama, gambar besar yang di tengah berubah warna hitam menjadi putih (warna berlawanan). Maka pada analogi kedua, gambar besarnya juga berubah menjadi warna yang berlawanan (putih menjadi hitam).\n➡ &nbsp; Ada dua gambar kecil yang berada pada bagian kiri dan kanan atas. Kedua gambar ditukar posisinya, namun tetap dengan warnanya masing-masing. Lalu gambar kecil yang di sebelah kanan berubah dari titik sudut 3 menjadi titik sudut 4 (jumlah titik sudut bertambah 1). Maka pada analogi kedua, gambar kecil di sebelah kanan juga berubah bentuk dari titik sudut 5 menjadi titik sudut 6 (titik sudut bertambah 1).",
      },
    ],
  },
  {
    id: 63,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Serial Gambar: Pilihlah kelanjutan gambar yang paling tepat!",
      },
      {
        type: "image",
        value: "/tryout-1/question-63.png",
      },
    ],
    options: [
      { label: "A", text: "Opsi A", image: "/tryout-1/question-63-opsi-A.png", points: 0 },
      { label: "B", text: "Opsi B", image: "/tryout-1/question-63-opsi-B.png", points: 0 },
      { label: "C", text: "Opsi C", image: "/tryout-1/question-63-opsi-C.png", points: 0 },
      { label: "D", text: "Opsi D", image: "/tryout-1/question-63-opsi-D.png", points: 0 },
      { label: "E", text: "Opsi E", image: "/tryout-1/question-63-opsi-E.png", points: 5 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: E**\n\n➡ &nbsp; Perhatikan tanda panah berputar sesuai arah jarum jam.\n➡ &nbsp; Kemudian liat perubahan warna yang terjadi dari hitam ke putih dan sebaliknya.",
      },
    ],
  },
  {
    id: 64,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Serial Gambar: Tentukan gambar selanjutnya dalam urutan berikut!",
      },
      {
        type: "image",
        value: "/tryout-1/question-64.png",
      },
    ],
    options: [
      { label: "A", text: "Opsi A", image: "/tryout-1/question-64-opsi-A.png", points: 5 },
      { label: "B", text: "Opsi B", image: "/tryout-1/question-64-opsi-B.png", points: 0 },
      { label: "C", text: "Opsi C", image: "/tryout-1/question-64-opsi-C.png", points: 0 },
      { label: "D", text: "Opsi D", image: "/tryout-1/question-64-opsi-D.png", points: 0 },
      { label: "E", text: "Opsi E", image: "/tryout-1/question-64-opsi-E.png", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: A**\n\n➡ &nbsp; Perhatikan gambar, jumlah tanda anak panah bertambah 1 maka pada gambar ke empat terdapat 4 anak panah.\n➡ &nbsp; Kemudian pada gambar di tengah gambar 1 dan 3 warna putih maka gambar 2 dan 4 berwarna hitam.",
      },
    ],
  },
  {
    id: 65,
    category: "TIU",
    content: [
      {
        type: "text",
        value: "Figural: Pilihlah satu gambar yang berbeda dari keempat gambar lainnya!",
      },
    ],
    options: [
      { label: "A", text: "Opsi A", image: "/tryout-1/question-65-opsi-A.png", points: 0 },
      { label: "B", text: "Opsi B", image: "/tryout-1/question-65-opsi-B.png", points: 0 },
      { label: "C", text: "Opsi C", image: "/tryout-1/question-65-opsi-C.png", points: 5 },
      { label: "D", text: "Opsi D", image: "/tryout-1/question-65-opsi-D.png", points: 0 },
      { label: "E", text: "Opsi E", image: "/tryout-1/question-65-opsi-E.png", points: 0 },
    ],
    explanation: [
      {
        type: "text",
        value:
          "**Jawaban: C**\n\n➡ &nbsp; Pada gambar A, B, D, dan E memiliki jumlah bintang genap, sedangkan pada gambar C jumlah bintangnya ganjil.",
      },
    ],
  },
  {
    id: 66,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Seorang tukang diminta untuk menata ruang tempat Anda bekerja, ternyata setelah Anda lihat ada beberapa posisi barang yang dirasa kurang pas. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Memanggil tukang dan komplain karena kerjanya tidak beres", points: 3 },
      {
        label: "B",
        text: "Meminta tukang menata ulang, sesuai instruksi Anda sambil Anda pantau",
        points: 4,
      },
      {
        label: "C",
        text: "Memanggil tukang, mengajak komunikasi dan diskusi sehingga bisa ditata ulang sesuai yang Anda inginkan",
        points: 5,
      },
      { label: "D", text: "Meminta tukang lain menata ulang", points: 2 },
      { label: "E", text: "Memanggil tukang, dan meluapkan kekesalan Anda", points: 1 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: C**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-66.png",
      },
    ],
  },
  {
    id: 67,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Saat melayani pendaftaran ulang siswa baru di sekolah, Yeti diprotes orang tua siswa karena tidak ramah serta terlalu lama dalam melayani. Sikap Yeti seharusnya ….",
      },
    ],
    options: [
      { label: "A", text: "Meminta maaf", points: 2 },
      {
        label: "B",
        text: "Mengatakan bahwa banyak yang dilayani, jadi ia sudah lelah dalam beramah tamah",
        points: 1,
      },
      { label: "C", text: "Meminta maaf dan menebar senyuman", points: 4 },
      { label: "D", text: "Menebar senyum dan mempercepat pelayanan", points: 3 },
      { label: "E", text: "Meminta maaf dan mempercepat pelayanan", points: 5 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: E**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-67.png",
      },
    ],
  },
  {
    id: 68,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Saat sedang mengecek data siswa kebetulan Anda terkendala koneksi internet yang buruk sehingga banyak orangtua siswa baru yang protes. Sikap Anda",
      },
    ],
    options: [
      { label: "A", text: "Meminta maaf", points: 2 },
      {
        label: "B",
        text: "Meminta maaf dan berusaha memberi pengertian terkait kendala koneksi internet",
        points: 5,
      },
      {
        label: "C",
        text: "Memberi pengertian bahwa lebih baik sabar karena ada kendala teknis",
        points: 4,
      },
      { label: "D", text: "Mengatakan jika tidak mau menunggu lebih baik pulang", points: 1 },
      { label: "E", text: "Akan mempercepat pelayanan dengan bantuan teman", points: 3 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-68.png",
      },
    ],
  },
  {
    id: 69,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "PPKM di daerah Anda yang semula level 2 kembali menjadi level 3 karena presentase lansia yang sudah divaksin belum 50%. Sebagai bupati, upaya Anda adalah...",
      },
    ],
    options: [
      {
        label: "A",
        text: "Menggandeng tenaga kesehatan untuk melakukan vaksin dari pintu ke pintu",
        points: 5,
      },
      { label: "B", text: "Membuat antrean yang nyaman bagi lansia", points: 1 },
      {
        label: "C",
        text: "Menggandeng praktek bidan agar lansia bisa vaksin di lokasi dekat rumah",
        points: 4,
      },
      { label: "D", text: "Memberikan hadiah kepada lansia yang mau divaksin", points: 2 },
      { label: "E", text: "Membuat jadwal vaksin untuk lansia secara fleksibel", points: 3 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: A**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-69.png",
      },
    ],
  },
  {
    id: 70,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Ketika melayani nasabah, teman Anda yang bertugas sebagai teller pingsan karena kelelahan. Antrean di tempat Anda sedang kosong, sikap Anda ….",
      },
    ],
    options: [
      { label: "A", text: "Meminta nasabah untuk mengantre di loket Anda saja", points: 2 },
      {
        label: "B",
        text: "Menolong teman yang pingsan kemudian mengalihkan antrean ke tempat Anda",
        points: 5,
      },
      {
        label: "C",
        text: "Meminta teman lain membantu melayani dan Anda menolong teman yang pingsan",
        points: 3,
      },
      {
        label: "D",
        text: "Memanggil teman lain membantu yang pingsan, Anda melayani masyarakat",
        points: 4,
      },
      { label: "E", text: "Menolong teman yang pingsan meski mengabaikan antrean", points: 1 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-70.png",
      },
    ],
  },
  {
    id: 71,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Ketika nasabah tidak paham instruksi dalam mengisi form pembukaan rekening, yang Anda lakukan sebagai petugas pelayanan adalah ….",
      },
    ],
    options: [
      { label: "A", text: "Mengulang instruksi berkali-kali", points: 4 },
      {
        label: "B",
        text: "Mengulang instruksi dengan lebih lambat dan memberi penekanan",
        points: 3,
      },
      {
        label: "C",
        text: "Memberi penjelasan dengan bahasa yang lebih sederhana dan mudah dipahami",
        points: 5,
      },
      { label: "D", text: "Memberi penjelasan dengan memberi penekanan", points: 2 },
      { label: "E", text: "Meminta teman lain menjelaskan", points: 1 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: C**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-71.png",
      },
    ],
  },
  {
    id: 72,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Ketika menyelesaikan laporan kantor yang ditugaskan atasan, maka Anda ….",
      },
    ],
    options: [
      { label: "A", text: "Menyelesaikan sesuai arahan atasan", points: 4 },
      { label: "B", text: "Menyelesaikan secepat mungkin agar terkesan rajin", points: 1 },
      { label: "C", text: "Mengerjakan dengan teliti", points: 3 },
      { label: "D", text: "Menyelesaikan dengan bantuan teman", points: 2 },
      { label: "E", text: "Memberikan hasil yang baik dan benar", points: 5 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: E**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-72.png",
      },
    ],
  },
  {
    id: 73,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Sebagai Lurah, menyikapi keluhan masyarakat terkait penerima bansos yang tidak merata dan kurang tepat sasaran, Anda akan …",
      },
    ],
    options: [
      {
        label: "A",
        text: "Meminta bawahan melakukan pendataan ulang dan survei rumah ke rumah",
        points: 4,
      },
      { label: "B", text: "Mengecek data dan mengonfirmasi kepada RT setempat", points: 2 },
      {
        label: "C",
        text: "Mengecek kebenaran data dan mewawancarai warga calon penerima",
        points: 3,
      },
      {
        label: "D",
        text: "Bersama RT dan RW mengecek data, melakukan survei dan wawancara",
        points: 5,
      },
      { label: "E", text: "Meminta masyarakat membuat surat pernyataan kebenaran data", points: 1 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: D**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-73.png",
      },
    ],
  },
  {
    id: 74,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Seorang guru sering mangkir dari jadwal intensifikasi kelas XII. Sebagai Wakil Kepala Sekolah Urusan Kurikulum, sikap Anda …",
      },
    ],
    options: [
      {
        label: "A",
        text: "Meminta masukan dari guru lain untuk mencari solusi ketertinggalan siswa",
        points: 4,
      },
      { label: "B", text: "Menegur guru yang bersangkutan agar disiplin", points: 3 },
      { label: "C", text: "Meminta pendapat siswa jika mungkin ada guru pengganti", points: 1 },
      { label: "D", text: "Mencari guru pengganti yang lebih bertanggung jawab", points: 2 },
      {
        label: "E",
        text: "Mengajak dialog guru dan siswa untuk mencari solusi bersama",
        points: 5,
      },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: E**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-74.png",
      },
    ],
  },
  {
    id: 75,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Ada berkas penting butuh tanda tangan Kepala Sekolah yang sedang tidak di tempat. Sebagai Wakil Kepala Sekolah, Anda …",
      },
    ],
    options: [
      { label: "A", text: "Menelpon Kepala Sekolah untuk meminta pendapat", points: 4 },
      { label: "B", text: "Mewakili menandatangani dokumen", points: 2 },
      {
        label: "C",
        text: "Menandatangani dokumen dengan sebelumnya memberi tahu beliau",
        points: 3,
      },
      { label: "D", text: "Menunda menandatangani dokumen", points: 1 },
      {
        label: "E",
        text: "Menandatangani dengan keterangan mewakili atas dasar wewenang beliau",
        points: 5,
      },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: E**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-75.png",
      },
    ],
  },
  {
    id: 76,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Seorang anggota tim kurang cekatan karena sedang hamil sehingga tugas kelompok terbengkalai. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Mengonfirmasi apakah ia masih sanggup bekerja", points: 4 },
      { label: "B", text: "Membantu pekerjaan teman tersebut agar selesai", points: 5 },
      {
        label: "C",
        text: "Menegur agar tidak menjadikan kehamilan sebagai alasan leha-leha",
        points: 1,
      },
      { label: "D", text: "Memilih untuk tidak memikirkannya", points: 2 },
      {
        label: "E",
        text: "Mengajak teman lain untuk bersama-sama menyelesaikan bagiannya",
        points: 3,
      },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-76.png",
      },
    ],
  },
  {
    id: 77,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Sebagai laboran, Anda mendapat kritik bahwa banyak alat laboratorium tidak berfungsi baik. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Mengecek alat dan mencoba melakukan kalibrasi ulang", points: 4 },
      {
        label: "B",
        text: "Mengajak guru mengecek bersama dan mengelompokkan alat layak pakai",
        points: 5,
      },
      { label: "C", text: "Mengusulkan beli alat baru karena alat lama tidak layak", points: 2 },
      { label: "D", text: "Mengatakan sebaiknya guru tersebut mengkalibrasi sendiri", points: 1 },
      { label: "E", text: "Meminta guru tersebut menggunakan alat yang ada saja", points: 3 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-77.png",
      },
    ],
  },
  {
    id: 78,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Rekan kerja dalam tim terlihat kurang disiplin dan ogah-ogahan di tengah proyek. Sikap Anda …",
      },
    ],
    options: [
      {
        label: "A",
        text: "Menanyakan apakah ada masalah pribadi yang mengganggu kinerja",
        points: 3,
      },
      {
        label: "B",
        text: "Mencari cara agar rekan tersebut kembali bersemangat bekerja",
        points: 4,
      },
      {
        label: "C",
        text: "Mengajak teman lain bergabung membantu menyelesaikan tugasnya",
        points: 2,
      },
      {
        label: "D",
        text: "Memberi semangat dan mencari solusi percepatan dengan bantuan tim",
        points: 5,
      },
      { label: "E", text: "Menegur dan melaporkannya kepada atasan", points: 1 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: D**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-78.png",
      },
    ],
  },
  {
    id: 79,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Tugas tim terhambat karena kurang kompak. Sebagai ketua tim, Anda akan …",
      },
    ],
    options: [
      { label: "A", text: "Menegur semua anggota tim", points: 1 },
      { label: "B", text: "Melakukan evaluasi, diskusi, dan meningkatkan kekompakan", points: 5 },
      { label: "C", text: "Menegur anggota yang selama ini terkesan santai", points: 3 },
      { label: "D", text: "Membuat aturan baru untuk mendisiplinkan anggota", points: 4 },
      { label: "E", text: "Memberi peringatan keras dan ancaman", points: 2 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-79.png",
      },
    ],
  },
  {
    id: 80,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Anda menilai sekolah untuk akreditasi, namun rekan tim baru selesai cuti melahirkan sehingga kurang fokus. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Memaklumi karena hal tersebut tidak terhindarkan", points: 2 },
      { label: "B", text: "Menegur agar bisa fokus bekerja", points: 1 },
      { label: "C", text: "Memaklumi dan mengajaknya kembali fokus serta profesional", points: 5 },
      { label: "D", text: "Memberi peringatan bahwa cuti sudah berakhir", points: 3 },
      {
        label: "E",
        text: "Memaklumi namun tetap memberi sanksi jika masih tidak fokus",
        points: 4,
      },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: C**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-80.png",
      },
    ],
  },
  {
    id: 81,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Ketika terjadi pergantian pimpinan di perusahaan, sikap Anda sebagai karyawan adalah …",
      },
    ],
    options: [
      { label: "A", text: "Menerima apapun perubahan meski terasa berat", points: 4 },
      { label: "B", text: "Mengikuti segala kebijakan yang diterapkan pimpinan baru", points: 5 },
      { label: "C", text: "Berusaha menyesuaikan diri meski butuh waktu lama", points: 3 },
      { label: "D", text: "Memilih bekerja dengan ritme pimpinan lama", points: 1 },
      { label: "E", text: "Bekerja sesuai keinginan selama tidak ada teguran", points: 2 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-81.png",
      },
    ],
  },
  {
    id: 82,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Saat bertamu ke tetangga, teman menelpon ingin bertanya soal tes SKB yang baru Anda ikuti. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Mengatakan sedang di luar dan tidak bisa bicara lama", points: 2 },
      { label: "B", text: "Meminta maaf karena sedang sibuk", points: 1 },
      { label: "C", text: "Meminta maaf dan berjanji menelpon balik setelah pulang", points: 5 },
      { label: "D", text: "Mengatakan akan menelpon balik setelah tamu pulang", points: 4 },
      { label: "E", text: "Mengatakan tidak usah banyak bertanya", points: 3 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: C**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-82.png",
      },
    ],
  },
  {
    id: 83,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Menyikapi tetangga yang masih suka membakar sampah padahal asapnya sangat mengganggu, Anda akan …",
      },
    ],
    options: [
      { label: "A", text: "Memberi peringatan langsung dengan tulisan larangan", points: 2 },
      { label: "B", text: "Menggunjingkan dengan tetangga lain", points: 1 },
      { label: "C", text: "Mendatangi rumahnya dan berdiskusi soal pengelolaan sampah", points: 5 },
      { label: "D", text: "Melapor kepada ketua RT karena kesal", points: 3 },
      { label: "E", text: "Memilih diam saja agar tidak ribut", points: 4 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: C**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-83.png",
      },
    ],
  },
  {
    id: 84,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Tetangga berlatih gitar hingga larut malam dan suaranya mengganggu. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Mengirim pesan WA bahwa Anda terganggu", points: 3 },
      {
        label: "B",
        text: "Mendatangi rumahnya dan meminta berhenti karena sudah malam",
        points: 4,
      },
      { label: "C", text: "Mengetuk pagar rumahnya dengan keras", points: 2 },
      { label: "D", text: "Mendatangi rumahnya dan bicara baik-baik tanpa emosi", points: 5 },
      { label: "E", text: "Membuat papan larangan gaduh di waktu istirahat", points: 1 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: D**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-84.png",
      },
    ],
  },
  {
    id: 85,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Tetangga mengadakan acara musik hingga larut malam dan mengganggu istirahat. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Melapor kepada ketua RT", points: 4 },
      { label: "B", text: "Mendatangi rumahnya dan meminta acara dibubarkan", points: 1 },
      { label: "C", text: "Besoknya datang mengajak dialog agar maksud tersampaikan", points: 5 },
      { label: "D", text: "Mengirim pesan bahwa Anda terganggu", points: 3 },
      { label: "E", text: "Meluapkan kekesalan di media sosial", points: 2 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: C**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-85.png",
      },
    ],
  },
  {
    id: 86,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Teman datang ingin curhat karena gagal tes CPNS, padahal Anda sedang sibuk belajar untuk tes besok. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Mengatakan lebih baik pulang karena mengganggu", points: 1 },
      { label: "B", text: "Mendengar curhatnya sekalian Anda bertanya soal soal tes", points: 4 },
      {
        label: "C",
        text: "Memberi waktu sebentar, lalu lanjut belajar dan memintanya pulang",
        points: 3,
      },
      { label: "D", text: "Mendengar curhatnya sampai ia lega meski gagal belajar", points: 2 },
      { label: "E", text: "Mengatakan Anda harus belajar dan memintanya menunggu", points: 5 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: E**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-90.png",
      },
    ],
  },
  {
    id: 87,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Teman yang gagal SKD datang curhat, namun sebentar lagi Anda akan kedatangan tamu kerabat jauh. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Menolak kedatangannya", points: 1 },
      { label: "B", text: "Memberi waktu curhat dan membatasi jika tamu sudah datang", points: 5 },
      { label: "C", text: "Memberi waktu sampai tamu datang, lalu menyuruhnya pulang", points: 3 },
      { label: "D", text: "Mengatakan curhat lain waktu karena ada tamu penting", points: 2 },
      { label: "E", text: "Mengatakan Anda sedang menunggu tamu, curhat bisa nanti", points: 4 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-87.png",
      },
    ],
  },
  {
    id: 88,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Nenek melarang bepergian hari Jumat karena mitos keselamatan. Sikap Anda saat menginap di rumah beliau adalah …",
      },
    ],
    options: [
      { label: "A", text: "Menolak dan mengatakan itu hanya mitos", points: 2 },
      {
        label: "B",
        text: "Menjelaskan semua hari baik namun tetap mengikuti anjuran beliau",
        points: 5,
      },
      { label: "C", text: "Menurut apa kata nenek demi menghormati kepercayaannya", points: 4 },
      { label: "D", text: "Menurut karena merasa tidak enak hati", points: 3 },
      { label: "E", text: "Menurut namun tetap menegaskan itu mitos", points: 1 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-88.png",
      },
    ],
  },
  {
    id: 89,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Anda warga baru dan diajak kerja bakti, namun sudah ada janji acara lain. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Datang sebentar untuk ramah tamah sebelum pergi", points: 4 },
      { label: "B", text: "Hanya mengirim makanan untuk warga", points: 2 },
      { label: "C", text: "Tidak datang kerja bakti", points: 1 },
      {
        label: "D",
        text: "Pergi ke acara Anda lalu meminta maaf ke Ketua RT saat pulang",
        points: 3,
      },
      {
        label: "E",
        text: "Izin ke Ketua RT, menjelaskan ada acara, dan membawa makanan",
        points: 5,
      },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: E**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-90.png",
      },
    ],
  },
  {
    id: 90,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Gagasan Anda membuat 'Kampung Cyber' ditolak RT/RW karena keterbatasan dana. Padahal Anda punya sumber dana hibah. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Memberi pengertian agar RT/RW memberi dukungan", points: 3 },
      { label: "B", text: "Mengajak tim memberi edukasi soal rencana ini", points: 4 },
      {
        label: "C",
        text: "Mengusulkan pertemuan warga untuk membahas kerjasama program",
        points: 5,
      },
      { label: "D", text: "Mengajak warga terlibat langsung merealisasikan program", points: 2 },
      { label: "E", text: "Menunggu RT/RW luluh baru bergerak", points: 1 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: C**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-90.png",
      },
    ],
  },
  {
    id: 91,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Menyikapi informasi yang beredar di media sosial, Anda akan …",
      },
    ],
    options: [
      { label: "A", text: "Tidak langsung percaya", points: 3 },
      { label: "B", text: "Mencari tahu dari berbagai sumber", points: 5 },
      { label: "C", text: "Membaca teliti seluruh isi berita", points: 4 },
      { label: "D", text: "Memilih berkomentar tanpa membaca", points: 1 },
      { label: "E", text: "Menghubungi layanan verifikasi sebelum membagikannya", points: 2 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-91.png",
      },
    ],
  },
  {
    id: 92,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Usulan program Kampung Cyber ditolak warga karena takut biaya besar. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Mencoba menjelaskan detail biaya (hibah)", points: 5 },
      { label: "B", text: "Mengubah usulan menjadi uji coba lingkup kecil", points: 4 },
      { label: "C", text: "Melobi tokoh penting masyarakat", points: 3 },
      { label: "D", text: "Menerima penolakan dengan lapang dada", points: 2 },
      { label: "E", text: "Menjadikan pelajaran agar lebih realistis", points: 1 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: A**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-92.png",
      },
    ],
  },
  {
    id: 93,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Sebagai CS Online, ada nasabah ingin batal polis namun waktu Anda hanya 5 menit, sementara keluhannya banyak. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Belajar berkomunikasi efektif", points: 3 },
      { label: "B", text: "Berkomunikasi efektif dan memecahkan masalah", points: 5 },
      { label: "C", text: "Berbicara seperlunya", points: 2 },
      { label: "D", text: "Mengirim email untuk penjelasan detail", points: 4 },
      { label: "E", text: "Meminta teman lain menjelaskan", points: 1 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-93.png",
      },
    ],
  },
  {
    id: 94,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Nasabah mengeluh gagal m-banking. Setelah dicoba lama tetap gagal. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Bertanya kepada rekan lain", points: 3 },
      { label: "B", text: "Meminta maaf karena belum bisa menyelesaikan", points: 1 },
      { label: "C", text: "Meminta maaf dan memintanya datang kembali nanti", points: 2 },
      {
        label: "D",
        text: "Meminta maaf, mencatat nomor, dan akan menghubungi jika ada solusi",
        points: 5,
      },
      { label: "E", text: "Mengatakan sudah tidak bisa membantu", points: 4 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: D**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-94.png",
      },
    ],
  },
  {
    id: 95,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Ada kebijakan pemerintah di medsos yang dirasa memberatkan masyarakat. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Tidak langsung percaya", points: 4 },
      { label: "B", text: "Mencari berita dari berbagai sumber", points: 5 },
      { label: "C", text: "Memilih diam", points: 3 },
      { label: "D", text: "Memberi kritikan di media sosial", points: 1 },
      { label: "E", text: "Membicarakan dengan teman", points: 2 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-95.png",
      },
    ],
  },
  {
    id: 96,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Usulan Anda ditolak atasan karena kurang pas dengan kondisi perusahaan. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Menerima penolakan", points: 2 },
      { label: "B", text: "Memperbaiki ide dan mengajukan kembali", points: 4 },
      { label: "C", text: "Menyederhanakan usulan agar sesuai keadaan", points: 3 },
      { label: "D", text: "Mendebat dan mempertahankan usulan", points: 1 },
      { label: "E", text: "Menerima dan menjadikannya pelajaran berharga", points: 5 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: E**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-96.png",
      },
    ],
  },
  {
    id: 97,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Ada info hoax tersebar di media sosial. Sebagai warganet, sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Tidak menyebarkannya", points: 5 },
      { label: "B", text: "Memblokir akun penyebarnya", points: 2 },
      { label: "C", text: "Tidak akan membaca lebih detail", points: 3 },
      { label: "D", text: "Melapor kepada pihak media sosial", points: 4 },
      { label: "E", text: "Tidak ambil pusing", points: 1 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: A**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-97.png",
      },
    ],
  },
  {
    id: 98,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Jika komputer Anda mendadak mati, apa yang Anda lakukan?",
      },
    ],
    options: [
      { label: "A", text: "Menelpon ahli IT", points: 2 },
      { label: "B", text: "Mencoba menyalakan, jika gagal minta bantuan teman", points: 4 },
      { label: "C", text: "Meminta bantuan teman dekat", points: 3 },
      { label: "D", text: "Memilih tidak ambil pusing", points: 1 },
      { label: "E", text: "Mencoba menyalakan sendiri, jika gagal segera panggil ahli", points: 5 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: E**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-98.png",
      },
    ],
  },
  {
    id: 99,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Sebagai panitia gathering kantor, menyikapi penentuan tempat wisata, Anda akan …",
      },
    ],
    options: [
      { label: "A", text: "Menanyakan tempat bagus menurut teman", points: 3 },
      { label: "B", text: "Tidak meminta pendapat teman", points: 1 },
      { label: "C", text: "Mendiskusikan beberapa usulan tempat pilihan Anda", points: 5 },
      { label: "D", text: "Meminta teman menuruti pilihan Anda", points: 2 },
      { label: "E", text: "Mengadakan poling di grup WAG", points: 4 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: C**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-99.png",
      },
    ],
  },
  {
    id: 100,
    category: "TKP",
    content: [
      {
        type: "text",
        value:
          "Toko kain keluarga krisis karena pandemi dan mau dijual. Sebagai pemegang saham, Anda …",
      },
    ],
    options: [
      { label: "A", text: "Mendukung penjualan agar tidak rugi lebih besar", points: 2 },
      { label: "B", text: "Berusaha mencari cara mempertahankan operasional", points: 5 },
      { label: "C", text: "Melakukan cuci gudang sebelum ditutup", points: 3 },
      { label: "D", text: "Memasang iklan agar cepat terjual", points: 1 },
      { label: "E", text: "Mengajak diskusi pemegang saham mencari solusi bersama", points: 4 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-100.png",
      },
    ],
  },
  {
    id: 101,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Dapat beasiswa S2 luar negeri namun istri sedang hamil. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Menolak beasiswa", points: 1 },
      { label: "B", text: "Menunggu kelahiran dan merelakan beasiswa tahun ini", points: 2 },
      { label: "C", text: "Tetap berangkat dan pulang saat istri melahirkan", points: 4 },
      { label: "D", text: "Membujuk istri agar mau ikut", points: 3 },
      { label: "E", text: "Ambil beasiswa dalam negeri agar bisa mendampingi istri", points: 5 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: E**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-101.png",
      },
    ],
  },
  {
    id: 102,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Kantor krisis dan ada potensi PHK massal. Sebagai pimpinan, Anda …",
      },
    ],
    options: [
      { label: "A", text: "Merasa tertekan dan stres", points: 1 },
      { label: "B", text: "Mendiskusikan dengan dewan direksi", points: 4 },
      { label: "C", text: "Memutuskan menjual aset perusahaan", points: 2 },
      { label: "D", text: "Mencari solusi mempertahankan perusahaan dan karyawan", points: 5 },
      { label: "E", text: "Memberhentikan karyawan kontrak saja", points: 3 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: D**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-102.png",
      },
    ],
  },
  {
    id: 103,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Diminta menjaga rahasia perusahaan, sikap Anda adalah …",
      },
    ],
    options: [
      { label: "A", text: "Tidak akan membocorkannya", points: 4 },
      { label: "B", text: "Menghindar jika ada yang mencoba mengorek info", points: 3 },
      { label: "C", text: "Amanah dan tidak cerita ke siapapun termasuk teman dekat", points: 5 },
      { label: "D", text: "Hanya bercerita dengan orang luar kantor", points: 1 },
      { label: "E", text: "Tidak menanggapi pancingan teman soal rahasia", points: 2 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: C**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-103.png",
      },
    ],
  },
  {
    id: 104,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Mau rapat penting tapi ban motor bocor di jalan. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Mencari kendaraan online", points: 5 },
      { label: "B", text: "Menunggu angkutan umum", points: 2 },
      { label: "C", text: "Meminta diantar orang rumah", points: 3 },
      { label: "D", text: "Menelpon teman kantor minta jemput", points: 1 },
      { label: "E", text: "Memilih menambal ban dulu", points: 4 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: A**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-104.png",
      },
    ],
  },
  {
    id: 105,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Mahasiswa di kampus Anda ditangkap karena terorisme. Sebagai Dekan, Anda …",
      },
    ],
    options: [
      { label: "A", text: "Mencari kebenaran, jika benar maka dikeluarkan", points: 4 },
      { label: "B", text: "Melarang keras aktivitas kampus yang mengarah terorisme", points: 5 },
      { label: "C", text: "Klarifikasi bahwa itu hanya oknum", points: 3 },
      { label: "D", text: "Tidak mau tahu agar nama kampus tidak tercoreng", points: 1 },
      { label: "E", text: "Langsung mengeluarkan mahasiswa tersebut", points: 2 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-105.png",
      },
    ],
  },
  {
    id: 106,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Polisi mencurigai teroris di lingkungan Anda. Sebagai Ketua RT, Anda akan …",
      },
    ],
    options: [
      { label: "A", text: "Memberi keterangan detail membantu polisi", points: 4 },
      { label: "B", text: "Memberi keterangan jujur untuk mempermudah penyelidikan", points: 5 },
      { label: "C", text: "Memberi keterangan seperlunya", points: 3 },
      { label: "D", text: "Merasa takut berurusan dengan polisi", points: 1 },
      { label: "E", text: "Memberi keterangan sebanyak mungkin agar polisi simpati", points: 2 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-106.png",
      },
    ],
  },
  {
    id: 107,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Terhadap ujaran kebencian kepada pemerintah di medsos, sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Tidak akan mengikuti", points: 3 },
      { label: "B", text: "Tidak akan percaya", points: 4 },
      { label: "C", text: "Mendukung karena kurang pro pemerintah", points: 1 },
      { label: "D", text: "Memblokir akun pengujar kebencian", points: 2 },
      { label: "E", text: "Tidak terlibat dan tidak menjadi pengikut akunnya", points: 5 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: E**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-107.png",
      },
    ],
  },
  {
    id: 108,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Seseorang menistakan agama Anda melalui konten fitnah. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Mencari dukungan untuk mengecam orang tersebut", points: 3 },
      { label: "B", text: "Melapor kepada polisi karena tindakannya meresahkan", points: 5 },
      { label: "C", text: "Melakukan demo besar-besaran", points: 1 },
      { label: "D", text: "Memilih diam karena malas berkomentar", points: 2 },
      { label: "E", text: "Memberi teguran keras melalui petisi", points: 4 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: B**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-108.png",
      },
    ],
  },
  {
    id: 109,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Kebijakan pemerintah dirasa tidak pro rakyat. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Memilih sabar", points: 4 },
      { label: "B", text: "Mengecam dengan petisi online", points: 1 },
      { label: "C", text: "Meyakini keadaan ini hanya sementara", points: 3 },
      { label: "D", text: "Percaya kebijakan tersebut pasti demi kebaikan rakyat", points: 5 },
      { label: "E", text: "Menggunjingkan dengan teman", points: 2 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: D**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-109.png",
      },
    ],
  },
  {
    id: 110,
    category: "TKP",
    content: [
      {
        type: "text",
        value: "Teman menjelek-jelekkan pemerintah di media sosial. Sikap Anda …",
      },
    ],
    options: [
      { label: "A", text: "Mengingatkan secara pribadi", points: 5 },
      { label: "B", text: "Mengingatkan di depan umum", points: 2 },
      { label: "C", text: "Memblokir akunnya", points: 1 },
      { label: "D", text: "Melaporkan akunnya", points: 3 },
      { label: "E", text: "Mengajak diskusi agar pikirannya terbuka", points: 4 },
    ],
    explanation: [
      {
        type: "text",
        value: "**Jawaban: A**\n\n",
      },
      {
        type: "image",
        value: "/tryout-1/explanation-110.png",
      },
    ],
  },
];
