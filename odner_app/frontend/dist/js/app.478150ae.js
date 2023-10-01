(function(){"use strict";var t={5641:function(t,e,i){var a=i(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.showIntro?[e("div",{staticClass:"intro-container"},[e("h1",{staticClass:"intro-heading"},[t._v("ON - DEMAND NER INTRODUCTORY PAGE")]),t._m(0),e("button",{staticClass:"btn btn-primary start-button",on:{click:t.startMainComponent}},[t._v("Start")])])]:e("MainComponent")],2)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"intro-text"},[e("p",[e("span",{staticClass:"intro-highlight"},[t._v("[Contesto]")]),t._v(" Questa tesi si propone di contribuire al campo della ricerca sull'analisi di documenti legali attraverso l'applicazione di metodologie basate sul Natural Language Processing (NLP).")]),e("p",[e("span",{staticClass:"intro-highlight"},[t._v("[Problema]")]),t._v(" A causa dell'ampia mole e della complessità dei contenuti di tali documenti, la consultazione e l'individuazione di informazioni chiave al loro interno richiedono spesso un notevole dispendio di tempo ed energie. Inoltre, l'approccio tradizionale di Named Entity Recognition (NER), che estrae informazioni semantiche da testi non strutturati, è statico e poco adattabile al dominio specifico del linguaggio legale.")]),e("p",[e("span",{staticClass:"intro-highlight"},[t._v("[Soluzione]")]),t._v(" Questa analisi si propone di semplificare lo studio e la ricerca di informazioni da parte degli esperti legali mediante lo sviluppo di uno strumento di analisi in grado di eseguire non solo tecniche di analisi statiche come la Named Entity Recognition, ma anche un sistema di Question Answering, che consente di rispondere automaticamente a domande formulate in linguaggio naturale. ")]),e("p",[e("span",{staticClass:"intro-highlight"},[t._v("[Risultati]")]),t._v(" I risultati di questa tesi sono stati positivi in termini di performance, dimostrando che, nonostante alcune limitazioni, lo strumento può essere utilizzato per affrontare i problemi precedentemente menzionati. I test sono stati condotti su un set di documenti reali attraverso l'impiego di tecniche di prompt engineering, una disciplina relativamente nuova che consente di sviluppare e ottimizzare i prompt per sfruttare in modo efficiente modelli linguistici (LM) in una vasta gamma di applicazioni e argomenti di ricerca.")]),e("p",[e("span",{staticClass:"intro-highlight"},[t._v("[Contributo]")]),t._v(" Questo lavoro rappresenta la prima proposta di un approccio di Named Entity Recognition (NER) flessibile, rapido e intuitivo specificamente adattato all'analisi di documenti legali.")])])}],n=function(){var t=this,e=t._self._c;return e("div",[t._m(0),t.showToast?e("div",[t._m(1)]):t._e(),t.showEdited?e("div",[t._m(2)]):t._e(),t.showLoad?e("div",[t._m(3)]):t._e(),t.showChange?e("div",[t._m(4)]):t._e(),t.showDelete?e("div",[t._m(5)]):t._e(),t.showSave?e("div",[t._m(6)]):t._e(),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8"},[t.upload?e("div",[e("form",{on:{submit:function(e){return e.preventDefault(),t.uploadFile()}}},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"file-input"}},[t._v("Choose file:")]),e("input",{ref:"file",staticClass:"form-control",attrs:{id:"file-input",type:"file",accept:".pdf,.docx,.xlsx"}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"language-select"}},[t._v("Select language:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"form-select",attrs:{id:"language-select"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.language=e.target.multiple?i:i[0]}}},[e("option",{attrs:{value:"en"}},[t._v("English")]),e("option",{attrs:{value:"it"}},[t._v("Italian")])])]),e("div",{staticClass:"d-grid gap-2"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){t.dictionaryObj=null,t.str_dict=null,t.loaded=!1,t.selectedEntities=[],t.high_entities=[],t.colors=[],t.high_text=null,t.colors=[],t.text=null}}},[t._v(" Upload new file ")])])]),t.loading?e("div",{staticClass:"d-flex align-items-center",staticStyle:{margin:"10px"}},[e("strong",[t._v("Loading upload...")]),e("div",{staticClass:"spinner-border ms-auto",attrs:{role:"status","aria-hidden":"true"}})]):t._e()]):t.text?e("div",[e("button",{staticClass:"btn btn-outline-warning float-end",staticStyle:{"margin-top":"5px","margin-bottom":"10px"},on:{click:t.reload}},[t._v("UPLOAD NEW FILE")]),e("h2",[t._v("Extracted text: ")]),t._v(" "+t._s(t.txt_file)+" "),e("div",{staticClass:"mb-3"},[t.editing||t.high_text?t.editing&&!t.high_text?e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editText,expression:"editText"}],staticClass:"form-control",staticStyle:{height:"300px"},domProps:{value:t.editText},on:{input:function(e){e.target.composing||(t.editText=e.target.value)}}}):t._e():e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",staticStyle:{height:"300px"},attrs:{readonly:""},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t.high_text?e("div",{staticClass:"form-control",staticStyle:{height:"300px",overflow:"auto"},domProps:{innerHTML:t._s(t.high_text)}}):t._e(),t.high_text?e("button",{staticClass:"btn btn-danger",staticStyle:{"margin-top":"5px"},on:{click:function(e){t.selectedEntities=[],t.high_entities=[],t.colors=[],t.high_text=null,t.colors=[],t.question=null,t.score=null,t.scrollDown()}}},[t._v("Reset")]):t._e(),t.question&&t.high_text?e("button",{staticClass:"btn btn-warning",staticStyle:{"margin-top":"5px","margin-left":"10px"},attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop"}},[t._v(" Save Question ")]):t._e(),t.score?e("span",[t._v(" Answer Score: "+t._s(this.score))]):t._e(),t.saving_question?e("div",{staticClass:"d-flex align-items-center",staticStyle:{margin:"10px"}},[e("strong",[t._v("Loading configuration...")]),e("div",{staticClass:"spinner-border ms-auto",attrs:{role:"status","aria-hidden":"true"}})]):t._e()]),t.colors.length>0?e("div",[e("div",{staticClass:"legend mb-3"},[e("div",{staticClass:"legend-title"},[t._v("Legend:")]),t._l(t.colors,(function(i,a){return e("div",{key:a,staticClass:"legend-item"},[e("div",{staticClass:"color-box",style:{backgroundColor:i}}),e("div",{staticClass:"entity-name"},[t._v(t._s(t.high_entities[a]))])])}))],2)]):t._e(),e("div",{staticClass:"mb-3"},[t.editing||t.high_text?t._e():e("button",{staticClass:"btn btn-primary",on:{click:function(e){t.editText=t.text,t.editing=!0}}},[t._v("Edit")]),t.editing?e("div",[e("button",{staticClass:"btn btn-success me-2",staticStyle:{margin:"5px"},on:{click:t.updateText}},[t._v("Save")]),e("button",{staticClass:"btn btn-secondary",staticStyle:{margin:"5px"},on:{click:function(e){t.editing=!1}}},[t._v("Cancel")]),t.loading_editing?e("div",{staticClass:"d-flex align-items-center",staticStyle:{margin:"10px"}},[e("strong",[t._v("Loading changes...")]),e("div",{staticClass:"spinner-border ms-auto",attrs:{role:"status","aria-hidden":"true"}})]):t._e()]):t._e(),e("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1","aria-labelledby":"changeCNF","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(7),e("div",{staticClass:"modal-body"},["it"==t.language?e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"cnf-it-select"}},[t._v("Available configuration:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.config_to_change,expression:"config_to_change"}],staticClass:"form-control",attrs:{id:"cnf-it-select"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.config_to_change=e.target.multiple?i:i[0]}}},t._l(t.available_configs_it,(function(i){return e("option",{key:i},[t._v(t._s(i))])})),0)]):e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"cnf-en-select"}},[t._v("Available configuration:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.config_to_change,expression:"config_to_change"}],staticClass:"form-control",attrs:{id:"cnf-en-select"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.config_to_change=e.target.multiple?i:i[0]}}},t._l(t.available_configs_en,(function(i){return e("option",{key:i},[t._v(t._s(i))])})),0)])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:function(e){t.changeConfig(),t.loaded=!1}}},[t._v("Save changes")])])])])]),t.dictionaryObj?e("div",{staticClass:"my-3"},[e("h6",[t._v("Current configuration:")]),t._v(" "+t._s(t.file_config)+" "),t.loading_change?e("div",{staticClass:"d-flex align-items-center",staticStyle:{margin:"10px"}},[e("strong",[t._v("Loading configuration...")]),e("div",{staticClass:"spinner-border ms-auto",attrs:{role:"status","aria-hidden":"true"}})]):t._e()]):t._e()]),1==t.loaded?e("div",[t.dictionaryObj?e("div",{staticClass:"mt-3"},[e("div",{staticClass:"container"},[e("table",{staticClass:"table"},[t._m(8),e("tbody",t._l(t.dictionaryObj,(function(i,a){return e("tr",{key:a},[e("td",[t._v(t._s(a))]),e("td",[t._v(t._s(i))]),e("td",[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedEntities,expression:"selectedEntities"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:a,checked:Array.isArray(t.selectedEntities)?t._i(t.selectedEntities,a)>-1:t.selectedEntities},on:{change:function(e){var i=t.selectedEntities,s=e.target,o=!!s.checked;if(Array.isArray(i)){var n=a,l=t._i(i,n);s.checked?l<0&&(t.selectedEntities=i.concat([n])):l>-1&&(t.selectedEntities=i.slice(0,l).concat(i.slice(l+1)))}else t.selectedEntities=o}}})])]),e("td",[t._v(" "+t._s(t.model_entity[a])+" ")]),e("td",["Spacy"!=t.model_entity[a]?e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.todelete_entities,expression:"todelete_entities"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:a,checked:Array.isArray(t.todelete_entities)?t._i(t.todelete_entities,a)>-1:t.todelete_entities},on:{change:function(e){var i=t.todelete_entities,s=e.target,o=!!s.checked;if(Array.isArray(i)){var n=a,l=t._i(i,n);s.checked?l<0&&(t.todelete_entities=i.concat([n])):l>-1&&(t.todelete_entities=i.slice(0,l).concat(i.slice(l+1)))}else t.todelete_entities=o}}})]):t._e()])])})),0)]),e("div",[t.selectedEntities.length>0?e("div",{staticClass:"my-4",staticStyle:{margin:"10px"}},[e("h6",[t._v("Selected Entities:")]),e("ul",{staticClass:"list-group"},t._l(t.selectedEntities,(function(i){return e("li",{key:i,staticClass:"list-group-item"},[t._v(t._s(i))])})),0),e("button",{staticClass:"btn btn-primary mt-3",on:{click:function(e){return t.filter()}}},[t._v("Filter Selected")]),e("button",{staticClass:"btn btn-danger mt-3",on:{click:function(e){t.selectedEntities=[]}}},[t._v("Reset Selected")])]):t._e(),t.todelete_entities.length>0?e("div",{staticClass:"my-4",staticStyle:{margin:"10px"}},[e("h6",[t._v("Delete Entities:")]),e("ul",{staticClass:"list-group"},t._l(t.todelete_entities,(function(i){return e("li",{key:i,staticClass:"list-group-item"},[t._v(t._s(i))])})),0),e("button",{staticClass:"btn btn-danger mt-3",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal2"}},[t._v(" Delete Selected ")]),e("button",{staticClass:"btn btn-success mt-3",on:{click:function(e){t.todelete_entities=[]}}},[t._v("Reset Selected")]),e("div",{staticClass:"modal fade",attrs:{id:"exampleModal2",tabindex:"-1","aria-labelledby":"exampleModal2Label","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(9),e("div",{staticClass:"modal-body"},[t._v(" Do you really want to delete the selected entities? ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:t.deleteEn}},[t._v("Yes")])])])])])]):t._e()])]),e("div",[t.dictionaryObj?e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},on:{click:function(e){t.selectedEntities=[],t.high_text=null,t.colors=[]}}},[t._v(" Change Configuration... ")]):t._e(),t.question&&t.high_text?e("button",{staticClass:"btn btn-warning",staticStyle:{"margin-left":"10px"},attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop"}},[t._v(" Save Question ")]):t._e(),t.dictionaryObj?e("button",{staticClass:"btn btn-outline-success me-2",staticStyle:{margin:"5px"},on:{click:t.downloadJson}},[t._v("Download JSON")]):t._e(),e("h5",[t._v("Type your own question:")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"form-control mb-3",attrs:{rows:"2",placeholder:"Insert your question here"},domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}}),"it"===t.language?e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"model-en-select"}},[t._v("Available Model:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.model_choosen,expression:"model_choosen"}],staticClass:"form-select",attrs:{id:"model-en-select"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.model_choosen=e.target.multiple?i:i[0]}}},t._l(t.model_available_it,(function(i){return e("option",{key:i},[t._v(t._s(i))])})),0)]):e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"model-it-select"}},[t._v("Available Model:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.model_choosen,expression:"model_choosen"}],staticClass:"form-select",attrs:{id:"model-it-select"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.model_choosen=e.target.multiple?i:i[0]}}},t._l(t.model_available_en,(function(i){return e("option",{key:i},[t._v(t._s(i))])})),0)]),e("button",{staticClass:"btn btn-primary",on:{click:function(e){t.score=null,t.high_text=null,t.question_answering()}}},[t._v("GO")]),t.loading_qa?e("div",{staticClass:"d-flex align-items-center",staticStyle:{margin:"10px"}},[e("strong",[t._v("Computing answer...")]),e("div",{staticClass:"spinner-border ms-auto",attrs:{role:"status","aria-hidden":"true"}})]):t._e(),e("div",{staticClass:"modal fade",attrs:{id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(10),e("div",{staticClass:"modal-body"},[e("form",[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"entity-name"}},[t._v("Entity Name:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name_entity,expression:"name_entity"}],staticClass:"form-control",attrs:{type:"text",id:"entity-name"},domProps:{value:t.name_entity},on:{input:function(e){e.target.composing||(t.name_entity=e.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"check-config"}},[t._v("Select an existing configuration to add question to:")]),"it"==t.language?e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.config_to_change,expression:"config_to_change"}],staticClass:"form-select",attrs:{id:"cnf-it-select"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.config_to_change=e.target.multiple?i:i[0]}}},t._l(t.available_configs_it,(function(i){return e("option",{key:i},[t._v(t._s(i))])})),0)]):e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.config_to_change,expression:"config_to_change"}],staticClass:"form-select",attrs:{id:"cnf-en-select"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.config_to_change=e.target.multiple?i:i[0]}}},t._l(t.available_configs_en,(function(i){return e("option",{key:i},[t._v(t._s(i))])})),0)])]),e("div",{staticClass:"form-check mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.new_config,expression:"new_config"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"new"},domProps:{value:!0,checked:Array.isArray(t.new_config)?t._i(t.new_config,!0)>-1:t.new_config},on:{change:function(e){var i=t.new_config,a=e.target,s=!!a.checked;if(Array.isArray(i)){var o=!0,n=t._i(i,o);a.checked?n<0&&(t.new_config=i.concat([o])):n>-1&&(t.new_config=i.slice(0,n).concat(i.slice(n+1)))}else t.new_config=s}}}),e("label",{staticClass:"form-check-label",attrs:{for:"new"}},[t._v("New config?")])]),t.new_config?e("div",{staticClass:"mb-3"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.option_save,expression:"option_save"}],staticClass:"form-check-input",attrs:{type:"radio",id:"option1",name:"options",checked:""},domProps:{value:1,checked:t._q(t.option_save,1)},on:{change:function(e){t.option_save=1}}}),e("label",{staticClass:"form-check-label",attrs:{for:"option"}},[t._v("New configuration")])]),e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.option_save,expression:"option_save"}],staticClass:"form-check-input",attrs:{type:"radio",id:"option2",name:"options"},domProps:{value:0,checked:t._q(t.option_save,0)},on:{change:function(e){t.option_save=0}}}),e("label",{staticClass:"form-check-label",attrs:{for:"option"}},[t._v("From this configuration")])]),e("label",{staticClass:"form-label",attrs:{for:"config-name"}},[t._v("Config Name:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name_new_config,expression:"name_new_config"}],staticClass:"form-control",attrs:{type:"text",id:"config-name"},domProps:{value:t.name_new_config},on:{input:function(e){e.target.composing||(t.name_new_config=e.target.value)}}})]):t._e()])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:function(e){return e.preventDefault(),t.saveQuestion.apply(null,arguments)}}},[t._v("Save")]),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("Close")])])])])])])]):t._e()]):e("div",{staticClass:"d-flex justify-content-center my-3"},[null==t.dictionaryObj?e("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.loadCnf()}}},[t._v("Load Configuration... (last used or default)")]):t._e()]),t.loading_config?e("div",{staticClass:"d-flex align-items-center",staticStyle:{margin:"10px"}},[e("strong",[t._v("Loading configuration...")]),e("div",{staticClass:"spinner-border ms-auto",attrs:{role:"status","aria-hidden":"true"}})]):t._e()]):t._e()])]),t._m(11)])},l=[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar sticky-top bg-body-tertiary",staticStyle:{"background-color":"#006cf9d9"}},[e("div",{staticClass:"container-fluid"},[t._v(" ON-DEMAND NER ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"toast show fade bg-success p-3 position-fixed",attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[e("div",{staticClass:"toast-header"},[e("strong",{staticClass:"me-auto"},[t._v("UPLOAD FILE")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}})]),e("div",{staticClass:"toast-body"},[t._v(" File uploaded correctly! ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"toast show fade bg-success p-3 position-fixed",attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[e("div",{staticClass:"toast-header"},[e("strong",{staticClass:"me-auto"},[t._v("EDIT FILE")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}})]),e("div",{staticClass:"toast-body"},[t._v(" File edited correctly! ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"toast show fade bg-success p-3 position-fixed",attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[e("div",{staticClass:"toast-header"},[e("strong",{staticClass:"me-auto"},[t._v("LOAD CONFIGURATION")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}})]),e("div",{staticClass:"toast-body"},[t._v(" Configuration loaded correctly! ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"toast show fade bg-success p-3 position-fixed",attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[e("div",{staticClass:"toast-header"},[e("strong",{staticClass:"me-auto"},[t._v("CHANGE CONFIGURATION")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}})]),e("div",{staticClass:"toast-body"},[t._v(" Configuration changed correctly! ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"toast show fade bg-success p-3 position-fixed",attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[e("div",{staticClass:"toast-header"},[e("strong",{staticClass:"me-auto"},[t._v("DELETE ENTITIES")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}})]),e("div",{staticClass:"toast-body"},[t._v(" Entities deleted correctly! ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"toast show fade bg-success p-3 position-fixed",attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[e("div",{staticClass:"toast-header"},[e("strong",{staticClass:"me-auto"},[t._v("SAVE QUESTION")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}})]),e("div",{staticClass:"toast-body"},[t._v(" Question saved correctly! ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h1",{staticClass:"modal-title fs-5",attrs:{id:"changeCNF"}},[t._v("Choose configuration")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Entity")]),e("th",{attrs:{scope:"col"}},[t._v("Question")]),e("th",{attrs:{scope:"col"}},[t._v("Select")]),e("th",{attrs:{scope:"col"}},[t._v("Model")]),e("th",{attrs:{scope:"col"}},[t._v("Delete")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h1",{staticClass:"modal-title fs-5",attrs:{id:"exampleModal2Label"}},[t._v("Are you sure? ")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h1",{staticClass:"modal-title fs-5",attrs:{id:"staticBackdropLabel"}},[t._v("Add Entity")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t._self._c;return e("div",[e("a",{staticClass:"btn btn-primary btn-lg back-to-bottom",attrs:{href:"#",role:"button"}},[e("i",{staticClass:"fas fa-chevron-down"})]),e("a",{staticClass:"btn btn-primary btn-lg back-to-top",attrs:{href:"#",role:"button"}},[e("i",{staticClass:"fas fa-chevron-up"})])])}],c=i(4161),r=i(7387),d=i.n(r),u=(i(5654),{data(){return{text:null,txt_file:null,editing:!1,editText:null,file_uploaded:null,language:"en",dictionaryObj:null,selectedEntities:[],todelete_entities:[],high_text:null,loaded:!1,colors:[],high_entities:[],available_configs_en:[],available_configs_it:[],config_to_change:null,question:null,model_choosen:null,model_available_en:["deepset/roberta-base-squad2","distilbert-base-cased-distilled-squad","bert-large-uncased-whole-word-masking-finetuned-squad","squirro/albert-base-v2-squad_v2","ahotrod/electra_large_discriminator_squad2_512","cecchiara/bert-finetuned-squad-accelerate"],model_available_it:["anakin87/electra-italian-xxl-cased-squad-it"],answer:null,file_config:null,model_entity:null,name_entity:null,new_config:!1,name_new_config:null,code:0,str_dict:null,loading:!1,loading_editing:!1,loading_config:!1,loading_qa:!1,loading_change:!1,saving_question:!1,showToast:!1,showEdited:!1,showLoad:!1,showChange:!1,showDelete:!1,showSave:!1,upload:!1,score:null,option_save:0}},methods:{reload(){location.reload()},uploadFile(){this.loading=!0;let t=new FormData;t.append("file",this.$refs.file.files[0]),t.append("language",this.language);let e=this.$refs.file.files[0];null==e?(alert("Choose a file!"),this.loading=!1):("application/pdf"===e.type?c.Z.post("http://localhost:8000/api/pdf-upload/",t).then((t=>{"it"==this.language?(this.text=t.data.pdf_text_it,this.txt_file=t.data.txt_file_pdf_it):(this.text=t.data.pdf_text_en,this.txt_file=t.data.txt_file_pdf_en),this.file_uploaded=t.data.title,this.loading=!1,setTimeout((()=>{window.scrollTo(0,document.body.scrollHeight)}),500),this.showToast=!0,setTimeout((()=>{this.showToast=!1}),2e3),this.upload=!1})).catch((t=>{console.log(t),alert(t),this.loading=!1})):"application/vnd.openxmlformats-officedocument.wordprocessingml.document"===e.type||"application/msword"===e.type?c.Z.post("http://localhost:8000/api/word-upload/",t).then((t=>{"it"===this.language?(this.text=t.data.docx_text_it,this.txt_file=t.data.txt_file_docx_it):(this.text=t.data.docx_text_en,this.txt_file=t.data.txt_file_docx_en),this.file_uploaded=t.data.title,this.loading=!1,setTimeout((()=>{window.scrollTo(0,document.body.scrollHeight)}),500),this.showToast=!0,setTimeout((()=>{this.showToast=!1}),2e3),this.upload=!1})).catch((t=>{console.log(t),alert(t),this.loading=!1})):"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===e.type?c.Z.post("http://localhost:8000/api/xlsx-upload/",t).then((t=>{"it"===this.language?(this.text=t.data.xlsx_text_it,this.txt_file=t.data.txt_file_xlsx_it):(this.text=t.data.xlsx_text_en,this.txt_file=t.data.txt_file_xlsx_en),this.file_uploaded=t.data.title,this.loading=!1,setTimeout((()=>{window.scrollTo(0,document.body.scrollHeight)}),500),this.showToast=!0,setTimeout((()=>{this.showToast=!1}),2e3),this.upload=!1})).catch((t=>{console.log(t),alert(t),this.loading=!1})):(alert("Unsupported file type: only .pdf, .docx or .xlsx !!!"),this.loading=!1),c.Z.post("http://localhost:8000/api/get-config/",{language:this.language}).then((t=>{"it"==this.language?this.available_configs_it=t.data.configs:this.available_configs_en=t.data.configs})).catch((t=>{console.log(t),alert(t),this.loading=!1})))},updateText(){this.loading_editing=!0,this.scrollDown(),c.Z.post("http://localhost:8000/api/update-text/",{text_toEdit:this.editText,file_toEdit:this.txt_file,file_source:this.file_uploaded,language:this.language}).then((t=>{this.text=this.editText,this.txt_file=t.data.txt_file_edited,this.editing=!1,this.loading_editing=!1,this.showEdited=!0,setTimeout((()=>{this.showEdited=!1}),2e3)})).catch((t=>{console.log(t),alert(t),this.loading_editing=!1}))},loadCnf(){this.dictionaryObj=null,this.loading_config=!0,this.scrollDown(),c.Z.post("http://localhost:8000/api/load-config/",{file_txt_path:this.txt_file,language:this.language,text:this.text,f_up:this.file_uploaded}).then((t=>{this.dictionaryObj=JSON.parse(t.data.jsonner_str),this.file_config=t.data.jsonNER,this.loaded=!0,this.model_entity=JSON.parse(t.data.entity_model_current),this.str_dict=t.data.jsondict_str,this.loading_config=!1,this.scrollDown(),this.showLoad=!0,setTimeout((()=>{this.showLoad=!1}),2e3)})).catch((t=>{console.log(t),alert(t),this.loading_config=!1}))},filter(){c.Z.post("http://localhost:8000/api/filter/",{file_txt_path:this.txt_file,language:this.language,text:this.text,selectedEn:this.selectedEntities}).then((t=>{this.high_text=t.data.high,this.colors=t.data.colors,this.high_entities=t.data.ent,this.question=null,setTimeout((()=>{window.scrollTo(0,document.body.scrollTop)}),500)})).catch((t=>{console.log(t),alert(t)}))},question_answering(){this.loading_qa=!0,this.scrollDown(),"it"==this.language&null==this.model_choosen?this.model_choosen="anakin87/electra-italian-xxl-cased-squad-it":null==this.model_choosen&&(this.model_choosen="deepset/roberta-base-squad2"),c.Z.post("http://localhost:8000/api/qa/",{question:this.question,model:this.model_choosen,text:this.text}).then((t=>{this.high_text=t.data.high_qa,this.high_entities=[],this.colors=[],this.answer=t.data.answer,this.selectedEntities=[],this.score=t.data.score,this.loading_qa=!1,setTimeout((()=>{window.scrollTo(0,document.body.scrollTop-30)}),500)})).catch((t=>{console.log(t),alert(t),this.loading_qa=!1}))},saveQuestion(){this.saving_question=!0,c.Z.post("http://localhost:8000/api/save-question/",{name_entity:this.name_entity,model:this.model_choosen,question:this.question,answer:this.answer,txt_path:this.txt_file,language:this.language,config_to_change:this.config_to_change,new_c:this.new_config,name_config_new:this.name_new_config,file_c:this.file_config,option:this.option_save}).then((t=>{-1==t.data.cod?(alert(t.data.res),this.saving_question=!1):(this.config_to_change=null,this.new_config=!1,this.name_entity=null,this.question=null,this.name_new_config=null,this.model_choosen=null,this.high_text=null,this.saving_question=!1,this.showSave=!0,setTimeout((()=>{this.showSave=!1}),2e3),c.Z.post("http://localhost:8000/api/load-config/",{file_txt_path:this.txt_file,language:this.language,text:this.text,f_up:this.file_uploaded}).then((t=>{this.dictionaryObj=JSON.parse(t.data.jsonner_str),this.file_config=t.data.jsonNER,this.loaded=!0,this.model_entity=JSON.parse(t.data.entity_model_current),this.str_dict=t.data.jsondict_str})).catch((t=>{console.log(t),alert(t),this.saving_question=!1})),c.Z.post("http://localhost:8000/api/get-config/",{language:this.language}).then((t=>{"it"==this.language?this.available_configs_it=t.data.configs:this.available_configs_en=t.data.configs})).catch((t=>{console.log(t),alert(t),this.saving_question=!1})),setTimeout((()=>{window.scrollTo(0,document.body.scrollHeight)}),500))})).catch((t=>{console.log(t),alert(t),this.saving_question=!1}))},changeConfig(){this.loading_change=!0,this.scrollDown(),c.Z.post("http://localhost:8000/api/change-cnf/",{config_name:this.config_to_change,txt:this.txt_file,language:this.language,context:this.text}).then((t=>{this.code=t.data.cod,-1==this.code?(alert(t.data.res),this.loading_change=!1):(this.config_to_change=null,c.Z.post("http://localhost:8000/api/load-config/",{file_txt_path:this.txt_file,language:this.language,text:this.text,f_up:this.file_uploaded}).then((t=>{this.dictionaryObj=JSON.parse(t.data.jsonner_str),this.file_config=t.data.jsonNER,this.loaded=!0,this.model_entity=JSON.parse(t.data.entity_model_current),this.str_dict=t.data.jsondict_str})).catch((t=>{console.log(t),alert(t),this.loading_change=!1})),c.Z.post("http://localhost:8000/api/get-config/",{language:this.language}).then((t=>{"it"==this.language?this.available_configs_it=t.data.configs:this.available_configs_en=t.data.configs})).catch((t=>{console.log(t),alert(t),this.loading_change=!1})),this.loading_change=!1,this.showChange=!0,setTimeout((()=>{this.showChange=!1}),2e3)),setTimeout((()=>{window.scrollTo(0,document.body.scrollHeight)}),500)})).catch((t=>{console.log(t),alert(t),this.loading_change=!1,this.config_to_change=null,c.Z.post("http://localhost:8000/api/load-config/",{file_txt_path:this.txt_file,language:this.language,text:this.text,f_up:this.file_uploaded}).then((t=>{this.dictionaryObj=JSON.parse(t.data.jsonner_str),this.file_config=t.data.jsonNER,this.loaded=!0,this.model_entity=JSON.parse(t.data.entity_model_current),this.str_dict=t.data.jsondict_str})).catch((t=>{console.log(t),alert(t),this.loading_change=!1}))}))},deleteEn(){c.Z.post("http://localhost:8000/api/delete-entities/",{file_config:this.file_config,entities:this.todelete_entities}).then((t=>{-1==t.data.cod?alert(t.data.res):(this.todelete_entities=[],this.selectedEntities=[],this.colors=[],this.high_text=null,this.showDelete=!0,setTimeout((()=>{this.showDelete=!1}),2e3),this.scrollDown(),c.Z.post("http://localhost:8000/api/load-config/",{file_txt_path:this.txt_file,language:this.language,text:this.text,f_up:this.file_uploaded}).then((t=>{this.dictionaryObj=JSON.parse(t.data.jsonner_str),this.file_config=t.data.jsonNER,this.loaded=!0,this.model_entity=JSON.parse(t.data.entity_model_current),this.str_dict=t.data.jsondict_str})).catch((t=>{console.log(t),alert(t)})),c.Z.post("http://localhost:8000/api/get-config/",{language:this.language}).then((t=>{"it"==this.language?this.available_configs_it=t.data.configs:this.available_configs_en=t.data.configs})).catch((t=>{console.log(t),alert(t)})))})).catch((t=>{console.log(t),alert(t)}))},downloadJson(){const t=new Blob([this.str_dict],{type:"application/json"}),e=URL.createObjectURL(t),i=document.createElement("a");i.setAttribute("download","data.json"),i.setAttribute("href",e),document.body.appendChild(i),i.click(),document.body.removeChild(i)},scrollDown(){setTimeout((()=>{window.scrollTo(0,document.body.scrollHeight)}),500)}},mounted(){this.dictionaryObj=null,this.upload=!0,d()(window).scroll((function(){d()(this).scrollTop()<0?d()(".back-to-top").fadeOut():d()(".back-to-top").fadeIn()})),d()(window).scroll((function(){d()(this).scrollTop()==d()(document).height()?d()(".back-to-bottom").fadeOut():d()(".back-to-bottom").fadeIn()})),d()(".back-to-top").click((function(){return d()("html, body").animate({scrollTop:0},500),!1})),d()(".back-to-bottom").click((function(){return d()("html, body").animate({scrollTop:d()(document).height()},500),!1}))}}),h=u,_=i(1001),g=(0,_.Z)(h,n,l,!1,null,null,null),f=g.exports,p={components:{MainComponent:f},data(){return{showIntro:!0}},mounted(){const t=sessionStorage.getItem("visitedIntro");t&&(this.showIntro=!1)},methods:{startMainComponent(){this.showIntro=!1,sessionStorage.setItem("visitedIntro","true")}}},m=p,v=(0,_.Z)(m,s,o,!1,null,null,null),b=v.exports;a.ZP.config.productionTip=!1,new a.ZP({render:t=>t(b)}).$mount("#app")}},e={};function i(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,a,s,o){if(!a){var n=1/0;for(d=0;d<t.length;d++){a=t[d][0],s=t[d][1],o=t[d][2];for(var l=!0,c=0;c<a.length;c++)(!1&o||n>=o)&&Object.keys(i.O).every((function(t){return i.O[t](a[c])}))?a.splice(c--,1):(l=!1,o<n&&(n=o));if(l){t.splice(d--,1);var r=s();void 0!==r&&(e=r)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,s,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,o,n=a[0],l=a[1],c=a[2],r=0;if(n.some((function(e){return 0!==t[e]}))){for(s in l)i.o(l,s)&&(i.m[s]=l[s]);if(c)var d=c(i)}for(e&&e(a);r<n.length;r++)o=n[r],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(d)},a=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(5641)}));a=i.O(a)})();
//# sourceMappingURL=app.478150ae.js.map