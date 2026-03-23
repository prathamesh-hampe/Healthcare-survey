const translations = {
  en: {
    userLogin: "User Login",
    adminLogin: "Admin Login",
    username: "Enter Username",
    password: "Enter Password",
    surveyTitle: "Healthcare Survey Form",
    name: "Name",
    email: "Email",
    age: "Age",
    gender: "Gender",
    submit: "Submit Survey",

    q1: "1. How often do you visit a doctor?",
    q2: "2. Are you satisfied with your healthcare provider?",
    q3: "3. How long do you usually wait for appointments?",
    q4: "4. Did you face any problem regarding health insurance during treatment?",
    q5: "5. How do you rate hospital hygiene?",
    q6: "6. Are staff polite and professional?",
    q7: "7. How easy is it to get medical help?",
    q8: "8. Are medications affordable?",
    q9: "9. Would you recommend this facility to others?",
    q10: "10. Any improvements you’d suggest?"
  },

  hi: {
    userLogin: "यूज़र लॉगिन",
    adminLogin: "एडमिन लॉगिन",
    username: "यूज़रनेम दर्ज करें",
    password: "पासवर्ड दर्ज करें",
    surveyTitle: "स्वास्थ्य सर्वेक्षण फॉर्म",
    name: "नाम",
    email: "ईमेल",
    age: "आयु",
    gender: "लिंग",
    submit: "सबमिट करें",

    q1: "1. आप डॉक्टर के पास कितनी बार जाते हैं?",
    q2: "2. क्या आप अपने स्वास्थ्य सेवा प्रदाता से संतुष्ट हैं?",
    q3: "3. आपको अपॉइंटमेंट के लिए कितना इंतजार करना पड़ता है?",
    q4: "4. क्या आपको इलाज के दौरान बीमा से जुड़ी समस्या हुई?",
    q5: "5. आप अस्पताल की स्वच्छता को कैसे रेट करेंगे?",
    q6: "6. क्या स्टाफ विनम्र और पेशेवर है?",
    q7: "7. चिकित्सा सहायता प्राप्त करना कितना आसान है?",
    q8: "8. क्या दवाइयाँ किफायती हैं?",
    q9: "9. क्या आप इस सुविधा को दूसरों को सुझाएंगे?",
    q10: "10. आप क्या सुधार सुझाव देना चाहेंगे?"
  },

  mr: {
    userLogin: "वापरकर्ता लॉगिन",
    adminLogin: "अॅडमिन लॉगिन",
    username: "वापरकर्तानाव टाका",
    password: "पासवर्ड टाका",
    surveyTitle: "आरोग्य सर्वेक्षण फॉर्म",
    name: "नाव",
    email: "ईमेल",
    age: "वय",
    gender: "लिंग",
    submit: "सबमिट करा",

    q1: "1. तुम्ही डॉक्टरांकडे किती वेळा जाता?",
    q2: "2. तुम्ही तुमच्या आरोग्य सेवांबद्दल समाधानी आहात का?",
    q3: "3. अपॉइंटमेंटसाठी तुम्हाला किती वेळ थांबावे लागते?",
    q4: "4. उपचारादरम्यान विमा संबंधित काही समस्या आली का?",
    q5: "5. तुम्ही रुग्णालयाच्या स्वच्छतेचे मूल्यांकन कसे कराल?",
    q6: "6. कर्मचारी नम्र आणि व्यावसायिक आहेत का?",
    q7: "7. वैद्यकीय मदत मिळवणे किती सोपे आहे?",
    q8: "8. औषधे परवडणारी आहेत का?",
    q9: "9. तुम्ही ही सुविधा इतरांना सुचवाल का?",
    q10: "10. तुम्ही कोणते सुधार सुचवाल?"
  }
};

// 🔥 MAIN FUNCTION
function changeLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}

// 🔥 AUTO LOAD LANGUAGE
window.onload = () => {
  const savedLang = localStorage.getItem("lang") || "en";
  changeLanguage(savedLang);
};
window.addEventListener("load", () => {
  const lang = localStorage.getItem("lang") || "en";
  changeLanguage(lang);
});
