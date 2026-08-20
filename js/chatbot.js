/* ============================================================
   TravelBajetAntarabangsa — AI Chatbot (rule-based)
   Farafisyah Travel & Tours
   Open source. No API keys, no backend. Works on GitHub Pages.
   ============================================================ */

(function () {
  'use strict';

  var WHATSAPP_NUMBER = '601127388164';

  /* ---------- UI copy ---------- */
  var UI = {
    ms: {
      toggle: 'Chat dengan AI Farafisyah',
      title: 'Farafisyah AI',
      status: 'Online',
      close: 'Tutup chat',
      placeholder: 'Taip soalan anda...',
      greeting: 'Assalamualaikum! 👋 Saya <strong>AI Farafisyah</strong>, pembantu percutian anda. Saya boleh bantu anda kenal pasti pakej yang sesuai — atau teruskan perbualan dengan kami di WhatsApp bila-bila masa.',
      quick: ['Pakej Percutian', 'Pakej Umrah', 'Harga & Bayaran', 'Cara Tempah', 'Hubungi WhatsApp'],
      wa_cta: 'Chat di WhatsApp',
      wa_cta_note: 'Kami akan jawab secepat mungkin.',
      thanks: 'Sama-sama! 😊 Jika ada apa-apa lagi, saya sentiasa di sini. Jangan lupa untuk hubungi kami di WhatsApp untuk maklumat & harga terkini.',
      help: 'Saya boleh bantu jawab soalan tentang pakej percutian, umrah, harga & cara tempah. Taip soalan anda atau pilih daripada pilihan di bawah.'
    },
    en: {
      toggle: 'Chat with Farafisyah AI',
      title: 'Farafisyah AI',
      status: 'Online',
      close: 'Close chat',
      placeholder: 'Type your question...',
      greeting: 'Assalamualaikum! 👋 I am <strong>Farafisyah AI</strong>, your travel assistant. I can help you find the right package — or continue the conversation with us on WhatsApp anytime.',
      quick: ['Holiday Packages', 'Umrah Package', 'Price & Payment', 'How to Book', 'Contact WhatsApp'],
      wa_cta: 'Chat on WhatsApp',
      wa_cta_note: 'We will reply as soon as possible.',
      thanks: 'You are welcome! 😊 If you need anything else, I am always here. Do not forget to contact us on WhatsApp for the latest information & prices.',
      help: 'I can answer questions about holiday packages, umrah, prices & how to book. Type your question or pick from the options below.'
    }
  };

  /* ---------- Intents ---------- */
  /* Each intent: id, keys (lowercase keywords), reply + wa message per language. */
  var INTENTS = [
    {
      id: 'greet',
      keys: ['hello', 'hi', 'hey', 'hai', 'helo', 'assalam', 'salam', 'good morning', 'good evening', 'good afternoon', 'apa khabar', 'how are you'],
      ms: 'Waalaikumussalam! 👋 Terima kasih kerana menghubungi <strong>Farafisyah Travel &amp; Tours</strong>. Nak tahu pakej percutian, umrah atau harga? Jom tanya saya!',
      en: 'Waalaikumussalam! 👋 Thank you for contacting <strong>Farafisyah Travel &amp; Tours</strong>. Looking for holiday packages, umrah, or prices? Ask me below!'
    },
    {
      id: 'packages',
      keys: ['pakej', 'package', 'package list', 'senarai', 'list', 'destinasi', 'destination', 'ada apa', 'pergi mana', 'tempat', 'trip', 'tour', 'lawatan', 'travel'],
      ms: 'Kami ada pakej berikut: 🧳<br>• <strong>Luar Negara:</strong> Turkiye, Switzerland, Perth, Jogjakarta, Kashmir, New Zealand &amp; Egypt<br>• <strong>Dalam Negara:</strong> Langkawi, Cameron Highlands, Pulau Perhentian &amp; Kelantan<br>• <strong>Umrah:</strong> pakej umrah sepanjang tahun<br><br>Taip nama destinasi yang anda minat, atau hubungi kami terus di WhatsApp untuk senarai penuh!',
      en: 'We offer these packages: 🧳<br>• <strong>International:</strong> Turkiye, Switzerland, Perth, Yogyakarta, Kashmir, New Zealand &amp; Egypt<br>• <strong>Domestic:</strong> Langkawi, Cameron Highlands, Perhentian Islands &amp; Kelantan<br>• <strong>Umrah:</strong> year-round umrah packages<br><br>Type the destination you are interested in, or contact us directly on WhatsApp for the full list!'
    },
    {
      id: 'turkey',
      keys: ['turkiye', 'turkey', 'turkish', 'cappadocia', 'istanbul', 'pamukkale', 'ankara'],
      ms: 'Pakej <strong>Turkiye</strong>: 9 hari 8 malam — Istanbul, Ankara, Cappadocia, Pamukkale &amp; Kusadasi. Termasuk hot air balloon, sejarah Uthmaniyyah &amp; budaya.',
      en: 'Our <strong>Turkiye</strong> package: 9 days 8 nights — Istanbul, Ankara, Cappadocia, Pamukkale &amp; Kusadasi. Includes hot air balloon, Ottoman history &amp; culture.',
      wa: {
        ms: 'Assalamualaikum, saya berminat dengan PAKEJ TURKIYE. Boleh kongsi itinerari dan harga?',
        en: 'Assalamualaikum, I am interested in the TURKIYE PACKAGE. Could you share the itinerary and price?'
      }
    },
    {
      id: 'swiss',
      keys: ['switzerland', 'swiss', 'lucerne', 'interlaken', 'titlis', 'zurich', 'alps', 'alp'],
      ms: 'Pakej <strong>Switzerland</strong>: 9 hari — Zurich, Lucern, Interlaken, Mt. Titlis &amp; Bern. Landskap Alps yang memukau, tasik biru &amp; percutian custom made.',
      en: 'Our <strong>Switzerland</strong> package: 9 days — Zurich, Lucerne, Interlaken, Mt. Titlis &amp; Bern. Stunning Alpine landscapes, blue lakes &amp; custom-made holidays.',
      wa: {
        ms: 'Assalamualaikum, saya berminat dengan PAKEJ SWITZERLAND. Boleh kongsi itinerari dan harga?',
        en: 'Assalamualaikum, I am interested in the SWITZERLAND PACKAGE. Could you share the itinerary and price?'
      }
    },
    {
      id: 'perth',
      keys: ['perth', 'australia', 'kings park', 'caversham', 'fremantle', 'australian'],
      ms: 'Pakej <strong>Perth, Australia</strong>: 7 hari — Kings Park, Caversham Wildlife Park, Pinnacles Desert &amp; Fremantle. Sesuai untuk keluarga &amp; Muslim travel.',
      en: 'Our <strong>Perth, Australia</strong> package: 7 days — Kings Park, Caversham Wildlife Park, Pinnacles Desert &amp; Fremantle. Perfect for families &amp; Muslim travel.',
      wa: {
        ms: 'Assalamualaikum, saya berminat dengan PAKEJ PERTH AUSTRALIA. Boleh kongsi itinerari dan harga?',
        en: 'Assalamualaikum, I am interested in the PERTH AUSTRALIA PACKAGE. Could you share the itinerary and price?'
      }
    },
    {
      id: 'jogja',
      keys: ['jogja', 'yogyakarta', 'jogjakarta', 'borobudur', 'malioboro', 'indonesia', 'merapi'],
      ms: 'Pakej <strong>Jogjakarta, Indonesia</strong>: 4 hari — Candi Borobudur, Gunung Merapi, Goa Pindul &amp; Malioboro. Percutian bajet kegemaran keluarga.',
      en: 'Our <strong>Yogyakarta, Indonesia</strong> package: 4 days — Borobudur Temple, Mount Merapi, Pindul Cave &amp; Malioboro. A favorite budget getaway for families.',
      wa: {
        ms: 'Assalamualaikum, saya berminat dengan PAKEJ JOGJAKARTA. Boleh kongsi itinerari dan harga?',
        en: 'Assalamualaikum, I am interested in the YOGYAKARTA PACKAGE. Could you share the itinerary and price?'
      }
    },
    {
      id: 'kashmir',
      keys: ['kashmir', 'srinagar', 'gulmarg', 'pahalgam', 'sonamarg', 'dal lake', 'india'],
      ms: 'Pakej <strong>Kashmir, India</strong>: 7 hari — Srinagar, Dal Lake, Gulmarg, Pahalgam &amp; Sonamarg. Rumah bot ikonik, pemandangan Himalaya, salji &amp; teh Kahwa.',
      en: 'Our <strong>Kashmir, India</strong> package: 7 days — Srinagar, Dal Lake, Gulmarg, Pahalgam &amp; Sonamarg. Iconic houseboats, Himalayan views, snow &amp; Kahwa tea.',
      wa: {
        ms: 'Assalamualaikum, saya berminat dengan PAKEJ KASHMIR INDIA. Boleh kongsi itinerari dan harga?',
        en: 'Assalamualaikum, I am interested in the KASHMIR INDIA PACKAGE. Could you share the itinerary and price?'
      }
    },
    {
      id: 'nz',
      keys: ['new zealand', 'zealand', 'queenstown', 'rotorua', 'hobbiton', 'middle-earth', 'auckland'],
      ms: 'Pakej <strong>New Zealand</strong>: pemandangan spektakuler — Queenstown, Rotorua &amp; Hobbiton. Tasik alpine, geyser &amp; pengalaman Middle-earth.',
      en: 'Our <strong>New Zealand</strong> package: spectacular scenery — Queenstown, Rotorua &amp; Hobbiton. Alpine lakes, geysers &amp; a Middle-earth experience.',
      wa: {
        ms: 'Assalamualaikum, saya berminat dengan PAKEJ NEW ZEALAND. Boleh kongsi itinerari dan harga?',
        en: 'Assalamualaikum, I am interested in the NEW ZEALAND PACKAGE. Could you share the itinerary and price?'
      }
    },
    {
      id: 'egypt',
      keys: ['egypt', 'mesir', 'cairo', 'pyramid', 'piramid', 'giza', 'luxor', 'nil', 'nile'],
      ms: 'Pakej <strong>Egypt</strong>: Mesir purba — Piramid Giza, Sungai Nil &amp; Luxor. Sejarah firaun yang memukau &amp; pelayaran Nil yang tidak dapat dilupakan.',
      en: 'Our <strong>Egypt</strong> package: Ancient Egypt — Giza Pyramids, the Nile &amp; Luxor. Mesmerizing pharaonic history &amp; an unforgettable Nile cruise.',
      wa: {
        ms: 'Assalamualaikum, saya berminat dengan PAKEJ EGYPT. Boleh kongsi itinerari dan harga?',
        en: 'Assalamualaikum, I am interested in the EGYPT PACKAGE. Could you share the itinerary and price?'
      }
    },
    {
      id: 'domestic',
      keys: ['dalam negara', 'langkawi', 'cameron', 'cameroon highlands', 'perhentian', 'kelantan', 'domestic', 'pulau', 'malaysia'],
      ms: 'Pakej <strong>Dalam Negara</strong> kami: Langkawi, Cameron Highlands, Pulau Perhentian &amp; Kelantan &amp; Sekitarnya. Semua diuruskan dengan teliti! Taip nama destinasi untuk butiran lanjut.',
      en: 'Our <strong>Domestic</strong> packages: Langkawi, Cameron Highlands, Perhentian Islands &amp; Kelantan &amp; Beyond. Everything is carefully managed! Type the destination name for more details.',
      wa: {
        ms: 'Assalamualaikum, saya berminat dengan PAKEJ DALAM NEGARA. Boleh kongsi butiran?',
        en: 'Assalamualaikum, I am interested in the DOMESTIC PACKAGE. Could you share the details?'
      }
    },
    {
      id: 'umrah',
      keys: ['umrah', 'baitullah', 'makkah', 'mecca', 'madinah', 'masjidil haram', 'masjid nabawi', 'mutawwif', 'visa umrah', 'ibadah'],
      ms: 'Pakej <strong>Umrah Farafisyah</strong>: ditadbir bersama mutawwif berpengalaman &amp; rangkaian sah. Termasuk urusan visa, penginapan berdekatan Masjidil Haram &amp; Masjid Nabawi, serta bimbingan lengkap dari awal hingga akhir.',
      en: 'Our <strong>Farafisyah Umrah Package</strong>: managed by experienced mutawwif &amp; an authorized network. Includes visa processing, accommodation near Masjidil Haram &amp; Masjid Nabawi, and complete guidance from start to finish.',
      wa: {
        ms: 'Assalamualaikum, saya berminat dengan PAKEJ UMRAH FARAFISYAH. Boleh kongsi butiran tarikh dan harga?',
        en: 'Assalamualaikum, I am interested in the FARAFISYAH UMRAH PACKAGE. Could you share the dates and price?'
      }
    },
    {
      id: 'price',
      keys: ['harga', 'price', 'cost', 'kos', 'murah', 'cheap', 'budget', 'bajet', 'pricing', 'bayar', 'berapa', 'how much', 'promo', 'promotion', 'diskaun', 'discount', 'rebat'],
      ms: 'Harga bergantung pada destinasi, tarikh &amp; bilangan peserta — kami memang terkenal dengan <strong>harga bajet yang telus</strong> tanpa kos tersembunyi. Bayaran secara <strong>ansuran</strong> juga boleh diuruskan. Untuk sebut harga tepat &amp; terkini, mohon hubungi kami di WhatsApp!',
      en: 'Prices depend on destination, dates &amp; number of travellers — we are well known for <strong>transparent budget prices</strong> with no hidden costs. <strong>Installment payments</strong> are also available. For an accurate &amp; current quote, please contact us on WhatsApp!',
      wa: {
        ms: 'Assalamualaikum, saya ingin dapatkan SEBUT HARGA untuk pakej percutian. Boleh bantu?',
        en: 'Assalamualaikum, I would like a QUOTE for a holiday package. Can you help?'
      }
    },
    {
      id: 'book',
      keys: ['tempah', 'book', 'booking', 'cara', 'how to', 'proses', 'daftar', 'register', 'join', 'sertai', 'enroll', 'masuk'],
      ms: 'Cara tempah mudah! 😊 1) Hubungi kami di WhatsApp, 2) Beritahu destinasi &amp; tarikh yang diminati, 3) Kami sediakan sebut harga &amp; atur ansuran, 4) Sedia untuk bercuti! Tekan butang di bawah untuk mula.',
      en: 'Booking is easy! 😊 1) Contact us on WhatsApp, 2) Tell us your destination &amp; preferred dates, 3) We prepare the quote &amp; arrange installments, 4) Ready to travel! Press the button below to start.',
      wa: {
        ms: 'Assalamualaikum, saya ingin TEMPAH pakej percutian. Boleh bantu saya?',
        en: 'Assalamualaikum, I would like to BOOK a holiday package. Can you help me?'
      }
    },
    {
      id: 'contact',
      keys: ['contact', 'hubungi', 'phone', 'telefon', 'number', 'nombor', 'no tel', 'address', 'alamat', 'email', 'location', 'lokasi', 'where', 'facebook', 'whatsapp', 'wa.me'],
      ms: 'Anda boleh hubungi kami melalui:<br>• <strong>WhatsApp:</strong> +60 11-2738 8164<br>• <strong>Telefon:</strong> 011-27388164<br>• <strong>Email:</strong> farafisyahtravelandtours@gmail.com<br>• <strong>Alamat:</strong> Mantin, Negeri Sembilan',
      en: 'You can reach us via:<br>• <strong>WhatsApp:</strong> +60 11-2738 8164<br>• <strong>Phone:</strong> 011-27388164<br>• <strong>Email:</strong> farafisyahtravelandtours@gmail.com<br>• <strong>Address:</strong> Mantin, Negeri Sembilan',
      wa: {
        ms: 'Assalamualaikum, saya ingin bertanya mengenai pakej percutian',
        en: 'Assalamualaikum, I would like to ask about travel packages'
      }
    },
    {
      id: 'payment',
      keys: ['ansuran', 'installment', 'deposit', 'bayaran', 'payment', 'bayar', 'scheme', 'bulanan', 'monthly', 'cash', 'tunai', 'transfer', 'invoice', 'resit'],
      ms: 'Kami faham perancangan kewangan itu penting — itulah sebabnya kami menawarkan <strong>bayaran secara ansuran</strong> supaya perjalanan anda lebih mudah dirancang. Hubungi kami di WhatsApp untuk butiran skim bayaran.',
      en: 'We understand financial planning matters — that is why we offer <strong>installment payments</strong> so your trip is easier to plan. Contact us on WhatsApp for payment scheme details.',
      wa: {
        ms: 'Assalamualaikum, saya ingin tahu SKIM BAYARAN/ANSURAN untuk pakej percutian. Boleh kongsi butiran?',
        en: 'Assalamualaikum, I would like to know the INSTALLMENT PAYMENT scheme for holiday packages. Could you share the details?'
      }
    },
    {
      id: 'visa',
      keys: ['visa', 'passport', 'pasport', 'dokumen', 'document', 'travel insurance', 'insurans'],
      ms: 'Untuk pakej luar negara, kami akan membantu dari segi urusan visa &amp; dokumen yang diperlukan. Setiap destinasi berbeza keperluan. Beritahu destinasi pilihan anda dan kami akan terangkan.',
      en: 'For international packages, we help with visa &amp; document arrangements. Requirements differ per destination. Tell us your chosen destination and we will explain.',
      wa: {
        ms: 'Assalamualaikum, saya ingin tanya tentang VISA/DOKUMEN untuk pakej luar negara. Boleh bantu?',
        en: 'Assalamualaikum, I would like to ask about VISA/DOCUMENTS for international packages. Can you help?'
      }
    },
    {
      id: 'why',
      keys: ['kenapa', 'why', 'trusted', 'dipercayai', 'boleh percaya', 'reliable', 'experience', 'pengalaman', 'jujur', 'jujur'],
      ms: 'Kenapa pilih kami? 💚<br>• <strong>10+ tahun</strong> pengalaman<br>• Harga bajet &amp; telus<br>• Itinerari custom made<br>• Ejen &amp; rangkaian sah<br>• Perkhidmatan mesra — "Kegembiraan Anda, Kepuasan Kami"',
      en: 'Why choose us? 💚<br>• <strong>10+ years</strong> experience<br>• Budget &amp; transparent prices<br>• Custom-made itineraries<br>• Authorized agents &amp; network<br>• Friendly service — "Your Joy, Our Satisfaction"',
      wa: {
        ms: 'Assalamualaikum, saya ingin tahu lebih lanjut tentang Farafisyah Travel & Tours',
        en: 'Assalamualaikum, I would like to know more about Farafisyah Travel & Tours'
      }
    },
    {
      id: 'thanks',
      keys: ['terima kasih', 'thanks', 'thank you', 'tq', 'thankyou', 'tqsm', 'appreciate'],
      ms: '',
      en: ''
    },
    {
      id: 'bye',
      keys: ['bye', 'babai', 'goodbye', 'see you', 'jumpa lagi', 'daah'],
      ms: 'Selamat tinggal! 👋 Terima kasih kerana melawat <strong>Farafisyah Travel &amp; Tours</strong>. Jumpa lagi di pakej seterusnya, insyaAllah!',
      en: 'Goodbye! 👋 Thank you for visiting <strong>Farafisyah Travel &amp; Tours</strong>. See you on the next package, God willing!'
    }
  ];

  var FALLBACK = {
    ms: 'Maaf, saya belum faham soalan itu. 😅 Saya masih belajar! Untuk jawapan yang lebih tepat dan peribadi, sila hubungi kami terus di WhatsApp — kami sedia membantu secepat mungkin.',
    en: 'Sorry, I do not fully understand that yet. 😅 I am still learning! For a more accurate and personal answer, please contact us directly on WhatsApp — we are ready to help as soon as possible.'
  };

  var FALLBACK_WA = {
    ms: 'Assalamualaikum, saya ada soalan tentang pakej percutian. Boleh bantu?',
    en: 'Assalamualaikum, I have a question about holiday packages. Can you help?'
  };

  /* ---------- Widget DOM ---------- */
  var chatbot = document.getElementById('chatbot');
  var toggle = document.getElementById('chatbotToggle');
  var panel = document.getElementById('chatbotPanel');
  var closeBtn = document.getElementById('chatbotClose');
  var body = document.getElementById('chatbotBody');
  var quick = document.getElementById('chatbotQuick');
  var form = document.getElementById('chatbotForm');
  var input = document.getElementById('chatbotText');

  var started = false;

  function getLang() {
    return (localStorage.getItem('tba_lang') || 'ms') === 'en' ? 'en' : 'ms';
  }

  function dict() {
    return UI[getLang()] || UI.ms;
  }

  function waHref(msg) {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
  }

  function waButton(msg) {
    var d = dict();
    return '<span class="chatbot-em">' + d.wa_cta_note + '</span>' +
      '<a class="chatbot-wa" target="_blank" rel="noopener" href="' + waHref(msg) + '">' +
      '<i class="fa-brands fa-whatsapp"></i> ' + d.wa_cta + '</a>';
  }

  function scrollBottom() {
    body.scrollTop = body.scrollHeight;
  }

  function addMsg(html, sender) {
    var el = document.createElement('div');
    el.className = 'chatbot-msg ' + sender;
    el.innerHTML = html;
    body.appendChild(el);
    scrollBottom();
    return el;
  }

  function showTyping() {
    var el = document.createElement('div');
    el.className = 'chatbot-typing';
    el.id = 'chatbotTyping';
    el.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(el);
    scrollBottom();
  }

  function hideTyping() {
    var el = document.getElementById('chatbotTyping');
    if (el) el.remove();
  }

  function renderQuick() {
    var d = dict();
    quick.innerHTML = '';
    d.quick.forEach(function (q) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = q;
      b.addEventListener('click', function () { send(q); });
      quick.appendChild(b);
    });
  }

  function respond(text) {
    var lang = getLang();
    var lower = ' ' + text.toLowerCase() + ' ';

    /* exact match on quick replies to force the intended intent */
    var idx = -1;
    var bestScore = 0;
    for (var i = 0; i < INTENTS.length; i++) {
      var int = INTENTS[i];
      var score = 0;
      for (var k = 0; k < int.keys.length; k++) {
        if (lower.indexOf(' ' + int.keys[k] + ' ') !== -1 || lower.indexOf(int.keys[k]) !== -1) {
          score += int.keys[k].split(' ').length;
        }
      }
      if (score > bestScore) { bestScore = score; idx = i; }
    }

    if (idx === -1) {
      var fb = FALLBACK[lang];
      addMsg(fb + '<br>' + waButton(FALLBACK_WA[lang]), 'bot');
      renderQuick();
      return;
    }

    var intent = INTENTS[idx];

    if (intent.id === 'thanks') {
      addMsg(UI[lang].thanks, 'bot');
      return;
    }

    var reply = intent[lang];

    if (intent.wa) {
      addMsg(reply + '<br>' + waButton(intent.wa[lang]), 'bot');
      renderQuick();
      return;
    }

    addMsg(reply, 'bot');
    if (intent.id === 'greet' || intent.id === 'help' || intent.id === 'packages') renderQuick();
  }

  function send(raw) {
    var text = (raw || '').trim();
    if (!text) return;
    addMsg(escapeHtml(text), 'user');
    input.value = '';
    renderQuick();
    showTyping();
    var delay = 600 + Math.random() * 600;
    setTimeout(function () {
      hideTyping();
      respond(text);
    }, delay);
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function openPanel() {
    chatbot.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    input.focus();
    if (!started) {
      started = true;
      showTyping();
      setTimeout(function () {
        hideTyping();
        addMsg(dict().greeting, 'bot');
        renderQuick();
      }, 700);
    } else {
      renderQuick();
    }
  }

  function closePanel() {
    chatbot.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
  }

  toggle.addEventListener('click', function () {
    chatbot.classList.contains('open') ? closePanel() : openPanel();
  });

  closeBtn.addEventListener('click', closePanel);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    send(input.value);
  });

  /* keep language in sync with the site's EN/MS toggle */
  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      input.setAttribute('placeholder', dict().placeholder);
      toggle.setAttribute('aria-label', dict().toggle);
      if (chatbot.classList.contains('open')) renderQuick();
    });
  }

  input.setAttribute('placeholder', dict().placeholder);
  toggle.setAttribute('aria-label', dict().toggle);
})();
