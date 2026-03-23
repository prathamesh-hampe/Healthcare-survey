const translations = {
  en: {
    surveyTitle: "Healthcare Survey Form",
    submit: "Submit Survey",

    q1: "How satisfied are you with healthcare services?",
    q2: "Was the staff friendly and helpful?",
    q3: "Was the waiting time reasonable?",
    q4: "Was the doctor attentive to your concerns?",
    q5: "Were facilities clean and hygienic?",
    q6: "Was the diagnosis clearly explained?",
    q7: "Was the treatment effective?",
    q8: "Was the cost reasonable?",
    q9: "Would you recommend this service?",
    q10: "Any additional feedback?"
  },

  hi: {
    surveyTitle: "स्वास्थ्य सर्वेक्षण",
    submit: "सबमिट करें",

    q1: "क्या आप स्वास्थ्य सेवाओं से संतुष्ट हैं?",
    q2: "क्या स्टाफ सहयोगी और मददगार था?",
    q3: "क्या प्रतीक्षा समय उचित था?",
    q4: "क्या डॉक्टर ने आपकी बात ध्यान से सुनी?",
    q5: "क्या सुविधाएं साफ और स्वच्छ थीं?",
    q6: "क्या निदान स्पष्ट रूप से समझाया गया?",
    q7: "क्या उपचार प्रभावी था?",
    q8: "क्या खर्च उचित था?",
    q9: "क्या आप इस सेवा की सिफारिश करेंगे?",
    q10: "कोई अतिरिक्त सुझाव?"
  },

  mr: {
    surveyTitle: "आरोग्य सर्वेक्षण",
    submit: "सबमिट करा",

    q1: "तुम्ही आरोग्य सेवांबद्दल समाधानी आहात का?",
    q2: "कर्मचारी मदत करणारे होते का?",
    q3: "प्रतीक्षा वेळ योग्य होता का?",
    q4: "डॉक्टरांनी तुमचं नीट ऐकलं का?",
    q5: "सुविधा स्वच्छ होत्या का?",
    q6: "निदान स्पष्टपणे सांगितले का?",
    q7: "उपचार प्रभावी होता का?",
    q8: "खर्च योग्य होता का?",
    q9: "तुम्ही ही सेवा सुचवाल का?",
    q10: "काही अतिरिक्त अभिप्राय?"
  }
};

// CHANGE LANGUAGE
function changeLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key]; // for inputs
      el.textContent = translations[lang][key]; // for text
    }
  });

  localStorage.setItem("lang", lang);
}

// LOAD SAVED LANGUAGE
window.addEventListener("load", () => {
  const lang = localStorage.getItem("lang") || "en";
  changeLanguage(lang);
});
