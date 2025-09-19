// Application Data

const appData = {
  supportedLanguages: [
    {"code": "hi", "name": "Hindi", "native": "हिंदी"},
    {"code": "en", "name": "English", "native": "English"},
    {"code": "ta", "name": "Tamil", "native": "தமிழ்"},
    {"code": "mr", "name": "Marathi", "native": "मराठी"},
    {"code": "bn", "name": "Bengali", "native": "বাংলা"}
  ],
  campusFAQ: {
    fees: {
      en: "Tuition fees are due by the 15th of each month. You can pay online through the student portal or at the accounts office. Late fees apply after the due date.",
      hi: "शिक्षा शुल्क हर महीने की 15 तारीख तक जमा करना होता है। आप छात्र पोर्टल से ऑनलाइन या खाता कार्यालय में भुगतान कर सकते हैं। देर से भुगतान पर अतिरिक्त शुल्क लगता है।",
      ta: "கல்விக் கட்டணம் ஒவ்வொரு மாதமும் 15 ஆம் தேதிக்குள் செலுத்த வேண்டும். நீங்கள் மாணவர் போர்ட்டல் மூலம் ஆன்லைனில் அல்லது கணக்கு அலுவலகத்தில் பணம் செலுத்தலாம்.",
      mr: "शिक्षण शुल्क दर महिन्याच्या 15 तारखेपर्यंत भरावे लागते. तुम्ही विद्यार्थी पोर्टलद्वारे ऑनलाइन किंवा लेखा कार्यालयात पेमेंट करू शकता.",
      bn: "প্রতি মাসের ১৫ তারিখের মধ্যে টিউশন ফি জমা দিতে হবে। আপনি ছাত্র পোর্টালের মাধ্যমে অনলাইনে বা অ্যাকাউন্ট অফিসে পেমেন্ট করতে পারেন।"
    },
    scholarships: {
      en: "Merit scholarships are available for students with 85%+ marks. Need-based scholarships require income certificate. Applications open in July.",
      hi: "85% से अधिक अंक वाले छात्रों के लिए मेधा छात्रवृत्ति उपलब्ध है। आवश्यकता आधारित छात्रवृत्ति के लिए आय प्रमाण पत्र चाहिए। आवेदन जुलाई में खुलते हैं।",
      ta: "85% க்கும் அதிகமான மதிப்பெண்கள் பெற்ற மாணவர்களுக்கு மேதைப் புலமைப்பரிசில் உள்ளது. தேவை அடிப்படையிலான புலமைப்பரிசிலுக்கு வருமானச் சான்றிதழ் தேவை.",
      mr: "85% पेक्षा जास्त गुण असलेल्या विद्यार्थ्यांसाठी गुणवत्ता शिष्यवृत्ती उपलब्ध आहे. गरज-आधारित शिष्यवृत्तीसाठी उत्पन्न प्रमाणपत्र आवश्यक आहे.",
      bn: "৮৫% এর বেশি নম্বর প্রাপ্ত ছাত্রছাত্রীদের জন্য মেধা বৃত্তি রয়েছে। প্রয়োজন ভিত্তিক বৃত্তির জন্য আয়ের সার্টিফিকেট দরকার।"
    },
    timetable: {
      en: "Class schedules are available on the student portal. Updates are posted 24 hours in advance. Check your department notice board for changes.",
      hi: "कक्षा की समय सारणी छात्र पोर्टल पर उपलब्ध है। अपडेट 24 घंटे पहले पोस्ट किए जाते हैं। बदलाव के लिए अपने विभाग का नोटिस बोर्ड देखें।",
      ta: "வகுப்பு அட்டவணைகள் மாணவர் போர்ட்டலில் கிடைக்கும். புதுப்பிப்புகள் 24 மணி நேரம் முன்னதாகவே வெளியிடப்படும்.",
      mr: "वर्ग वेळापत्रक विद्यार्थी पोर्टलवर उपलब्ध आहे. अपडेट्स 24 तास आधी पोस्ट केले जातात.",
      bn: "ক্লাস রূটিন ছাত্র পোর্টালে পাওয়া যায়। আপডেট ২৪ ঘন্টা আগে পোস্ট করা হয়।"
    },
    library: {
      en: "Library is open 8 AM to 10 PM on weekdays, 9 AM to 6 PM on weekends. Books can be issued for 15 days with renewal option.",
      hi: "पुस्तकालय सप्ताह के दिन सुबह 8 से रात 10 बजे तक, सप्ताहांत में सुबह 9 से शाम 6 बजे तक खुला रहता है। पुस्तकें 15 दिन के लिए जारी की जा सकती हैं।",
      ta: "நூலகம் வாரநாட்களில் காலை 8 மணி முதல் இரவு 10 மணி வரை, வார இறுதிகளில் காலை 9 மணி முதல் மாலை 6 மணி வரை திறந்திருக்கும்।",
      mr: "ग्रंथालय आठवड्याच्या दिवशी सकाळी 8 ते रात्री 10 वाजेपर्यंत, शनिवार-रविवार सकाळी 9 ते संध्याकाळी 6 वाजेपर्यंत उघडे असते.",
      bn: "লাইব্রেরি সপ্তাহের দিনগুলিতে সকাল ৮টা থেকে রাত ১০টা পর্যন্ত, সপ্তাহান্তে সকাল ৯টা থেকে সন্ধ্যা ৬টা পর্যন্ত খোলা থাকে।"
    },
    exam: {
      en: "Exam schedules are published 2 weeks before each semester. Hall tickets must be downloaded from the student portal. Results are announced within 30 days.",
      hi: "परीक्षा कार्यक्रम प्रत्येक सेमेस्टर से 2 सप्ताह पहले प्रकाशित किया जाता है। हॉल टिकट छात्र पोर्टल से डाउनलोड करना होता है। परिणाम 30 दिनों के भीतर घोषित किए जाते हैं।",
      ta: "ஒவ்வொரு செமஸ்டருக்கும் 2 வாரங்களுக்கு முன்பு தேர्व அட்டवणை வெளியிடப்படும். ஹால் டிக்கറ்களை மாணவர் போர்ட்டலில் இருந்து டाउன்லோட் செய்ய வேண்டும்।",
      mr: "परीक्षा वेळापत्रक प्रत्येक सेमिस्टरच्या 2 आठवडे आधी प्रकाशित केले जाते. हॉल तिकिट विद्यार्थी पोर्टलवरून डाउनलोड करावे लागते.",
      bn: "প্রতি সেমিস্টারের ২ সপ্তাহ আগে পরীক্ষার সময়সূচী প্রকাশিত হয়। হল টিকেট ছাত্র পোর্টাল থেকে ডাউনলোড করতে হবে।"
    },
    admission: {
      en: "Admissions for the next academic year open in May. Online applications are available on our website. Merit-based selection with entrance test for some courses.",
      hi: "अगले शैक्षणिक वर्ष के लिए प्रवेश मई में खुलते हैं। ऑनलाइन आवेदन हमारी वेबसाइट पर उपलब्ध हैं। कुछ कोर्सों के लिए प्रवेश परीक्षा के साथ मेरिट आधारित चयन।",
      ta: "அடுத்த கல்வி ஆண்டுக்கான சேர்க்கை மே மாதத்தில் தொடங்கும். ஆன்லைன் விண்ணப்பங்கள் எங்கள் இணையதளத்தில் கிடைக்கும்।",
      mr: "पुढील शैक्षणिक वर्षासाठी प्रवेश मे महिन्यात उघडतात. ऑनलाइन अर्ज आमच्या वेबसाइटवर उपलब्ध आहेत.",
      bn: "পরবর্তী শিক্ষাবর্ষের জন্য ভর্তি মে মাসে শুরু হয়। অনলাইন আবেদন আমাদের ওয়েবসাইটে পাওয়া যাবে।"
    }
  },
  quickActions: {
    en: ["Fee Payment", "Scholarships", "Timetable", "Library Hours", "Exam Schedule", "Admissions"],
    hi: ["फीस भुगতान", "छात्रवृत्ति", "समय सारणी", "पुस्तकालय समय", "परीक्षा कार्यक्रम", "प्रवेश"],
    ta: ["கட்டண செலুத்துதல்", "புலமைப்பரிசில்", "நேர அட்டवணै", "நூலக நேரம்", "தேர்வு கार்यक्रम", "சேர்க்கை"],
    mr: ["फी पेमेंट", "शिष्यवृत्ती", "वेळापत्रक", "ग्रंथालय वेळ", "परीक्षा वेळापत्रक", "प्रवेश"],
    bn: ["ফি পেমেন্ট", "বৃত্তি", "সময়সূচী", "লাইব্রেরির সময়", "পরীক্ষার সময়সূচী", "ভর্তি"]
  },
  greetings: {
    en: "Hello! I'm your campus assistant. I can help you with fees, scholarships, timetables, and more. How can I assist you today?",
    hi: "नमस्ते! मैं आपका कैम्पस सहायक हूं। मैं फीस, छात्रवृत्ति, समय सारणी और अन्य चीजों में आपकी मदद कर सकता हूं। आज मैं आपकी कैसे सहायता कर सकता हूं?",
    ta: "வணக்கம்! நான் உங்கள் வளாக உதவியாளர். கட்டணம், புலமைப்பரிசில், நேரஅட்டവணै மற்றும் பிறவற்றில் உங்களுக்கு உதவ முடியும். இன்று நான் எவ்வாறு உதவ முடியும்?",
    mr: "नमस्कार! मी तुमचा कॅम्पस सहाय्यक आहे. मी फी, शिष्यवृत्ती, वेळापत्रक आणि इतर गोष्टींमध्ये तुम्हाला मदत करू शकतो. आज मी तुम्हाला कशी मदत करू शकतो?",
    bn: "নমস্কার! আমি আপনার ক্যাম্পাস সহায়ক। আমি ফি, বৃত্তি, সময়সূচী এবং আরও অনেক বিষয়ে সাহায্য করতে পারি। আজ কীভাবে সাহায্য করতে পারি?"
  },
  humanHandoff: {
    en: "I understand you need more detailed assistance. Let me connect you with a human agent who can provide personalized support. Please wait while I transfer your request...",
    hi: "मैं समझता हूं कि आपको अधिक विस्तृत सहायता की आवश्यकता है। मैं आपको एक मानव एजेंट से जोड़ता हूं जो व्यक्तिगत सहायता प्रदान कर सकता है। कृपया प्रतीक्षा करें जबकि मैं आपका अनुरोध स्थानांतरित करता हूं...",
    ta: "உங்களுக்கு மிகவும் விரிவான உதவி தேவை என்பதை நான் புரிந்துகொள்கிறேன். தனிப்பட்ட ஆதரவை வழங்கக்கூடிய ஒரு மனித முகவரிடம் உங்களை இணைக்கிறேன்। நான் உங்கள் கோரிக்கையை மாற்றும்போது காத்திருக்கவும்...",
    mr: "तुम्हाला अधिक तपशीलवार सहाय्य हवे आहे हे मला समजते. मी तुम्हाला एका मानवी एजंटशी जोडतो जो व्यक्तिगत सहाय्य देऊ शकतो. मी तुमची विनंती हस्तांतरित करत असताना कृपया प्रतीक्षा करा...",
    bn: "আমি বুঝতে পারছি যে আপনার আরও বিস্তারিত সহায়তা প্রয়োজন। আমি আপনাকে একজন মানব এজেন্টের সাথে সংযুক্ত করছি যিনি ব্যক্তিগত সহায়তা প্রদান করতে পারেন। আমি আপনার অনুরোধ স্থানান্তর করার সময় অনুগ্রহ করে অপেক্ষা করুন..."
  },
  fallbackResponses: {
    en: "I'm sorry, I didn't understand that. Could you please rephrase your question? You can ask about fees, scholarships, timetables, library hours, exam schedules, or admissions.",
    hi: "मुझे खुশी है, मैं इसे समझ नहीं सका। क्या आप कृपया अपना प्रश्न दोबारा पूछ सकते हैं? आप फीस, छात्रवृत्ति, समय सारणी, पुस्तकालय घंटे, परीक्षा कार्यक्रम या प्रवेश के बारे में पूछ सकते हैं।",
    ta: "மன்னிக்கவும், எനக்கு அது புரியவில்லை. தயவுசெய்து உங்கள் கேள்வியை மீண்டும் சொல்ல முடியுமா? நீங்கள் கட்டணம், புலমைப்பரிசில், நேர அட்டவணை, நூலக நேரம், தேர்வு அட்டवणை அல்லது சேர्க்கை பற்றி கேட்கலாம்।",
    mr: "मला माफ करा, मला ते समजले नाही. कृपया तुमचा प्रश्न पुन्हा विचारू शकाल का? तुम्ही फी, शिष्यवृत्ती, वेळापत्रक, ग्रंथालय तास, परीक्षा वेळापत्रक किंवा प्रवेशांबद्दल विचारू शकता.",
    bn: "আমি দুঃখিত, আমি বুঝতে পারিনি। আপনি কি আপনার প্রশ্নটি আবার বলতে পারবেন? আপনি ফি, বৃত্তি, সময়সূচী, লাইব্রেরির সময়, পরীক্ষার সময়সূচী বা ভর্তি সম্পর্কে জিজ্ঞাসা করতে পারেন।"
  }
};
// NLU: normalization and tokenization
const NLU = (() => {
  const punctRe = /[^\p{L}\p{N}\s]/gu;
  const spacesRe = /\s+/g;

  const normalize = (text, lang) => {
    if (!text) return "";
    let s = text.normalize("NFKC").toLowerCase();
    s = s.replace(punctRe, " ").replace(spacesRe, " ").trim();
    // unify numbers
    s = s.replace(/[०-९]/g, d => "०१२३४५६७८९".indexOf(d)).replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d));
    return s;
  };
  function autoDetectLanguage(text) {
  if (!text || text.length < 4) return;
  const patterns = {
    hi: /[\u0900-\u097F]/, // Devanagari
    ta: /[\u0B80-\u0BFF]/, // Tamil
    mr: /[\u0900-\u097F]/, // Devanagari
    bn: /[\u0980-\u09FF]/, // Bengali
    en: /[a-zA-Z]/
  };
  // simple heuristic scores
  const scores = {};
  for (const [lang, re] of Object.entries(patterns)) {
    scores[lang] = (text.match(new RegExp(re, "g")) || []).length;
  }
  // pick best non-en if strong
  let best = "en", bestScore = 0;
  for (const [lang, s] of Object.entries(scores)) {
    if (s > bestScore) { best = lang; bestScore = s; }
  }
  // margin: require at least 3 non-en chars to switch
  if (best !== appState.currentLanguage && best !== "en" && bestScore >= 3) {
    setLanguage(best);
  }
}

  // naive tokens; script-aware fallback
  const tokenize = (text) => text.split(/\s+/).filter(Boolean);

  // minimal stemming/synonyms per language
  const synonymMap = {
    en: {
      fees: ["fee", "fees", "payment", "pay", "tuition", "dues", "challan", "fine"],
      exam: ["exam", "exams", "test", "hallticket", "hall", "result", "marks", "grade"],
      timetable: ["timetable", "schedule", "class", "timing", "slots", "calendar"],
      library: ["library", "lib", "book", "issue", "return", "renewal", "hours"],
      scholarships: ["scholarship", "scholarships", "grant", "aid", "financial", "fee waiver"],
      admission: ["admission", "admissions", "enroll", "enrollment", "apply", "application"]
    },
    hi: {
      fees: ["फीस", "शुल्क", "पेमेंट", "भुगतान", "जुर्माना"],
      exam: ["परीक्षा", "एग्जाम", "हॉल", "हॉलटिकट", "रिजल्ट", "परिणाम", "अंक"],
      timetable: ["टाइमटेबल", "समय सारिणी", "कक्षा", "शेड्यूल"],
      library: ["पुस्तकालय", "लाइब्रेरी", "किताब", "इश्यू", "रीटर्न", "नवीनीकरण"],
      scholarships: ["वृत्ति", "स्कॉलरशिप", "आर्थिक", "सहायता"],
      admission: ["प्रवेश", "एडमिशन", "आवेदन"]
    },
    ta: {
      fees: ["கட்டணம்", "fees", "payment", "கட்டணங்கள்"],
      exam: ["தேர்வு", "எக்சாம்", "hall", "டிக்கெட்", "மதிப்பெண்", "விளைவு"],
      timetable: ["நேர அட்டவணை", "அட்டவணை", "கிளாஸ்", "அட்டவணை"],
      library: ["நூலகம்", "புத்தகம்", "வழங்கு", "திரும்ப", "நேரங்கள்"],
      scholarships: ["உதவித்தொகை", "அருளாதாரம்"],
      admission: ["சேர்க்கை", "விண்ணப்பம்"]
    },
    mr: {
      fees: ["फी", "शुल्क", "पेमेंट", "भरणा", "दंड"],
      exam: ["परीक्षा", "हॉल", "तिकीट", "निकाल", "गुण"],
      timetable: ["वेळापत्रक", "क्लास", "शेड्युल"],
      library: ["ग्रंथालय", "लायब्ररी", "पुस्तक", "इश्यू", "रिटर्न"],
      scholarships: ["शिष्यवृत्ती", "आर्थिक", "मदत"],
      admission: ["प्रवेश", "अर्ज"]
    },
    bn: {
      fees: ["ফি", "শুল্ক", "পেমেন্ট", "পরিশোধ", "জরিমানা"],
      exam: ["পরীক্ষা", "হল", "টিকিট", "রেজাল্ট", "নম্বর"],
      timetable: ["সময়সূচী", "ক্লাস", "সূচি"],
      library: ["গ্রন্থাগার", "লাইব্রেরি", "বই", "ইস্যু", "রিটার্ন"],
      scholarships: ["বৃত্তি", "আর্থিক", "সহায়তা"],
      admission: ["ভর্তি", "আবেদন"]
    }
  };

  // regex patterns with high precision
  const regexIntents = {
    en: [
      { intent: "fees", re: /\b(last\s+date|deadline|due|pay|payment|tuition|fees?)\b/ },
      { intent: "exam", re: /\b(hall\s*ticket|admit\s*card|result|exam|revaluation|grade)\b/ },
      { intent: "timetable", re: /\b(timetable|schedule|class(es)?\s*(time|slot|schedule))\b/ },
      { intent: "library", re: /\b(library|book\s*(issue|return|renew|fine)|opening\s*hours)\b/ },
      { intent: "scholarships", re: /\b(scholarship|grant|financial\s*aid|fee\s*waiver)\b/ },
      { intent: "admission", re: /\b(admission|enroll(ment)?|apply|application)\b/ }
    ],
    hi: [
      { intent: "fees", re: /(आखिरी|अंतिम|डेडलाइन|तारीख|भुगतान|शुल्क|फीस)/ },
      { intent: "exam", re: /(हॉल\s*टिकट|प्रवेश\s*पत्र|परिणाम|एग्जाम|परीक्षा)/ },
      { intent: "timetable", re: /(समय\s*सारिणी|टाइमटेबल|कक्षा\s*समय)/ },
      { intent: "library", re: /(पुस्तकालय|लाइब्रेरी|किताब|जुर्माना|समय)/ },
      { intent: "scholarships", re: /(वृत्ति|स्कॉलरशिप|आर्थिक\s*सहायता)/ },
      { intent: "admission", re: /(प्रवेश|एडमिशन|आवेदन)/ }
    ],
    ta: [
      { intent: "fees", re: /(கட்டணம்|payment|fees|காலவரை|கடைசி\s*தேதி)/ },
      { intent: "exam", re: /(தேர்வு|ஹால்\s*டிக்கெட்|விளைவு|மதிப்பெண்)/ },
      { intent: "timetable", re: /(நேர\s*அட்டவணை|அட்டவணை|கிளாஸ்\s*டைம்)/ },
      { intent: "library", re: /(நூலகம்|புத்தகம்|அபராதம்|நேரங்கள்)/ },
      { intent: "scholarships", re: /(உதவித்தொகை|நிதி\s*உதவி)/ },
      { intent: "admission", re: /(சேர்க்கை|விண்ணப்பம்)/ }
    ],
    mr: [
      { intent: "fees", re: /(शुल्क|फी|भरणा|पेमेंट|अंतिम\s*तारीख)/ },
      { intent: "exam", re: /(हॉल\s*तिकीट|निकाल|परीक्षा|गुण)/ },
      { intent: "timetable", re: /(वेळापत्रक|क्लास\s*टाइम)/ },
      { intent: "library", re: /(ग्रंथालय|पुस्तक|दंड|वेळ)/ },
      { intent: "scholarships", re: /(शिष्यवृत्ती|आर्थिक\s*मदत)/ },
      { intent: "admission", re: /(प्रवेश|अर्ज)/ }
    ],
    bn: [
      { intent: "fees", re: /(ফি|শুল্ক|পরিশোধ|ডেডলাইন|শেষ\s*তারিখ)/ },
      { intent: "exam", re: /(হল\s*টিকিট|রেজাল্ট|পরীক্ষা|নম্বর)/ },
      { intent: "timetable", re: /(সময়সূচী|ক্লাস\s*টাইম)/ },
      { intent: "library", re: /(গ্রন্থাগার|বই|জরিমানা|খোলার\s*সময়)/ },
      { intent: "scholarships", re: /(বৃত্তি|আর্থিক\s*সহায়তা)/ },
      { intent: "admission", re: /(ভর্তি|আবেদন)/ }
    ]
  };

  // core classify
  const classify = (text, lang, context) => {
    const norm = normalize(text, lang);
    if (!norm) return { intent: "general", confidence: 0 };
    const tokens = tokenize(norm);

    // 1) regex pass (high precision)
    const patterns = regexIntents[lang] || regexIntents.en;
    for (const { intent, re } of patterns) {
      if (re.test(norm)) return { intent, confidence: 0.95 };
    }

    // 2) synonym overlap scoring
    const dict = synonymMap[lang] || synonymMap.en;
    let best = { intent: "general", score: 0 };
    for (const [intent, synonyms] of Object.entries(dict)) {
      const hits = synonyms.reduce((acc, s) => acc + (tokens.includes(s) ? 1 : 0), 0);
      if (hits > best.score) best = { intent, score: hits };
    }

    // 3) context boost (last bot intent in memory)
    let ctxBoost = 0;
    const last = context?.lastIntent;
    if (last && last === best.intent) ctxBoost = 0.2;

    const confidence = Math.min(0.2 + best.score * 0.25 + ctxBoost, 0.9);
    return { intent: best.intent, confidence };
  };

  return { normalize, tokenize, classify };
})();


// Application State
const appState = {
  // in appState
// add:
  lastIntent: "general",
  currentLanguage: 'en',
  conversations: [],
  currentConversation: [],
  analytics: {
    totalConversations: 0,
    languageUsage: {},
    queryTypes: {},
    popularQueries: []
  },
  settings: {
    darkMode: false,
    notifications: true
  }
};

// DOM Elements
let elements = {};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  initializeApp();
  bindEventListeners();
});

function initializeElements() {
  elements = {
    languageSelector: document.getElementById('languageSelector'),
    settingsBtn: document.getElementById('settingsBtn'),
    chatMessages: document.getElementById('chatMessages'),
    quickActions: document.getElementById('quickActions'),
    messageInput: document.getElementById('messageInput'),
    sendBtn: document.getElementById('sendBtn'),
    humanAgentBtn: document.getElementById('humanAgentBtn'),
    clearChatBtn: document.getElementById('clearChatBtn'),
    settingsModal: document.getElementById('settingsModal'),
    closeSettingsBtn: document.getElementById('closeSettingsBtn'),
    darkModeToggle: document.getElementById('darkModeToggle'),
    notificationsToggle: document.getElementById('notificationsToggle'),
    exportChatBtn: document.getElementById('exportChatBtn'),
    showAnalyticsBtn: document.getElementById('showAnalyticsBtn'),
    clearDataBtn: document.getElementById('clearDataBtn'),
    analyticsPanel: document.getElementById('analyticsPanel'),
    closeAnalyticsBtn: document.getElementById('closeAnalyticsBtn'),
    loadingOverlay: document.getElementById('loadingOverlay')
  };
}

function initializeApp() {
  // Load saved settings
  loadSettings();

  // Set default language
  setLanguage('en');

  // Show welcome message
  showWelcomeMessage();

  // Generate quick actions
  generateQuickActions();

  // Initialize analytics
  initializeAnalytics();
}

function bindEventListeners() {
  // Language selector
  elements.languageSelector.addEventListener('change', function(e) {
    setLanguage(e.target.value);
  });

  // Message input
  elements.messageInput.addEventListener('input', function(e) {
    elements.sendBtn.disabled = e.target.value.trim() === '';
    autoDetectLanguage(e.target.value);
  });

  elements.messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Send button
  elements.sendBtn.addEventListener('click', sendMessage);

  // Human agent button
  elements.humanAgentBtn.addEventListener('click', requestHumanAgent);

  // Clear chat button
  elements.clearChatBtn.addEventListener('click', clearChat);

  // Settings modal
  elements.settingsBtn.addEventListener('click', function() {
    elements.settingsModal.style.display = 'flex';
  });

  elements.closeSettingsBtn.addEventListener('click', function() {
    elements.settingsModal.style.display = 'none';
  });

  // Settings toggles
  elements.darkModeToggle.addEventListener('change', function(e) {
    toggleDarkMode(e.target.checked);
  });

  elements.notificationsToggle.addEventListener('change', function(e) {
    appState.settings.notifications = e.target.checked;
    saveSettings();
  });

  // Export and analytics
  elements.exportChatBtn.addEventListener('click', exportChatHistory);
  elements.showAnalyticsBtn.addEventListener('click', showAnalytics);
  elements.clearDataBtn.addEventListener('click', clearAllData);

  // Analytics panel
  elements.closeAnalyticsBtn.addEventListener('click', function() {
    elements.analyticsPanel.style.display = 'none';
  });

  // Modal click outside to close
  elements.settingsModal.addEventListener('click', function(e) {
    if (e.target === elements.settingsModal) {
      elements.settingsModal.style.display = 'none';
    }
  });
}

function setLanguage(languageCode) {
  appState.currentLanguage = languageCode;
  elements.languageSelector.value = languageCode;

  // Update UI text
  updateUILanguage();

  // Regenerate quick actions
  generateQuickActions();

  // Update analytics
  updateLanguageUsage(languageCode);

  // Clear current conversation and show new welcome
  clearChat();
  showWelcomeMessage();
}

function updateUILanguage() {
  // This would update all UI text based on current language
  // For now, we'll just update quick action labels
  const translations = {
    en: {
      human_agent: "Human Agent",
      clear_chat: "Clear Chat"
    },
    hi: {
      human_agent: "मानव एजेंट",
      clear_chat: "चैट साफ़ करें"
    },
    ta: {
      human_agent: "மனித முகவர்",
      clear_chat: "அரட்டையை அழிக்கவும்"
    },
    mr: {
      human_agent: "मानवी एजंट",
      clear_chat: "चॅट साफ करा"
    },
    bn: {
      human_agent: "মানব এজেন্ট",
      clear_chat: "চ্যাট পরিষ্কার করুন"
    }
  };

  const currentTranslations = translations[appState.currentLanguage] || translations.en;

  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (currentTranslations[key]) {
      element.textContent = currentTranslations[key];
    }
  });
}

function autoDetectLanguage(text) {
  if (!text || text.length < 10) return;

  // Simple language detection based on character patterns
  const patterns = {
    hi: /[ऀ-ॿ]/,
    ta: /[஀-௿]/,
    mr: /[ऀ-ॿ]/,
    bn: /[ঀ-৿]/,
    en: /^[a-zA-Z0-9\s.,!?]+$/
  };

  for (const [lang, pattern] of Object.entries(patterns)) {
    if (pattern.test(text) && lang !== 'en') {
      if (appState.currentLanguage !== lang) {
        setLanguage(lang);
        break;
      }
    }
  }
}

function showWelcomeMessage() {
  const greeting = appData.greetings[appState.currentLanguage];
  addMessage(greeting, 'bot');
}

function generateQuickActions() {
  const actions = appData.quickActions[appState.currentLanguage];
  const quickActionsHtml = `
    <h3>Quick Actions</h3>
    <div class="quick-action-buttons">
      ${actions.map((action, index) => `
        <button class="quick-action-btn" data-action="${Object.keys(appData.campusFAQ)[index] || 'general'}" onclick="handleQuickAction(this)">
          ${action}
        </button>
      `).join('')}
    </div>
  `;
  elements.quickActions.innerHTML = quickActionsHtml;
}

function handleQuickAction(button) {
  const action = button.getAttribute('data-action');
  const query = button.textContent.trim();

  // Add user message
  addMessage(query, 'user');

  // Get bot response
  setTimeout(() => {
    const response = getBotResponse(action);
    addMessage(response, 'bot');
  }, 800);

  // Update analytics
  updateQueryAnalytics(action);
}

function sendMessage() {
  const message = elements.messageInput.value.trim();
  if (!message) return;

  // Add user message
  addMessage(message, 'user');

  // Clear input
  elements.messageInput.value = '';
  elements.sendBtn.disabled = true;

  // Show typing indicator
  showTypingIndicator();

  // Process message and get response
  setTimeout(() => {
    hideTypingIndicator();
    const response = processUserMessage(message);
    addMessage(response, 'bot');
  }, 1000 + Math.random() * 1000);
}

function processUserMessage(message) {
  const lang = appState.currentLanguage || "en";
  // classify with context
  const context = { lastIntent: appState.lastIntent };
  const { intent, confidence } = NLU.classify(message, lang, context);

  // thresholds
  if (confidence >= 0.6) {
    appState.lastIntent = intent;
    updateQueryAnalytics(intent);
    return getBotResponse(intent);
  }

  // low confidence: propose top categories based on tokens
  const suggestions = ["fees", "exam", "timetable", "library", "scholarships", "admission"];
  const tip = appData.fallbackResponses[lang] || appData.fallbackResponses.en;
  const hint = suggestions.slice(0, 3).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" • ");
  updateQueryAnalytics("general");
  return `${tip}\n\n${hint}`;
}


function getBotResponse(intent) {
  const responses = appData.campusFAQ[intent];
  if (responses && responses[appState.currentLanguage]) {
    return responses[appState.currentLanguage];
  }

  // Fallback response
  return appData.fallbackResponses[appState.currentLanguage];
}

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message message--${sender}`;

  const timestamp = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const avatarText = sender === 'user' ? 'U' : 'AI';

  messageDiv.innerHTML = `
    <div class="message__avatar">${avatarText}</div>
    <div class="message__content">
      ${text}
      <div class="message__timestamp">${timestamp}</div>
    </div>
  `;

  elements.chatMessages.appendChild(messageDiv);
  elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;

  // Save to conversation history
  appState.currentConversation.push({
    text,
    sender,
    timestamp: new Date().toISOString(),
    language: appState.currentLanguage
  });
}

function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message message--bot';
  typingDiv.id = 'typing-indicator';

  typingDiv.innerHTML = `
    <div class="message__avatar">AI</div>
    <div class="typing-indicator">
      <div class="typing-dots">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;

  elements.chatMessages.appendChild(typingDiv);
  elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

function requestHumanAgent() {
  const handoffMessage = appData.humanHandoff[appState.currentLanguage];
  addMessage('I need help from a human agent.', 'user');

  setTimeout(() => {
    addMessage(handoffMessage, 'bot');

    // Simulate connection to human agent
    setTimeout(() => {
      addMessage('Thank you for waiting. You have been connected to Sarah from our support team. How can I help you today?', 'human');
    }, 3000);
  }, 1000);

  // Update analytics
  updateQueryAnalytics('human_handoff');
}

function clearChat() {
  elements.chatMessages.innerHTML = '';

  // Save current conversation to history
  if (appState.currentConversation.length > 0) {
    appState.conversations.push({
      id: Date.now(),
      messages: [...appState.currentConversation],
      language: appState.currentLanguage,
      timestamp: new Date().toISOString()
    });
    appState.analytics.totalConversations++;
  }

  // Clear current conversation
  appState.currentConversation = [];
}

function exportChatHistory() {
  if (appState.currentConversation.length === 0) {
    alert('No conversation to export.');
    return;
  }

  const chatText = appState.currentConversation
    .map(msg => `[${new Date(msg.timestamp).toLocaleString()}] ${msg.sender.toUpperCase()}: ${msg.text}`)
    .join('\n\n');

  const blob = new Blob([chatText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `chat_history_${new Date().toISOString().split('T')[0]}.txt`;
  a.click();

  URL.revokeObjectURL(url);
}

function showAnalytics() {
  elements.settingsModal.style.display = 'none';
  elements.analyticsPanel.style.display = 'block';

  // Update analytics display
  document.getElementById('totalConversations').textContent = appState.analytics.totalConversations;

  const mostUsedLang = Object.keys(appState.analytics.languageUsage).reduce((a, b) => 
    appState.analytics.languageUsage[a] > appState.analytics.languageUsage[b] ? a : b, 'en'
  );
  const langName = appData.supportedLanguages.find(l => l.code === mostUsedLang)?.native || 'English';
  document.getElementById('popularLanguage').textContent = langName;

  const topQueryType = Object.keys(appState.analytics.queryTypes).reduce((a, b) => 
    appState.analytics.queryTypes[a] > appState.analytics.queryTypes[b] ? a : b, 'general'
  );
  document.getElementById('topQuery').textContent = topQueryType.charAt(0).toUpperCase() + topQueryType.slice(1);
}

function clearAllData() {
  if (confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
    appState.conversations = [];
    appState.currentConversation = [];
    appState.analytics = {
      totalConversations: 0,
      languageUsage: {},
      queryTypes: {},
      popularQueries: []
    };

    localStorage.removeItem('campusChatbotData');
    clearChat();
    showWelcomeMessage();

    alert('All data has been cleared.');
  }
}

function toggleDarkMode(enabled) {
  appState.settings.darkMode = enabled;
  document.body.setAttribute('data-theme', enabled ? 'dark' : 'light');
  saveSettings();
}

function updateLanguageUsage(language) {
  if (!appState.analytics.languageUsage[language]) {
    appState.analytics.languageUsage[language] = 0;
  }
  appState.analytics.languageUsage[language]++;
}

function updateQueryAnalytics(queryType) {
  if (!appState.analytics.queryTypes[queryType]) {
    appState.analytics.queryTypes[queryType] = 0;
  }
  appState.analytics.queryTypes[queryType]++;
}

function initializeAnalytics() {
  // Initialize default values
  appState.analytics.languageUsage[appState.currentLanguage] = 1;
}

function saveSettings() {
  localStorage.setItem('campusChatbotData', JSON.stringify({
    settings: appState.settings,
    analytics: appState.analytics,
    conversations: appState.conversations
  }));
}

function loadSettings() {
  const saved = localStorage.getItem('campusChatbotData');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      appState.settings = { ...appState.settings, ...data.settings };
      appState.analytics = { ...appState.analytics, ...data.analytics };
      appState.conversations = data.conversations || [];

      // Apply settings
      elements.darkModeToggle.checked = appState.settings.darkMode;
      elements.notificationsToggle.checked = appState.settings.notifications;

      if (appState.settings.darkMode) {
        document.body.setAttribute('data-theme', 'dark');
      }
    } catch (e) {
      console.warn('Could not load saved settings:', e);
    }
  }
}

// Utility Functions
function showNotification(message, type = 'info') {
  if (!appState.settings.notifications) return;

  // Simple notification - could be enhanced with a proper toast system
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-primary);
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    box-shadow: var(--shadow-lg);
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Make functions available globally for onclick handlers
window.handleQuickAction = handleQuickAction;