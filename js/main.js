/* ============================================================
   TravelBajetAntarabangsa — Farafisyah Travel & Tours
   ============================================================ */

(function () {
  'use strict';

  var WHATSAPP_NUMBER = '601127388164';

  /* ============================================================
     TRANSLATIONS
     ============================================================ */
  var translations = {
    ms: {
      nav_home: 'Utama', nav_about: 'Tentang Kami', nav_dest: 'Destinasi',
      nav_promo: 'Promosi', nav_why: 'Kenapa Kami', nav_contact: 'Hubungi',
      nav_galeri: 'Galeri',
      nav_fb: 'Facebook',
      nav_wa: 'WhatsApp Kami',

      hero_badge: 'Dipercayai 10+ Tahun',
      hero_title: 'Jelajah Dunia Dengan <span class="highlight">Bajet Mesra</span> Anda',
      hero_sub: 'Daripada percutian keluarga ke pakej umrah — kami bantu anda merancang perjalanan impian dengan harga berpatutan. Pakej dalam negara &amp; luar negara yang lengkap dan terjamin.',
      hero_btn_book: 'Tempah Sekarang',
      hero_btn_view: 'Lihat Pakej',
      stat_years_label: 'Tahun Pengalaman',
      stat_dest_label: 'Destinasi Popular',
      stat_clients_label: 'Pelanggan Gembira',

      about_tag: 'Tentang Kami',
      about_title: 'Kegembiraan Anda, <span class="highlight">Kepuasan Kami</span>',
      about_p1: '<strong>FARAFISYAH TRAVEL &amp; TOURS</strong> (dahulunya NURZIEF TRAVEL) diperbadankan pada 2 Januari 2022 dengan lebih daripada <strong>10 tahun pengalaman</strong> dalam perniagaan pelancongan dalam &amp; luar negara, termasuk pengurusan ibadah umrah.',
      about_p2: 'Kami percaya setiap perjalanan adalah memori seumur hidup. Itulah sebabnya kami menyediakan pakej yang teliti, perkhidmatan mesra, dan harga bajet supaya lebih ramai dapat menjelajah dunia.',
      about_li1: 'Pakej Dalam Negara &amp; Luar Negara',
      about_li2: 'Pakej Umrah &amp; Mutawwif Berpengalaman',
      about_li3: 'Ejen &amp; Rangkaian Sah',
      about_li4: 'Itinerari Fleksibel &amp; Custom Made',
      about_loc: 'Kota Bharu, Kelantan',
      about_phone: '017-915 4864',
      about_btn: 'Bercakap Dengan Kami',

      dest_tag: 'Destinasi Pilihan',
      dest_title: 'Ke Mana Anda <span class="highlight">Nak Pergi?</span>',
      dest_desc: 'Pilih destinasi impian anda. Setiap pakej merangkumi penginapan, pengangkutan, dan makanan terpilih.',
      tab_luar: 'Luar Negara',
      tab_dalam: 'Dalam Negara',
      tab_umrah: 'Pakej Umrah',
      d_flag_luar: 'Luar Negara',
      d_flag_dalam: 'Dalam Negara',
      d_flag_umrah: 'Ibadah',

      card_turkey_title: 'Turkiye',
      card_turkey_desc: '9 hari 8 malam — Istanbul, Ankara, Cappadocia, Pamukkale &amp; Kusadasi. Hot air balloon, sejarah Uthmaniyyah &amp; budaya.',
      card_swiss_title: 'Switzerland',
      card_swiss_desc: '9 hari — Zurich, Lucern, Interlaken, Mt. Titlis &amp; Bern. Landskap Alps yang memukau, tasik biru &amp; percutian custom made.',
      card_perth_title: 'Perth, Australia',
      card_perth_desc: '7 hari — Kings Park, Caversham Wildlife Park, Pinnacles Desert &amp; Fremantle. Sesuai untuk keluarga &amp; Muslim travel.',
      card_jogja_title: 'Jogjakarta, Indonesia',
      card_jogja_desc: '4 hari — Candi Borobudur, Gunung Merapi, Goa Pindul &amp; Malioboro. Percutian bajet kegemaran keluarga.',
      card_kashmir_title: 'Kashmir, India',
      card_kashmir_desc: '7 hari — Srinagar, Dal Lake, Gulmarg, Pahalgam &amp; Sonamarg. Rumah bot ikonik, pemandangan Himalaya &amp; teh Kahwa.',
      card_langkawi_title: 'Langkawi',
      card_langkawi_desc: 'Pulau permata Kedah — cable car, Pulau Dayang Bunting &amp; pantai pasir putih. Pakej keluarga &amp; bulan madu.',
      card_cameron_title: 'Cameron Highlands',
      card_cameron_desc: 'Sejuknya Pahang! Ladang teh, strawberi segar &amp; kebun bunga. Sesuai untuk percutian santai.',
      card_perhentian_title: 'Pulau Perhentian',
      card_perhentian_desc: 'Syurga snorkeling di Terengganu. Air jernih, batu karang &amp; hidupan marin yang menakjubkan.',
      card_kelantan_title: 'Kelantan &amp; Sekitarnya',
      card_kelantan_desc: 'Destinasi warisan budaya — Pantai Cahaya Bulan, pasar &amp; kraftangan. Lawatan harian khas untuk anda.',
      btn_itinerary: 'Tanya Itinerari',
      btn_package: 'Tanya Pakej',

      umrah_title: 'Pakej Umrah <span class="highlight">Farafisyah</span>',
      umrah_desc: 'Laksanakan ibadah umrah dengan selesa dan tenang. Ditadbir bersama <strong>mutawwif berpengalaman</strong> dan rangkaian sah, dengan pengurusan visa, penginapan berdekatan Masjidil Haram &amp; Masjid Nabawi, dan bimbingan lengkap dari awal hingga akhir.',
      umrah_li1: 'Mutawwif berpengalaman &amp; diiktiraf',
      umrah_li2: 'Penginapan strategik &amp; selesa',
      umrah_li3: 'Urusan visa &amp; dokumen dipermudah',
      umrah_li4: 'Bimbingan ibadah &amp; kelas persediaan',
      umrah_btn: 'Daftar Minat Umrah',

      promo_tag: 'Promosi Terkini',
      promo_title: 'Deal Hebat, <span class="highlight">Harga Bajet</span>',
      promo_desc: 'Jangan terlepas peluang! Tanya kami sekarang untuk pakej &amp; harga promosi semasa.',
      promo1_tag: 'Best Seller',
      promo1_title: 'Pakej Keluarga Luar Negara',
      promo1_desc: 'Turkiye &amp; Switzerland dengan penginapan berkualiti, makanan halal &amp; guide tempatan.',
      promo1_price: 'Harga Istimewa',
      promo2_tag: 'Umrah',
      promo2_title: 'Pakej Umrah Sepanjang Tahun',
      promo2_desc: 'Daftar awal &amp; nikmati rebat. Sertai bersama mutawwif berpengalaman kami.',
      promo2_price: 'Rebat Daftar Awal',
      promo3_tag: 'Kumpulan',
      promo3_title: 'Tempahan Berkumpulan',
      promo3_desc: 'Family, sekolah &amp; persatuan? Kami sediakan pakej khas dengan harga istimewa.',
      promo3_price: 'Harga Kumpulan',
      promo_ask: 'Tanya Promosi',
      promo_grp: 'Tanya Kumpulan',
      promo_note: 'Untuk maklumat &amp; itinerari lengkap, hubungi kami di WhatsApp: <strong>+60 11-2738 8164</strong>',

      why_tag: 'Kenapa Pilih Kami',
      why_title: 'Perkhidmatan Yang <span class="highlight">Anda Boleh Percaya</span>',
      feat1_title: 'Harga Bajet &amp; Telus',
      feat1_desc: 'Pakej berpatutan tanpa kos tersembunyi. Rancang percutian tanpa risau bajet.',
      feat2_title: 'Berpengalaman 10+ Tahun',
      feat2_desc: 'Lebih sedekad dalam industri pelancongan dalam &amp; luar negara serta pengurusan umrah.',
      feat3_title: 'Itinerari Custom Made',
      feat3_desc: 'Rancangan perjalanan boleh disesuaikan dengan keperluan &amp; keinginan anda.',
      feat4_title: 'Perkhidmatan Mesra',
      feat4_desc: '"Kegembiraan Anda, Kepuasan Kami" — khidmat pelanggan yang prihatin sepanjang perjalanan.',

      testi_tag: 'Testimoni',
      testi_title: 'Apa Kata <span class="highlight">Pelanggan Kami</span>',
      testi1_text: '"Pakej Turkiye sangat teratur. Semua makanan halal dan guide bagus. Memang berbaloi!"',
      testi1_name: 'Nor Asyikin',
      testi1_trip: 'Pakej Turkiye',
      testi2_text: '"Pengurusan umrah sangat rapi dan mutawwifnya berpengetahuan. Hati jadi tenang sepanjang ibadah."',
      testi2_name: 'Hj. Razali',
      testi2_trip: 'Pakej Umrah',
      testi3_text: '"Bercuti di Switzerland dengan bajet munasabah. Segala itinerary custom mengikut citarasa kami. Terbaik!"',
      testi3_name: 'Keluarga Ahmad',
      testi3_trip: 'Pakej Switzerland',

      galeri_tag: 'Galeri',
      galeri_title: 'Kenangan <span class="highlight">Perjalanan</span>',
      galeri_desc: 'Gambar-gambar pilihan daripada pakej percutian dan umrah kami. Klik untuk paparan penuh.',

      fb_tag: 'Media Sosial',
      fb_title: 'Ikuti Kami di <span class="highlight">Facebook</span>',
      fb_desc: 'Jangan terlepas promosi dan pakej terbaharu. Ikuti halaman Facebook kami &amp; tekan "Follow Page" untuk kemas kini terkini.',
      fb_collection_btn: 'Lihat Semua Foto di Facebook',
      fb_follow_btn: 'Follow Page',

      contact_tag: 'Hubungi Kami',
      contact_title: 'Jom Rancang <span class="highlight">Percutian Anda</span>',
      contact_desc: 'Kami sedia membantu anda. Hantar mesej di WhatsApp atau hubungi kami terus — respons pantas setiap hari.',
      c_wa: '+60 11-2738 8164',
      c_phone: '017-915 4864',
      c_email: 'farafisyahtravelandtours@gmail.com',
      c_fb: 'TravelBajetAntarabangsa',
      c_addr: 'PT 2625-C Jalan Pasir Puteh, Kg Kubang Keranji, 16150 Kota Bharu, Kelantan',
      form_title: 'Hantar Pertanyaan',
      ph_name: 'Nama anda',
      ph_dest: 'Destinasi / pakej diminati',
      ph_date: 'Tarikh perjalanan (cth: Jan 2026)',
      ph_pax: 'Bilangan peserta',
      ph_msg: 'Mesej anda (opsyenal)',
      form_submit: 'Hantar ke WhatsApp',
      form_note: 'Mesej anda akan dihantar terus ke WhatsApp kami. Tiada data disimpan.',

      footer_desc: 'Farafisyah Travel &amp; Tours — pakej percutian dalam &amp; luar negara, dan pakej umrah dengan harga bajet. "Kegembiraan Anda, Kepuasan Kami."',
      footer_quick_h: 'Pautan Pantas',
      footer_quick1: 'Utama',
      footer_quick2: 'Tentang Kami',
      footer_quick3: 'Destinasi',
      footer_quick4: 'Promosi',
      footer_dest_h: 'Destinasi',
      footer_dest1: 'Turkiye',
      footer_dest2: 'Switzerland',
      footer_dest3: 'Perth, Australia',
      footer_dest4: 'Pakej Umrah',
      footer_contact_h: 'Hubungi Kami',
      footer_contact1: 'Kota Bharu, Kelantan',
      footer_contact2: '017-915 4864',
      footer_contact3: '+60 11-2738 8164',
      footer_contact4: 'farafisyahtravelandtours@gmail.com',
      footer_bottom: '&copy; 2026 TravelBajetAntarabangsa | Farafisyah Travel &amp; Tours. Hak cipta terpelihara.',

      float_chat: 'Chat dengan kami!',

      form_msg_intro: 'Assalamualaikum, saya ingin bertanya tentang pakej percutian.',
      form_lbl_name: 'Nama:',
      form_lbl_dest: 'Destinasi/Pakej:',
      form_lbl_date: 'Tarikh:',
      form_lbl_pax: 'Bilangan peserta:',
      form_lbl_msg: 'Mesej:'
    },

    en: {
      nav_home: 'Home', nav_about: 'About Us', nav_dest: 'Destinations',
      nav_promo: 'Promotions', nav_why: 'Why Us', nav_contact: 'Contact',
      nav_galeri: 'Gallery',
      nav_fb: 'Facebook',
      nav_wa: 'WhatsApp Us',

      hero_badge: 'Trusted for 10+ Years',
      hero_title: 'Explore the World Within <span class="highlight">Your Budget</span>',
      hero_sub: 'From family holidays to umrah packages — we help you plan your dream journey at affordable prices. Complete and guaranteed domestic &amp; international packages.',
      hero_btn_book: 'Book Now',
      hero_btn_view: 'View Packages',
      stat_years_label: 'Years of Experience',
      stat_dest_label: 'Popular Destinations',
      stat_clients_label: 'Happy Customers',

      about_tag: 'About Us',
      about_title: 'Your Joy, <span class="highlight">Our Satisfaction</span>',
      about_p1: '<strong>FARAFISYAH TRAVEL &amp; TOURS</strong> (formerly NURZIEF TRAVEL) was incorporated on 2 January 2022 with over <strong>10 years of experience</strong> in the domestic &amp; international tourism industry, including the management of umrah pilgrimages.',
      about_p2: 'We believe every journey is a lifelong memory. That is why we offer carefully crafted packages, friendly service, and budget-friendly prices so more people can explore the world.',
      about_li1: 'Domestic &amp; International Packages',
      about_li2: 'Umrah Packages &amp; Experienced Mutawwif',
      about_li3: 'Authorized Agents &amp; Network',
      about_li4: 'Flexible &amp; Custom-Made Itineraries',
      about_loc: 'Kota Bharu, Kelantan',
      about_phone: '017-915 4864',
      about_btn: 'Talk to Us',

      dest_tag: 'Featured Destinations',
      dest_title: 'Where Do You Want <span class="highlight">To Go?</span>',
      dest_desc: 'Choose your dream destination. Every package includes accommodation, transportation, and selected meals.',
      tab_luar: 'International',
      tab_dalam: 'Domestic',
      tab_umrah: 'Umrah Packages',
      d_flag_luar: 'International',
      d_flag_dalam: 'Domestic',
      d_flag_umrah: 'Worship',

      card_turkey_title: 'Turkiye',
      card_turkey_desc: '9 days 8 nights — Istanbul, Ankara, Cappadocia, Pamukkale &amp; Kusadasi. Hot air balloon, Ottoman history &amp; culture.',
      card_swiss_title: 'Switzerland',
      card_swiss_desc: '9 days — Zurich, Lucerne, Interlaken, Mt. Titlis &amp; Bern. Stunning Alpine landscapes, blue lakes &amp; custom-made holidays.',
      card_perth_title: 'Perth, Australia',
      card_perth_desc: '7 days — Kings Park, Caversham Wildlife Park, Pinnacles Desert &amp; Fremantle. Perfect for families &amp; Muslim travel.',
      card_jogja_title: 'Yogyakarta, Indonesia',
      card_jogja_desc: '4 days — Borobudur Temple, Mount Merapi, Pindul Cave &amp; Malioboro. A favorite budget getaway for families.',
      card_kashmir_title: 'Kashmir, India',
      card_kashmir_desc: '7 days — Srinagar, Dal Lake, Gulmarg, Pahalgam &amp; Sonamarg. Iconic houseboats, Himalayan views &amp; Kahwa tea.',
      card_langkawi_title: 'Langkawi',
      card_langkawi_desc: 'Kedah&rsquo;s jewel island — cable car, Dayang Bunting Island &amp; white sand beaches. Family &amp; honeymoon packages.',
      card_cameron_title: 'Cameron Highlands',
      card_cameron_desc: 'Cool &amp; refreshing Pahang! Tea plantations, fresh strawberries &amp; flower gardens. Perfect for a relaxing getaway.',
      card_perhentian_title: 'Perhentian Islands',
      card_perhentian_desc: 'Snorkeling paradise in Terengganu. Crystal-clear water, coral reefs &amp; amazing marine life.',
      card_kelantan_title: 'Kelantan &amp; Beyond',
      card_kelantan_desc: 'Cultural heritage destination — Moonlight Beach, markets &amp; handicrafts. Special daily tours for you.',
      btn_itinerary: 'Ask for Itinerary',
      btn_package: 'Ask for Package',

      umrah_title: 'Farafisyah <span class="highlight">Umrah Package</span>',
      umrah_desc: 'Perform your umrah in comfort and peace. Managed by <strong>experienced mutawwif</strong> and an authorized network, with visa processing, accommodation near Masjidil Haram &amp; Masjid Nabawi, and complete guidance from start to finish.',
      umrah_li1: 'Experienced &amp; accredited mutawwif',
      umrah_li2: 'Strategic &amp; comfortable accommodation',
      umrah_li3: 'Simplified visa &amp; document processing',
      umrah_li4: 'Worship guidance &amp; preparation classes',
      umrah_btn: 'Register Umrah Interest',

      promo_tag: 'Latest Promotions',
      promo_title: 'Great Deals, <span class="highlight">Budget Prices</span>',
      promo_desc: 'Do not miss out! Ask us now for current packages &amp; promo prices.',
      promo1_tag: 'Best Seller',
      promo1_title: 'International Family Packages',
      promo1_desc: 'Turkiye &amp; Switzerland with quality accommodation, halal food &amp; local guides.',
      promo1_price: 'Special Price',
      promo2_tag: 'Umrah',
      promo2_title: 'Year-Round Umrah Packages',
      promo2_desc: 'Register early &amp; enjoy a rebate. Join our experienced mutawwif.',
      promo2_price: 'Early Bird Rebate',
      promo3_tag: 'Group',
      promo3_title: 'Group Bookings',
      promo3_desc: 'Family, school &amp; association? We prepare special packages with exclusive prices.',
      promo3_price: 'Group Price',
      promo_ask: 'Ask for Promo',
      promo_grp: 'Ask for Group',
      promo_note: 'For full information &amp; itineraries, contact us on WhatsApp: <strong>+60 11-2738 8164</strong>',

      why_tag: 'Why Choose Us',
      why_title: 'Services You Can <span class="highlight">Trust</span>',
      feat1_title: 'Budget &amp; Transparent Prices',
      feat1_desc: 'Affordable packages with no hidden costs. Plan your holiday without budget worries.',
      feat2_title: '10+ Years Experience',
      feat2_desc: 'More than a decade in the domestic &amp; international tourism industry and umrah management.',
      feat3_title: 'Custom-Made Itineraries',
      feat3_desc: 'Travel plans can be tailored to your needs &amp; wishes.',
      feat4_title: 'Friendly Service',
      feat4_desc: '"Your Joy, Our Satisfaction" — attentive customer service throughout your journey.',

      testi_tag: 'Testimonials',
      testi_title: 'What Our <span class="highlight">Customers Say</span>',
      testi1_text: '"The Turkiye package was very well organized. All halal food and a great guide. Totally worth it!"',
      testi1_name: 'Nor Asyikin',
      testi1_trip: 'Turkiye Package',
      testi2_text: '"The umrah management was meticulous and the mutawwif knowledgeable. My heart was at peace throughout the worship."',
      testi2_name: 'Hj. Razali',
      testi2_trip: 'Umrah Package',
      testi3_text: '"Holiday in Switzerland on a reasonable budget. Everything customized to our taste. Excellent!"',
      testi3_name: 'Ahmad Family',
      testi3_trip: 'Switzerland Package',

      galeri_tag: 'Gallery',
      galeri_title: 'Journey <span class="highlight">Memories</span>',
      galeri_desc: 'Selected photos from our holiday and umrah packages. Click for full view.',

      fb_tag: 'Social Media',
      fb_title: 'Follow Us on <span class="highlight">Facebook</span>',
      fb_desc: 'Do not miss our latest promotions and packages. Follow our Facebook page &amp; press "Follow Page" for the latest updates.',
      fb_collection_btn: 'View All Photos on Facebook',
      fb_follow_btn: 'Follow Page',

      contact_tag: 'Contact Us',
      contact_title: "Let's Plan <span class=\"highlight\">Your Trip</span>",
      contact_desc: "We&rsquo;re ready to help. Send a message on WhatsApp or contact us directly — fast response every day.",
      c_wa: '+60 11-2738 8164',
      c_phone: '017-915 4864',
      c_email: 'farafisyahtravelandtours@gmail.com',
      c_fb: 'TravelBajetAntarabangsa',
      c_addr: 'PT 2625-C Jalan Pasir Puteh, Kg Kubang Keranji, 16150 Kota Bharu, Kelantan',
      form_title: 'Send an Enquiry',
      ph_name: 'Your name',
      ph_dest: 'Destination / package of interest',
      ph_date: 'Travel date (e.g. Jan 2026)',
      ph_pax: 'Number of travellers',
      ph_msg: 'Your message (optional)',
      form_submit: 'Send via WhatsApp',
      form_note: 'Your message will be sent directly to our WhatsApp. No data is stored.',

      footer_desc: 'Farafisyah Travel &amp; Tours — domestic &amp; international holiday packages, and umrah packages at budget prices. "Your Joy, Our Satisfaction."',
      footer_quick_h: 'Quick Links',
      footer_quick1: 'Home',
      footer_quick2: 'About Us',
      footer_quick3: 'Destinations',
      footer_quick4: 'Promotions',
      footer_dest_h: 'Destinations',
      footer_dest1: 'Turkiye',
      footer_dest2: 'Switzerland',
      footer_dest3: 'Perth, Australia',
      footer_dest4: 'Umrah Package',
      footer_contact_h: 'Contact Us',
      footer_contact1: 'Kota Bharu, Kelantan',
      footer_contact2: '017-915 4864',
      footer_contact3: '+60 11-2738 8164',
      footer_contact4: 'farafisyahtravelandtours@gmail.com',
      footer_bottom: '&copy; 2026 TravelBajetAntarabangsa | Farafisyah Travel &amp; Tours. All rights reserved.',

      float_chat: 'Chat with us!',

      form_msg_intro: 'Assalamualaikum, I would like to ask about travel packages.',
      form_lbl_name: 'Name:',
      form_lbl_dest: 'Destination/Package:',
      form_lbl_date: 'Date:',
      form_lbl_pax: 'Number of travellers:',
      form_lbl_msg: 'Message:'
    }
  };

  /* Pre-filled WhatsApp message per link key (per language) */
  var waLinks = {
    ms: {
      wa_nav: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya ingin bertanya mengenai pakej percutian'),
      wa_book: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya ingin tanya tentang pakej percutian yang tersedia'),
      wa_about: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya ingin tahu lebih lanjut tentang Farafisyah Travel & Tours'),
      wa_turkey: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya berminat dengan PAKEJ TURKIYE. Boleh kongsi itinerari dan harga?'),
      wa_swiss: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya berminat dengan PAKEJ SWITZERLAND. Boleh kongsi itinerari dan harga?'),
      wa_perth: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya berminat dengan PAKEJ PERTH AUSTRALIA. Boleh kongsi itinerari dan harga?'),
      wa_jogja: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya berminat dengan PAKEJ JOGJAKARTA. Boleh kongsi itinerari dan harga?'),
      wa_kashmir: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya berminat dengan PAKEJ KASHMIR INDIA. Boleh kongsi itinerari dan harga?'),
      wa_langkawi: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya berminat dengan PAKEJ LANGKAWI. Boleh kongsi butiran?'),
      wa_cameron: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya berminat dengan PAKEJ CAMERON HIGHLANDS. Boleh kongsi butiran?'),
      wa_perhentian: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya berminat dengan PAKEJ PULAU PERHENTIAN. Boleh kongsi butiran?'),
      wa_kelantan: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya berminat dengan PAKEJ KELANTAN. Boleh kongsi butiran?'),
      wa_umrah: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya berminat dengan PAKEJ UMRAH FARAFISYAH. Boleh kongsi butiran tarikh dan harga?'),
      wa_promo1: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya nak tanya PROMOSI pakej keluarga luar negara'),
      wa_promo2: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya nak tanya PROMOSI pakej umrah'),
      wa_promo3: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya nak tempah untuk KUMPULAN. Boleh bantu?'),
      wa_footer_turkey: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya berminat dengan pakej Turkiye'),
      wa_footer_swiss: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya berminat dengan pakej Switzerland'),
      wa_footer_perth: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya berminat dengan pakej Perth'),
      wa_footer_umrah: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya berminat dengan pakej umrah'),
      wa_float: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, saya ingin bertanya mengenai pakej percutian')
    },
    en: {
      wa_nav: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I would like to ask about travel packages'),
      wa_book: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I would like to ask about the available travel packages'),
      wa_about: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I would like to know more about Farafisyah Travel & Tours'),
      wa_turkey: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I am interested in the TURKIYE PACKAGE. Could you share the itinerary and price?'),
      wa_swiss: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I am interested in the SWITZERLAND PACKAGE. Could you share the itinerary and price?'),
      wa_perth: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I am interested in the PERTH AUSTRALIA PACKAGE. Could you share the itinerary and price?'),
      wa_jogja: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I am interested in the YOGYAKARTA PACKAGE. Could you share the itinerary and price?'),
      wa_kashmir: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I am interested in the KASHMIR INDIA PACKAGE. Could you share the itinerary and price?'),
      wa_langkawi: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I am interested in the LANGKAWI PACKAGE. Could you share the details?'),
      wa_cameron: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I am interested in the CAMERON HIGHLANDS PACKAGE. Could you share the details?'),
      wa_perhentian: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I am interested in the PERHENTIAN ISLANDS PACKAGE. Could you share the details?'),
      wa_kelantan: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I am interested in the KELANTAN PACKAGE. Could you share the details?'),
      wa_umrah: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I am interested in the FARAFISYAH UMRAH PACKAGE. Could you share the dates and price?'),
      wa_promo1: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I would like to ask about the family international package promotion'),
      wa_promo2: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I would like to ask about the umrah package promotion'),
      wa_promo3: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I would like to make a GROUP booking. Can you help?'),
      wa_footer_turkey: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I am interested in the Turkiye package'),
      wa_footer_swiss: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I am interested in the Switzerland package'),
      wa_footer_perth: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I am interested in the Perth package'),
      wa_footer_umrah: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I am interested in the umrah package'),
      wa_float: 'https://wa.me/601127388164?text=' + encodeURIComponent('Assalamualaikum, I would like to ask about travel packages')
    }
  };

  /* ============================================================
     LANGUAGE STATE
     ============================================================ */
  var currentLang = localStorage.getItem('tba_lang') || 'ms';
  var langToggle = document.getElementById('langToggle');
  var langToggleLabel = document.getElementById('langToggleLabel');

  function applyLanguage(lang) {
    var dict = translations[lang] || translations.ms;
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('[data-i18n-href]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-href');
      if (waLinks[lang] && waLinks[lang][key]) el.setAttribute('href', waLinks[lang][key]);
    });

    document.title = lang === 'en'
      ? 'TravelBajetAntarabangsa | Farafisyah Travel & Tours'
      : 'TravelBajetAntarabangsa | Farafisyah Travel & Tours';

    langToggleLabel.textContent = lang === 'ms' ? 'EN' : 'MS';
    localStorage.setItem('tba_lang', lang);
  }

  langToggle.addEventListener('click', function () {
    currentLang = currentLang === 'ms' ? 'en' : 'ms';
    applyLanguage(currentLang);
  });

  applyLanguage(currentLang);

  /* ============================================================
     NAVBAR SCROLL
     ============================================================ */
  var navbar = document.getElementById('navbar');
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ============================================================
     HERO — parallax background + animated stats
     ============================================================ */
  var heroBg = document.querySelector('.hero-bg');
  var heroStats = document.querySelector('.hero-stats');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCountUp() {
    document.querySelectorAll('.hero-stats .count').forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      if (reduceMotion) { el.textContent = target; return; }
      var duration = 1400;
      var start = null;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  if (heroStats && 'IntersectionObserver' in window) {
    var statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCountUp();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    statsObserver.observe(heroStats);
  } else if (heroStats) {
    animateCountUp();
  }

  var heroTick = false;
  window.addEventListener('scroll', function () {
    if (reduceMotion || !heroBg || heroTick) return;
    heroTick = true;
    requestAnimationFrame(function () {
      var y = window.scrollY;
      if (y <= window.innerHeight) {
        heroBg.style.backgroundPosition = 'center calc(50% + ' + (y * 0.25) + 'px)';
      }
      heroTick = false;
    });
  });

  /* ============================================================
     MOBILE MENU
     ============================================================ */
  var hamburger = document.getElementById('hamburger');
  var navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ============================================================
     TABS
     ============================================================ */
  var tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      document.querySelectorAll('.tab-content').forEach(function (t) { t.classList.remove('active'); });
      btn.classList.add('active');
      var tab = document.getElementById('tab-' + btn.dataset.tab);
      if (tab) tab.classList.add('active');
    });
  });

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */
  var revealEls = document.querySelectorAll('.dest-card, .feature, .testi-card, .promo-card, .about-img-wrap, .about-content, .umrah-wrap, .contact-card');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  /* ============================================================
     QUOTE FORM -> WHATSAPP
     ============================================================ */
  var quoteForm = document.getElementById('quoteForm');
  quoteForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var dict = translations[currentLang] || translations.ms;
    var name = document.getElementById('cName').value.trim();
    var destination = document.getElementById('cDestination').value.trim();
    var date = document.getElementById('cDate').value.trim();
    var pax = document.getElementById('cPax').value.trim();
    var msg = document.getElementById('cMsg').value.trim();

    var lines = [dict.form_msg_intro];
    if (name) lines.push(dict.form_lbl_name + ' ' + name);
    if (destination) lines.push(dict.form_lbl_dest + ' ' + destination);
    if (date) lines.push(dict.form_lbl_date + ' ' + date);
    if (pax) lines.push(dict.form_lbl_pax + ' ' + pax);
    if (msg) lines.push(dict.form_lbl_msg + ' ' + msg);

    var text = encodeURIComponent(lines.join('\n'));
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + text, '_blank');
  });

  /* ============================================================
     GALERI — skeleton loader + lazy loading + lightbox
     ============================================================ */
  var GALLERY_FOLDER = 'assets/gallery/';
  var GALLERY_IMAGES = [
    'WhatsApp Image 2026-08-18 at 10.03.32 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 10.03.32 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 10.03.33 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.18 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.18 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.19 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.20 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.20 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.21 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.21 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.22 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.22 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.23 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.23 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.24 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.25 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.25 PM (2).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.25 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.26 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.26 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.27 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.28 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.28 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.29 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.29 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.30 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.30 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.31 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.31 PM (2).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.31 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.32 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.32 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.33 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.33 PM (2).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.33 PM.jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.34 PM (1).jpeg',
    'WhatsApp Image 2026-08-18 at 9.56.34 PM.jpeg'
  ];

  var galleryGrid = document.getElementById('galleryGrid');

  function encodePath(str) {
    return str.replace(/ /g, '%20').replace(/\(/g, '%28').replace(/\)/g, '%29');
  }

  function buildGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';
    GALLERY_IMAGES.forEach(function (file) {
      var src = GALLERY_FOLDER + encodePath(file);

      var item = document.createElement('div');
      item.className = 'gallery-item';
      item.dataset.src = src;

      var skeleton = document.createElement('div');
      skeleton.className = 'gallery-skeleton';

      var img = document.createElement('img');
      img.className = 'gallery-img';
      img.alt = 'Galeri TravelBajetAntarabangsa';
      img.loading = 'lazy';
      img.decoding = 'async';
      img.dataset.src = src;

      item.appendChild(skeleton);
      item.appendChild(img);
      galleryGrid.appendChild(item);
    });
    initLazyGallery();
    initLightbox();
  }

  function loadGalleryImage(img) {
    if (img.dataset.loaded) return false;
    img.dataset.loaded = 'true';
    img.src = img.dataset.src;
    return true;
  }

  function initLazyGallery() {
    var imgs = document.querySelectorAll('.gallery-img');
    if (!('IntersectionObserver' in window)) {
      imgs.forEach(function (img) {
        img.addEventListener('load', removeSkeleton);
        loadGalleryImage(img);
      });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          if (loadGalleryImage(img)) {
            img.addEventListener('load', removeSkeleton);
            img.addEventListener('error', removeSkeleton);
          }
          io.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    imgs.forEach(function (img) { io.observe(img); });
  }

  function removeSkeleton(e) {
    var img = e.target;
    var item = img.closest('.gallery-item');
    if (item) {
      var skeleton = item.querySelector('.gallery-skeleton');
      if (skeleton) { skeleton.style.opacity = '0'; skeleton.addEventListener('transitionend', function () { skeleton.remove(); }); }
    }
    img.classList.add('loaded');
  }

  /* ----- Lightbox ----- */
  var openIndex = -1;
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxSkeleton = document.getElementById('lightboxSkeleton');

  function showLightbox(index) {
    var imgs = document.querySelectorAll('.gallery-img');
    if (imgs.length === 0) return;
    if (index < 0) index = imgs.length - 1;
    if (index > imgs.length - 1) index = 0;
    openIndex = index;

    lightboxImg.classList.remove('loaded');
    lightboxImg.style.opacity = '0';
    lightboxSkeleton.style.opacity = '1';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';

    var src = imgs[index].dataset.src;
    lightboxImg.src = src;
  }

  function lightboxImgLoaded() {
    lightboxImg.classList.add('loaded');
    lightboxImg.style.opacity = '';
    lightboxSkeleton.style.opacity = '0';
  }

  lightboxImg.addEventListener('load', lightboxImgLoaded);
  lightboxImg.addEventListener('error', function () {
    lightboxSkeleton.style.opacity = '0';
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    openIndex = -1;
  }

  function initLightbox() {
    document.querySelectorAll('.gallery-item').forEach(function (item, i) {
      item.addEventListener('click', function () { showLightbox(i); });
    });
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev').addEventListener('click', function (e) {
      e.stopPropagation();
      showLightbox(openIndex - 1);
    });
    document.getElementById('lightboxNext').addEventListener('click', function (e) {
      e.stopPropagation();
      showLightbox(openIndex + 1);
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showLightbox(openIndex - 1);
      if (e.key === 'ArrowRight') showLightbox(openIndex + 1);
    });
  }

  /* ============================================================
     DYNAMIC GALLERY
     1) gallery.php  — live folder scan (XAMPP / local dev)
     2) gallery.json — static manifest (GitHub Pages / any static host)
     3) built-in list — last-resort fallback
     ============================================================ */
  function fetchList(url) {
    return fetch(url, { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw new Error(url + ' unavailable');
      return r.json();
    });
  }

  function useServerList(items) {
    if (Array.isArray(items) && items.length > 0) {
      GALLERY_IMAGES = items;
    }
    buildGallery();
  }

  function loadServerGallery() {
    fetchList('gallery.php')
      .then(useServerList)
      .catch(function () {
        return fetchList('gallery.json').then(useServerList);
      })
      .catch(function () {
        buildGallery();
      });
  }

  loadServerGallery();
})();
