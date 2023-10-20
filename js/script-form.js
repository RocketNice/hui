/*PRELAND PRO ver1.9*/
$(document).ready(function(){function addCountryToSelect(country,code,mask,placeholder){var select=$('select[name="country"]');var option=$("<option>",{value:code,text:country});option.data("mask",mask);option.data("placeholder",placeholder);select.append(option);}
for(var i=0;i<settings.length;i++){var country=settings[i].country;var code=settings[i].code;var mask=settings[i].mask;var placeholder=settings[i].placeholder;addCountryToSelect(country,code,mask,placeholder);}
$('select[name="country"]').change(function(){var mask=$("option:selected",this).data("mask");var placeholder=$("option:selected",this).data("placeholder");$(".phone").inputmask(mask);$(".phone").attr("placeholder",placeholder);});$('select[name="country"]').trigger("change");$(".phone").on("input",function(e){var input=e.target;var value=input.value;var mask=$(this).inputmask("unmaskedvalue");var maskedValue=applyMask(value,mask);if(value.length<maskedValue.length){input.value=maskedValue;}});function applyMask(value,mask){var maskedValue="";var valueIndex=0;for(var maskIndex=0;maskIndex<mask.length;maskIndex++){var maskChar=mask[maskIndex];if(maskChar==="_"){if(value[valueIndex]){maskedValue+=value[valueIndex++];}else{break;}}else{maskedValue+=maskChar;}}
return maskedValue;}
$.getJSON("https://ipapi.co/json/",function(data){var countryCode=data.country_code;var option=$('select[name="country"] option[value="'+countryCode+'"]');if(option.length){option.prop("selected",true).trigger("change");}else{}});});$(document).ready(function(){$('input[name="name"], input[name="phone"]').prop("required",true);});document.addEventListener("DOMContentLoaded",function(){const forms=document.querySelectorAll("form:not(.no-form)");forms.forEach(function(form){const phoneInput=form.querySelector(".phone");form.addEventListener("submit",function(event){event.preventDefault();const phone=phoneInput.inputmask.unmaskedvalue();const countryCode=$('select[name="country"]').val();const currentSetting=settings.find(setting=>setting.code===countryCode);const minLength=parseInt(currentSetting.mask.match(/\{(\d+),/)[1]);const maxLength=parseInt(currentSetting.mask.match(/,(\d+)\}/)[1]);const phoneLength=phone.replace(/_/g,"").length;if(phoneLength<minLength||phoneLength>maxLength){phoneInput.style.backgroundColor="#fff1f1";return;}
if(phone){showConfirmation(phone,form);}});});$(document).click(function(event){const target=event.target;const phoneInput=$(".phone");if(!phoneInput.is(target)&&!phoneInput.has(target).length){phoneInput.css("background-color","");}});function showConfirmation(phone,form){const popup=document.getElementById("popup");const phoneConfirmation=document.getElementById("phone-confirmation");const phoneWithoutUnderscores=phone.replace(/_/g,"");phoneConfirmation.textContent=phoneWithoutUnderscores;popup.style.display="block";const confirmYes=document.getElementById("confirm-yes");const confirmNo=document.getElementById("confirm-no");confirmYes.addEventListener("click",function(){popup.style.display="none";form.submit();});confirmNo.addEventListener("click",function(){popup.style.display="none";});}
const comebacker=document.querySelector(".e-comebacker");const phoneInput=comebacker.querySelector(".phone");comebacker.addEventListener("submit",function(event){event.preventDefault();const phone=phoneInput.inputmask.unmaskedvalue();const countryCode=$('select[name="country"]').val();const currentSetting=settings.find(setting=>setting.code===countryCode);const minLength=parseInt(currentSetting.mask.match(/\{(\d+),/)[1]);const maxLength=parseInt(currentSetting.mask.match(/,(\d+)\}/)[1]);const phoneLength=phone.replace(/_/g,"").length;if(phoneLength<minLength||phoneLength>maxLength){phoneInput.style.backgroundColor="#fff1f1";return;}
if(phone){showConfirmation(phone,comebacker);}});});function translate(text,lang,callback){var apiUrl="https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl="+lang+"&dt=t&q="+encodeURI(text);$.getJSON(apiUrl,function(data){var translatedText=data[0][0][0];callback(translatedText);});}
$.getJSON("https://ipapi.co/json/",function(data){var city=data.city;var geo=data.country;$(".pl_spacer_geo_detect").each(function(){var lang=$(this).attr("lang");var defaultCity=$(this).text();var currentElement=$(this);if(geo&&geo!==$(this).attr("geo")){currentElement.text(defaultCity);}else{if(lang&&lang!=="en"&&lang!==geo){translate(city,lang,function(translatedText){currentElement.text(translatedText);});}else{currentElement.text(city);}}});});/*PRELAND PRO ver1.9*/