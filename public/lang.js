const translations={
en:{surveyTitle:"Healthcare Survey Form",name:"Name",email:"Email",age:"Age",gender:"Gender",submit:"Submit Survey"},
hi:{surveyTitle:"स्वास्थ्य सर्वेक्षण",name:"नाम",email:"ईमेल",age:"आयु",gender:"लिंग",submit:"सबमिट करें"},
mr:{surveyTitle:"आरोग्य सर्वेक्षण",name:"नाव",email:"ईमेल",age:"वय",gender:"लिंग",submit:"सबमिट करा"}
};

function changeLanguage(lang){
document.querySelectorAll("[data-lang]").forEach(el=>{
const key=el.getAttribute("data-lang");
if(translations[lang][key]) el.textContent=translations[lang][key];
});
localStorage.setItem("lang",lang);
}

window.onload=()=>{
const lang=localStorage.getItem("lang")||"en";
changeLanguage(lang);
};

// 🔥 AUTO LOAD SAVED LANGUAGE
window.onload = () => {
  const savedLang = localStorage.getItem("lang") || "en";
  changeLanguage(savedLang);
};
