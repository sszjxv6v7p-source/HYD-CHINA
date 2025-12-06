function setLang(lang){
    document.querySelectorAll("[data-cn]").forEach(el=>{
        el.innerHTML = lang === "cn"
            ? el.getAttribute("data-cn")
            : el.getAttribute("data-en");
    });
}
setLang("cn");
