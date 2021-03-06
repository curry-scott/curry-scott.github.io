
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"544",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/https:\\\/\\\/mdbootstrap.com\\\/[^\/]+\\\/([^\/]+)\\\/.*\/;return(a=document.URL.match(a))?a[1]:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/\\\/.*\\\/cat\\\/([^\/]+)\/;return(a=document.URL.match(a))?a[1]:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/https:\\\/\\\/mdbootstrap\\.com\\\/products\\\/(?:[^-]+)-([^\/]+)\/;return(a=document.URL.match(a))?a[1]:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/https:\\\/\\\/mdbootstrap.com\\\/[^\/]+\\\/[^\/]+\\\/([^\/]+)\\\/.*\/;return(a=document.URL.match(a))?a[1]:null})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":["macro",2],
      "vtp_map":["list",["map","key",".*\/.+\/cat\/.*","value",["macro",3]],["map","key",".*\/products\/.*","value",["macro",4]],["map","key",".*\/docs\/.*","value",["macro",5]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=5;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__vis",
      "convert_null_to":"Logged Out",
      "convert_true_to":"Logged In",
      "convert_false_to":"Logged Out",
      "vtp_elementId":"navbar-account",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50"
    },{
      "function":"__vis",
      "convert_null_to":"Logged Out",
      "convert_true_to":"Logged In",
      "convert_false_to":"Logged Out",
      "vtp_elementId":"snippet-button-account",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",9],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/snippets\/.+","value",["macro",10]]]
    },{
      "function":"__c",
      "vtp_value":"UA-60512242-3"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",15],8,16],";switch(a){case \"start\":return\"Play\";case \"pause\":return\"Pause\";case \"seek\":return\"Seeking\";case \"progress\":return+",["escape",["macro",16],8,16],"+\"% Watched\";case \"complete\":return\"100% Watched\"}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"gdpr_ga"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"gdpr_country"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",23],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"Download Direct",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*directDownload.*","value","Download Direct"],["map","key",".*gitDownload.*","value","Download Github"],["map","key",".*snippet-button-save.*","value","Download Snippet"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*getting-started.*","value","MDB Free"],["map","key",".*fluent-kit.*","value","FDB Free"],["map","key",".*freebies\\\/(.*)\\\/admin.*","value","Admin Template Free"],["map","key",".*freebies\\\/(.*)\\\/landing.*","value","Landing Template Free"],["map","key",".*freebies\\\/(.*)\\\/portfolio.*","value","Portfolio Template Free"],["map","key",".*freebies\\\/(.*)\\\/blog.*","value","Blog Template Free"],["map","key",".*freebies\\\/(.*)\\\/ecommerce.*","value","E-commerce Template Free"],["map","key",".*freebies\\\/(.*)\\\/magazine.*","value","Magazine Template Free"],["map","key",".*freebies\\\/(.*)\\\/saas.*","value","SAAS Template Free"],["map","key",".*freebies\\\/(.*)\\\/coming-soon.*","value","Coming Soon Template Free"],["map","key",".*freebies\\\/(.*)\\\/half-carousel.*","value","Half Carousel Template Free"],["map","key",".*freebies\\\/(.*)\\\/full-page-image.*","value","Full Page Image Template Free"],["map","key",".*freebies\\\/(.*)\\\/full-page-video.*","value","Full Page Video Template Free"],["map","key",".*freebies\\\/(.*)\\\/3-columns-listing.*","value","3 Colums Listing Template Free"],["map","key",".*freebies\\\/(.*)\\\/2-columns-listing.*","value","2 Columns Listing Template Free"],["map","key",".*freebies\\\/(.*)\\\/1-column-listing.*","value","1 Column Listing Template Free"],["map","key",".*freebies\\\/(.*)\\\/jumbotron.*","value","Jumbotron Template Free"],["map","key",".*freebies\\\/(.*)\\\/full-background-image.*","value","Full Background Image Template Free"],["map","key",".*snippets.*","value","MDB Free"],["map","key",".*boilerplate.*","value","Boilerplate Free"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"jQuery",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*jquery.*","value","jQuery"],["map","key",".*angular.*","value","Angular"],["map","key",".*react.*","value","React"],["map","key",".*vue.*","value","Vue"],["map","key",".*standard.*","value","Standard"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){classNames=\"\";for(el=",["escape",["macro",27],8,16],";!classNames.includes(\"mdb-skin-custom\");)classNames+=el.className+\" \",el=el.parentElement;return classNames})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",28],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*navbar.*","value","Navigation"],["map","key",".*page-footer.*","value","Navigation"],["map","key",".*side-nav.*","value","Navigation"],["map","key",".*menu-item.*","value","Navigation"],["map","key",".*switch-to.*","value","Navigation"],["map","key",".*logo-sn.*ps--theme_default","value","Navigation"],["map","key",".*smooth-scroll.*","value","Navigation"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",28],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":["template",["macro",29]," Click"],
      "vtp_map":["list",["map","key",".*mask.*","value",["template",["macro",29]," Image click"]],["map","key",".*img-fluid.*","value",["template",["macro",29]," Image click"]],["map","key",".*btn.*","value",["template",["macro",29]," Button click"]],["map","key",".*custom-select.*","value",["template",["macro",29]," Select click"]],["map","key",".*switch-to.*","value",["template",["macro",29]," Switch click"]],["map","key",".*close.*","value",["template",["macro",29]," Button click"]],["map","key",".*dropdown-toggle.*","value",["template",["macro",29]," Dropdown Toggle click"]],["map","key",".*dropdown-item.*","value",["template",["macro",29]," Dropdown Item click"]]]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";return a=a.closest(\".modal\").id})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-dismiss"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"alt"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){element=",["escape",["macro",27],8,16],";imgType=element.previousElementSibling.tagName;return\"PICTURE\"==imgType?pictureAlt=element.previousElementSibling.getElementsByTagName(\"img\")[0].alt:imgAlt=element.previousElementSibling.alt})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",28],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",34],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*view.*","value",["macro",35]]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",31],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",31],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\s","value",["macro",36]],["map","key","undefined","value",["macro",36]]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",33],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",37],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","modal","value","x"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"MDBFreeUserCookie"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionProducts.0.name"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cookieReferrer"
    },{
      "function":"__e"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstCampaign"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"lastCampaign"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenStandardAdModal"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\\/$","value","true"],["map","key",".*getting-started.*","value","true"],["map","key",".*pricing.*","value","true"],["map","key",".*checkout.*","value","true"],["map","key",".*cart.*","value","true"],["map","key",".*pro.*","value","true"],["map","key","\\\/docs\\\/standard\\\/$","value","true"],["map","key","\\\/docs\\\/jquery\\\/$","value","true"],["map","key","\\\/docs\\\/angular\\\/$","value","true"],["map","key","\\\/docs\\\/react\\\/$","value","true"],["map","key","\\\/docs\\\/vue\\\/$","value","true"],["map","key",".*products.*","value","true"],["map","key",".*get-started.*","value","true"],["map","key",".*thank-you.*","value","true"]]
    },{
      "function":"__vis",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_elementSelector":"[id$=-pro]",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pageviewCount"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenGodFingerAdModal"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";return a=a.closest(\"section\").id})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenSubscriptionAdModal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_incognito"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"gdpr_fbp"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstSeen"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstDownload"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstConversion"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenStartModal"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenOnboardingSnippetAd"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenExitIntentCheckout"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenChinaShareModal"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenChineseSurveyTaken"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenFreeSurveyPage"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"s4Left"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenInstallationPage"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenProPage"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenNewsletterConfirmation"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"s6Left"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"subDcViewCount"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenAfterPurchaseSurveyPage"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenAfterUseSurveyPage"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstSeenSale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return\"\/\"+a.split(\"\/\")[1]+\"\/\"+a.split(\"\/\")[3]+\"\/\"+a.split(\"\/\")[4]+\"\/\"+a.split(\"\/\")[5]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(",["escape",["macro",59],8,16],"){var a=(new Date).getTime();return a-=",["escape",["macro",59],8,16],"}}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(",["escape",["macro",58],8,16],"){var a=(new Date).getTime();return a-=",["escape",["macro",58],8,16],"}}catch(b){}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstDownloadTechnology"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionCurrency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionPromoCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionPaymentType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionProducts.0.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";return a=a.closest(\"li\").id})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-target"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",39],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",39],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^#$","value",["macro",88]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";return a=a.previousSibling.innerHTML})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/[a-zA-Z]+\/,b=",["escape",["macro",31],8,16],";return a=b.match(a)})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"clickedToGitHubMDB5"
    },{
      "function":"__vis",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_elementSelector":"[id$=-unlogged]",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50"
    },{
      "function":"__vis",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_elementSelector":"[id$=-logged]",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=[\"fr\",\"en\",\"nl\"],b=0;b\u003Ca.length;b++)if(-1\u003Cwindow.location.href.indexOf(\"\/\"+a[b]+\"\/\"))return a[b];return a[0]})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenGodFingerAdModalMDB5"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenGodFingerAdModalBlackNovember"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seenThankYouPage"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"[id^\\x3dgtmDC-\");return a=a.firstChild.id})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":1000,
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"firstSeenSale\",now,365);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1928
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv class\\x3d\"col-12 mt-3 alert font-weight-bold text-center alert-secondary\" data-color\\x3d\"secondary\" \\x3e Already have one of our products? Get \\x3cu\\x3e50% OFF\\x3c\/u\\x3e any MDB5 plan. Use code \\x3ccode class\\x3d\"text-uppercase bg-white px-2 rounded\"\\x3ezrhbksnm\\x3c\/code\\x3e on the checkout to receive the discount. \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-propageMDB5-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-propageMDB5-]\").innerHTML=a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1528
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","4","group",["macro",6]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",7]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","4","dimension",["macro",8]],["map","index","7","dimension",["macro",11]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"YouTube Videos",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["macro",17],
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":525
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Scroll Depth",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["template",["macro",19],"%"],
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":526
    },{
      "function":"__sp",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"979879318",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"uIBJCPv423AQlouf0wM",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",22],
      "vtp_enableRdpCheckbox":true,
      "tag_id":815
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Goals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["macro",24],
      "vtp_eventLabel":["template",["macro",25]," ",["macro",26]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":833
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Snippets",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":845
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Modals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["template","Clicked ",["macro",38]],
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":851
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Outbound links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["macro",39],
      "vtp_eventLabel":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":855
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",41],
      "vtp_eventCategory":["macro",42],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":866
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",41],
      "vtp_eventCategory":["macro",44],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":867
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce helper",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["macro",45],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":873
    },{
      "function":"__mf",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_projectId":"9165eec4-fcd5-4c79-aa25-5d2d8d5eee4d",
      "tag_id":888
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Goals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Add to cart",
      "vtp_eventLabel":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":892
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"First Campaign",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["macro",46],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":901
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Last Campaign",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":902
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"First Campaign",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Download",
      "vtp_eventLabel":["macro",46],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":903
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Last Campaign",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Download",
      "vtp_eventLabel":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":904
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Modals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Viewed",
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":905
    },{
      "function":"__bzi",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_id":"1795625",
      "tag_id":909
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Goals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Mobile",
      "vtp_eventLabel":"Angular Download",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1337
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1358
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1412
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Content Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["template",["macro",53]," click"],
      "vtp_eventLabel":["template",["macro",37]," ",["macro",54]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1417
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1491
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":1508
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1520
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1523
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1713
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":1870
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":1873
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1878
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1883
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1886
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1887
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1888
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1889
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1933
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1935
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"2340190_699",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1939
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_702",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1940
    },{
      "function":"__cl",
      "tag_id":1941
    },{
      "function":"__cl",
      "tag_id":1942
    },{
      "function":"__cl",
      "tag_id":1943
    },{
      "function":"__cl",
      "tag_id":1944
    },{
      "function":"__cl",
      "tag_id":1945
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2340190_1203",
      "tag_id":1946
    },{
      "function":"__cl",
      "tag_id":1947
    },{
      "function":"__cl",
      "tag_id":1948
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","2340190_1264_1182"],
      "vtp_uniqueTriggerId":"2340190_1264",
      "tag_id":1949
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"2340190_1264_1182",
      "tag_id":1950
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":".modal",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1302",
      "tag_id":1951
    },{
      "function":"__cl",
      "tag_id":1952
    },{
      "function":"__cl",
      "tag_id":1953
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"40",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1341",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1954
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"33",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1361",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1955
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2340190_1369",
      "tag_id":1956
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"33",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1411",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1957
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2340190_1416",
      "tag_id":1958
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-nav-']:not([id$='-sub'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1431",
      "tag_id":1959
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"40",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1489",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1960
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"33",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1492",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1961
    },{
      "function":"__cl",
      "tag_id":1962
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"33",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1513",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1963
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"33",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1524",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1964
    },{
      "function":"__evl",
      "vtp_elementId":"exampleModalLabel",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1525",
      "tag_id":1965
    },{
      "function":"__evl",
      "vtp_elementId":"gtmDC-propageMDB5-pro",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1527",
      "tag_id":1966
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1714",
      "tag_id":1967
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"50",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1722",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1968
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^=gtmDC-scroll]",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"2340190_1781",
      "tag_id":1969
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^=gtmDC-scroll-]",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"2340190_1786",
      "tag_id":1970
    },{
      "function":"__evl",
      "vtp_elementId":"section-pricing",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"20",
      "vtp_uniqueTriggerId":"2340190_1802",
      "tag_id":1971
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1810",
      "tag_id":1972
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1812",
      "tag_id":1973
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1816",
      "tag_id":1974
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1818",
      "tag_id":1975
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1820",
      "tag_id":1976
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"50",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2340190_1847",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1977
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^=gtmDC-frontpage-]",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"2340190_1850",
      "tag_id":1978
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1852",
      "tag_id":1979
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1856",
      "tag_id":1980
    },{
      "function":"__cl",
      "tag_id":1981
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[id^='gtmDC-']",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1872",
      "tag_id":1982
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1879",
      "tag_id":1983
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1880",
      "tag_id":1984
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1881",
      "tag_id":1985
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1885",
      "tag_id":1986
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1890",
      "tag_id":1987
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1891",
      "tag_id":1988
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1892",
      "tag_id":1989
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-']:not([id$='-sub']):not([id$='-pro'])",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1893",
      "tag_id":1990
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-pro']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1901",
      "tag_id":1991
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-pro']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1902",
      "tag_id":1992
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-pro']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1903",
      "tag_id":1993
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-pro']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1904",
      "tag_id":1994
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-pro']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1905",
      "tag_id":1995
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC'][id$='sub']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1916",
      "tag_id":1996
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-sub']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1919",
      "tag_id":1997
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_elementSelector":"[id^='gtmDC-'][id$='-sub']",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1926",
      "tag_id":1998
    },{
      "function":"__evl",
      "vtp_elementId":"gtmDc-mdb4-jquery",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2340190_1937",
      "tag_id":1999
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"289867067833087\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=289867067833087\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":836
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"289867067833087\");fbq(\"track\",\"mdbFreeDownload\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=289867067833087\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":837
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",161,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"firstSeen\",now,365);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":877
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",159,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"firstDownload\",now,365);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":878
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",163,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"firstConversion\",now,365);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":879
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}setCookie(\"firstDownloadTechnology\",",["escape",["macro",26],8,16],",365);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":883
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar stb_exitintent=!1;document.addEventListener(\"mousemove\",function(a){var b=window.pageYOffset||document.documentElement.scrollTop;10\u003Ea.pageY-b\u0026\u00260==stb_exitintent\u0026\u0026(dataLayer.push({event:\"exit_intent\"}),stb_exitintent=!0)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":890
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction createCookie(c,d,b){var a=\"\";b\u0026\u0026(a=new Date,a.setTime(a.getTime()+864E5*b),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=c+\"\\x3d\"+d+a+\"; path\\x3d\/\"}createCookie(\"firstCampaign\",\"",["escape",["macro",61],7],"\",365);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":897
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction createCookie(c,d,b){var a=\"\";b\u0026\u0026(a=new Date,a.setTime(a.getTime()+864E5*b),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=c+\"\\x3d\"+d+a+\"; path\\x3d\/\"}createCookie(\"lastCampaign\",\"",["escape",["macro",61],7],"\",365);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":900
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",111,0]],
      "once_per_event":true,
      "vtp_html":"\n     \u003Cdiv class=\"modal fade right\" id=\"startModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"startModalLabel\" aria-hidden=\"true\"\u003E\n     \u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E\n       \u003Cdiv class=\"modal-content\"\u003E\n         \u003Cdiv class=\"modal-header\"\u003E\n           \u003Ch5 class=\"modal-title\" id=\"startModalLabel\"\u003E\u003Cb\u003EFirst time on mdbootstrap?\u003C\/b\u003E\u003C\/h5\u003E\n           \u003Cbutton type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\u003E\n             \u003Cspan aria-hidden=\"true\"\u003E×\u003C\/span\u003E\n           \u003C\/button\u003E\n         \u003C\/div\u003E\n\n         \u003Cdiv class=\"modal-body text-center\"\u003E     \n\n          \u003Ci class=\"far fa-smile fa-5x text-info my-4\"\u003E\u003C\/i\u003E\n\n          \u003Cp\u003E\u003Cstrong\u003EDo you want us to help you get started?\u003C\/strong\u003E\u003C\/p\u003E\n\n          \u003Chr class=\"my-2\"\u003E\n         \n          \u003Ca class=\"btn btn-primary btn-sm float-right\" href=\"https:\/\/mdbootstrap.com\/docs\/standard\/getting-started\/\" role=\"button\"\u003EYes, do it\u003Ci class=\"fas fa-arrow-alt-circle-right ml-2\"\u003E\u003C\/i\u003E\u003C\/a\u003E \n          \u003Cbutton type=\"button\" class=\"btn btn-outline-primary btn-sm float-right\" data-dismiss=\"modal\"\u003E No, thanks \u003C\/button\u003E \n         \u003C\/div\u003E\n       \u003C\/div\u003E\n     \u003C\/div\u003E\n   \u003C\/div\u003E\n\n   \n\u003Cscript\u003E$(\"#startModal\").modal(\"show\");$(\"#startModal\").parent().css(\"display\",\"block\");$(\"#startModal\").parent().css(\"visibility\",\"visible\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1342
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenStartModal\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1345
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}function getCookie(a){for(var b=document.cookie.split(\";\"),c,d=0;d\u003Cb.length;d++){var e=b[d].trim();0===e.indexOf(a+\"\\x3d\")\u0026\u0026(c=e.substring((a+\"\\x3d\").length,e.length))}return c}(function(){var a=getCookie(\"pageviewCount\");\"undefined\"===typeof a?a=1:a++;setCookie(\"pageviewCount\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1356
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"clickedToGitHubMDB5\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1368
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=' \\x3ca class\\x3d\"btn btn-danger mx-2 px-3\" href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/pro\/\" role\\x3d\"button\"\\x3e \\x3cspan class\\x3d\"d-none d-lg-inline-block me-1\"\\x3eGo Pro\\x3c\/span\\x3e \\x3ci class\\x3d\"far fa-gem\"\\x3e\\x3c\/i\\x3e\\x3c\/a\\x3e';document.querySelector(\"[id^\\x3dgtmDC-nav-]\").innerHTML=a})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1439
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",111,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cdiv class=\"modal fade\" id=\"startModal\" tabindex=\"-1\" aria-labelledby=\"startModalLabel\" aria-hidden=\"true\"\u003E\n   \u003Cdiv class=\"modal-dialog\"\u003E\n      \u003Cdiv class=\"modal-content\"\u003E\n         \u003Cdiv class=\"modal-header\"\u003E\n            \u003Ch5 class=\"modal-title\"\u003EFirst time on mdbootstrap?\u003C\/h5\u003E\n            \u003Cbutton type=\"button\" class=\"close\" data-mdb-dismiss=\"modal\" aria-label=\"Close\"\u003E \u003Cspan aria-hidden=\"true\"\u003E×\u003C\/span\u003E \u003C\/button\u003E \n         \u003C\/div\u003E\n         \u003Cdiv class=\"modal-body text-center\"\u003E\n            \u003Ci class=\"far fa-smile fa-5x text-info my-4\"\u003E\u003C\/i\u003E \n            \u003Cp\u003E\u003Cstrong\u003EDo you want us to help you get started?\u003C\/strong\u003E\u003C\/p\u003E\n         \u003C\/div\u003E\n         \u003Cdiv class=\"modal-footer\"\u003E \u003Cbutton type=\"button\" class=\"btn btn-outline-primary\" data-mdb-dismiss=\"modal\"\u003E No, thanks \u003C\/button\u003E \u003Ca class=\"btn btn-primary\" href=\"https:\/\/mdbootstrap.com\/docs\/standard\/getting-started\/\" role=\"button\"\u003EYes, do it \u003Ci class=\"fas fa-arrow-alt-circle-right ms-2\"\u003E\u003C\/i\u003E\u003C\/a\u003E \u003C\/div\u003E\n      \u003C\/div\u003E\n   \u003C\/div\u003E\n\u003C\/div\u003E\n\n\u003Cscript\u003Evar myModalEl=document.getElementById(\"startModal\"),modal=new mdb.Modal(myModalEl);modal.toggle();myModalEl.parentElement.style.display=\"block\";myModalEl.parentElement.style.visibility=\"visible\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1490
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",162,0]],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cdiv class=\"modal fade top\" id=\"onboardingSnippetAd\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"onboardingSnippetAd\" aria-hidden=\"true\" data-backdrop=\"static\"\u003E\n\u003Cdiv class=\"modal-dialog modal-notify modal-info  modal-top-left\" role=\"document\"\u003E\n  \n  \u003Cdiv class=\"modal-content text-center\"\u003E\n    \n    \u003Cdiv class=\"modal-header color-info\"\u003E\n      \u003Cp class=\"heading lead text-center\"\u003E\u003Cstrong\u003EFirst time with Snippets?\u003C\/strong\u003E\u003C\/p\u003E\n\n      \u003Cbutton type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\u003E\n        \u003Cspan aria-hidden=\"true\" class=\"white-text\"\u003E×\u003C\/span\u003E\n      \u003C\/button\u003E\n    \u003C\/div\u003E\n\n    \n    \u003Cdiv class=\"modal-body\"\u003E\n \u003Ca href=\"https:\/\/mdbootstrap.com\/snippets\/standard\/mdbootstrap\/2823184\/fork\"\u003E\n\u003Ci class=\"fas btn-lg fa-pencil-ruler\" style=\"font-size:60px;\"\u003E\u003C\/i\u003E\n\u003C\/a\u003E\n\n\n      \u003Cdiv class=\"text-center mt-3\"\u003E\n        \u003Cp class=\"mb-0 mt-3\"\u003E\n        Is this your \u003Cstrong\u003Efirst time using our Snippets Playground?\u003C\/strong\u003E Click the button below, learn how to use Snippets and \u003Cstrong\u003Eget rewards!\u003C\/strong\u003E.\n \u003C\/p\u003E\n \u003Cbr\u003E\n        \u003Cp class=\"mb-0\"\u003E\n          \n        \u003C\/p\u003E\n          \n      \u003C\/div\u003E\n    \u003C\/div\u003E\n\n    \n    \u003Cdiv class=\"modal-footer justify-content-center\"\u003E\n      \u003Ca type=\"button\" href=\"https:\/\/mdbootstrap.com\/snippets\/standard\/mdbootstrap\/2823184\/fork\" class=\"btn btn-info text-white\"\u003ESTART CODING NOW\u003Ci class=\"fas fa-code ml-2\"\u003E\u003C\/i\u003E\u003C\/a\u003E\n      \n    \u003C\/div\u003E\n  \u003C\/div\u003E\n  \n\u003C\/div\u003E\n\u003C\/div\u003E\n\n\u003Cscript\u003E$(\"#onboardingSnippetAd\").modal(\"show\");$(\"#onboardingSnippetAd\").parent().css(\"display\",\"block\");$(\"#onboardingSnippetAd\").parent().css(\"visibility\",\"visible\");$(\".toast\").toast(\"show\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1514
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",160,0]],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cdiv class=\"modal fade\" id=\"exitIntentCheckout\" tabindex=\"-1\" aria-labelledby=\"exitIntentCheckout\" aria-hidden=\"true\" data-backdrop=\"static\"\u003E\n  \u003Cdiv class=\"modal-dialog\"\u003E\n    \u003Cdiv class=\"modal-content\"\u003E\n      \u003Cdiv class=\"modal-header bg-danger text-white\"\u003E\n        \u003Ch5 class=\"modal-title\"\u003EOne time gift | Additional \u003Cu\u003E15% CUT\u003C\/u\u003E\u003C\/h5\u003E\n      \u003C\/div\u003E\n      \u003Cdiv class=\"modal-body\"\u003E\n        \u003Cdiv class=\"text-center text-black\"\u003E\n          \u003Cp class=\"display-3 fw-bold text-danger my-3\"\u003E\u003Cspan id=\"time-counter\"\u003E\u003C\/span\u003E\u003C\/p\u003E\n          \u003Cp\u003EThis additional discount will be added on top, because it seems that you are still undecided, but this is a one-time offer, you will not be able to calim it ever again.\u003C\/p\u003E          \n          \u003Cp class=\"font-weight-bold\"\u003EClaim \u0026amp; complete the order before the offer expires.\u003C\/p\u003E\n        \u003C\/div\u003E\n      \u003C\/div\u003E\n      \u003Cdiv class=\"modal-footer\"\u003E\n        \u003Ca type=\"button\" class=\"btn btn-grey\" data-mdb-dismiss=\"modal\"\u003E\n          DISCARD FOREVER\n        \u003C\/a\u003E\n        \u003Ca href=\"https:\/\/mdbootstrap.com\/checkout\/?coupon_code=yn7q3457\" type=\"button\" class=\"btn btn-danger flex-fill\"\u003ECLAIM OFFER NOW\u003C\/a\u003E\n      \u003C\/div\u003E\n    \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E\n\n\n\n\u003Cscript\u003Evar myModalEl=document.getElementById(\"exitIntentCheckout\"),modal=new mdb.Modal(myModalEl);modal.toggle();myModalEl.parentElement.style.display=\"block\";myModalEl.parentElement.style.visibility=\"visible\";var startDate=(new Date).getTime(),countDownDate=new Date(startDate+9E5),counterElement=document.getElementById(\"time-counter\");\nfunction startCounter(){if(null!=counterElement)var d=setInterval(function(){var a=(new Date).getTime();a=countDownDate-a;var b=Math.floor(a%36E5\/6E4),c=Math.floor(a%6E4\/1E3);counterElement.innerHTML=b+\"m \"+c+\"s\";0\u003Ea\u0026\u0026(clearInterval(d),document.getElementById(\"time-counter\").innerHTML='\\x3cp class\\x3d\"h3 grey-text\"\\x3eSale ended :(\\x3c\/p\\x3e')},1E3)}startCounter();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1707
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",164,0]],
      "once_per_event":true,
      "vtp_html":" \u003Cdiv class=\"modal fade\" id=\"chinaShareModal\" data-mdb-backdrop=\"static\" data-mdb-keyboard=\"false\" tabindex=\"-1\" aria-labelledby=\"chinaShareModalLabel\" aria-hidden=\"true\"\u003E \u003Cdiv class=\"modal-dialog modal-xl\"\u003E \u003Cdiv class=\"modal-content\"\u003E \u003Cdiv class=\"modal-header\"\u003E \u003Ch5 class=\"modal-title\" id=\"chinaShareModalLabel\"\u003E请在社交媒体上分享我们的资源\u003C\/h5\u003E \u003Cbutton type=\"button\" class=\"btn-close\" data-mdb-dismiss=\"modal\" aria-label=\"Close\"\u003E\u003C\/button\u003E \u003C\/div\u003E\u003Cdiv class=\"modal-body\"\u003E \u003Cdiv class=\"text-center\"\u003E \u003Cp\u003E我们拥有的中文用户越多，我们越会尝试定制模板和组件来满足中文网络的需求。 请帮助我们改进，您将很快获得更多免费资源。\u003C\/p\u003E\u003Cdiv class=\"row justify-content-center my-5\"\u003E \u003Cdiv class=\"col-md-2\"\u003E \u003Cp\u003E分享人人\u003C\/p\u003E\u003Ca href=\"http:\/\/share.renren.com\/share\/buttonshare.do?link=https:\/\/mdbootstrap.com\/\u0026amp;title=UI\" target=\"_blank\"\u003E\u003Ci class=\"fab fa-renren fa-4x\"\u003E\u003C\/i\u003E\u003C\/a\u003E \u003C\/div\u003E\u003Cdiv class=\"col-md-2\"\u003E \u003Cp\u003E在百度论坛上分享\u003C\/p\u003E\u003Ca href=\"http:\/\/like.baidu.com\/set?buttontype=small\u0026amp;cb=bdShare.ajax._callbacks.bd4bb141b\u0026amp;index=0\u0026amp;url=https:\/\/mdbootstrap.com\/\" target=\"_blank\"\u003E\u003Ci class=\"fas fa-paw fa-4x\"\u003E\u003C\/i\u003E\u003C\/a\u003E \u003C\/div\u003E\u003Cdiv class=\"col-md-2\"\u003E \u003Cp\u003E分享到百度\u003C\/p\u003E\u003Ca href=\"http:\/\/tieba.baidu.com\/f\/commit\/share\/openShareApi?url=https:\/\/mdbootstrap.com\/\u0026amp;link=https:\/\/mdbootstrap.com\/\" target=\"_blank\"\u003E\u003Ci class=\"fas fa-paw fa-4x\"\u003E\u003C\/i\u003E\u003C\/a\u003E \u003C\/div\u003E\u003Cdiv class=\"col-md-2\"\u003E \u003Cp\u003E分享到新浪微博\u003C\/p\u003E\u003Ca href=\"http:\/\/service.weibo.com\/share\/share.php?url=https:\/\/mdbootstrap.com\/\u0026amp;appkey=\u0026amp;title=UI\u0026amp;pic=\u0026amp;ralateUid=\u0026amp;language=zh_cn\" target=\"_blank\"\u003E\u003Ci class=\"fab fa-weibo fa-4x\"\u003E\u003C\/i\u003E\u003C\/a\u003E \u003C\/div\u003E\u003Cdiv class=\"col-md-2\"\u003E \u003Cp\u003E在领英上分享\u003C\/p\u003E\u003Ca href=\"https:\/\/www.linkedin.com\/sharing\/share-offsite\/?url=https:\/\/mdbootstrap.com\/\" target=\"_blank\"\u003E\u003Ci class=\"fab fa-linkedin fa-4x\"\u003E\u003C\/i\u003E\u003C\/a\u003E \u003C\/div\u003E\u003C\/div\u003E\u003Cp\u003E某事不起作用？\u003Ca href=\"https:\/\/mdbootstrap.com\/general\/contact\/\"\u003E联系我们\u003C\/a\u003E\u003C\/p\u003E\u003C\/div\u003E\u003C\/div\u003E\u003C\/div\u003E\u003C\/div\u003E\u003C\/div\u003E\u003Cscript\u003Evar myModalEl=document.getElementById(\"chinaShareModal\"),modal=new mdb.Modal(myModalEl);modal.toggle();myModalEl.parentElement.style.display=\"block\";myModalEl.parentElement.style.visibility=\"visible\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1725
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cdiv class=\"toast border border-black show fade mx-auto\" id=\"mdbLabShare\" role=\"alert\" style=\"position:fixed;bottom:50px;right:20px;\"\u003E\n    \u003Cdiv class=\"toast-body text-black\" style=\"background-color: white\"\u003E\n      \u003Cdiv class=\"text-center mb-2\"\u003E\n        \u003Cp\u003E\u003Cstrong\u003EDon\u0026#39;t let your peers miss out.\u003C\/strong\u003E\u003C\/p\u003E\n        \u003Cp\u003EBe the one who shares the most fun \u0026amp; useful content.\u003C\/p\u003E\n         \u003Ca class=\"btn-floating  btn-fb\" href=\"https:\/\/facebook.com\/sharer\/sharer.php?u=https:\/\/mdbootstrap.com\/docs\/standard\/lab\/\" rel=\"nofollow\" target=\"_blank\" type=\"button\" role=\"button\"\u003E\u003Ci class=\"fa fa-facebook\" aria-hidden=\"true\"\u003E\u003C\/i\u003E\u003C\/a\u003E\n          \n            \u003Ca class=\"btn-floating  btn-tw\" href=\"https:\/\/twitter.com\/intent\/tweet?text=Check out these amazing concepts: Amazon, Facebook, Instagram, and more recreated with the latest Bootstrap 5. They are sometimes made available for free 🤩 - worth keeping an eye on. \u0026amp;url=https:\/\/mdbootstrap.com\/docs\/standard\/lab\/\u0026amp;hashtags=mdblab,mdbootstrap\" rel=\"nofollow\" target=\"_blank\" type=\"button\" role=\"button\"\u003E\u003Ci class=\"fa fa-twitter\" aria-hidden=\"true\"\u003E\u003C\/i\u003E\u003C\/a\u003E\n          \n          \n            \u003Ca href=\"mailto: ?subject=I found a very useful templates collection\u0026amp;body=Check out these amazing concepts: Amazon, Facebook, Instagram, and more recreated with the latest Bootstrap 5. They are sometimes made available for free - worth an keeping eye on. \nhttps:\/\/mdbootstrap.com\/docs\/standard\/lab\/\" rel=\"nofollow\" target=\"_blank\" class=\"btn-floating btn-gplus\" type=\"button\" role=\"button\"\u003E\u003Ci class=\"fa fa-envelope-o\" aria-hidden=\"true\"\u003E\u003C\/i\u003E\u003C\/a\u003E\n            \n      \n      \n      \u003C\/div\u003E\n\n\n    \u003C\/div\u003E\n  \u003C\/div\u003E\n\n\u003Cscript\u003Evar instructionAlert=document.getElementById(\"mdbLabShare\");instructionAlert.parentElement.style.display=\"block\";instructionAlert.parentElement.style.visibility=\"visible\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1779
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv class\\x3d\"alert alert-black\" role\\x3d\"alert\" data-color\\x3d\"danger\"\\x3e \\x3cp class\\x3d\"font-weight-bold\"\\x3eGet MDB PRO for \\x3cspan\\x3e\\u20ac1\\x3c\/span\\x3e. \\x3cspan class\\x3d\"text-danger mb-0\"\\x3eOffers limited!\\x3c\/span\\x3e\\x3c\/p\\x3e\\x3cp \\x3e99% discount for taking a \\x3cspan class\\x3d\"font-weight-bold\"\\x3e4 minute survey\\x3c\/span\\x3e about MDB performance in \\x3cspan class\\x3d\"font-weight-bold\"\\x3eChina\\x3c\/span\\x3e.\\x3c\/p\\x3e\\x3cdiv class\\x3d\"text-center\"\\x3e \\x3ca target\\x3d\"_blank\" href\\x3d\"https:\/\/forms.office.com\/Pages\/ResponsePage.aspx?id\\x3dDQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__QrlYClUOTg3T1pFOUlZVTNFTVQyMVdEMDkxWTE5My4u\" class\\x3d\"btn btn-danger btn-sm mt-2\"\\x3eANSWER \\x26 CLAIM REWARD NOW\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e';\ndocument.querySelector(\"[id^\\x3dgtmDC-scroll-]\").innerHTML=a})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1780
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenChineseSurveyTaken\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1783
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenInstallationPage\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1792
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenNewsletterConfirmation\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1797
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}function getCookie(a){for(var b=document.cookie.split(\";\"),c,d=0;d\u003Cb.length;d++){var e=b[d].trim();0===e.indexOf(a+\"\\x3d\")\u0026\u0026(c=e.substring((a+\"\\x3d\").length,e.length))}return c}(function(){var a=getCookie(\"s4Left\");a=\"undefined\"===typeof a?47:a-Math.floor(5*Math.random());setCookie(\"s4Left\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1798
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenProPage\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1800
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}function getCookie(a){for(var b=document.cookie.split(\";\"),c,d=0;d\u003Cb.length;d++){var e=b[d].trim();0===e.indexOf(a+\"\\x3d\")\u0026\u0026(c=e.substring((a+\"\\x3d\").length,e.length))}return c}(function(){var a=getCookie(\"s6Left\");a=\"undefined\"===typeof a?27:a-Math.floor(6*Math.random());setCookie(\"s6Left\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1806
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s1-download-mdb-free\" class\\x3d\"alert alert-success\" role\\x3d\"alert\" data-color\\x3d\"success\"\\x3e Get \\x3cstrong\\x3e500+\\x3c\/strong\\x3e Material elements for \\x3cstrong\\x3eFREE\\x3c\/strong\\x3e. Beautiful components for the \\x3cstrong\\x3elatest Bootstrap 5\\x3c\/strong\\x3e. \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/getting-started\/installation\/\" class\\x3d\"btn btn-success btn-sm mt-2 mb-0 btn-block\"\\x3eDOWNLOAD NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026\n(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1811
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s2-introduce-pro\" class\\x3d\"alert alert-danger\"\\x3e \\x3cstrong\\x3e5000+ premium components\\x3c\/strong\\x3e. Multiple useful \\x3cstrong\\x3eplugins\\x3c\/strong\\x3e and gorgeous \\x3cstrong\\x3etemplates\\x3c\/strong\\x3e. Bootstrap v5 \\x26 v4. \\x3ca class\\x3d\"btn btn-danger btn-sm mt-2 mb-0 btn-block\" href\\x3d\"https:\/\/mdbootstrap.com\/pro\/\"\\x3eLearn about PRO\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=\na)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1813
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s5-join-newsletter\" class\\x3d\"alert alert-warning\" role\\x3d\"alert\" data-color\\x3d\"warning\"\\x3e \\x3cstrong\\x3eUNLOCK\\x3c\/strong\\x3e more \\x3cstrong\\x3eFREE\\x3c\/strong\\x3e tools \\x26 resources. \\x3cstrong\\x3eACCESS\\x3c\/strong\\x3e exclusive content. \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/newsletter\/\" class\\x3d\"btn btn-warning btn-sm mt-2 mb-0 btn-block\"\\x3eLEARN MORE\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=\na)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1817
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s6-essential-sale\" class\\x3d\"alert alert-danger\" role\\x3d\"alert\" data-color\\x3d\"danger\"\\x3e MDB Essential is on \\x3cstrong\\x3eSALE!\\x3c\/strong\\x3e Get \\x3cstrong\\x3e5000+\\x3c\/strong\\x3e premium components with \\x3cstrong\\x3e50%\\x3c\/strong\\x3e discount. \\x3cbr\\x3e\\x3cspan class\\x3d\"text-danger font-weight-bold\"\\x3e",["escape",["macro",72],7]," offers left!\\x3c\/span\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/\" class\\x3d\"btn btn-black btn-sm mt-2 mb-0 btn-block\"\\x3eView SALE\\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1819
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s7-go-pro\" class\\x3d\"alert alert-primary\" role\\x3d\"alert\" data-color\\x3d\"primary\"\\x3e \\x3cstrong\\x3eTake your projects to another level\\x3c\/strong\\x3e. Get lifetime usage of \\x3cstrong\\x3e5000+\\x3c\/strong\\x3e PRO elements. Get \\x3cstrong\\x3eprofessional support\\x3c\/strong\\x3e \\x26 other maintanance features. \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/pro\/\" class\\x3d\"btn btn-danger btn-sm mt-2 mb-0 btn-block\"\\x3eView products\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026\n(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1821
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a=' \\x3cdiv id\\x3d\"s2-introduce-pro\" class\\x3d\"row p-3 border my-5 rounded shadow-2\"\\x3e\\x3cdiv class\\x3d\"col-xl-7 mb-4 p-2\"\\x3e\\x3cdiv class\\x3d\"row\"\\x3e\\x3cdiv class\\x3d\"col-6\"\\x3e\\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/pro\/\"\\x3e\\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/standard\/pro\/_main\/assets\/mdb5-pro.jpg\" class\\x3d\"img-fluid shadow-5 rounded\"\/\\x3e\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3cdiv class\\x3d\"col-6\"\\x3e\\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/angular\/pro\/\"\\x3e\\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/angular\/pro\/_main\/assets\/mdb5-pro.jpg\" class\\x3d\"img-fluid shadow-5 rounded\"\/\\x3e\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3cdiv class\\x3d\"row mt-4\"\\x3e\\x3cdiv class\\x3d\"col-6\"\\x3e\\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/react\/pro\/\"\\x3e\\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/react\/pro\/_main\/assets\/mdb5-pro.jpg\" class\\x3d\"img-fluid shadow-5 rounded\"\\x3e\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3cdiv class\\x3d\"col-6\"\\x3e\\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/vue\/pro\/\"\\x3e\\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/vue\/pro\/_main\/assets\/mdb5-pro.jpg\" class\\x3d\"img-fluid shadow-5 rounded\"\\x3e\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3cdiv class\\x3d\"col-xl-5 mb-4 text-center text-xl-start d-lg-flex align-items-center\"\\x3e\\x3cdiv class\\x3d\"px-lg-3 w-100\"\\x3e\\x3col class\\x3d\"list-unstyled\"\\x3e\\x3cp class\\x3d\"fw-bold text-danger h5 mb-3\"\\x3eMDB PRO\\x3c\/p\\x3e\\x3cli class\\x3d\"mb-2 fw-bold\"\\x3e\\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3eBootstrap 5 \\x26 Material Design 2.0\\x3c\/li\\x3e\\x3cli class\\x3d\"mb-2\"\\x3e\\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3eBootstrap 4 \\x26 Material Design\\x3c\/li\\x3e\\x3cli class\\x3d\"mb-2\"\\x3e\\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3eStandard\/Angular\/React\/Vue\\x3c\/li\\x3e\\x3cli class\\x3d\"mb-2\"\\x3e\\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3e5000+ premium components\\x3c\/li\\x3e\\x3cli class\\x3d\"mb-2\"\\x3e\\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3eTemplates \\x26 Plugins\\x3c\/li\\x3e\\x3cli class\\x3d\"mb-2\"\\x3e\\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3ePremium Support\\x3c\/li\\x3e\\x3cli class\\x3d\"\"\\x3e\\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3eLifetime usage\\x3c\/li\\x3e\\x3c\/ol\\x3e\\x3ca class\\x3d\"btn btn-danger btn-lg btn-block m-1\" href\\x3d\"https:\/\/mdbootstrap.com\/pro\/\" role\\x3d\"button\"\\x3eLEARN MORE\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1832
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=' \\x3cdiv id\\x3d\"s4-use-survey-discount\" class\\x3d\"alert alert-danger p-3 my-5 text-center\" role\\x3d\"alert\" data-color\\x3d\"danger\"\\x3e \\x3cp class\\x3d\"fw-bold text-black h5 mb-3\"\\x3eUse your survey discount\\x3c\/p\\x3e\\x3cp\\x3eOne-time chance to get premium \\x3cspan class\\x3d\"fw-bold\"\\x3eCOMPONENTS\\x3c\/span\\x3e, \\x3cspan class\\x3d\"fw-bold\"\\x3eTEMPLATES\\x3c\/span\\x3e \\x26 \\x3cspan class\\x3d\"fw-bold\"\\x3ePLUGINS\\x3c\/span\\x3e cheaper than ever.\\x3c\/p\\x3e\\x3cp\\x3eDo not forget to use your \\x3cspan class\\x3d\"fw-bold\"\\x3e30%\\x3c\/span\\x3e discount before it is too late. There is only \\x3cspan class\\x3d\"text-center fw-bold text-danger\"\\x3e",["escape",["macro",68],7]," reward uses left\\x3c\/span\\x3e for this promotion.\\x3c\/p\\x3e\\x3cp\\x3eCopy your coupon \\x26 choose a product now.\\x3c\/p\\x3e\\x3cdiv class\\x3d\"justify-content-center d-flex\"\\x3e \\x3ccode class\\x3d\"h4 px-2 py-2 mb-0 text-center bg-white rounded\"\\x3ePZ8G7V24\\x3c\/code\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/pro\/\" target\\x3d\"_blank\" class\\x3d\"btn btn-black btn-lg mx-2\"\\x3eChoose product\\x3ci class\\x3d\"fas fa-external-link-alt ms-2\"\\x3e\\x3c\/i\\x3e\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1835
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s5-join-newsletter\" class\\x3d\"alert alert-warning p-3 my-5 text-center\" role\\x3d\"alert\" data-color\\x3d\"warning\"\\x3e \\x3cp class\\x3d\"text-black h5 mb-3\"\\x3e\\x3cstrong\\x3eUNLOCK ACCESS to even more FREE tools\\x3c\/strong\\x3e\\x3c\/p\\x3e\\x3cp\\x3e Get resources, tips, guides and \\x3cstrong\\x3eexclusive content\\x3c\/strong\\x3e directly to your inbox.\\x3c\/p\\x3e\\x3cp\\x3eLearn about the benefits of becoming a part of our subscribers community.\\x3c\/p\\x3e\\x3cdiv class\\x3d\"text-center\"\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/newsletter\/\" class\\x3d\"btn btn-warning btn-lg mx-2\"\\x3eLEARN MORE ABOUT THE LIST\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1838
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=' \\x3cdiv id\\x3d\"s6-essential-sale\" class\\x3d\"border border-danger p-3 my-5 text-center\" role\\x3d\"alert\" data-color\\x3d\"danger\"\\x3e \\x3cp class\\x3d\"fw-bold text-black h5 mb-3\"\\x3e50% SALE! | \\x3cspan class\\x3d\"text-danger fw-bold\"\\x3e",["escape",["macro",72],7]," offers\\x3c\/span\\x3e left\\x3c\/p\\x3e\\x3cp\\x3eGet \\x3cspan class\\x3d\"fw-bold\"\\x3e5000+ premium components\\x3c\/span\\x3e in MDB Essential for chosen technology.\\x3c\/p\\x3e\\x3cp\\x3eHurry up and \\x3cstrong\\x3eclaim discount now\\x3c\/strong\\x3e! Click images to open product details in new tab.\\x3c\/p\\x3e\\x3cdiv class\\x3d\"row\"\\x3e \\x3cdiv class\\x3d\"col-md-3 my-3\"\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/pro\/\" target\\x3d\"_blank\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/standard\/pro\/_main\/assets\/mdb5-pro.jpg\" class\\x3d\"img-fluid shadow-5 rounded\" alt\\x3d\"MDB 5 - Bootstrap 5 \\x26amp; Material Design 2.0\"\/\\x3e \\x3c\/a\\x3e \\x3cp class\\x3d\"h5 mt-2\"\\x3eStandard\\x3c\/p\\x3e\\x3ca class\\x3d\"btn btn-danger\" href\\x3d\"http:\/\/mdbootstrap.com\/?add-to-cart\\x3d125350\\x26coupon_code\\x3dWJNNBB3R\"\\x3eCLAIM NOW\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3cdiv class\\x3d\"col-md-3 my-3\"\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/angular\/pro\/\" target\\x3d\"_blank\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/angular\/pro\/_main\/assets\/mdb5-pro.jpg\" class\\x3d\"img-fluid shadow-5 rounded\" alt\\x3d\"MDB 5 - Bootstrap 5 \\x26amp; Material Design 2.0\"\/\\x3e \\x3c\/a\\x3e \\x3cp class\\x3d\"h5 mt-2\"\\x3eAngular\\x3c\/p\\x3e\\x3ca class\\x3d\"btn btn-danger \" href\\x3d\"mdbootstrap.com?add-to-cart\\x3d125352\\x26coupon_code\\x3dWJNNBB3R\"\\x3eCLAIM NOW\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3cdiv class\\x3d\"col-md-3 my-3\"\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/react\/pro\/\" target\\x3d\"_blank\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/react\/pro\/_main\/assets\/mdb5-pro.jpg\" class\\x3d\"img-fluid shadow-5 rounded\" alt\\x3d\"MDB 5 - Bootstrap 5 \\x26amp; Material Design 2.0\"\/\\x3e \\x3c\/a\\x3e \\x3cp class\\x3d\"h5 mt-2\"\\x3eReact\\x3c\/p\\x3e\\x3ca class\\x3d\"btn btn-danger\" href\\x3d\"mdbootstrap.com?add-to-cart\\x3d125355\\x26coupon_code\\x3dWJNNBB3R\"\\x3eCLAIM NOW\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3cdiv class\\x3d\"col-md-3 my-3\"\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/vue\/pro\/\" target\\x3d\"_blank\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/vue\/pro\/_main\/assets\/mdb5-pro.jpg\" class\\x3d\"img-fluid shadow-5 rounded\" alt\\x3d\"MDB 5 - Bootstrap 5 \\x26 Material Design 2.0\"\/\\x3e \\x3c\/a\\x3e \\x3cp class\\x3d\"h5 mt-2\"\\x3eVue\\x3c\/p\\x3e\\x3ca class\\x3d\"btn btn-danger\" href\\x3d\"mdbootstrap.com?add-to-cart\\x3d125357\\x26coupon_code\\x3dWJNNBB3R\"\\x3eCLAIM NOW\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1840
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s7-go-pro\" class\\x3d\"alert alert-primary text-center p-3 my-5\" role\\x3d\"alert\" data-color\\x3d\"primary\"\\x3e \\x3cp\\x3e\\x3cspan class\\x3d\"fw-bold h5\"\\x3eTake your projects to another level\\x3c\/span\\x3e\\x3c\/p\\x3e\\x3cp\\x3eGet \\x3cspan class\\x3d\"fw-bold\"\\x3elifetime usage of 5000+\\x3c\/span\\x3e premium Bootstrap components with beautiful Material styling now.\\x3c\/p\\x3e\\x3cp\\x3eSpeed up your workflow with 12 months of \\x3cspan class\\x3d\"fw-bold\"\\x3eprofessional support, npm \\x26 git access\\x3c\/span\\x3e and more!\\x3c\/p\\x3e\\x3cp\\x3eStart using \\x3cspan class\\x3d\"fw-bold\"\\x3ebeautiful templates\\x3c\/span\\x3e and \\x3cspan class\\x3d\"fw-bold\"\\x3epowerful plugins\\x3c\/span\\x3e for Bootstrap, Angular, React \\x26 Vue.\\x3c\/p\\x3e\\x3cdiv class\\x3d\"text-center\"\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/pro\/\" class\\x3d\"btn btn-danger btn-lg mx-2\"\\x3eSEE PRODUCTS\\x3ci class\\x3d\"fas fa-gem ms-2 ml-2\"\\x3e\\x3c\/i\\x3e\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1842
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv class\\x3d\"px-lg-3 w-100\"\\x3e \\x3col class\\x3d\"list-unstyled\"\\x3e \\x3cp class\\x3d\"fw-bold text-danger h5 mb-3\"\\x3eGet MDB PRO for \\u20ac1 - LIMITED OFFER!\\x3c\/p\\x3e\\x3cli class\\x3d\"mb-2 fw-bold\"\\x3e \\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3eTake 4 minutes to answer 10 simple questions \\x3c\/li\\x3e\\x3cli class\\x3d\"mb-2\"\\x3e \\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3eHelp us improve the quality of our website in China \\x3c\/li\\x3e\\x3cli class\\x3d\"mb-2\"\\x3e \\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3eGet access to \\x3cstrong\\x3e5000+\\x3c\/strong\\x3e premium components, design blocks, templates, plugins, pro tutorials, git repo access, npm install \\x26 professional support with \\x3cstrong\\x3efor \\u20ac1\\x3c\/strong\\x3e \\x3c\/li\\x3e\\x3cli class\\x3d\"mb-2\"\\x3e \\x3ci class\\x3d\"fas fa-check text-danger me-2\"\\x3e\\x3c\/i\\x3eDiscount applies to all products - MDB Standard, Angular, React \\x26 \\x3cstrong\\x3eVue\\x3c\/strong\\x3e versions \\x3c\/li\\x3e\\x3c\/ol\\x3e \\x3ca class\\x3d\"btn btn-danger btn-lg btn-block m-1\" href\\x3d\"https:\/\/forms.office.com\/Pages\/ResponsePage.aspx?id\\x3dDQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__QrlYClUOTg3T1pFOUlZVTNFTVQyMVdEMDkxWTE5My4u\" role\\x3d\"button\" target\\x3d\"_blank\"\\x3eANSWER \\x26 CLAIM DISCOUNT NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';\ndocument.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1846
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s3-get-survey-discount\" class\\x3d\"alert alert-secondary\"\\x3e \\x3cstrong\\x3eGet 30% OFF PRO\\x3c\/strong\\x3e Answer a couple of quick questions in our survey and claim discount. Rewards are limited. \\x3ca class\\x3d\"btn btn-secondary btn-sm mt-2 mb-0 btn-block\" href\\x3d\"https:\/\/forms.gle\/N2YG8tV975sBx6eT8\" target\\x3d\"_blank\"\\x3eANSWER NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=\na)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1851
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenFreeSurveyPage\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1855
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a='\\x3cdiv id\\x3d\"s4-use-survey-discount\" class\\x3d\"alert alert-black alert-dark\"\\x3e \\x3cstrong\\x3eUse your 30% OFF\\x3c\/strong\\x3e Copy your code: \\x3cbr\\x3e\\x3ccode class\\x3d\"white bg-white rounded px-2\"\\x3ePZ8G7V24\\x3c\/code\\x3e \\x3cbr\\x3eClaim discount before it is too late. \\x3cbr\\x3e\\x3cspan class\\x3d\"text-center font-weight-bold text-danger\"\\x3e",["escape",["macro",68],7]," reward uses left\\x3c\/span\\x3e \\x3ca class\\x3d\"btn btn-black btn-sm mt-2 mb-0 btn-block\" href\\x3d\"https:\/\/mdbootstrap.com\/pro\/\" target\\x3d\"_blank\"\\x3eCLAIM NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1857
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=' \\x3cdiv id\\x3d\"s3-get-survey-discount\" class\\x3d\"row p-3 border my-5 rounded shadow-2\"\\x3e \\x3cdiv class\\x3d\"col-xl-7 mb-4 p-2\"\\x3e \\x3cdiv class\\x3d\"row\"\\x3e \\x3cdiv class\\x3d\"col-6\"\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/pro\/\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/standard\/pro\/_main\/assets\/mdb5-pro.jpg\" class\\x3d\"img-fluid shadow-5 rounded\" alt\\x3d\"MDB 5 - Bootstrap 5 \\x26amp; Material Design 2.0\"\/\\x3e \\x3c\/a\\x3e \\x3c\/div\\x3e\\x3cdiv class\\x3d\"col-6\"\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/angular\/pro\/\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/angular\/pro\/_main\/assets\/mdb5-pro.jpg\" class\\x3d\"img-fluid shadow-5 rounded\" alt\\x3d\"MDB 5 - Bootstrap 5 \\x26amp; Material Design 2.0\"\/\\x3e \\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3cdiv class\\x3d\"row mt-4\"\\x3e \\x3cdiv class\\x3d\"col-6\"\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/react\/pro\/\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/react\/pro\/_main\/assets\/mdb5-pro.jpg\" class\\x3d\"img-fluid shadow-5 rounded\" alt\\x3d\"MDB 5 - Bootstrap 5 \\x26amp; Material Design 2.0\"\/\\x3e \\x3c\/a\\x3e \\x3c\/div\\x3e\\x3cdiv class\\x3d\"col-6\"\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/vue\/pro\/\"\\x3e \\x3cimg src\\x3d\"https:\/\/mdbootstrap.com\/wp-content\/themes\/mdbootstrap4\/content\/en\/_mdb5\/vue\/pro\/_main\/assets\/mdb5-pro.jpg\" class\\x3d\"img-fluid shadow-5 rounded\" alt\\x3d\"MDB 5 - Bootstrap 5 \\x26amp; Material Design 2.0\"\/\\x3e \\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3cdiv class\\x3d\"col-xl-5 mb-4 text-center text-xl-start d-lg-flex align-items-center\"\\x3e \\x3cdiv class\\x3d\"px-lg-3 w-100\"\\x3e \\x3cp class\\x3d\"fw-bold text-secondary h5 mb-3\"\\x3e30 % OFF MDB PRO\\x3c\/p\\x3e\\x3cp\\x3eAnswer a couple of quick questions and claim your reward.\\x3c\/p\\x3e\\x3cp\\x3eGet MDB PRO Standard, Angular, React or Vue with a significant discount.\\x3c\/p\\x3e\\x3cp\\x3eThe number of survey rewards is limited so better hurry up!\\x3c\/p\\x3e\\x3ca class\\x3d\"btn btn-secondary btn-lg btn-block m-1\" href\\x3d\"https:\/\/forms.gle\/N2YG8tV975sBx6eT8\" target\\x3d\"_blank\" role\\x3d\"button\"\\x3eANSWER \\x26 CLAIM REWARD\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1863
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a='\\x3cdiv class\\x3d\"alert mt-3 alert-danger\" role\\x3d\"alert\" data-mdb-color\\x3d\"danger\"\\x3e        Important: The number od rewards is limited. \\x3cstrong\\x3eThere is '+",["escape",["macro",68],8,16],"+\" coupon uses left\\x3c\/strong\\x3e.\\x3c\/div\\x3e\";0\u003C",["escape",["macro",68],8,16],"\u0026\u0026(document.querySelector(\"#gtmDC-free-survey\").innerHTML=a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1866
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s1-download-mdb-free\" class\\x3d\"alert alert-success\" role\\x3d\"alert\" data-color\\x3d\"success\"\\x3e Get \\x3cstrong\\x3e500+\\x3c\/strong\\x3e Material elements for \\x3cstrong\\x3eFREE\\x3c\/strong\\x3e. Beautiful components for the latest \\x3cstrong\\x3eBootstrap 5 \\x26 Angular\\x3c\/strong\\x3e. \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/angular\/getting-started\/installation\/\" class\\x3d\"btn btn-success btn-sm mt-2 mb-0 btn-block\"\\x3eDOWNLOAD NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=\ndocument.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1876
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s1-download-mdb-free\" class\\x3d\"alert alert-success\" role\\x3d\"alert\" data-color\\x3d\"success\"\\x3e Get \\x3cstrong\\x3e500+\\x3c\/strong\\x3e Material elements for \\x3cstrong\\x3eFREE\\x3c\/strong\\x3e. Beautiful components for the latest \\x3cstrong\\x3eBootstrap 5 \\x26 React\\x3c\/strong\\x3e. \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/react\/getting-started\/installation\/\" class\\x3d\"btn btn-success btn-sm mt-2 mb-0 btn-block\"\\x3eDOWNLOAD NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026\n(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1877
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s1-download-mdb-free\" class\\x3d\"alert alert-success\" role\\x3d\"alert\" data-color\\x3d\"success\"\\x3e Get \\x3cstrong\\x3e500+\\x3c\/strong\\x3e Material elements for \\x3cstrong\\x3eFREE\\x3c\/strong\\x3e. Beautiful components for the latest \\x3cstrong\\x3eBootstrap 5 \\x26 Vue\\x3c\/strong\\x3e. \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/vue\/getting-started\/installation\/\" class\\x3d\"btn btn-success btn-sm mt-2 mb-0 btn-block\"\\x3eDOWNLOAD NOW\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026\n(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1894
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"godfinger-v4v5-release\" class\\x3d\"alert alert-danger\" role\\x3d\"alert\" data-color\\x3d\"danger\"\\x3e Already have some products? Get \\x3cstrong\\x3e50% OFF\\x3c\/strong\\x3e the latest \\x3cstrong\\x3eBootstrap 5\\x3c\/strong\\x3e version of MDB PRO \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/angular\/pro\/\" class\\x3d\"btn btn-success btn-sm mt-2 mb-0 btn-block\"\\x3eVIEW ANGULAR SALE\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=\na)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1896
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"godfinger-v4v5-release\" class\\x3d\"alert alert-danger\" role\\x3d\"alert\" data-color\\x3d\"danger\"\\x3e Already have some products? Get \\x3cstrong\\x3e50% OFF\\x3c\/strong\\x3e the latest \\x3cstrong\\x3eBootstrap 5\\x3c\/strong\\x3e version of MDB PRO \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/react\/pro\/\" class\\x3d\"btn btn-success btn-sm mt-2 mb-0 btn-block\"\\x3eVIEW REACT SALE\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=\na)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1897
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"godfinger-v4v5-release\" class\\x3d\"alert alert-danger\" role\\x3d\"alert\" data-color\\x3d\"danger\"\\x3e Already have some products? Get \\x3cstrong\\x3e50% OFF\\x3c\/strong\\x3e the latest \\x3cstrong\\x3eBootstrap 5\\x3c\/strong\\x3e version of MDB PRO \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/pro\/\" class\\x3d\"btn btn-success btn-sm mt-2 mb-0 btn-block\"\\x3eVIEW SALE\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=\na)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1898
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=' \\x3cdiv id\\x3d\"godfinger-v4v5-release\" class\\x3d\"alert alert-danger\" role\\x3d\"alert\" data-color\\x3d\"danger\"\\x3e Already have some products? Get \\x3cstrong\\x3e50% OFF\\x3c\/strong\\x3e the latest \\x3cstrong\\x3eBootstrap 5\\x3c\/strong\\x3e version of MDB PRO \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/docs\/b5\/vue\/pro\/\" class\\x3d\"btn btn-success btn-sm mt-2 mb-0 btn-block\"\\x3eVIEW VUE SALE\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=\na)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1899
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s8-after-purchase-survey\" class\\x3d\"alert alert-info\" role\\x3d\"alert\" data-color\\x3d\"info\"\\x3e Take \\x3cstrong\\x3e4 minutes\\x3c\/strong\\x3e to \\x3cstrong\\x3erequest new components\\x3c\/strong\\x3e and influence the development of PRO packages. \\x3ca href\\x3d\"https:\/\/forms.gle\/gByWEJkBck6gFFNd8\" class\\x3d\"btn btn-danger btn-sm mt-2 mb-0 btn-block\" target\\x3d\"_blank\"\\x3eTake survey\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=\na)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1912
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s9-customer-satisfaction-survey\" class\\x3d\"alert alert-secondary\" role\\x3d\"alert\" data-color\\x3d\"secondary\"\\x3e \\x3cstrong\\x3eHow is your MDB PRO experience?\\x3c\/strong\\x3e Rate your experience and \\x3cstrong\\x3eleave us some feedback\\x3c\/strong\\x3e. \\x3ca href\\x3d\"https:\/\/forms.gle\/VX5is9SWtuEj6xL7A\" class\\x3d\"btn btn-danger btn-sm mt-2 mb-0 btn-block\" target\\x3d\"_blank\"\\x3eTake new survey\\x3c\/a\\x3e \\x3c\/div\\x3e';null!=document.querySelector(\"[id^\\x3dgtmDC-scroll]\")\u0026\u0026\n(document.querySelector(\"[id^\\x3dgtmDC-scroll]\").innerHTML=a)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1913
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s8-after-purchase-survey\" class\\x3d\"alert alert-info text-center p-3 my-5\" role\\x3d\"alert\" data-color\\x3d\"info\"\\x3e \\x3cp\\x3e\\x3cspan class\\x3d\"fw-bold h5\"\\x3eHelp us help YOU.\\x3c\/span\\x3e\\x3c\/p\\x3e\\x3cp\\x3eTake \\x3cspan class\\x3d\"fw-bold\"\\x3e4 minutes\\x3c\/span\\x3e to answer a couple of quick questions.\\x3c\/p\\x3e\\x3cp\\x3eHelp us \\x3cspan class\\x3d\"fw-bold\"\\x3ecustomize MDB PRO to your needs\\x3c\/span\\x3e \\x26 provide you with better service. \\x3c\/p\\x3e\\x3cp\\x3e\\x3cspan class\\x3d\"fw-bold\"\\x3eRequest new features\\x3c\/span\\x3e, help us select new technologies, and \\x3cspan class\\x3d\"fw-bold\"\\x3einfluence the development\\x3c\/span\\x3e path of PRO packages.\\x3c\/p\\x3e\\x3cdiv class\\x3d\"text-center\"\\x3e \\x3ca href\\x3d\"https:\/\/forms.gle\/gByWEJkBck6gFFNd8\" class\\x3d\"btn btn-danger btn-lg mx-2\" target\\x3d\"_blank\"\\x3eTAKE SURVEY NOW\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1914
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a='\\x3cdiv id\\x3d\"s9-customer-satisfaction-survey\" class\\x3d\"alert alert-secondary text-center p-3 my-5\" role\\x3d\"alert\" data-color\\x3d\"secondary\"\\x3e \\x3cp\\x3e\\x3cspan class\\x3d\"fw-bold h5\"\\x3eHow is your MDB PRO experience?\\x3c\/span\\x3e\\x3c\/p\\x3e\\x3cp\\x3eIs there \\x3cspan class\\x3d\"fw-bold\"\\x3eanything missing\\x3c\/span\\x3e in MDB PRO? Are you satisfied with the product so far?\\x3c\/p\\x3e\\x3cp\\x3e\\x3cspan class\\x3d\"fw-bold\"\\x3eRate your experience\\x3c\/span\\x3e, request new features, and \\x3cspan class\\x3d\"fw-bold\"\\x3elet us know\\x3c\/span\\x3e about anything else.\\x3c\/p\\x3e\\x3cdiv class\\x3d\"text-center\"\\x3e \\x3ca href\\x3d\"https:\/\/forms.gle\/VX5is9SWtuEj6xL7A\" class\\x3d\"btn btn-danger btn-lg mx-2\" target\\x3d\"_blank\"\\x3eTAKE NEW SURVEY NOW\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e';\nnull!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").innerHTML=a)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1915
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}function getCookie(a){for(var b=document.cookie.split(\";\"),c,d=0;d\u003Cb.length;d++){var e=b[d].trim();0===e.indexOf(a+\"\\x3d\")\u0026\u0026(c=e.substring((a+\"\\x3d\").length,e.length))}return c}(function(){var a=getCookie(\"subDcViewCount\");\"undefined\"===typeof a?a=1:a++;setCookie(\"subDcViewCount\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1917
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenAfterPurchaseSurveyPage\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1921
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenAfterUseSurveyPage\",!0);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1925
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar countDownDate=new Date(parseInt(",["escape",["macro",76],8,16],")+25319081),counterElement=document.getElementById(\"time-counter\");\nfunction startCounter(){if(null!=counterElement)var e=setInterval(function(){var a=(new Date).getTime();a=countDownDate-a;var b=Math.floor(a%864E5\/36E5),c=Math.floor(a%36E5\/6E4),d=Math.floor(a%6E4\/1E3);counterElement.innerHTML=b+\"h \"+c+\"m \"+d+\"s\";0\u003Ea\u0026\u0026(clearInterval(e),document.getElementById(\"time-counter\").innerHTML='\\x3cp class\\x3d\"h3 grey-text\"\\x3eSale ended :(\\x3c\/p\\x3e',window.location.href=\"https:\/\/mdbootstrap.com\/pro\/\")},1E3)}startCounter();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1932
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a='\\x3cp class\\x3d\"note note-warning\"\\x3e \\x3cstrong\\x3eNote:\\x3c\/strong\\x3e This documentation is for an older version of Bootstrap (v.4). A newer version is available for Bootstrap 5. We recommend migrating to the latest version of our product - \\x3ca class\\x3d\"font-weight-bold\" target\\x3d\"_blank\" href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/\"\\x3eMaterial Design for Bootstrap 5.\\x3c\/a\\x3e \\x3cbr\\x3e \\x3ca class\\x3d\"btn btn-danger btn-sm ml-0\" target\\x3d\"_blank\" href\\x3d\"",["escape",["macro",77],7],"\" role\\x3d\"button\"\\x3eGo to docs v.5\\x3c\/a\\x3e \\x3c\/p\\x3e';\ndocument.querySelector(\"#gtmDc-mdb4-jquery\").innerHTML=a})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1938
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",78],
      "vtp_eventCategory":["template","First conversions ",["macro",26]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"First Download",
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":881
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"seenExitIntentCheckout\",!0,60);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1702
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":["template","First conversions ",["macro",26]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"First Seen",
      "vtp_eventLabel":"0",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":880
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}setCookie(\"seenOnboardingSnippetAd\",!0);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1510
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",78],
      "vtp_eventCategory":["template","First conversions ",["macro",80]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"First Conversion",
      "vtp_eventLabel":["macro",78],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":882
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"seenChinaShareModal\",!0,365);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":1719
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_699($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_702($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"CN"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"directDownload"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"gitDownload"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"snippet-button-save"
    },{
      "function":"_sw",
      "arg0":["macro",23],
      "arg1":"snippet-button"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":".+ click"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"mdbootstrap.com"
    },{
      "function":"_sw",
      "arg0":["macro",39],
      "arg1":"http"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1203($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm4wp.orderCompletedEEC"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"gtm4wp.addProductToCartEEC|gtm4wp.productClickEEC|gtm4wp.removeFromCartEEC|gtm4wp.checkoutOptionEEC|gtm4wp.changeDetailViewEEC|gtm4wp.checkoutStepEEC"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm4wp.addProductToCart"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"thank-you"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"download"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"freebies"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1302($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"angular-mobile-download"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"vue-mobile-download"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"true"
    },{
      "function":"_ge",
      "arg0":["macro",51],
      "arg1":"10"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(jquery|angular|react|vue)"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1361($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1411($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"Navigation"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/snippets\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/user\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1416($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"[object HTMLButtonElement]"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"standard"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1492($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/pro\/thank-you\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1524($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"\/docs\/standard\/pro\/thank-you\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1525($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".+\\\/pro\\\/$"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1714($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",23],
      "arg1":"[id^='gtmDC-']"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1872($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/vue\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1893($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1885($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/angular\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1890($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/react\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1891($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\\/standard\\\/|\\\/jquery\\\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/cli\/reference\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1892($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/sale\/exclusive\/"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",58],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",59],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1264($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",61],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"true"
    },{
      "function":"_lt",
      "arg0":["macro",51],
      "arg1":"10"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1341($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/docs\/standard\/getting-started\/"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/github.com\/mdbootstrap\/mdb-ui-kit"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1369($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/standard\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1431($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1489($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",63],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/snippets\/"
    },{
      "function":"_gt",
      "arg0":["macro",58],
      "arg1":"1610623800000"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1513($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1527($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/checkout\/"
    },{
      "function":"_eq",
      "arg0":["macro",64],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"exit_intent"
    },{
      "function":"_eq",
      "arg0":["macro",65],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"CN"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1722($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/snippets\/standard\/mdb-lab\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/cn\/"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1781($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1786($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/survey-taken\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/getting-started\/installation\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"confirm"
    },{
      "function":"_eq",
      "arg0":["macro",67],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/pro\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1802($|,)))"
    },{
      "function":"_lt",
      "arg0":["macro",68],
      "arg1":"-80"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"angular|react|vue|^\\\/$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1810($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1812($|,)))"
    },{
      "function":"_le",
      "arg0":["macro",68],
      "arg1":"0"
    },{
      "function":"_gt",
      "arg0":["macro",68],
      "arg1":"-80"
    },{
      "function":"_eq",
      "arg0":["macro",71],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1816($|,)))"
    },{
      "function":"_le",
      "arg0":["macro",68],
      "arg1":"-80"
    },{
      "function":"_gt",
      "arg0":["macro",72],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1818($|,)))"
    },{
      "function":"_le",
      "arg0":["macro",72],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1820($|,)))"
    },{
      "function":"_gt",
      "arg0":["macro",68],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/cli\/reference\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1856($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1850($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1852($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/free-survey\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"angular"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1879($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"react"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1880($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"vue"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1881($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1901($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1902($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1903($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1904($|,)))"
    },{
      "function":"_gt",
      "arg0":["macro",73],
      "arg1":"0"
    },{
      "function":"_le",
      "arg0":["macro",73],
      "arg1":"300"
    },{
      "function":"_eq",
      "arg0":["macro",74],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1919($|,)))"
    },{
      "function":"_gt",
      "arg0":["macro",73],
      "arg1":"300"
    },{
      "function":"_eq",
      "arg0":["macro",75],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1926($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1916($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/after-purchase-survey\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/after-use-survey\/"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/sale\/"
    },{
      "function":"_eq",
      "arg0":["macro",76],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/jquery\/"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)2340190_1937($|,)))"
    }],
  "rules":[
    [["if",0],["add",2,5,13,20,26,38,101,107,112,40,42,43,44,45,46,47,48,49,50,52,53,54,57,59,60,63,66,67,68,70,71,72,73,74,75,76,77,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]],
    [["if",1,2],["add",3]],
    [["if",3,4],["add",4]],
    [["if",8,9],["add",6,17,18,51,102]],
    [["if",9,10],["add",6,17,18,102]],
    [["if",9,11],["add",6,17,18]],
    [["if",9,12],["add",7]],
    [["if",9,14],["unless",13],["add",8]],
    [["if",16,17,18],["unless",15],["add",9]],
    [["if",19],["add",10,11]],
    [["if",20],["add",12]],
    [["if",21],["add",14]],
    [["if",0,22],["add",15,16]],
    [["if",9,23,24],["add",17,18,102]],
    [["if",25,26],["add",19]],
    [["if",9,27],["add",21]],
    [["if",9,28],["add",21]],
    [["if",3,32,33,34],["unless",29,30,31],["add",22]],
    [["if",3,33,36],["unless",30,35],["add",23]],
    [["if",13,17,40],["unless",37,38,39],["add",24]],
    [["if",9,41],["add",24]],
    [["if",3,32,42,43],["unless",29,30,31],["add",25]],
    [["if",3,45,46],["unless",44],["add",27]],
    [["if",25,47,48],["add",28]],
    [["if",25,49,50],["add",29]],
    [["if",9,51],["add",30]],
    [["if",25,52],["add",31]],
    [["if",25,53,54],["add",32]],
    [["if",25,55],["add",33,34]],
    [["if",25,56,57],["add",35]],
    [["if",25,58,59],["add",36]],
    [["if",25,60,62],["unless",61],["add",37]],
    [["if",0,63,64],["add",39]],
    [["if",65],["add",41,55,56,58,61,62,64,65,69,78]],
    [["if",0,67],["add",103]],
    [["if",68,69,70],["add",104,106]],
    [["if",0,22,71],["unless",68],["add",105]],
    [["if",0,72],["add",108]],
    [["if",0],["unless",73],["add",109]],
    [["if",3,33,75,76],["unless",30,31,74],["add",110]],
    [["if",0,77],["add",111]],
    [["if",17,78,79],["add",113]],
    [["if",25,80,81],["add",114]],
    [["if",3,42,75,82],["unless",30,31,74],["add",115]],
    [["if",3,84,85,86],["unless",30,83],["add",116]],
    [["if",25,87],["add",1]],
    [["if",88,90],["unless",89],["add",117]],
    [["if",3,92,93],["unless",91],["add",118]],
    [["if",0,94],["add",119]],
    [["if",25,95,97],["unless",96],["add",120]],
    [["if",25,92,98],["unless",96],["add",120]],
    [["if",0,99],["add",121]],
    [["if",0,100],["add",122]],
    [["if",0,101],["add",123]],
    [["if",0,102],["add",124]],
    [["if",25,103,104],["add",125]],
    [["if",0,105],["add",126]],
    [["if",25,109],["unless",61,92,100,106,107,108],["add",127]],
    [["if",25,107,110],["unless",61,92,108],["add",128,132]],
    [["if",25,111,112,114],["unless",61,92,113],["add",129,134]],
    [["if",25,115,116,117],["unless",61,92],["add",130,135]],
    [["if",25,118,119],["unless",61,92],["add",131,136]],
    [["if",25,102,120,122],["unless",92,121],["add",133,140]],
    [["if",25,92,123],["unless",96],["add",137]],
    [["if",25,108,124],["unless",92,102,121],["add",138,141]],
    [["if",0,125],["add",139,142]],
    [["if",25,126,127],["unless",92,100,107,108],["add",143]],
    [["if",25,128,129],["unless",92,100,107,108],["add",144]],
    [["if",25,130,131],["unless",92,100,107,108],["add",145]],
    [["if",25,56,132],["add",146]],
    [["if",25,58,133],["add",147]],
    [["if",25,60,134],["unless",61],["add",148]],
    [["if",25,53,135],["add",149]],
    [["if",25,136,137,139],["unless",138],["add",150,152]],
    [["if",25,140,142],["unless",141],["add",151,153]],
    [["if",25,143],["add",154]],
    [["if",0,144],["add",155]],
    [["if",0,145],["add",156]],
    [["if",0,146,147],["add",0]],
    [["if",63,148],["add",157]],
    [["if",25,149,150],["add",158]],
    [["if",5,6],["block",5]],
    [["if",0,7],["block",5,101,102]],
    [["if",6,66],["block",101,102]]]
},
"runtime":[[50,"__mf",[46,"a"],[41,"h"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d",["require","makeNumber"]],[52,"e",["require","setInWindow"]],[22,[17,[15,"a"],"path"],[46,["e","mouseflowPath",[17,[15,"a"],"path"]]]],[52,"f",["d",[17,[15,"a"],"htmlDelay"]]],[22,[18,[15,"f"],0],[46,["e","mouseflowHtmlDelay",[15,"f"]]]],[52,"g",[17,[15,"a"],"customVars"]],[22,[15,"g"],[46,[53,[52,"i",["b","_mfq"]],[47,"h",[15,"g"],[46,["i",[7,"setVariable",[15,"h"],[16,[15,"g"],[15,"h"]]]]]]]]],["c",[0,[0,"https://cdn.mouseflow.com/projects/",[17,[15,"a"],"projectId"]],".js"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],[0,"mouse",[17,[15,"a"],"projectId"]]]],[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__mf":{"access_globals":{"keys":[{"key":"mouseflowPath","read":true,"write":true,"execute":false},{"key":"mouseflowHtmlDelay","read":true,"write":true,"execute":false},{"key":"_mfq","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/cdn.mouseflow.com\/projects\/*"]}},"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__mf","__bzi"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ca,da=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ea=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:da(a)}},fa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ma=ia,na=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.sj=b.prototype},oa=this||self,sa=function(a){if(a&&a!=oa)return qa(a.document);null===ra&&(ra=qa(oa.document));return ra},va=/^[\w+/_-]+[=]{0,2}$/,ra=null,qa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&va.test(c))return c}return""},xa=function(a){return a};var ya=function(a,b){this.g=a;this.o=b};var Aa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Ba=function(){this.D={};this.o=!1;this.J={}};Ba.prototype.get=function(a){return this.D["dust."+a]};Ba.prototype.set=function(a,b){this.o||(a="dust."+a,this.J.hasOwnProperty(a)||(this.D[a]=b))};Ba.prototype.has=function(a){return this.D.hasOwnProperty("dust."+a)};
var Ca=function(a){var b=[],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c.substr(5));return b},Da=function(a,b){b="dust."+b;a.o||a.J.hasOwnProperty(b)||delete a.D[b]};var Fa=function(a){this.o=new Ba;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(Aa(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};ca=Fa.prototype;ca.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof Fa?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ca.set=function(a,b){if("length"===a){if(!Aa(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else Aa(a)?this.g[Number(a)]=b:this.o.set(a,b)};ca.get=function(a){return"length"===a?this.length():Aa(a)?this.g[Number(a)]:this.o.get(a)};ca.length=function(){return this.g.length};ca.Ub=function(){for(var a=Ca(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new Fa(a)};var Ha=function(a,b){Aa(b)?delete a.g[Number(b)]:Da(a.o,b)};ca=Fa.prototype;ca.pop=function(){return this.g.pop()};
ca.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};ca.shift=function(){return this.g.shift()};ca.splice=function(a,b,c){return new Fa(this.g.splice.apply(this.g,arguments))};ca.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};ca.has=function(a){return Aa(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Ia=function(){function a(f,g){if(b[f]){if(b[f].Ic+g>b[f].max)throw Error("Quota exceeded");b[f].Ic+=g}}var b={},c=void 0,d=void 0,e={si:function(f){c=f},Mf:function(){c&&a(c,1)},vi:function(f){d=f},Ta:function(f){d&&a(d,f)},Mi:function(f,g){b[f]=b[f]||{Ic:0};b[f].max=g},Uh:function(f){return b[f]&&b[f].Ic||0},reset:function(){b={}},Gh:a};e.onFnConsume=e.si;e.consumeFn=e.Mf;e.onStorageConsume=e.vi;e.consumeStorage=e.Ta;e.setMax=e.Mi;e.getConsumed=e.Uh;e.reset=e.reset;e.consume=e.Gh;return e};var Ja=function(a,b){this.s=a;this.N=function(c,d,e){return c.apply(d,e)};this.D=b;this.o=new Ba;this.g=this.J=void 0};Ja.prototype.add=function(a,b){La(this,a,b,!1)};var La=function(a,b,c,d){if(!a.o.o)if(a.s.Ta(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.J["dust."+b]=!0}else a.o.set(b,c)};
Ja.prototype.set=function(a,b){this.o.o||(!this.o.has(a)&&this.D&&this.D.has(a)?this.D.set(a,b):(this.s.Ta(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Ja.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.D?this.D.get(a):void 0};Ja.prototype.has=function(a){return!!this.o.has(a)||!(!this.D||!this.D.has(a))};var Ma=function(a){var b=new Ja(a.s,a);a.J&&(b.J=a.J);b.N=a.N;b.g=a.g;return b};var Pa={},Qa=function(a,b){Pa[a]=Pa[a]||[];Pa[a][b]=!0},Ra=function(a){for(var b=[],c=Pa[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Sa=function(){},Ta=function(a){return"function"==typeof a},k=function(a){return"string"==typeof a},Ua=function(a){return"number"==typeof a&&!isNaN(a)},Va=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Qa("TAGGING",4):Qa("TAGGING",5);return b},Wa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Xa=function(a,b){if(a&&Va(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ya=function(a,b){if(!Ua(a)||!Ua(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ab=function(a,b){for(var c=new $a,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},cb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},hb=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},ib=
function(a){return Math.round(Number(a))||0},jb=function(a){return"false"==String(a).toLowerCase()?!1:!!a},kb=function(a){var b=[];if(Va(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},lb=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},mb=function(){return(new Date).getTime()},$a=function(){this.prefix="gtm.";this.values={}};$a.prototype.set=function(a,b){this.values[this.prefix+a]=b};$a.prototype.get=function(a){return this.values[this.prefix+a]};
var pb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},qb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},rb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},tb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},vb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},wb=function(a,b){var c=p;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Wa(b,d))return}return d},xb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},yb=function(a){var b=[];cb(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var zb=function(a,b){Ba.call(this);this.N=a;this.na=b};na(zb,Ba);zb.prototype.toString=function(){return this.N};zb.prototype.Ub=function(){return new Fa(Ca(this))};zb.prototype.g=function(a,b){a.s.Mf();return this.na.apply(new Ab(this,a),Array.prototype.slice.call(arguments,1))};zb.prototype.s=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var Db=function(a,b){for(var c,d=0;d<b.length&&!(c=Bb(a,b[d]),c instanceof ya);d++);return c},Bb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof zb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.J;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},Ab=function(a,b){this.o=a;this.g=b},B=function(a,b){var c=a.g;return Va(b)?Bb(c,b):b},F=function(a){return a.o.N};var Eb=function(){Ba.call(this)};na(Eb,Ba);Eb.prototype.Ub=function(){return new Fa(Ca(this))};var Fb={control:function(a,b){return new ya(a,B(this,b))},fn:function(a,b,c){var d=this.g,e=B(this,b);if(!(e instanceof Fa))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.s.Ta(a.length+f.length);return new zb(a,function(){return function(g){var h=Ma(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=B(this,l[m]),l[m]instanceof ya)return l[m];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new Fa(l));var u=Db(h,f);if(u instanceof ya)return"return"===u.g?u.o:u}}())},list:function(a){var b=this.g.s;b.Ta(arguments.length);for(var c=new Fa,d=0;d<arguments.length;d++){var e=B(this,arguments[d]);"string"===typeof e&&b.Ta(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.s,c=new Eb,d=0;d<arguments.length-1;d+=2){var e=B(this,arguments[d])+"",f=B(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ta(g);c.set(e,f)}return c},undefined:function(){}};var Gb=function(){this.s=Ia();this.g=new Ja(this.s)},Hb=function(a,b,c){var d=new zb(b,c);d.o=!0;a.g.set(b,d)};Gb.prototype.Nc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};Gb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=Bb(this.g,arguments[c]);return b};Gb.prototype.D=function(a,b){var c=Ma(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=Bb(c,arguments[e]);return d};var Ib=function(a){if(a instanceof Ib)return a;this.sa=a};Ib.prototype.toString=function(){return String(this.sa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Jb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Kb=function(a){if(null==a)return String(a);var b=Jb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Lb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ob=function(a){if(!a||"object"!=Kb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Lb(a,"constructor")&&!Lb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Lb(a,b)},G=function(a,b){var c=b||("array"==Kb(a)?[]:{}),d;for(d in a)if(Lb(a,d)){var e=a[d];"array"==Kb(e)?("array"!=Kb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Ob(e)?(Ob(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Qb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ca(h),n=0;n<m.length;n++)l[m[n]]=g(h.get(m[n]))},g=function(h){var l=Wa(d,h);if(-1<l)return e[l];if(h instanceof Fa){var m=[];d.push(h);e.push(m);for(var n=h.Ub(),q=0;q<n.length();q++)m[n.get(q)]=g(h.get(n.get(q)));return m}if(h instanceof Eb){var u={};d.push(h);e.push(u);f(h,u);return u}if(h instanceof zb){var r=function(){for(var t=Array.prototype.slice.call(arguments,0),v=0;v<t.length;v++)t[v]=Pb(t[v],b,!!c);var w=b?b.s:Ia(),y=new Ja(w);
b&&(y.g=b.g);return g(h.g.apply(h,[y].concat(t)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Pb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Wa(d,
h);if(-1<l)return e[l];if(Va(h)||hb(h)){var m=new Fa([]);d.push(h);e.push(m);for(var n in h)h.hasOwnProperty(n)&&m.set(n,g(h[n]));return m}if(Ob(h)){var q=new Eb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var u=new zb("",function(t){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Qb(B(this,v[w]),b,!!c);return g((0,this.g.N)(h,h,v))});d.push(h);e.push(u);f(h,u);return u}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Rb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Tb=function(a){if(void 0===a||Va(a)||Ob(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof Fa)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new Fa(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new Fa(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new Fa(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Rb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ha(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new Fa(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Rb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ha(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Wb=new ya("break"),Xb=new ya("continue"),Yb=function(a,b){return B(this,a)+B(this,b)},Zb=function(a,b){return B(this,a)&&B(this,b)},$b=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);if(!(c instanceof Fa))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Wa(Vb,b)){var d=Rb(c);return Pb(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof Fa){if(a.has(b)){var e=a.get(b);if(e instanceof
zb){var f=Rb(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Wa(Ub.supportedMethods,b)){var g=Rb(c);g.unshift(this.g);return Ub[b].apply(a,g)}}if(a instanceof zb||a instanceof Eb){if(a.has(b)){var h=a.get(b);if(h instanceof zb){var l=Rb(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof zb?a.N:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Rb(c))}if(a instanceof
Ib&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},ac=function(a,b){a=B(this,a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=B(this,b);c.set(a,d);return d},cc=function(a){var b=Ma(this.g),c=Db(b,Array.prototype.slice.apply(arguments));if(c instanceof ya)return c},dc=function(){return Wb},ec=function(a){for(var b=B(this,a),c=0;c<b.length;c++){var d=
B(this,b[c]);if(d instanceof ya)return d}},fc=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=B(this,arguments[c+1]);La(b,d,e,!0)}}},gc=function(){return Xb},hc=function(a,b,c){var d=new Fa;b=B(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,B(this,f))},ic=function(a,b){return B(this,a)/B(this,b)},jc=function(a,b){a=B(this,a);b=B(this,b);var c=
a instanceof Ib,d=b instanceof Ib;return c||d?c&&d?a.sa==b.sa:!1:a==b},kc=function(a){for(var b,c=0;c<arguments.length;c++)b=B(this,arguments[c]);return b};function lc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=Db(f,d);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}}}
function mc(a,b,c){if("string"===typeof b)return lc(a,function(){return b.length},function(f){return f},c);if(b instanceof Eb||b instanceof Fa||b instanceof zb){var d=b.Ub(),e=d.length();return lc(a,function(){return e},function(f){return d.get(f)},c)}}
var nc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return mc(function(e){d.set(a,e);return d},b,c)},oc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return mc(function(e){var f=Ma(d);La(f,a,e,!0);return f},b,c)},pc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return mc(function(e){var f=Ma(d);f.add(a,e);return f},b,c)},rc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return qc(function(e){d.set(a,e);return d},b,c)},sc=
function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return qc(function(e){var f=Ma(d);La(f,a,e,!0);return f},b,c)},tc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return qc(function(e){var f=Ma(d);f.add(a,e);return f},b,c)};
function qc(a,b,c){if("string"===typeof b)return lc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof Fa)return lc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var uc=function(a,b,c,d){function e(n,q){for(var u=0;u<f.length();u++){var r=f.get(u);q.add(r,n.get(r))}}var f=B(this,a);if(!(f instanceof Fa))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=B(this,d);var h=Ma(g);for(e(g,h);Bb(h,b);){var l=Db(h,d);if(l instanceof ya){if("break"===l.g)break;if("return"===l.g)return l}var m=Ma(g);e(h,m);Bb(m,c);h=m}},vc=function(a){a=B(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},yc=function(a,b){var c;a=B(this,a);b=B(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof Eb||a instanceof Fa||a instanceof zb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:Aa(b)&&(c=a[b]);else if(a instanceof Ib)return;return c},zc=function(a,b){return B(this,a)>B(this,
b)},Ac=function(a,b){return B(this,a)>=B(this,b)},Bc=function(a,b){a=B(this,a);b=B(this,b);a instanceof Ib&&(a=a.sa);b instanceof Ib&&(b=b.sa);return a===b},Cc=function(a,b){return!Bc.call(this,a,b)},Dc=function(a,b,c){var d=[];B(this,a)?d=B(this,b):c&&(d=B(this,c));var e=Db(this.g,d);if(e instanceof ya)return e},Ec=function(a,b){return B(this,a)<B(this,b)},Fc=function(a,b){return B(this,a)<=B(this,b)},Gc=function(a,b){return B(this,a)%B(this,b)},Hc=function(a,b){return B(this,a)*B(this,b)},Kc=function(a){return-B(this,
a)},Lc=function(a){return!B(this,a)},Mc=function(a,b){return!jc.call(this,a,b)},Nc=function(){return null},Oc=function(a,b){return B(this,a)||B(this,b)},Pc=function(a,b){var c=B(this,a);B(this,b);return c},Qc=function(a){return B(this,a)},Rc=function(a){return Array.prototype.slice.apply(arguments)},Sc=function(a){return new ya("return",B(this,a))},Tc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
zb||a instanceof Fa||a instanceof Eb)&&a.set(b,c);return c},Uc=function(a,b){return B(this,a)-B(this,b)},Vc=function(a,b,c){a=B(this,a);var d=B(this,b),e=B(this,c);if(!Va(d)||!Va(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===B(this,d[h]))if(f=B(this,e[h]),f instanceof ya){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=B(this,e[e.length-1]),f instanceof ya&&("return"===f.g||"continue"===
f.g)))return f},Wc=function(a,b,c){return B(this,a)?B(this,b):B(this,c)},Xc=function(a){a=B(this,a);return a instanceof zb?"function":typeof a},Yc=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Zc=function(a,b,c,d){var e=B(this,d);if(B(this,c)){var f=Db(this.g,e);if(f instanceof ya){if("break"===f.g)return;if("return"===f.g)return f}}for(;B(this,a);){var g=Db(this.g,e);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}B(this,
b)}},$c=function(a){return~Number(B(this,a))},ad=function(a,b){return Number(B(this,a))<<Number(B(this,b))},bd=function(a,b){return Number(B(this,a))>>Number(B(this,b))},cd=function(a,b){return Number(B(this,a))>>>Number(B(this,b))},dd=function(a,b){return Number(B(this,a))&Number(B(this,b))},ed=function(a,b){return Number(B(this,a))^Number(B(this,b))},fd=function(a,b){return Number(B(this,a))|Number(B(this,b))};var hd=function(){this.g=new Gb;gd(this)};hd.prototype.Nc=function(a){return kd(this.g.o(a))};
var md=function(a,b){return kd(ld.g.D(a,b))},gd=function(a){var b=function(d,e){var f=a.g,g=String(e);Fb.hasOwnProperty(d)&&Hb(f,g||d,Fb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){Hb(a.g,String(d),e)};c(0,Yb);c(1,Zb);c(2,$b);c(3,ac);c(53,cc);c(4,dc);c(5,ec);c(52,fc);c(6,gc);c(9,ec);c(50,hc);c(10,ic);c(12,jc);c(13,kc);c(47,nc);c(54,oc);c(55,pc);c(63,uc);c(64,rc);c(65,sc);c(66,tc);c(15,vc);c(16,yc);c(17,yc);c(18,zc);c(19,Ac);c(20,Bc);c(21,Cc);c(22,Dc);
c(23,Ec);c(24,Fc);c(25,Gc);c(26,Hc);c(27,Kc);c(28,Lc);c(29,Mc);c(45,Nc);c(30,Oc);c(32,Pc);c(33,Pc);c(34,Qc);c(35,Qc);c(46,Rc);c(36,Sc);c(43,Tc);c(37,Uc);c(38,Vc);c(39,Wc);c(40,Xc);c(41,Yc);c(42,Zc);c(58,$c);c(57,ad);c(60,bd);c(61,cd);c(56,dd);c(62,ed);c(59,fd)},od=function(){var a=ld,b=nd();Hb(a.g,"require",b)},pd=function(a,b){a.g.g.N=b};
function kd(a){if(a instanceof ya||a instanceof zb||a instanceof Fa||a instanceof Eb||a instanceof Ib||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var qd=function(){var a=function(b){return{toString:function(){return b}}};return{og:a("consent"),fd:a("consent_always_fire"),Ee:a("convert_case_to"),Fe:a("convert_false_to"),Ge:a("convert_null_to"),He:a("convert_true_to"),Ie:a("convert_undefined_to"),Yi:a("debug_mode_metadata"),Sa:a("function"),bh:a("instance_name"),eh:a("live_only"),fh:a("malware_disabled"),gh:a("metadata"),aj:a("original_activity_id"),bj:a("original_vendor_template_id"),ih:a("once_per_event"),zf:a("once_per_load"),Df:a("setup_tags"),
Ef:a("tag_id"),Ff:a("teardown_tags")}}();
var rd=[],sd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},td=function(a){return sd[a]},ud=/[\x00\x22\x26\x27\x3c\x3e]/g;var yd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,zd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Ad=function(a){return zd[a]};rd[7]=function(a){return String(a).replace(yd,Ad)};
rd[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(yd,Ad)+"'"}};var Id=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Jd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Md=function(a){return Jd[a]};rd[16]=function(a){return a};var Od;
var Pd=[],Qd=[],Rd=[],Sd=[],Td=[],Ud={},Vd,Wd,Xd,Yd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Zd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Ud[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.Jf&&b.Jf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===qd.fd.toString()&&a[f]){}return void 0!==d?d(e):Od(c,e,b)},ae=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=$d(a[e],b,c));return d},$d=function(a,b,c){if(Va(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push($d(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Pd[f];if(!g||b.Zd(g))return;c[f]=!0;try{var h=ae(g,b,c);h.vtp_gtmEventId=b.id;d=Zd(h,b);Xd&&(d=Xd.Ih(d,h))}catch(y){b.Zf&&
b.Zf(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[$d(a[l],b,c)]=$d(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=$d(a[n],b,c);Wd&&(m=m||q===Wd.Ac);d.push(q)}return Wd&&m?Wd.Lh(d):d.join("");case "escape":d=$d(a[1],b,c);if(Wd&&Va(a[1])&&"macro"===a[1][0]&&Wd.ei(a))return Wd.Ai(d);d=String(d);for(var u=2;u<a.length;u++)rd[a[u]]&&(d=rd[a[u]](d));return d;case "tag":var r=a[1];if(!Sd[r])throw Error("Unable to resolve tag reference "+
r+".");return d={Qf:a[2],index:r};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=be(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},be=function(a,b,c){try{return Vd(ae(a,b,c))}catch(d){JSON.stringify(a)}return 2};var ce=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};na(ce,Error);function de(a,b){if(Va(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)de(a[c],b[c])}};var ee=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};na(ee,Error);var ge=function(){return function(a,b){a instanceof ee||(a=new ee(a,fe));b&&a.g.push(b);throw a;}};function fe(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ua(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var he=null,ke=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];he=ie(a);for(var e=0;e<Qd.length;e++){var f=Qd[e],g=je(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<Sd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},je=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=he(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=he(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},ie=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=be(Rd[c],a));return b[c]}};var le={Ih:function(a,b){b[qd.Ee]&&"string"===typeof a&&(a=1==b[qd.Ee]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(qd.Ge)&&null===a&&(a=b[qd.Ge]);b.hasOwnProperty(qd.Ie)&&void 0===a&&(a=b[qd.Ie]);b.hasOwnProperty(qd.He)&&!0===a&&(a=b[qd.He]);b.hasOwnProperty(qd.Fe)&&!1===a&&(a=b[qd.Fe]);return a}};var me=function(){this.g={}};function ne(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new ce(c,d,g);}}function oe(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));ne(e,b,d,g);ne(f,b,d,g)}}}};var se=function(a){var b=pe.F,c=this;this.o=new me;this.g={};var d={},e=oe(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});cb(a,function(f,g){var h={};cb(g,function(l,m){var n=qe(l,m);h[l]=n.assert;d[l]||(d[l]=n.O)});c.g[f]=function(l,m){var n=h[l];if(!n)throw re(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},ue=function(a){return te.g[a]||
function(){}};function qe(a,b){var c=Yd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=re;try{return Zd(c)}catch(d){return{assert:function(e){throw new ce(e,{},"Permission "+e+" is unknown.");},O:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function re(a,b,c){return new ce(a,b,c)};var ve=!1;var we={};we.Ti=jb('');we.Oh=jb('');var xe=ve,ye=we.Oh,ze=we.Ti;
var Qe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Re=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Qe(b,"/*")&&(b=b.slice(0,-2));Qe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Se=/^[a-z0-9-]+$/i,Te=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Ve=function(a,b){var c;if(!(c=!Ue(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Se.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Te.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),u;var r=l.hostname,t=q;if(0!==t.indexOf("*."))u=r.toLowerCase()===t.toLowerCase();else{t=t.slice(2);var v=r.toLowerCase().indexOf(t.toLowerCase());u=-1===v?!1:r.length===t.length?
!0:r.length!==t.length+v?!1:"."===r[v-1]}if(u){var w=n.slice(n.indexOf("/"));h=Re(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Ue=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var We,Xe=function(){};(function(){function a(h,l){h=h||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.xh&&(l["fix_"+m]=!0),l.Sf=l.Sf||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var r=h.indexOf("--\x3e");if(0<=r)return{content:h.substr(4,r),length:r+3}},endTag:function(){var r=h.match(d);if(r)return{tagName:r[1],length:r[0].length}},atomicTag:function(){var r=q.startTag();
if(r){var t=h.slice(r.length);if(t.match(new RegExp("</\\s*"+r.tagName+"\\s*>","i"))){var v=t.match(new RegExp("([\\s\\S]*?)</\\s*"+r.tagName+"\\s*>","i"));if(v)return{tagName:r.tagName,ca:r.ca,content:v[1],length:v[0].length+r.length}}}},startTag:function(){var r=h.match(c);if(r){var t={};r[2].replace(e,function(v,w,y,x,A){var z=y||x||A||f.test(w)&&w||null,C=document.createElement("div");C.innerHTML=z;t[w]=C.textContent||C.innerText||z});return{tagName:r[1],ca:t,dd:!!r[3],length:r[0].length}}},chars:function(){var r=
h.indexOf("<");return{length:0<=r?r:h.length}}},u=function(){for(var r in n)if(n[r].test(h)){var t=q[r]();return t?(t.type=t.type||r,t.text=h.substr(0,t.length),h=h.slice(t.length),t):null}};l.Sf&&function(){var r=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,t=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Yf=function(){return this[this.length-1]};v.ae=function(C){var D=this.Yf();return D&&D.tagName&&D.tagName.toUpperCase()===C.toUpperCase()};v.Hh=
function(C){for(var D=0,E;E=this[D];D++)if(E.tagName===C)return!0;return!1};var w=function(C){C&&"startTag"===C.type&&(C.dd=r.test(C.tagName)||C.dd);return C},y=u,x=function(){h="</"+v.pop().tagName+">"+h},A={startTag:function(C){var D=C.tagName;"TR"===D.toUpperCase()&&v.ae("TABLE")?(h="<TBODY>"+h,z()):l.lj&&t.test(D)&&v.Hh(D)?v.ae(D)?x():(h="</"+C.tagName+">"+h,z()):C.dd||v.push(C)},endTag:function(C){v.Yf()?l.Qh&&!v.ae(C.tagName)?x():v.pop():l.Qh&&(y(),z())}},z=function(){var C=h,D=w(y());h=C;if(D&&
A[D.type])A[D.type](D)};u=function(){z();return w(y())}}();return{append:function(r){h+=r},Di:u,pj:function(r){for(var t;(t=u())&&(!r[t.type]||!1!==r[t.type](t)););},clear:function(){var r=h;h="";return r},qj:function(){return h},stack:[]}}var b=function(){var h={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";h.tj="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";h.rj=2===l.childNodes.length;return h}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;for(var g in b);We=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,u,r){var t,v=q&&q.length||0;for(t=0;t<v;t++)u.call(r,q[t],t)}function d(q,u,r){for(var t in q)q.hasOwnProperty(t)&&u.call(r,t,q[t])}function e(q,u){d(u,
function(r,t){q[r]=t});return q}function f(q,u){q=q||{};d(u,function(r,t){b(q[r])||(q[r]=t)});return q}function g(q){try{return m.call(q)}catch(r){var u=[];c(q,function(t){u.push(t)});return u}}var h={ph:a,qh:a,rh:a,sh:a,yh:a,zh:function(q){return q},done:a,error:function(q){throw q;},Gi:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function q(r,t,v){var w="data-ps-"+t;if(2===arguments.length){var y=r.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?r.setAttribute(w,v):
r.removeAttribute(w)}function u(r,t){var v=r.ownerDocument;e(this,{root:r,options:t,jc:v.defaultView||v.parentWindow,mb:v,Uc:We("",{xh:!0}),Hd:[r],pe:"",qe:v.createElement(r.nodeName),cc:[],Wa:[]});q(this.qe,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.Wa,arguments);for(var r;!this.Lc&&this.Wa.length;)r=this.Wa.shift(),"function"===typeof r?this.Eh(r):this.Ae(r)};u.prototype.Eh=function(r){var t={type:"function",value:r.name||r.toString()};this.he(t);r.call(this.jc,this.mb);this.$f(t)};
u.prototype.Ae=function(r){this.Uc.append(r);for(var t,v=[],w,y;(t=this.Uc.Di())&&!(w=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("script"):!1)&&!(y=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("style"):!1);)v.push(t);this.Wi(v);w&&this.Zh(t);y&&this.$h(t)};u.prototype.Wi=function(r){var t=this.Bh(r);t.Hf&&(t.Xd=this.pe+t.Hf,this.pe+=t.Bi,this.qe.innerHTML=t.Xd,this.Ui())};u.prototype.Bh=function(r){var t=this.Hd.length,v=[],w=[],y=[];c(r,function(x){v.push(x.text);if(x.ca){if(!/^noscript$/i.test(x.tagName)){var A=
t++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.ca.id&&"ps-style"!==x.ca.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.dd?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{uj:r,raw:v.join(""),Hf:w.join(""),Bi:y.join("")}};u.prototype.Ui=function(){for(var r,t=[this.qe];b(r=t.shift());){var v=1===r.nodeType;if(!v||!q(r,"proxyof")){v&&(this.Hd[q(r,"id")]=r,q(r,"id",null));var w=r.parentNode&&q(r.parentNode,"proxyof");
w&&this.Hd[w].appendChild(r)}t.unshift.apply(t,g(r.childNodes))}};u.prototype.Zh=function(r){var t=this.Uc.clear();t&&this.Wa.unshift(t);r.src=r.ca.src||r.ca.dj;r.src&&this.cc.length?this.Lc=r:this.he(r);var v=this;this.Vi(r,function(){v.$f(r)})};u.prototype.$h=function(r){var t=this.Uc.clear();t&&this.Wa.unshift(t);r.type=r.ca.type||r.ca.TYPE||"text/css";this.Xi(r);t&&this.write()};u.prototype.Xi=function(r){var t=this.Dh(r);this.ci(t);r.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=r.content:
t.appendChild(this.mb.createTextNode(r.content)))};u.prototype.Dh=function(r){var t=this.mb.createElement(r.tagName);t.setAttribute("type",r.type);d(r.ca,function(v,w){t.setAttribute(v,w)});return t};u.prototype.ci=function(r){this.Ae('<span id="ps-style"/>');var t=this.mb.getElementById("ps-style");t.parentNode.replaceChild(r,t)};u.prototype.he=function(r){r.wi=this.Wa;this.Wa=[];this.cc.unshift(r)};u.prototype.$f=function(r){r!==this.cc[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.cc.shift(),this.write.apply(this,r.wi),!this.cc.length&&this.Lc&&(this.he(this.Lc),this.Lc=null))};u.prototype.Vi=function(r,t){var v=this.Ch(r),w=this.Oi(v),y=this.options.ph;r.src&&(v.src=r.src,this.Ji(v,w?y:function(){t();y()}));try{this.bi(v),r.src&&!w||t()}catch(x){this.options.error(x),t()}};u.prototype.Ch=function(r){var t=this.mb.createElement(r.tagName);d(r.ca,function(v,w){t.setAttribute(v,w)});r.content&&(t.text=r.content);return t};u.prototype.bi=function(r){this.Ae('<span id="ps-script"/>');
var t=this.mb.getElementById("ps-script");t.parentNode.replaceChild(r,t)};u.prototype.Ji=function(r,t){function v(){r=r.onload=r.onreadystatechange=r.onerror=null}var w=this.options.error;e(r,{onload:function(){v();t()},onreadystatechange:function(){/^(loaded|complete)$/.test(r.readyState)&&(v(),t())},onerror:function(){var y={message:"remote script failed "+r.src};v();w(y);t()}})};u.prototype.Oi=function(r){return!/^script$/i.test(r.nodeName)||!!(this.options.Gi&&r.src&&r.hasAttribute("async"))};
return u}();l.postscribe=function(){function q(){var w=t.shift(),y;w&&(y=w[w.length-1],y.qh(),w.stream=u.apply(null,w),y.rh())}function u(w,y,x){function A(E){E=x.zh(E);v.write(E);x.sh(E)}v=new n(w,x);v.id=r++;v.name=x.name||v.id;var z=w.ownerDocument,C={close:z.close,open:z.open,write:z.write,writeln:z.writeln};e(z,{close:a,open:a,write:function(){return A(g(arguments).join(""))},writeln:function(){return A(g(arguments).join("")+"\n")}});var D=v.jc.onerror||a;v.jc.onerror=function(E,I,P){x.error({msg:E+
" - "+I+":"+P});D.apply(v.jc,arguments)};v.write(y,function(){e(z,C);v.jc.onerror=D;x.done();v=null;q()});return v}var r=0,t=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,h);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.nj?w[0]:w;var A=[w,y,x];w.zi={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.yh(A);t.push(A);v||q();return w.zi},{streams:{},oj:t,fj:n})}();Xe=l.postscribe}})();var Ye=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Ze={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=Ye.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof l;l instanceof zb?n="Fn":l instanceof Fa?n="List":l instanceof Eb?n="DustMap":
l instanceof Ib&&(n="OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+n+", which does not match required type "+(Ze[h]||h)+".");}}};function $e(a){return""+a}
function af(a,b){var c=[];return c};var bf=function(a,b){var c=new zb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=B(this,d[e]);return b.apply(this,d)});c.o=!0;return c},cf=function(a,b){var c=new Eb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ta(e)?c.set(d,bf(a+"_"+d,e)):(Ua(e)||k(e)||"boolean"==typeof e)&&c.set(d,e)}c.o=!0;return c};var df=function(a,b){H(F(this),["apiName:!string","message:?string"],arguments);var c={},d=new Eb;return d=cf("AssertApiSubject",c)};var ef=function(a,b){H(F(this),["actual:?*","message:?string"],arguments);var c={},d=new Eb;
return d=cf("AssertThatSubject",c)};function ff(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Qb(arguments[d],c));return Pb(a.apply(null,b))}}var hf=function(){for(var a=Math,b=gf,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=ff(a[e].bind(a)))}return c};var jf=function(a){var b;return b};var kf=function(a){var b;return b};var lf=function(a){H(F(this),["uri:!string"],arguments);return encodeURI(a)};var mf=function(a){H(F(this),["uri:!string"],arguments);return encodeURIComponent(a)};var nf=function(a){H(F(this),["message:?string"],arguments);};var of=function(a,b){H(F(this),["min:!number","max:!number"],arguments);return Ya(a,b)};var pf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.wh.apply(null,Array.prototype.slice.call(arguments,1))};var qf=function(){pf(this,"read_container_data");var a=new Eb;a.set("containerId",'GTM-W7MBMN');a.set("version",'544');a.set("environmentName",'');a.set("debugMode",xe);a.set("previewMode",ze);a.set("environmentMode",ye);a.o=!0;return a};var rf=function(){return(new Date).getTime()};var sf=function(a){if(null===a)return"null";if(a instanceof Fa)return"array";if(a instanceof zb)return"function";if(a instanceof Ib){a=a.sa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var tf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(xe||ze)&&a.call(this,e.message)}}}return{parse:b(function(c){return Pb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Qb(c))})}};var uf=function(a){return ib(Qb(a,this.g))};var vf=function(a){return Number(Qb(a,this.g))};var wf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var xf=function(a,b,c){var d=null,e=!1;return e?d:null};var gf="floor ceil round max min abs pow sqrt".split(" ");var yf=function(){var a={};return{Vh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Ni:function(b,c){a[b]=c},reset:function(){a={}}}},zf=function(a,b){H(F(this),["apiName:!string","mock:?*"],arguments);};var Af=function(){this.g={};this.o={};};Af.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
Af.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ta(b)?bf(a,b):cf(a,b)};
var Bf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Ta(c)?bf(b,c):cf(b,c)};function Cf(){var a={};return a};var J={Hb:"_ee",Gd:"_syn",ej:"_uei",Ad:"_eu",cj:"_pci",od:"event_callback",uc:"event_timeout",aa:"gtag.config",Ca:"gtag.get",oa:"purchase",cb:"refund",Pa:"begin_checkout",$a:"add_to_cart",ab:"remove_from_cart",xg:"view_cart",Me:"add_to_wishlist",Ba:"view_item",Le:"view_promotion",Ke:"select_promotion",jd:"select_item",oc:"view_item_list",Je:"add_payment_info",wg:"add_shipping_info",Fa:"value_key",Ea:"value_callback",ka:"allow_ad_personalization_signals",wd:"restricted_data_processing",xb:"allow_google_signals",
la:"cookie_expires",Ab:"cookie_update",Eb:"session_duration",ra:"user_properties",Ha:"transport_url",P:"ads_data_redaction",lf:"user_data",vc:"first_party_collection",C:"ad_storage",K:"analytics_storage",gd:"region",De:"wait_for_update"};J.qf=[J.oa,J.cb,J.Pa,J.$a,J.ab,J.xg,J.Me,J.Ba,J.Le,J.Ke,J.oc,J.jd,J.Je,J.wg];J.pf=[J.ka,J.xb,J.Ab];J.rf=[J.la,J.uc,J.Eb];var K=function(a){Qa("GTM",a)};var Df=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ef=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Ff,Gf=function(){if(void 0===Ff){var a=null,b=oa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:xa,createScript:xa,createScriptURL:xa})}catch(c){oa.console&&oa.console.error(c.message)}Ff=a}else Ff=a}return Ff};var If=function(a,b){this.g=b===Hf?a:""};If.prototype.toString=function(){return this.g+""};var Hf={};var Jf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Kf;a:{var Lf=oa.navigator;if(Lf){var Mf=Lf.userAgent;if(Mf){Kf=Mf;break a}}Kf=""}var Nf=function(a){return-1!=Kf.indexOf(a)};var Pf=function(a,b,c){this.g=c===Of?a:""};Pf.prototype.toString=function(){return this.g.toString()};var Qf=function(a){return a instanceof Pf&&a.constructor===Pf?a.g:"type_error:SafeHtml"},Of={},Rf=new Pf(oa.trustedTypes&&oa.trustedTypes.emptyHTML||"",0,Of);var Sf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Qf(Rf);return!c.parentElement}),Tf=function(a,b){if(Sf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Qf(b)};var Uf=function(a){var b=Gf(),c=b?b.createHTML(a):a;return new Pf(c,null,Of)};var p=window,M=document,Vf=navigator,Wf=M.currentScript&&M.currentScript.src,Xf=function(a,b){var c=p[a];p[a]=void 0===c?b:c;return p[a]},Yf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Zf=function(a,b,c){var d=M.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Gf(),g=f?f.createScriptURL(a):a;e=new If(g,Hf);d.src=e instanceof If&&e.constructor===If?e.g:"type_error:TrustedResourceUrl";
var h=sa(d.ownerDocument&&d.ownerDocument.defaultView);h&&d.setAttribute("nonce",h);Yf(d,b);c&&(d.onerror=c);var l=sa();l&&d.setAttribute("nonce",l);var m=M.getElementsByTagName("script")[0]||M.body||M.head;m.parentNode.insertBefore(d,m);return d},$f=function(){if(Wf){var a=Wf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ag=function(a,b){var c=M.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";
var d=M.body&&M.body.lastChild||M.body||M.head;d.parentNode.insertBefore(c,d);Yf(c,b);void 0!==a&&(c.src=a);return c},bg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},cg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},dg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){p.setTimeout(a,
0)},eg=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},fg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},gg=function(a){var b=M.createElement("div"),c=Uf("A<div>"+a+"</div>");Tf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},hg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=
a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},ig=function(a){Vf.sendBeacon&&Vf.sendBeacon(a)||bg(a)},jg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var mg={},ng=function(){return void 0==mg.gtag_cs_api?!1:mg.gtag_cs_api};var og=[];function pg(){var a=Xf("google_tag_data",{});a.ics||(a.ics={entries:{},set:qg,update:rg,addListener:sg,notifyListeners:tg,active:!1,usedDefault:!1});return a.ics}
function qg(a,b,c,d,e,f){var g=pg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,n=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||n===e||(n===d?m!==e:!n&&!m)){var q=!!(f&&0<f&&void 0===l.update),u={region:n,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=u;q&&p.setTimeout(function(){h[a]===u&&u.quiet&&(u.quiet=!1,ug(a),tg(),Qa("TAGGING",2))},f)}}}
function rg(a,b){var c=pg();c.active=!0;if(void 0!=b){var d=vg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=vg(a);f.quiet?(f.quiet=!1,ug(a)):g!==d&&ug(a)}}function sg(a,b){og.push({Lf:a,Rh:b})}function ug(a){for(var b=0;b<og.length;++b){var c=og[b];Va(c.Lf)&&-1!==c.Lf.indexOf(a)&&(c.bg=!0)}}function tg(a){for(var b=0;b<og.length;++b){var c=og[b];if(c.bg){c.bg=!1;try{c.Rh({Kf:a})}catch(d){}}}}
var vg=function(a){var b=pg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},wg=function(a){return(pg().entries[a]||{}).initial},xg=function(a){return!(pg().entries[a]||{}).quiet},yg=function(){return ng()?pg().active:!1},zg=function(){return pg().usedDefault},Ag=function(a,b){pg().addListener(a,b)},Bg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!xg(b[e]))return!0;return!1}if(c()){var d=!1;Ag(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Cg=function(a,
b){if(!1===vg(b)){var c=!1;Ag([b],function(d){!c&&vg(b)&&(a(d),c=!0)})}};function Dg(a){for(var b=[],c=0;c<Eg.length;c++){var d=a(Eg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Eg=[J.C,J.K],Fg=function(a){var b=a[J.gd];b&&K(40);var c=a[J.De];c&&K(41);for(var d=Va(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==J.gd&&f!==J.De)if(-1<Wa(Eg,f)){var g=f,h=a[f],l=d[e];pg().set(g,h,l,"US","US-KY",c)}else{}},Gg=function(a,b){for(var c in a)if(a.hasOwnProperty(c))if(-1<
Wa(Eg,c)){var d=c,e=a[c];pg().update(d,e)}else{}pg().notifyListeners(b)},Hg=function(a){var b=vg(a);return void 0!=b?b:!0},Ig=function(){return"G1"+Dg(vg)},Jg=function(a,b){Ag(a,b)},Kg=function(a,b){Bg(a,b)};var Mg=function(a){return Lg?M.querySelectorAll(a):null},Ng=function(a,b){if(!Lg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!M.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Og=!1;if(M.querySelectorAll)try{var Pg=M.querySelectorAll(":root");Pg&&1==Pg.length&&Pg[0]==M.documentElement&&(Og=!0)}catch(a){}var Lg=Og;var Qg=function(a){if(M.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!p.getComputedStyle)return!0;var c=p.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=p.getComputedStyle(d,
null))}return!1};
var Rg=function(){var a=M.body,b=M.documentElement||a&&a.parentElement,c,d;if(M.compatMode&&"BackCompat"!==M.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};K(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Sg=function(a){var b=Rg(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Tg=[],Ug=!(!p.IntersectionObserver||!p.IntersectionObserverEntry),Vg=function(a,b,c){for(var d=new p.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Tg.length;f++)if(!Tg[f])return Tg[f]=d,f;return Tg.push(d)-1},Wg=function(a,b,c){function d(h,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},n={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:h,time:mb()};N(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=Sg(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},Xg=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Ug){var e=!1;N(function(){e||
Wg(a,b,c)()});return Vg(function(f){e=!0;for(var g={sb:0};g.sb<f.length;g={sb:g.sb},g.sb++)N(function(h){return function(){return a(f[h.sb])}}(g))},b,c)}return p.setInterval(Wg(a,b,c),1E3)},Yg=function(a){Ug?0<=a&&a<Tg.length&&Tg[a]&&(Tg[a].disconnect(),Tg[a]=void 0):p.clearInterval(a)};var Zg=/:[0-9]+$/,$g=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},ch=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ah(a.protocol)||ah(p.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
p.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||p.location.hostname).replace(Zg,"").toLowerCase());return bh(a,b,c,d,e)},bh=function(a,b,c,d,e){var f,g=ah(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=dh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Zg,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Qa("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Wa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=$g(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ah=function(a){return a?a.replace(":",
"").toLowerCase():""},dh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},eh=function(a){var b=M.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Qa("TAGGING",1),c="/"+c);var d=b.hostname.replace(Zg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},fh=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=eh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var gh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),hh=new RegExp(/support|noreply/i),ih=["SCRIPT","IMG","SVG","PATH","BR"],jh=["BR"];function kh(a){var b;if(a===M.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=kh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var nh=function(){var a=!0;var b=a,c;var d=[],e=M.body;if(e){for(var f=e.querySelectorAll("*"),g=0;g<f.length&&1E4>g;g++){var h=f[g];if(!(0<=ih.indexOf(h.tagName.toUpperCase()))){for(var l=!1,m=0;m<h.childElementCount&&1E4>m;m++)if(!(0<=jh.indexOf(h.children[m].tagName.toUpperCase()))){l=!0;break}l||d.push(h)}}c={elements:d,status:1E4<f.length?"2":"1"}}else c=
{elements:d,status:"4"};for(var n=c,q=n.elements,u=[],r=0;r<q.length;r++){var t=q[r],v=t.textContent;t.value&&(v=t.value);if(v){var w=v.match(gh);if(w){var y=w[0],x;if(p.location){var A=bh(p.location,"host",!0);x=0<=y.toLowerCase().indexOf(A)}else x=!1;x||u.push({element:t,ed:y})}}}var z;for(var C=[],D=10<u.length?"3":n.status,E=0;E<u.length&&
10>E;E++){var I=u[E].element,P=u[E].ed,Q=!1;C.push({ed:P,querySelector:kh(I),tagName:I.tagName,isVisible:!Qg(I),type:1,Sc:!!Q})}return{elements:C,status:D}};var pe={},O=null,Bh=Math.random();pe.F="GTM-W7MBMN";pe.Ec="2h0";pe.$i="";pe.pg="ChEIgJvtgQYQ8rnKkIa586D+ARIjAPwa+7ZnCI7S+9tHXQB1bl7cKI70DGNpBB4reDqSYUzSwc4aAsX9";var Ch={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Dh={__paused:!0,__tg:!0},Eh;for(Eh in Ch)Ch.hasOwnProperty(Eh)&&(Dh[Eh]=!0);var Fh="www.googletagmanager.com/gtm.js";
var Gh=Fh,Hh=jb(""),Ih=null,Jh=null,Kh="//www.googletagmanager.com/a?id="+pe.F+"&cv=544",Lh={},Mh={},Nh=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Oh={},Ph=new $a,Qh={},Rh={},Uh={name:"dataLayer",set:function(a,b){G(xb(a,b),Qh);Sh()},get:function(a){return Th(a,2)},reset:function(){Ph=new $a;Qh={};Sh()}},Th=function(a,b){return 2!=b?Ph.get(a):Vh(a)},Vh=function(a,b){var c=a.split(".");b=b||[];for(var d=Qh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Wa(b,d))return}return d},Wh=function(a,b){Rh.hasOwnProperty(a)||(Ph.set(a,b),G(xb(a,b),Qh),Sh())},Sh=function(a){cb(Rh,function(b,c){Ph.set(b,c);G(xb(b,
void 0),Qh);G(xb(b,c),Qh);a&&delete Rh[b]})},Xh=function(a,b,c){Oh[a]=Oh[a]||{};var d=1!==c?Vh(b):Ph.get(b);"array"===Kb(d)||"object"===Kb(d)?Oh[a][b]=G(d):Oh[a][b]=d},Yh=function(a,b){if(Oh[a])return Oh[a][b]},Zh=function(a,b){Oh[a]&&delete Oh[a][b]};var bi={},ci=function(a,b){if(p._gtmexpgrp&&p._gtmexpgrp.hasOwnProperty(a))return p._gtmexpgrp[a];void 0===bi[a]&&(bi[a]=Math.floor(Math.random()*b));return bi[a]};var di=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function ei(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var gi=function(a,b,c,d){return fi(d)?ei(a,String(b||document.cookie),c):[]},ji=function(a,b,c,d,e){if(fi(e)){var f=hi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ii(f,function(g){return g.Mc},b);if(1===f.length)return f[0].id;f=ii(f,function(g){return g.$b},c);return f[0]?f[0].id:void 0}}};function ki(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=gi(b,f,!1,d).indexOf(c)}
var oi=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!fi(c.za))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=li(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.oi);g=e(g,"samesite",
c.Hi);c.Ki&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=mi(),q=void 0,u=!1,r=0;r<n.length;++r){var t="none"!==n[r]?n[r]:void 0,v=e(g,"domain",t);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}u=!0;if(!ni(t,c.path)&&ki(v,a,b,c.za))return 0}if(q&&!u)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return ni(m,c.path)?1:ki(g,a,b,c.za)?0:1},pi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return oi(a,b,c)};
function ii(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function hi(a,b,c){for(var d=[],e=gi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Mc:1*l[0]||1,$b:1*l[1]||1}))}}return d}
var li=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},qi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ri=/(^|\.)doubleclick\.net$/i,ni=function(a,b){return ri.test(document.location.hostname)||"/"===b&&qi.test(a)},mi=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ri.test(e)||qi.test(e)||a.push("none");
return a},fi=function(a){if(!ng()||!a||!yg())return!0;if(!xg(a))return!1;var b=vg(a);return null==b?!0:!!b};var si=function(){for(var a=Vf.userAgent+(M.cookie||"")+(M.referrer||""),b=a.length,c=p.history.length;0<c;)a+=c--^b++;return[Math.round(2147483647*Math.random())^di(a)&2147483647,Math.round(mb()/1E3)].join(".")},vi=function(a,b,c,d,e){var f=ti(b);return ji(a,f,ui(c),d,e)},wi=function(a,b,c,d){var e=""+ti(c),f=ui(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ti=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},ui=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&
(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function xi(a,b,c){var d,e=a.Zb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||mb())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var yi=["1"],zi={},Ci=function(a){var b=Ai(a.prefix),c=zi[b];c&&Bi(b,c,a)},Ei=function(a){var b=Ai(a.prefix);if(!zi[b]&&!Di(b,a.path,a.domain)){var c=si();if(0===Bi(b,c,a)){var d=Xf("google_tag_data",{});d._gcl_au?Qa("GTM",57):d._gcl_au=c}Di(b,a.path,a.domain)}};function Bi(a,b,c){var d=wi(b,"1",c.domain,c.path),e=xi(c);e.za="ad_storage";return pi(a,d,e)}function Di(a,b,c){var d=vi(a,b,c,yi,"ad_storage");d&&(zi[a]=d);return d}function Ai(a){return(a||"_gcl")+"_au"};function Fi(){for(var a=Gi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Hi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Gi,Ii;
function Ji(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Ii[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Gi=Gi||Hi();Ii=Ii||Fi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Ki;var Oi=function(){var a=Li,b=Mi,c=Ni(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){cg(M,"mousedown",d);cg(M,"keyup",d);cg(M,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Pi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ni().decorators.push(f)},Qi=function(a,b,c){for(var d=Ni().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==M.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||n&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var u=g.placement;void 0==u&&(u=g.fragment?2:1);u===b&&rb(e,g.callback())}}return e},Ni=function(){var a=Xf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ri=/(.*?)\*(.*?)\*(.*)/,Si=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ti=/^(?:www\.|m\.|amp\.)+/,Ui=/([^?#]+)(\?[^#]*)?(#.*)?/;function Zi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var aj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Gi=Gi||Hi();Ii=Ii||Fi();for(var l=[],m=0;m<h.length;m+=3){var n=m+1<h.length,q=m+2<h.length,u=h.charCodeAt(m),r=n?h.charCodeAt(m+1):0,t=q?h.charCodeAt(m+2):0,v=u>>2,w=(u&3)<<4|r>>4,y=(r&15)<<2|t>>6,x=t&63;q||(x=64,n||(y=64));l.push(Gi[v],Gi[w],Gi[y],Gi[x])}g=l.join("");f.call(e,g)}}var A=b.join("*");return["1",$i(A),
A].join("*")},$i=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ki)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Ki=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ki[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},cj=function(){return function(a){var b=eh(p.location.href),
c=b.search.replace("?",""),d=$g(c,"_gl",!1,!0)||"";a.query=bj(d)||{};var e=ch(b,"fragment").match(Zi("_gl"));a.fragment=bj(e&&e[3]||"")||{}}},dj=function(a){var b=cj(),c=Ni();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(rb(d,e.query),a&&rb(d,e.fragment));return d},bj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Ri.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],n=
0;n<b;++n)if(m===$i(h,n)){l=!0;break a}l=!1}if(l){for(var q={},u=h?h.split("*"):[],r=0;r<u.length;r+=2)q[u[r]]=Ji(u[r+1]);return q}}}}catch(t){}};function ej(a,b,c,d){function e(n){var q=n,u=Zi(a).exec(q),r=q;if(u){var t=u[2],v=u[4];r=u[1];v&&(r=r+t+v)}n=r;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Ui.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function fj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Qi(b,1,c),e=Qi(b,2,c),f=Qi(b,3,c);if(tb(d)){var g=aj(d);c?gj("_gl",g,a):hj("_gl",g,a,!1)}if(!c&&tb(e)){var h=aj(e);hj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){hj(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){gj(m,n,q);break a}}"string"==typeof q&&ej(m,n,q,void 0)}}
function hj(a,b,c,d){if(c.href){var e=ej(a,b,c.href,void 0===d?!1:d);Jf.test(e)&&(c.href=e)}}
function gj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=M.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=ej(a,b,c.action);Jf.test(m)&&(c.action=m)}}}
var Li=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||fj(e,e.hostname)}}catch(g){}},Mi=function(a){try{if(a.action){var b=ch(eh(a.action),"host");fj(a,b)}}catch(c){}},ij=function(a,b,c,d){Oi();Pi(a,b,"fragment"===c?2:1,!!d,!1)},jj=function(a,b){Oi();Pi(a,[bh(p.location,"host",!0)],b,!0,!0)},kj=function(){var a=M.location.hostname,b=Si.exec(M.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Ti,""),l=e.replace(Ti,""),m;if(!(m=h===l)){var n="."+l;m=h.substring(h.length-n.length,h.length)===n}return m},lj=function(a,b){return!1===a?!1:a||b||kj()};var mj=/^\w+$/,nj=/^[\w-]+$/,oj=/^~?[\w-]+$/,pj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},qj=function(){if(!ng()||!yg())return!0;var a=vg("ad_storage");return null==a?!0:!!a},rj=function(a,b){xg("ad_storage")?qj()?a():Cg(a,"ad_storage"):b?Qa("TAGGING",3):Bg(function(){rj(a,!0)},["ad_storage"])},tj=function(a){return sj(a).map(function(b){return b.Na})},sj=function(a){var b=[];if(!M.cookie)return b;var c=gi(a,M.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{rb:d.rb},e++){d.rb=uj(c[e]);var f=vj(c[e]);if(d.rb&&f){var g=Xa(b,function(h){return function(l){return l.Na===h.rb}}(d));g&&g.timestamp<f?g.timestamp=f:g||b.push({Na:d.rb,timestamp:f})}}return wj(b)};function xj(a){return a&&"string"==typeof a&&a.match(mj)?a:"_gcl"}
var zj=function(){var a=eh(p.location.href),b=ch(a,"query",!1,void 0,"gclid"),c=ch(a,"query",!1,void 0,"gclsrc"),d=ch(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||$g(e,"gclid",!1,void 0);c=c||$g(e,"gclsrc",!1,void 0)}return yj(b,c,d)},yj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(nj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,
"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Aj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b;case "gp":return"gp"===b}return!1},Cj=function(a){var b=zj();rj(function(){Bj(b,a)})};
function Bj(a,b,c){function d(l,m){var n=Dj(l,e);n&&pi(n,m,f)}b=b||{};var e=xj(b.prefix);c=c||mb();var f=xi(b,c,!0);f.za="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.vj?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Ej=function(a,b){var c=dj(!0);rj(function(){for(var d=xj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==pj[f]){var g=Dj(f,d),h=c[g];if(h){var l=Math.min(vj(h),mb()),m;b:{for(var n=l,q=gi(g,M.cookie,void 0,"ad_storage"),u=0;u<q.length;++u)if(vj(q[u])>n){m=!0;break b}m=!1}if(!m){var r=xi(b,l,!0);r.za="ad_storage";pi(g,h,r)}}}}Bj(yj(c.gclid,c.gclsrc),b)})},Dj=function(a,b){var c=pj[a];if(void 0!==c)return b+c},vj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function uj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Fj=function(a,b,c,d,e){if(Va(b)){var f=xj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Dj(a[l],f);if(m){var n=gi(m,M.cookie,void 0,"ad_storage");n.length&&(h[m]=n.sort()[n.length-1])}}return h};rj(function(){ij(g,b,c,d)})}},wj=function(a){return a.filter(function(b){return oj.test(b.Na)})},Gj=function(a,b){for(var c=xj(b.prefix),d={},e=0;e<a.length;e++)pj[a[e]]&&(d[a[e]]=pj[a[e]]);rj(function(){cb(d,function(f,g){var h=gi(c+g,M.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=vj(l),
n={};n[f]=[uj(l)];Bj(n,b,m)}})})};function Hj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ij=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(yg()){var c=zj();if(Hj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);jj(function(){return d},3);jj(function(){var e={};return e._up="1",e},1)}}},Jj=function(){var a;if(qj()){for(var b=[],c=M.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({xe:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].xe]||(g[b[h].xe]=[]),g[b[h].xe].push({timestamp:l[1],Na:l[2]}))}a=g}else a={};return a};var Kj=/^\d+\.fls\.doubleclick\.net$/,Lj=!1;function Mj(a,b){xg(J.C)?Hg(J.C)?a():Cg(a,J.C):b?K(42):Kg(function(){Mj(a,!0)},[J.C])}function Nj(a){var b=eh(p.location.href),c=ch(b,"host",!1);if(c&&c.match(Kj)){var d=ch(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Oj(a,b,c){if("aw"==a||"dc"==a){var d=Nj("gcl"+a);if(d)return d.split(".")}var e=xj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Hg(J.C)&&c,g;g=zj()[a]||[];if(0<g.length)return f?["0"]:g}var h=Dj(a,e);return h?tj(h):[]}
var Pj=function(a){var b=Nj("gac");if(b)return!Hg(J.C)&&a?"0":decodeURIComponent(b);var c=Jj(),d=[];cb(c,function(e,f){f=wj(f);for(var g=[],h=0;h<f.length;h++)g.push(f[h].Na);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Rj=function(a,b){if(Lj)Qj(a,b,"dc");else{var c=zj().dc||[];Mj(function(){Ei(b);var d=zi[Ai(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+
d;ig(l);e=f[g]=!0}}null==a&&(a=e);a&&d&&Ci(b)})}},Qj=function(a,b,c){var d=zj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!Aj(h,c)||e.push({Na:f,Uf:h});!g||c&&"dc"!==c||e.push({Na:g,Uf:"ds"});Mj(function(){Ei(b);var l=zi[Ai(b.prefix)],m=!1;if(l&&0<e.length)for(var n=O.joined_auid=O.joined_auid||{},q=0;q<e.length;q++){var u=e[q],r=u.Na,t=u.Uf,v=(b.prefix||"_gcl")+"."+t+"."+r;if(!n[v]){var w="https://adservice.google.com/pagead/regclk";w=w+"?gclid="+r+"&auid="+l+"&gclsrc="+t;ig(w);
m=n[v]=!0}}null==a&&(a=m);a&&l&&Ci(b)})};var Sj=/[A-Z]+/,Tj=/\s/,Uj=function(a){if(k(a)&&(a=lb(a),!Tj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Sj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},Wj=function(a){for(var b={},c=0;c<a.length;++c){var d=Uj(a[c]);d&&(b[d.id]=d)}Vj(b);var e=[];cb(b,function(f,g){e.push(g)});return e};
function Vj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Xj=function(){var a=!1;return a};var Zj=function(a,b,c,d){return(2===Yj()||d||"http:"!=p.location.protocol?a:b)+c},Yj=function(){var a=$f(),b;if(1===a)a:{var c=Gh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=M.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var nk=function(a){return Hg(J.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=fh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},ok=function(){var a;if(!(a=Hh)){var b;if(!0===p._gtmdgs)b=!0;else{var c=Vf&&Vf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=ib("1");return ci(1,100)<d?ci(2,2):-1},pk=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var qk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),rk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},sk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},tk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var vk=function(a){var b=Th("gtm.allowlist")||Th("gtm.whitelist");b&&K(9);var c=b&&vb(kb(b),rk),d=Th("gtm.blocklist")||Th("gtm.blacklist");d||(d=Th("tagTypeBlacklist"))&&
K(3);d?K(8):d=[];uk()&&(d=kb(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Wa(kb(d),"google")&&K(2);var e=d&&vb(kb(d),sk),f={};return function(g){var h=g&&g[qd.Sa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Mh[h]||[],m=a(h,l);if(b){var n;if(n=m)a:{if(0>Wa(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>
Wa(c,l[q])){K(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var r=0<=Wa(e,h);if(r)u=r;else{var t=ab(e,l||[]);t&&K(10);u=t}}var v=!m||u;v||!(0<=Wa(l,"sandboxedScripts"))||c&&-1!==Wa(c,"sandboxedScripts")||(v=ab(e,tk));return f[h]=v}},uk=function(){return qk.test(p.location&&p.location.hostname)};var wk={active:!0,isAllowed:function(){return!0}},xk=function(a){var b=O.zones;return b?b.checkState(pe.F,a):wk},yk=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var zk=function(){},Ak=function(){};var Bk=!1,Ck=0,Dk=[];function Ek(a){if(!Bk){var b=M.createEventObject,c="complete"==M.readyState,d="interactive"==M.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Bk=!0;for(var e=0;e<Dk.length;e++)N(Dk[e])}Dk.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function Fk(){if(!Bk&&140>Ck){Ck++;try{M.documentElement.doScroll("left"),Ek()}catch(a){p.setTimeout(Fk,50)}}}var Gk=function(a){Bk?a():Dk.push(a)};var Ik=function(a,b){this.g=!1;this.D=[];this.J={tags:[]};this.N=!1;this.o=this.s=0;Hk(this,a,b)},Jk=function(a,b,c,d){if(Dh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Ob(d)&&(e=G(d,e));e.id=c;e.status="timeout";return a.J.tags.push(e)-1},Kk=function(a,b,c,d){var e=a.J.tags[b];e&&(e.status=c,e.executionTime=d)},Lk=function(a){if(!a.g){for(var b=a.D,c=0;c<b.length;c++)b[c]();a.g=!0;a.D.length=0}},Hk=function(a,b,c){Ta(b)&&a.Nb(b);c&&p.setTimeout(function(){return Lk(a)},Number(c))};
Ik.prototype.Nb=function(a){var b=this,c=qb(function(){return N(function(){a(pe.F,b.J)})});this.g?c():this.D.push(c)};var Mk=function(a){a.s++;return qb(function(){a.o++;a.N&&a.o>=a.s&&Lk(a)})};var Nk=function(){function a(d){return!Ua(d)||0>d?0:d}if(!O._li&&p.performance&&p.performance.timing){var b=p.performance.timing.navigationStart,c=Ua(Uh.get("gtm.start"))?Uh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Jh-b)}}};var Rk={},Sk=function(){return p.GoogleAnalyticsObject&&p[p.GoogleAnalyticsObject]},Tk=!1;
var Uk=function(a){p.GoogleAnalyticsObject||(p.GoogleAnalyticsObject=a||"ga");var b=p.GoogleAnalyticsObject;if(p[b])p.hasOwnProperty(b)||K(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);p[b]=c}Nk();return p[b]},Vk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Sk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Wk=function(a){};
var Yk=function(a){},Xk=function(){return p.GoogleAnalyticsObject||"ga"},Zk=function(a,b){return function(){var c=Sk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var dl=function(){return"&tc="+Sd.filter(function(a){return a}).length},gl=function(){2022<=el().length&&fl()},il=function(){hl||(hl=p.setTimeout(fl,500))},fl=function(){hl&&(p.clearTimeout(hl),hl=void 0);void 0===jl||kl[jl]&&!ll&&!ml||(nl[jl]||ol.fi()||0>=pl--?(K(1),nl[jl]=!0):(ol.Ei(),bg(el()),kl[jl]=!0,ql=rl=sl=ml=ll=""))},el=function(){var a=jl;if(void 0===a)return"";var b=Ra("GTM"),c=Ra("TAGGING");return[tl,kl[a]?"":"&es=1",ul[a],b?"&u="+b:"",c?"&ut="+c:"",dl(),ll,ml,sl?sl:"",rl,ql,"&z=0"].join("")},
vl=function(){return[Kh,"&v=3&t=t","&pid="+Ya(),"&rv="+pe.Ec].join("")},wl="0.005000">Math.random(),tl=vl(),xl=function(){tl=vl()},kl={},ll="",ml="",ql="",rl="",sl="",jl=void 0,ul={},nl={},hl=void 0,ol=function(a,b){var c=0,d=0;return{fi:function(){if(c<a)return!1;mb()-d>=b&&(c=0);return c>=a},Ei:function(){mb()-d>=b&&(c=0);c++;d=mb()}}}(2,1E3),pl=1E3,yl=function(a,b,c){if(wl&&!nl[a]&&b){a!==jl&&(fl(),jl=a);var d,e=String(b[qd.Sa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;ll=ll?ll+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Ud[g]?"1":"2")+d;ql=ql?ql+"."+h:"&ti="+h;il();gl()}},zl=function(a,b,c){if(wl&&!nl[a]){a!==jl&&(fl(),jl=a);var d=c+b;ml=ml?ml+"."+d:"&epr="+d;il();gl()}},Al=function(a,b,c){};
var Bl=function(){return!1},Cl=function(){var a={};return function(b,c,d){}};function Dl(a,b,c,d){var e=Sd[a],f=El(a,b,c,d);if(!f)return null;var g=$d(e[qd.Df],c,[]);if(g&&g.length){var h=g[0];f=Dl(h.index,{onSuccess:f,onFailure:1===h.Qf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function El(a,b,c,d){function e(){if(f[qd.fh])h();else{var w=ae(f,c,[]);var A=Jk(c.Ka,String(f[qd.Sa]),Number(f[qd.Ef]),w[qd.gh]),z=!1;w.vtp_gtmOnSuccess=function(){if(!z){z=!0;var E=mb()-D;yl(c.id,Sd[a],"5");Kk(c.Ka,A,"success",
E);g()}};w.vtp_gtmOnFailure=function(){if(!z){z=!0;var E=mb()-D;yl(c.id,Sd[a],"6");Kk(c.Ka,A,"failure",E);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;yl(c.id,f,"1");var C=function(){var E=mb()-D;yl(c.id,f,"7");Kk(c.Ka,A,"exception",E);z||(z=!0,h())};var D=mb();try{Zd(w,c)}catch(E){C(E)}}}var f=Sd[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Zd(f))return null;var m=$d(f[qd.Ff],c,[]);if(m&&m.length){var n=m[0],q=Dl(n.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===n.Qf?l:q}if(f[qd.zf]||f[qd.ih]){var u=f[qd.zf]?Td:
c.Pi,r=g,t=h;if(!u[a]){e=qb(e);var v=Fl(a,u,e);g=v.onSuccess;h=v.onFailure}return function(){u[a](r,t)}}return e}function Fl(a,b,c){var d=[],e=[];b[a]=Gl(d,e,c);return{onSuccess:function(){b[a]=Hl;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Il;for(var f=0;f<e.length;f++)e[f]()}}}function Gl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Hl(a){a()}function Il(a,b){b()};var Ll=function(a,b){for(var c=[],d=0;d<Sd.length;d++)if(a[d]){var e=Sd[d];var f=Mk(b.Ka);try{var g=Dl(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,n=e["function"];if(!n)throw"Error: No function name given for function call.";var q=Ud[n];l.call(h,{jg:m,cg:q?q.priorityOverride||0:0,Nc:g})}else Jl(d,b),f()}catch(t){f()}}var u=b.Ka;u.N=!0;u.o>=u.s&&Lk(u);c.sort(Kl);for(var r=0;r<c.length;r++)c[r].Nc();
return 0<c.length};function Kl(a,b){var c,d=b.cg,e=a.cg;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.jg,h=b.jg;f=g>h?1:g<h?-1:0}return f}function Jl(a,b){if(!wl)return;var c=function(d){var e=b.Zd(Sd[d])?"3":"4",f=$d(Sd[d][qd.Df],b,[]);f&&f.length&&c(f[0].index);yl(b.id,Sd[d],e);var g=$d(Sd[d][qd.Ff],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Ml=!1,Rl=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Ml)return!1;Ml=!0}var d=xk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=xk(Number.MAX_SAFE_INTEGER)}wl&&!nl[b]&&jl!==b&&(fl(),jl=b,ql=ll="",ul[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,il());var f=a.eventCallback,g=a.eventTimeout,h={id:b,name:c,Zd:vk(d.isAllowed),Pi:[],Zf:function(){K(6)},Jf:Nl(b),Ka:new Ik(f,
g)};Ol(b,h.Ka);var l=ke(h);e&&(l=Pl(l));var m=Ll(l,h);"gtm.js"!==c&&"gtm.sync"!==c||Yk(pe.F);switch(c){case "gtm.init":m&&K(20)}return Ql(l,m)};function Nl(a){return function(b){wl&&(Tb(b)||Al(a,"input",b))}}
function Ol(a,b){Xh(a,"event",1);Xh(a,"ecommerce",1);Xh(a,"gtm");Xh(a,"eventModel");}function Pl(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Ch[String(Sd[c][qd.Sa])]&&(b[c]=!0);return b}function Ql(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Sd[c]&&!Dh[String(Sd[c][qd.Sa])])return!0;return!1}function Sl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return eh(""+c+b).href}}function Tl(a,b){return Ul()?Sl(a,b):void 0}function Ul(){var a=!1;return a};var Vl=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},Wl=function(a){var b=new Vl;b.eventModel=a;return b},Xl=function(a,b){a.targetConfig=b;return a},Yl=function(a,b){a.containerConfig=b;return a},Zl=function(a,b){a.remoteConfig=b;return a},$l=function(a,b){a.globalConfig=
b;return a},am=function(a,b){a.onSuccess=b;return a},bm=function(a,b){a.setContainerTypeLoaded=b;return a},cm=function(a,b){a.getContainerTypeLoaded=b;return a},dm=function(a,b){a.onFailure=b;return a};Vl.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var em=function(a){function b(e){cb(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];cb(c,function(e){d.push(e)});return d};var fm;if(3===pe.Ec.length)fm="g";else{var gm="G";fm=gm}
var hm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:fm,OPT:"o"},im=function(a){var b=pe.F.split("-"),c=b[0].toUpperCase(),d=hm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===pe.Ec.length){var g="w";f="2"+g}else f="";return f+d+pe.Ec+e};var jm=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var km=function(){return Nf("iPhone")&&!Nf("iPod")&&!Nf("iPad")};Nf("Opera");Nf("Trident")||Nf("MSIE");Nf("Edge");!Nf("Gecko")||-1!=Kf.toLowerCase().indexOf("webkit")&&!Nf("Edge")||Nf("Trident")||Nf("MSIE")||Nf("Edge");-1!=Kf.toLowerCase().indexOf("webkit")&&!Nf("Edge")&&Nf("Mobile");Nf("Macintosh");Nf("Windows");Nf("Linux")||Nf("CrOS");var lm=oa.navigator||null;lm&&(lm.appVersion||"").indexOf("X11");Nf("Android");km();Nf("iPad");Nf("iPod");km()||Nf("iPad")||Nf("iPod");Kf.toLowerCase().indexOf("kaios");var mm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var nm=function(){};var om=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},pm=function(a,b){this.o=a;this.g=null;this.D={};this.N=0;this.J=void 0===b?500:b;this.s=null};na(pm,nm);
var rm=function(a){return"function"===typeof a.o.__tcfapi||null!=qm(a)};
pm.prototype.addEventListener=function(a){var b={},c=Ef(function(){return a(b)}),d=0;-1!==this.J&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.J));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=om(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{sm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};pm.prototype.removeEventListener=function(a){a&&a.listenerId&&sm(this,"removeEventListener",null,a.listenerId)};
var um=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=tm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&tm(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?tm(a.purpose.legitimateInterests,
b)&&tm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},tm=function(a,b){return!(!a||!a[b])},sm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(qm(a)){vm(a);var f=++a.N;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},qm=function(a){if(a.g)return a.g;a.g=mm(a.o,"__tcfapiLocator");return a.g},vm=function(a){a.s||(a.s=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},jm(a.o,a.s))};var wm=!0;var xm={1:0,3:0,4:0,7:3,9:3,10:3};function ym(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var zm=ym("",550),Am=ym("",500);function Bm(){var a=O.tcf||{};return O.tcf=a}
var Cm=function(a,b){this.s=a;this.g=b;this.o=mb();},Dm=function(a){},Em=function(a){},Km=function(){var a=Bm(),b=new pm(p,wm?3E3:-1),c=new Cm(b,a);if((Fm()?!0===p.gtag_enable_tcf_support:!1!==p.gtag_enable_tcf_support)&&!a.active&&("function"===typeof p.__tcfapi||rm(b))){a.active=!0;a.bc={};Gm();var d=null;wm?d=p.setTimeout(function(){Hm(a);Im(a);d=null},Am):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Hm(a),Im(a),Dm(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=Jm(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in xm)if(xm.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var n;var q=l;!1===q.gdprApplies?n=!0:(void 0===q.internalErrorState&&(q.internalErrorState=om(q)),n="error"===q.cmpStatus||0!==q.internalErrorState||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===
q.eventStatus)?!0:!1);g["1"]=n?!1===l.gdprApplies||"tcunavailable"===l.tcString||void 0===l.gdprApplies&&!m||"string"!==typeof l.tcString||!l.tcString.length?!0:um(l,"1",0):!1}else g[h]=um(e,h,xm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.bc=f,Im(a),Dm(c))}}),Em(c)}catch(e){d&&(clearTimeout(d),d=null),Hm(a),Im(a)}}};function Hm(a){a.type="e";a.tcString="tcunavailable";wm&&(a.bc=Jm())}function Gm(){var a={};Fg((a.ad_storage="denied",a.wait_for_update=zm,a))}
var Fm=function(){var a=!1;a=!0;return a};function Jm(){var a={},b;for(b in xm)xm.hasOwnProperty(b)&&(a[b]=!0);return a}function Im(a){var b={};Gg((b.ad_storage=a.bc["1"]?"granted":"denied",b))}
var Lm=function(){var a=Bm();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Mm=function(){var a=Bm();return a.active?a.tcString||"":""},Nm=function(){var a=Bm();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},Om=function(a){if(!xm.hasOwnProperty(String(a)))return!0;var b=Bm();return b.active&&b.bc?!!b.bc[String(a)]:!0};var Pm=!1;function Qm(a){var b=String(p.location).split(/[?#]/)[0],c=pe.pg||p._CONSENT_MODE_SALT;return a?c?String(di(b+a+c)):"0":""}
function Rm(a){function b(r){var t;O.reported_gclid||(O.reported_gclid={});t=O.reported_gclid;var v;v=Pm&&g&&(!yg()||Hg(J.C))?l+"."+(f.prefix||"_gcl")+(r?"gcu":"gcs"):l+(r?"gcu":"gcs");if(!t[v]){t[v]=!0;var w=[],y=function(D,E){E&&w.push(D+"="+encodeURIComponent(E))},x="https://www.google.com";if(yg()){var A=Hg(J.C);y("gcs",Ig());r&&y("gcu","1");O.dedupe_gclid||(O.dedupe_gclid=
""+si());y("rnd",O.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Hg(J.C)){var z=tj("_gcl_aw");y("gclaw",z.join("."))}y("url",String(p.location).split(/[?#]/)[0]);y("dclid",Sm(d,n));!A&&d&&(x="https://pagead2.googlesyndication.com")}y("gdpr_consent",Mm()),y("gdpr",Nm());"1"===dj(!1)._up&&y("gtm_up","1");y("gclid",Sm(d,
l));y("gclsrc",m);y("gtm",im(!e));Pm&&g&&Hg(J.C)&&(Ei(f||{}),y("auid",zi[Ai(f.prefix)]||""));var C=x+"/pagead/landing?"+w.join("&");ig(C)}}var c=!!a.Md,d=!!a.xa,e=a.U,f=void 0===a.Jc?{}:a.Jc,g=void 0===a.Rc?!0:a.Rc,h=zj(),l=h.gclid||"",m=h.gclsrc,n=h.dclid||"",q=!c&&(!l||m&&"aw.ds"!==m?!1:!0),u=yg();if(q||u)u?Kg(function(){b();Hg(J.C)||Cg(function(r){return b(!0,r.Kf)},
J.C)},[J.C]):b()}function Sm(a,b){var c=a&&!Hg(J.C);return b&&c?"0":b}var Cn=function(){var a=!0;Om(7)&&Om(9)&&Om(10)||(a=!1);var b=!0;b=!1;b&&!Bn()&&(a=!1);return a},Bn=function(){var a=!0;Om(3)&&Om(4)||(a=!1);return a};var $n=!1;function ao(){var a=O;return a.gcq=a.gcq||new bo}
var co=function(a,b,c){ao().register(a,b,c)},eo=function(a,b,c,d){ao().push("event",[b,a],c,d)},fo=function(a,b){ao().push("config",[a],b)},go=function(a,b,c,d){ao().push("get",[a,b],c,d)},ho=function(a){return ao().getRemoteConfig(a)},io={},jo=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},ko=function(a,b,c,d,e){this.type=a;this.s=b;this.U=c||"";this.g=d;this.o=e},bo=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},
lo=function(a,b){var c=Uj(b);return a.D[c.containerId]=a.D[c.containerId]||new jo},mo=function(a,b,c){if(b){var d=Uj(b);if(d&&1===lo(a,b).status){lo(a,b).status=2;var e={};wl&&(e.timeoutId=p.setTimeout(function(){K(38);il()},3E3));a.push("require",[e],d.containerId);io[d.containerId]=mb();if(Xj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=p.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Tl(c,g)||h;Zf(l)}}}},no=function(a,b,c,d){if(d.U){var e=lo(a,d.U),f=e.o;if(f){var g=G(c),h=G(e.targetConfig[d.U]),l=G(e.containerConfig),m=G(e.remoteConfig),n=G(a.o),q=Th("gtm.uniqueEventId"),u=Uj(d.U).prefix,r=cm(bm(dm(am($l(Zl(Yl(Xl(Wl(g),h),l),m),n),function(){
zl(q,u,"2");}),function(){zl(q,u,"3");}),function(t,v){a.s[t]=v}),function(t){return a.s[t]});try{zl(q,u,"1");f(d.U,b,d.s,r)}catch(t){zl(q,u,"4");}}}};ca=bo.prototype;
ca.register=function(a,b,c){var d=lo(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){G(d.remoteConfig,c);d.remoteConfig=c}var e=Uj(a),f=io[e.containerId];if(void 0!==f){var g=O[e.containerId].bootstrap,h=e.prefix.toUpperCase();O[e.containerId]._spx&&(h=h.toLowerCase());var l=Th("gtm.uniqueEventId"),m=h,n=mb()-g;if(wl&&!nl[l]){l!==jl&&(fl(),jl=l);var q=m+"."+Math.floor(g-f)+
"."+Math.floor(n);rl=rl?rl+","+q:"&cl="+q}delete io[e.containerId]}this.flush()}};ca.push=function(a,b,c,d){var e=Math.floor(mb()/1E3);mo(this,c,b[0][J.Ha]||this.o[J.Ha]);$n&&c&&lo(this,c).g&&(d=!1);this.g.push(new ko(a,e,c,b,d));d||this.flush()};ca.insert=function(a,b,c){var d=Math.floor(mb()/1E3);0<this.g.length?this.g.splice(1,0,new ko(a,d,c,b,!1)):this.g.push(new ko(a,d,c,b,!1))};
ca.flush=function(a){for(var b=this,c=[],d=!1;this.g.length;){var e=this.g[0];if(e.o)$n?!e.U||lo(this,e.U).g?(e.o=!1,this.g.push(e)):c.push(e):(e.o=!1,this.g.push(e));else switch(e.type){case "require":if(3!==lo(this,e.U).status&&!a){$n&&this.g.push.apply(this.g,c);return}wl&&p.clearTimeout(e.g[0].timeoutId);break;case "set":cb(e.g[0],function(u,r){G(xb(u,r),b.o)});break;case "config":var f=e.g[0],g=!!f[J.zc];delete f[J.zc];var h=lo(this,e.U),l=Uj(e.U),m=l.containerId===l.id;g||(m?h.containerConfig=
{}:h.targetConfig[e.U]={});h.g&&g||no(this,J.aa,f,e);h.g=!0;delete f[J.Hb];m?G(f,h.containerConfig):G(f,h.targetConfig[e.U]);$n&&(d=!0);break;case "event":no(this,e.g[1],e.g[0],e);break;case "get":var n={},q=(n[J.Fa]=e.g[0],n[J.Ea]=e.g[1],n);no(this,J.Ca,q,e)}this.g.shift()}$n&&(this.g.push.apply(this.g,c),d&&this.flush())};ca.getRemoteConfig=function(a){return lo(this,a).remoteConfig};function oo(a,b){var c=this;};function po(a,b,c){};function qo(a,b,c,d){};function ro(a){};var so=function(a,b,c){function d(f,g){var h=f[g];h=jg(f,g);return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||eg(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},to=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},uo=function(a,b,c){to(a)[b]=c},vo=function(a,b,c,d){var e=to(a),f=pb(e,b,d);e[b]=c(f)},wo=function(a,b,c){var d=to(a);return pb(d,b,c)};var xo={},yo=[];
var Fo=function(a,b){};

function Io(a,b){};var Jo=/^\s*$/,Ko,Lo=!1;
function Wo(a,b){}function Xo(a,b,c){};var Yo=!!p.MutationObserver,Zo=void 0,$o=function(a){if(!Zo){var b=function(){var c=M.body;if(c)if(Yo)(new MutationObserver(function(){for(var e=0;e<Zo.length;e++)N(Zo[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;cg(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Zo.length;e++)N(Zo[e])}))})}};Zo=[];M.body?b():N(b)}Zo.push(a)};
var ap=function(a,b,c){function d(){var g=a();f+=e?(mb()-e)*g.playbackRate/1E3:0;e=mb()}var e=0,f=0;return{createEvent:function(g,h,l){var m=a(),n=m.Qd,q=void 0!==l?Math.round(l):void 0!==h?Math.round(m.Qd*h):Math.round(m.Of),u=void 0!==h?Math.round(100*h):0>=n?0:Math.round(q/n*100),r=M.hidden?!1:.5<=Sg(c);d();var t=void 0;void 0!==b&&(t=[b]);var v=so(c,"gtm.video",t);v["gtm.videoProvider"]="youtube";v["gtm.videoStatus"]=g;v["gtm.videoUrl"]=m.url;v["gtm.videoTitle"]=m.title;v["gtm.videoDuration"]=
Math.round(n);v["gtm.videoCurrentTime"]=Math.round(q);v["gtm.videoElapsedTime"]=Math.round(f);v["gtm.videoPercent"]=u;v["gtm.videoVisible"]=r;return v},eg:function(){e=mb()},kb:function(){d()}}};var bp=["www.youtube.com","www.youtube-nocookie.com"],cp,dp=!1,ep=0;
function op(a,b){}function pp(a,b){
return!0};function qp(a,b,c){};function rp(a,b){var c;return c};function sp(a){};function tp(a){};var up=!1,vp=[];function wp(){if(!up){up=!0;for(var a=0;a<vp.length;a++)N(vp[a])}}var xp=function(a){up?N(a):vp.push(a)};function yp(a){H(F(this),["listener:!Fn"],arguments);pf(this,"process_dom_events","window","load");xp(Qb(a))};function zp(a){var b;return b};function Ap(a,b){var c;var e=!1;var f=Pb(c,this.g,e);void 0===f&&void 0!==c&&K(45);return f};function Bp(a){var b;var f=!1;var g=Pb(b,this.g,f);void 0===g&&void 0!==b&&K(45);return g};function Cp(a,b){var c=null,d=!1;
return Pb(c,this.g,d)};function Dp(a){var b;H(F(this),["path:!string"],arguments);pf(this,"access_globals","readwrite",a);var c=a.split("."),d=[];var e=wb(c,d),f=c[c.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];void 0===g&&(g=[],e[f]=g);b=function(){if(!Ta(g.push))throw Error("Object at "+a+" in window is not an array.");
g.push.apply(g,Array.prototype.slice.call(arguments,0))};var h=!1;return Pb(b,this.g,h)};var Ep=function(a){var b;return b};function Fp(a,b){b=void 0===b?!0:b;var c;return c};function Gp(a){var b=null;return b};function Hp(a,b){var c;return c};function Ip(a,b){var c;return c};function Jp(a){var b="";return b};function Kp(a,b){var c;return c};function Lp(a){var b="";return b};function Mp(){pf(this,"get_user_agent");return p.navigator.userAgent};function Np(a,b){};var Op={};
function Pp(a,b,c,d){H(F(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);pf(this,"inject_script",a);var e=this.g,f=function(){b instanceof zb&&b.s(e)},g=function(){c instanceof zb&&c.s(e)};if(!d){Zf(a,f,g);return}var h=d;Op[h]?(Op[h].onSuccess.push(f),Op[h].onFailure.push(g)):(Op[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Op[h].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(n){N(n);return 0}},
g=function(){for(var l=Op[h].onFailure,m=0;m<l.length;m++)N(l[m]);Op[h]=null},Zf(a,f,g));};function Qp(a){var b=!0;return b};var Rp=function(){return!1},Sp={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Tp(){};function Up(a){var b=void 0;return b};function Vp(a,b){var c=!1;return c};function Wp(){var a="";return a};function Xp(){var a="";return a};function Yp(a,b,c,d){d=void 0===d?!1:d;};function Zp(a,b,c){};function $p(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function aq(a){H(F(this),["consentSettings:!DustMap"],arguments);for(var b=a.Ub(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==J.gd&&pf(this,"access_consent",e,"write")}Fg(Qb(a))};function bq(a,b,c){H(F(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);pf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=p,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=Qb(b,this.g,d),!0;return!1};function cq(a,b,c){}
;var dq=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function eq(a,b,c,d){var e=this;};function fq(a,b,c){}
;var gq={},hq={};gq.getItem=function(a){var b=null;return b};
gq.setItem=function(a,b){};
gq.removeItem=function(a){};gq.clear=function(){};var iq=function(a){var b;return b};function jq(a){H(F(this),["consentSettings:!DustMap"],arguments);var b=Qb(a),c;for(c in b)b.hasOwnProperty(c)&&pf(this,"access_consent",c,"write");Gg(b)};var nd=function(){var a=new Af;Xj()?(a.add("injectHiddenIframe",Sa),a.add("injectScript",Sa)):(a.add("injectHiddenIframe",Np),a.add("injectScript",Pp));var b=Zp;a.add("Math",hf());a.add("TestHelper",Cf());a.add("addEventCallback",ro);a.add("aliasInWindow",pp);a.add("assertApi",df);a.add("assertThat",ef);a.add("callInWindow",
rp);a.add("callLater",sp);a.add("copyFromDataLayer",Ap);a.add("copyFromWindow",Bp);a.add("createArgumentsQueue",Cp);a.add("createQueue",Dp);a.add("decodeUri",jf);a.add("decodeUriComponent",kf);a.add("encodeUri",lf);a.add("encodeUriComponent",mf);a.add("fail",nf);a.add("fromBase64",Ep,!("atob"in p));a.add("generateRandom",of);a.add("getContainerVersion",qf);a.add("getCookieValues",Fp);a.add("getQueryParameters",Hp);a.add("getReferrerQueryParameters",Ip);a.add("getReferrerUrl",Jp);a.add("getTimestamp",
rf);a.add("getTimestampMillis",rf);a.add("getType",sf);a.add("getUrl",Lp);a.add("localStorage",Sp,!Rp());a.add("logToConsole",Tp);a.add("makeInteger",uf);a.add("makeNumber",vf);a.add("makeString",wf);a.add("makeTableMap",xf);a.add("mock",zf);a.add("parseUrl",Up);a.add("queryPermission",Vp);a.add("readCharacterSet",Wp);a.add("readTitle",Xp);a.add("sendPixel",b);a.add("setCookie",$p);a.add("setInWindow",bq);a.add("sha256",eq);a.add("templateStorage",gq);a.add("toBase64",iq,!("btoa"in p));a.add("JSON",tf(function(c){var d=this.g.g;d&&d.log.call(this,"error",c)}));return function(c){var d;if(a.g.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.o.hasOwnProperty(c)){var f=!1,g=this.g.g;if(g){var h=g.Tb();if(h){0!==h.indexOf("__cvt_")&&(f=!0);}}e=f}if(e)d=a.o.hasOwnProperty(c)?a.o[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var ld,te;
function kq(){var a=data.runtime||[],b=data.runtime_lines;ld=new hd;lq();Od=function(e,f,g){mq(f);var h=new Eb;cb(f,function(r,t){var v=Pb(t);void 0===v&&void 0!==t&&K(44);h.set(r,v)});ld.g.g.J=ge();var l={wh:ue(e),eventId:void 0!==g?g.id:void 0,Nb:void 0!==g?function(r){return g.Ka.Nb(r)}:void 0,Tb:function(){return e},log:function(){}};if(Bl()){var m=Cl(),
n=void 0,q=void 0;l.ja={Ob:{},nb:function(r,t,v){1===t&&(n=r);7===t&&(q=v);m(r,t,v)},ce:yf()};l.log=function(r,t){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:r,source:q,message:v})}}}var u=md(l,[e,h]);ld.g.g.J=void 0;u instanceof ya&&"return"===u.g&&(u=u.o);return Qb(u)};od();for(var c=0;c<a.length;c++){var d=a[c];if(!Va(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&de(d,b[c]);ld.Nc(d)}}
function mq(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ta(b)&&(a.gtmOnSuccess=function(){N(b)});Ta(c)&&(a.gtmOnFailure=function(){N(c)})}function lq(){var a=ld;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;pd(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function nq(a){void 0!==a&&cb(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Mh[e]=Mh[e]||[];Mh[e].push(b)}})};var oq="HA GF G UA AW DC".split(" "),pq=!1,qq={},rq=!1;function sq(a,b){var c={event:a};b&&(c.eventModel=G(b),b[J.od]&&(c.eventCallback=b[J.od]),b[J.uc]&&(c.eventTimeout=b[J.uc]));return c}function tq(){return pq}
var wq={config:function(a){var b;return b},consent:function(a){function b(){tq()&&
G(a[2],{subcommand:a[1]})}if(3===a.length){K(39);var c=Nh(),d=a[1];"default"===d?(b(),Fg(a[2])):"update"===d&&(b(),Gg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&k(b)){var c;if(2<a.length){if(!Ob(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=sq(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return rq=!0,tq(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=te.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Ob(a[1])?b=G(a[1]):3==a.length&&k(a[1])&&(b={},Ob(a[2])||Va(a[2])?b[a[1]]=
G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},xq={policy:!0};var yq=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Aq=function(a){var b=zq(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Rq=function(a){if(Qq(a))return a;this.g=a};Rq.prototype.Yh=function(){return this.g};var Qq=function(a){return!a||"object"!==Kb(a)||Ob(a)?!1:"getUntrustedUpdateValue"in a};Rq.prototype.getUntrustedUpdateValue=Rq.prototype.Yh;var Sq=[],Tq=!1,Uq=!1,Vq=!1,Wq=function(a){return p["dataLayer"].push(a)},Xq=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Yq(a){var b=a._clear;cb(a,function(d,e){"_clear"!==d&&(b&&Wh(d,void 0),Wh(d,e))});Ih||(Ih=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Nh(),a["gtm.uniqueEventId"]=c,Wh("gtm.uniqueEventId",c));return Rl(a)}function Zq(){var a=Sq[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(hb(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function $q(){for(var a=!1;!Vq&&0<Sq.length;){var b=!1;if(b&&!Uq&&Zq()){var c={};Sq.unshift((c.event=
"gtm.init",c));Uq=!0}var d=!1;if(d&&!Tq&&Zq()){var e={};Sq.unshift((e.event="gtm.init_consent",e));Tq=!0}Vq=!0;delete Qh.eventModel;Sh();var f=Sq.shift();if(null!=f){var g=Qq(f);
if(g){var h=f;f=Qq(h)?h.getUntrustedUpdateValue():void 0;for(var l=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],m=0;m<l.length;m++){var n=l[m],q=Th(n,1);if(Va(q)||Ob(q))q=G(q);Rh[n]=q}}try{if(Ta(f))try{f.call(Uh)}catch(A){}else if(Va(f)){var u=f;if(k(u[0])){var r=u[0].split("."),t=r.pop(),v=u.slice(1),w=Th(r.join("."),2);if(void 0!==w&&null!==w)try{w[t].apply(w,v)}catch(A){}}}else{if(hb(f)){a:{var y=f;if(y.length&&k(y[0])){var x=wq[y[0]];if(x&&(!g||!xq[y[0]])){f=
x(y);break a}}f=void 0}if(!f){Vq=!1;continue}}a=Yq(f)||a}}finally{g&&Sh(!0)}}Vq=!1}return!a}function ar(){var a=$q();try{yq(p["dataLayer"],pe.F)}catch(b){}return a}
var cr=function(){var a=Xf("dataLayer",[]),b=Xf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Gk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});xp(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Rq(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Sq.push.apply(Sq,e);if(300<
this.length)for(K(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return $q()&&h};var d=a.slice(0);Sq.push.apply(Sq,d);br()&&N(ar)},br=function(){var a=!0;return a};var dr={};dr.Ac=new String("undefined");
var er=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===dr.Ac?b:a[d]);return c.join("")}};er.prototype.toString=function(){return this.g("undefined")};er.prototype.valueOf=er.prototype.toString;dr.lh=er;dr.Ed={};dr.Lh=function(a){return new er(a)};var fr={};dr.Fi=function(a,b){var c=Nh();fr[c]=[a,b];return c};dr.Nf=function(a){var b=a?0:1;return function(c){var d=fr[c];if(d&&"function"===typeof d[b])d[b]();fr[c]=void 0}};dr.ei=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};dr.Ai=function(a){if(a===dr.Ac)return a;var b=Nh();dr.Ed[b]=a;return'google_tag_manager["'+pe.F+'"].macro('+b+")"};dr.ri=function(a,b,c){a instanceof dr.lh&&(a=a.g(dr.Fi(b,c)),b=Sa);return{Xd:a,onSuccess:b}};var gr=["input","select","textarea"],hr=["button","hidden","image","reset","submit"],ir=function(a){var b=a.tagName.toLowerCase();return!Xa(gr,function(c){return c===b})||"input"===b&&Xa(hr,function(c){return c===a.type.toLowerCase()})?!1:!0},jr=function(a){return a.form?a.form.tagName?a.form:M.getElementById(a.form):hg(a,["form"],100)},kr=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(ir(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var vr=p.clearTimeout,wr=p.setTimeout,S=function(a,b,c){if(Xj()){b&&N(b)}else return Zf(a,b,c)},xr=function(){return new Date},yr=function(){return p.location.href},zr=function(a){return ch(eh(a),"fragment")},Ar=function(a){return dh(eh(a))},Br=function(a,b){return Th(a,b||2)},Cr=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Wq(a)):d=Wq(a);return d},Dr=function(a,b){p[a]=b},V=function(a,b,c){b&&
(void 0===p[a]||c&&!p[a])&&(p[a]=b);return p[a]},Er=function(a,b,c){return gi(a,b,void 0===c?!0:!!c)},Fr=function(a,b,c){return 0===pi(a,b,c)},Gr=function(a,b){if(Xj()){b&&N(b)}else ag(a,b)},Hr=function(a){return!!wo(a,"init",!1)},Ir=function(a){uo(a,"init",!0)},Jr=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Gh;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Zj("https://","http://",c))},Kr=function(a,
b){var c=a[b];c=jg(a,b);return c},Lr=function(a,b,c){wl&&(Tb(a)||Al(c,b,a))};
var Mr=dr.ri;function is(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var js=new $a;function ks(a,b){function c(g){var h=eh(g),l=ch(h,"protocol"),m=ch(h,"host",!0),n=ch(h,"port"),q=ch(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function ls(a){return ms(a)?1:0}
function ms(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Va(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if(ls(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return is(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Wa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var n=a.ignore_case?"i":void 0;try{var q=String(c)+n,u=js.get(q);u||(u=new RegExp(c,n),js.set(q,u));m=u.test(b)}catch(r){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ks(b,c)}return!1};var ns=encodeURI,W=encodeURIComponent,os=bg;var ps=function(a,b){if(!a)return!1;var c=ch(eh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var qs=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Wt(){return p.gaGlobal=p.gaGlobal||{}}var Xt=function(){var a=Wt();a.hid=a.hid||Ya();return a.hid},Yt=function(a,b){var c=Wt();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Iu=window,Ju=document,Ku=function(a){var b=Iu._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Iu["ga-disable-"+a])return!0;try{var c=Iu.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=ei("AMP_TOKEN",String(Ju.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Ju.getElementById("__gaOptOutExtension")?!0:!1};var Lu={};function Nu(a){delete a.eventModel[J.Hb];Pu(a.eventModel)}var Pu=function(a){cb(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.ra]||{};cb(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Su=function(a,b,c){eo(b,c,a)},Tu=function(a,b,c){eo(b,c,a,!0)},Yu=function(a,b){};
function Uu(a,b){}var Y={h:{}};
Y.h.vis=["google"],function(){var a={};(function(b){Y.__vis=b;Y.__vis.i="vis";Y.__vis.m=!0;Y.__vis.priorityOverride=0})(function(b){var c,d=[];d.push("CSS"===b.vtp_selectorType?b.vtp_elementSelector:"#"+b.vtp_elementId);d.push(b.vtp_outputMethod);"BOOLEAN"==b.vtp_outputMethod&&d.push(b.vtp_onScreenRatio);c=d.join("&");var e=a[c],f=Number(xr());if(e&&250>f-e.time)return e.value;e={time:f,value:null};var g=b.vtp_outputMethod,h=null;if("CSS"==b.vtp_selectorType)try{var l=Mg(b.vtp_elementSelector);l&&
0<l.length&&(h=l[0])}catch(n){h=null}else h=M.getElementById(b.vtp_elementId);if(h)switch(g){case "BOOLEAN":var m=(Number(b.vtp_onScreenRatio)||50)/100;e.value=Sg(h)>=m&&!Qg(h);break;case "PERCENT":e.value=0,Qg(h)||(e.value=Math.round(1E3*Sg(h))/10)}a[c]=e;return e.value})}();
Y.h.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var A=[],z=x.split(","),C=0;C<z.length;C++){var D=Number(z[C]);if(isNaN(D))return[];n.test(z[C])||A.push(D)}return A}function c(){var x=0,A=0;return function(){var z=Rg(),C=z.height;x=Math.max(v.scrollLeft+z.width,x);A=Math.max(v.scrollTop+C,A);return{Od:x,Pd:A}}}function d(){r=V("self");
t=r.document;v=t.scrollingElement||t.body&&t.body.parentNode;y=c()}function e(x,A,z,C){var D=l(A),E={},I;for(I in D){E.Ya=I;if(D.hasOwnProperty(E.Ya)){var P=Number(E.Ya);x<P||(Cr({event:"gtm.scrollDepth","gtm.scrollThreshold":P,"gtm.scrollUnits":z.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":D[E.Ya].join(",")}),vo("sdl",A,function(Q){return function(aa){delete aa[Q.Ya];return aa}}(E),{}))}E={Ya:E.Ya}}}function f(){var x=y(),A=x.Od,z=x.Pd,C=A/v.scrollWidth*100,D=z/v.scrollHeight*100;e(A,"horiz.pix",
q.Cc,u.sf);e(C,"horiz.pct",q.Bc,u.sf);e(z,"vert.pix",q.Cc,u.Gf);e(D,"vert.pct",q.Bc,u.Gf);uo("sdl","pending",!1)}function g(){var x=250,A=!1;t.scrollingElement&&t.documentElement&&r.addEventListener&&(x=50,A=!0);var z=0,C=!1,D=function(){C?z=wr(D,x):(z=0,f(),Hr("sdl")&&!a()&&(dg(r,"scroll",E),dg(r,"resize",E),uo("sdl","init",!1)));C=!1},E=function(){A&&y();z?C=!0:(z=wr(D,x),uo("sdl","pending",!0))};return E}function h(x,A,z){if(A){var C=b(String(x));vo("sdl",z,function(D){for(var E=0;E<C.length;E++){var I=
String(C[E]);D.hasOwnProperty(I)||(D[I]=[]);D[I].push(A)}return D},{})}}function l(x){return wo("sdl",x,{})}function m(x){N(x.vtp_gtmOnSuccess);var A=x.vtp_uniqueTriggerId,z=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,D=x.vtp_verticalThresholdUnits,E=x.vtp_verticalThresholdsPixels,I=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.Cc:h(z,A,"horiz.pix");break;case q.Bc:h(C,A,"horiz.pct")}switch(D){case q.Cc:h(E,A,"vert.pix");break;case q.Bc:h(I,
A,"vert.pct")}Hr("sdl")?wo("sdl","pending")||(w||(d(),w=!0),N(function(){return f()})):(d(),w=!0,v&&(Ir("sdl"),uo("sdl","pending",!0),N(function(){f();if(a()){var P=g();cg(r,"scroll",P);cg(r,"resize",P)}else uo("sdl","init",!1)})))}var n=/^\s*$/,q={Bc:"PERCENT",Cc:"PIXELS"},u={Gf:"vertical",sf:"horizontal"},r,t,v,w=!1,y;(function(x){Y.__sdl=x;Y.__sdl.i="sdl";Y.__sdl.m=!0;Y.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):xp(function(){m(x)})})}();

Y.h.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.i="jsm";Y.__jsm.m=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");var d=c&&c.e&&c.e(b);Lr(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Y.h.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.i="sp";Y.__sp.m=!0;Y.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var g=V("google_trackConversion");if(Ta(g)){var h={};"DATA_LAYER"==a.vtp_customParamsFormat?h=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(h=qs(a.vtp_customParams,
"key","value"));var l={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:h,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:im()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(h.event=a.vtp_eventName),a.vtp_eventValue&&(l.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(l.google_gtag_event_data={items:a.vtp_eventItems}));var m=function(n,q){(l.google_additional_params=l.google_additional_params||{})[n]=
q};a.vtp_rdp&&(l.google_restricted_data_processing=!0);a.vtp_userId&&(l.google_user_id=a.vtp_userId);m("gdpr_consent",Mm()),m("gdpr",Nm());g(l)||c()}else c()},e=function(){S(b,d,c)},f=!1;yg()&&!f?Kg(function(){Hg(J.C)?e():Cg(e,J.C)},[J.C]):(Nk(),e())})}();
Y.h.c=["google"],function(){(function(a){Y.__c=a;Y.__c.i="c";Y.__c.m=!0;Y.__c.priorityOverride=0})(function(a){Lr(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Y.h.e=["google"],function(){(function(a){Y.__e=a;Y.__e.i="e";Y.__e.m=!0;Y.__e.priorityOverride=0})(function(a){return String(Yh(a.vtp_gtmEventId,"event"))})}();
Y.h.f=["google"],function(){(function(a){Y.__f=a;Y.__f.i="f";Y.__f.m=!0;Y.__f.priorityOverride=0})(function(a){var b=Br("gtm.referrer",1)||M.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ch(eh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Ar(String(b)):String(b)})}();
Y.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=so(c,"gtm.click");Cr(d)}}(function(b){Y.__cl=b;Y.__cl.i="cl";Y.__cl.m=!0;Y.__cl.priorityOverride=0})(function(b){if(!Hr("cl")){var c=V("document");cg(c,"click",a,!0);Ir("cl")}N(b.vtp_gtmOnSuccess)})}();Y.h.k=["google"],function(){(function(a){Y.__k=a;Y.__k.i="k";Y.__k.m=!0;Y.__k.priorityOverride=0})(function(a){return Er(a.vtp_name,Br("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.i="access_globals";Y.__access_globals.m=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,q,u){if(!k(u))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<Wa(e,u))return}else if("write"===q){if(-1<Wa(f,u))return}else if("readwrite"===q){if(-1<Wa(f,u)&&-1<Wa(e,u))return}else if("execute"===q){if(-1<Wa(g,u))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
u+".");},O:a}})}();Y.h.r=["google"],function(){(function(a){Y.__r=a;Y.__r.i="r";Y.__r.m=!0;Y.__r.priorityOverride=0})(function(a){return Ya(a.vtp_min,a.vtp_max)})}();
Y.h.tg=["google"],function(){function a(g){f.push(g);1<f.length||N(function(){var h=f.join(",");f=[];Cr({event:"gtm.triggerGroup","gtm.triggers":h})})}function b(g,h){var l=c[h],m=l.indexOf(g);-1!==m&&(l.splice(m,1),l.length||a(h))}var c={},d={},e=[],f=[];(function(g){Y.__tg=g;Y.__tg.i="tg";Y.__tg.m=!0;Y.__tg.priorityOverride=0})(function(g){N(g.vtp_gtmOnSuccess);var h=g.vtp_uniqueTriggerId,l=g.vtp_triggerIds,m=g.vtp_firingId;
if(g.vtp_isListeningTag){var n=d[m];n?b(m,n):e.push(m)}else{c[h]=l;for(var q=0,u;u=l[q];q++)d[u]=h;for(var r=0;r<e.length;r++)b(e[r],h)}})}();
Y.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.i="u";Y.__u.m=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Br("gtm.url",1))||yr();var d=b[a("vtp_component")];if(!d||"URL"==d)return Ar(String(c));var e=eh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Va(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var n=0;n<m.length;n++){var q=ch(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=ch(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.h.v=["google"],function(){(function(a){Y.__v=a;Y.__v.i="v";Y.__v.m=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Br(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Lr(d,"v",a.vtp_gtmEventId);return d})}();
Y.h.ua=["google"],function(){function a(q){return Hg(q)}function b(q,u){var r=!1;if(yg()&&!r&&!e[q]){var t=function(){var v=Sk(),w="gtm"+Nh(),y=m(u),x={name:w};l(y,x,!0);v("create",q,x);v(function(){v.remove(w)})};Cg(t,J.K);Cg(t,J.C);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,
allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},
l=function(q,u,r){var t=0;if(q)for(var v in q)if(!h[v]&&q.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var w=g[v]?jb(q[v]):q[v];"anonymizeIp"!=v||w||(w=void 0);u[v]=w;t++}return t},m=function(q){var u={};q.vtp_gaSettings&&G(qs(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),u);G(qs(q.vtp_fieldsToSet,"fieldName","value"),u);Hg(J.K)||(u.storage="none");Hg(J.C)||(u.allowAdFeatures=!1,u.storeGac=!1);Cn()||(u.allowAdFeatures=!1);Bn()||(u.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&
(u._x_19=q.vtp_transportUrl);return u},
n=function(q){function u(pa,Z){void 0!==Z&&E("set",pa,Z)}var r={},t={},v={},w={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;G(qs(y.vtp_contentGroup,"index","group"),t);G(qs(y.vtp_dimension,"index","dimension"),v);G(qs(y.vtp_metric,"index","metric"),w);var x=G(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=void 0;q=G(q,x)}G(qs(q.vtp_contentGroup,"index","group"),t);G(qs(q.vtp_dimension,"index","dimension"),v);G(qs(q.vtp_metric,"index","metric"),w);var A=
m(q),z=Uk(q.vtp_functionName);if(Ta(z)){var C="",D="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(D=q.vtp_trackerName,C=D+"."):(D="gtm"+Nh(),C=D+".");var E=function(pa){var Z=[].slice.call(arguments,0);Z[0]=C+Z[0];z.apply(window,Z)},I=function(pa,Z){return void 0===Z?Z:pa(Z)},P=function(pa,Z){if(Z)for(var Oa in Z)Z.hasOwnProperty(Oa)&&E("set",pa+Oa,Z[Oa])},Q=function(){var pa={transaction_id:"id",
affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},Z={},Oa=(Z[J.jd]="click",Z[J.Ba]="detail",Z[J.$a]="add",Z[J.ab]="remove",Z[J.Pa]="checkout",Z[J.oa]="purchase",Z[J.cb]="refund",Z),wc={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_category:"category",item_variant:"variant",index:"position",promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},xc=function(fb,gb){for(var db in fb)pa.hasOwnProperty(db)&&
(fb[gb]=fb[gb]||{},fb[gb].actionField=fb[gb].actionField||{},fb[gb].actionField[pa[db]]=fb[db])},eb=function(fb){for(var gb=[],db={},ob=0;ob<fb.length;db={vb:db.vb},ob++)db.vb={},cb(fb[ob],function(Sb){return function(Ke,kg){wc.hasOwnProperty(Ke)?Sb.vb[wc[Ke]]=kg:Sb.vb[Ke]=kg}}(db)),gb.push(db.vb);return gb},Za=function(fb,gb,db){if(!Ob(gb))return!1;for(var ob=pb(Object(gb),db,[]),Sb=0;ob&&Sb<ob.length;Sb++)E(fb,ob[Sb]);return!!ob&&0<ob.length},X;if(q.vtp_useEcommerceDataLayer){var ub=!1;q.vtp_useGA4SchemaForEcommerce&&
(X=Yh(q.vtp_gtmEventId,"eventModel"),ub=!!X);ub||(X=Br("ecommerce",1))}else q.vtp_ecommerceMacroData&&(X=q.vtp_ecommerceMacroData.ecommerce,!X&&q.vtp_useGA4SchemaForEcommerce&&(X=q.vtp_ecommerceMacroData));if(!Ob(X))return;X=Object(X);if(q.vtp_useGA4SchemaForEcommerce){X=G(X);X.currencyCode=X.currencyCode||X.currency;var nb=String(Yh(q.vtp_gtmEventId,
"event"));if("view_item_list"===nb&&!X.impressions&&X.items)X.impressions=eb(X.items);else if("view_promotion"===nb&&!X.promoView&&X.items)X.promoView={},X.promoView.promotions=eb(X.items);else if("select_promotion"===nb&&!X.promoClick)X.items&&(X.promoClick={},X.promoClick.promotions=eb(X.items)),xc(X,"promoClick");else if(Oa.hasOwnProperty(nb)){var id=Oa[nb];X[id]||(X.items&&(X[id]={},X[id].products=eb(X.items)),xc(X,id))}}var Kd=pb(A,"currencyCode",X.currencyCode);void 0!==Kd&&E("set","&cu",Kd);
Za("ec:addImpression",X,"impressions");if(Za("ec:addPromo",X[X.promoClick?"promoClick":"promoView"],"promotions")&&X.promoClick){E("ec:setAction","promo_click",X.promoClick.actionField);return}for(var Ie="detail checkout checkout_option click add remove purchase refund".split(" "),Ld="refund purchase remove checkout checkout_option add click detail".split(" "),jd=0;jd<Ie.length;jd++){var Ic=X[Ie[jd]];if(Ic){Za("ec:addProduct",Ic,"products");E("ec:setAction",Ie[jd],Ic.actionField);if(wl)for(var bc=
0;bc<Ld.length;bc++){var Je=X[Ld[bc]];if(Je){Je!==Ic&&K(13);break}}break}}},aa={name:D};l(A,aa,!0);var ta=q.vtp_trackingId||r.trackingId;z("create",ta,aa);E("set","&gtm",im(!0));var R=!1;
yg()&&!R&&(E("set","&gcs",Ig()),b(ta,q));A._x_19&&(null==Wf&&delete A._x_19,A._x_20&&!d[D]&&(d[D]=!0,z(Zk(D,String(A._x_20)))));q.vtp_enableRecaptcha&&E("require","recaptcha","recaptcha.js");(function(pa,Z){void 0!==q[Z]&&E("set",pa,q[Z])})("nonInteraction","vtp_nonInteraction");P("contentGroup",t);P("dimension",v);P("metric",w);var L={};l(A,L,!1)&&E("set",L);var U;
q.vtp_enableLinkId&&E("require","linkid","linkid.js");E("set","hitCallback",function(){var pa=A&&A.hitCallback;Ta(pa)&&pa();q.vtp_gtmOnSuccess()});var ba=function(pa,Z){return void 0===q[pa]?r[Z]:q[pa]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(E("require","ec","ec.js"),Q());var ua={hitType:"event",eventCategory:String(ba("vtp_eventCategory","category")),eventAction:String(ba("vtp_eventAction","action")),eventLabel:I(String,
ba("vtp_eventLabel","label")),eventValue:I(ib,ba("vtp_eventValue","value"))};l(U,ua,!1);E("send",ua);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==
q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==
q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&
(E("require","ec","ec.js"),Q());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var Na="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","displayfeatures",void 0,{cookieName:Na})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var Mb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","adfeatures",{cookieName:Mb})}U?E("send","pageview",U):E("send","pageview");jb(A.urlPassthrough)&&Wk(C)}if(!c){var Cb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(Cb="internal/"+Cb);c=!0;var sb=Tl(A._x_19,"/analytics.js"),bb=Zj("https:","http:","//www.google-analytics.com/"+Cb,A&&!!A.forceSSL);S("analytics.js"===Cb&&sb?sb:bb,function(){var pa=
Sk();pa&&pa.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else N(q.vtp_gtmOnFailure)};(function(q){Y.__ua=q;Y.__ua.i="ua";Y.__ua.m=!0;Y.__ua.priorityOverride=0})(function(q){Kg(function(){n(q)},
[J.K,J.C])})}();


Y.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.i="inject_script";Y.__inject_script.m=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!k(f))throw d(e,{},"Script URL must be a string.");try{if(Ve(eh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},O:a}})}();


Y.h.ytl=["google"],function(){function a(){var t=Math.round(1E9*Math.random())+"";return M.getElementById(t)?a():t}function b(t,v){if(!t)return!1;for(var w=0;w<n.length;w++)if(0<=t.indexOf("//"+n[w]+"/"+v))return!0;return!1}function c(t,v){var w=t.getAttribute("src");if(b(w,"embed/")){if(0<w.indexOf("enablejsapi=1"))return!0;if(v){var y=t.setAttribute,x;var A=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))x=w+A+"enablejsapi=1";else{if(!u){var z=V("document");u=z.location.protocol+"//"+z.location.hostname;
z.location.port&&(u+=":"+z.location.port)}x=w+A+"enablejsapi=1&origin="+encodeURIComponent(u)}y.call(t,"src",x);return!0}}return!1}function d(t,v){if(!t.getAttribute("data-gtm-yt-inspected-"+v.ye)&&(t.setAttribute("data-gtm-yt-inspected-"+v.ye,"true"),c(t,v.Sb))){t.id||(t.id=a());var w=V("YT"),y=w.get(t.id);y||(y=new w.Player(t.id));var x=f(y,v),A={},z;for(z in x)A.ub=z,x.hasOwnProperty(A.ub)&&y.addEventListener(A.ub,function(C){return function(D){return x[C.ub](D.data)}}(A)),A={ub:A.ub}}}function e(t){N(function(){function v(){for(var y=
w.getElementsByTagName("iframe"),x=y.length,A=0;A<x;A++)d(y[A],t)}var w=V("document");v();$o(v)})}function f(t,v){var w,y;function x(){aa=ap(function(){return{url:L,title:U,Qd:R,Of:t.getCurrentTime(),playbackRate:ba}},v.ye,t.getIframe());R=0;U=L="";ba=1;return A}function A(za){switch(za){case q.PLAYING:R=Math.round(t.getDuration());L=t.getVideoUrl();if(t.getVideoData){var ha=t.getVideoData();U=ha?ha.title:""}ba=t.getPlaybackRate();v.Ld?Cr(aa.createEvent("start")):aa.kb();ta=l(v.me,v.ke,t.getDuration());
return z(za);default:return A}}function z(){ua=t.getCurrentTime();T=xr().getTime();aa.eg();Q();return C}function C(za){var ha;switch(za){case q.ENDED:return E(za);case q.PAUSED:ha="pause";case q.BUFFERING:var Ka=t.getCurrentTime()-ua;ha=1<Math.abs((xr().getTime()-T)/1E3*ba-Ka)?"seek":ha||"buffering";t.getCurrentTime()&&(v.Kd?Cr(aa.createEvent(ha)):aa.kb());P();return D;case q.UNSTARTED:return x(za);default:return C}}function D(za){switch(za){case q.ENDED:return E(za);case q.PLAYING:return z(za);case q.UNSTARTED:return x(za);
default:return D}}function E(){for(;y;){var za=w;vr(y);za()}v.Jd&&Cr(aa.createEvent("complete",1));return x(q.UNSTARTED)}function I(){}function P(){y&&(vr(y),y=0,w=I)}function Q(){if(ta.length&&0!==ba){var za=-1,ha;do{ha=ta[0];if(ha.V>t.getDuration())return;za=(ha.V-t.getCurrentTime())/ba;if(0>za&&(ta.shift(),0===ta.length))return}while(0>za);w=function(){y=0;w=I;0<ta.length&&ta[0].V===ha.V&&(ta.shift(),Cr(aa.createEvent("progress",ha.ac,ha.fc)));Q()};y=wr(w,1E3*za)}}var aa,ta=[],R,L,U,ba,ua,T,Ea=
x(q.UNSTARTED);y=0;w=I;return{onStateChange:function(za){Ea=Ea(za)},onPlaybackRateChange:function(za){ua=t.getCurrentTime();T=xr().getTime();aa.kb();ba=za;P();Q()}}}function g(t){for(var v=t.split(","),w=v.length,y=[],x=0;x<w;x++){var A=parseInt(v[x],10);isNaN(A)||100<A||0>A||y.push(A/100)}y.sort(function(z,C){return z-C});return y}function h(t){for(var v=t.split(","),w=v.length,y=[],x=0;x<w;x++){var A=parseInt(v[x],10);isNaN(A)||0>A||y.push(A)}y.sort(function(z,C){return z-C});return y}function l(t,
v,w){var y=t.map(function(z){return{V:z,fc:z,ac:void 0}});if(!v.length)return y;var x=v.map(function(z){return{V:z*w,fc:void 0,ac:z}});if(!y.length)return x;var A=y.concat(x);A.sort(function(z,C){return z.V-C.V});return A}function m(t){var v=!!t.vtp_captureStart,w=!!t.vtp_captureComplete,y=!!t.vtp_capturePause,x=g(t.vtp_progressThresholdsPercent+""),A=h(t.vtp_progressThresholdsTimeInSeconds+""),z=!!t.vtp_fixMissingApi;if(v||w||y||x.length||A.length){var C={Ld:v,Jd:w,Kd:y,ke:x,me:A,Sb:z,ye:void 0===
t.vtp_uniqueTriggerId?"":t.vtp_uniqueTriggerId},D=V("YT"),E=function(){e(C)};N(t.vtp_gtmOnSuccess);if(D)D.ready&&D.ready(E);else{var I=V("onYouTubeIframeAPIReady");Dr("onYouTubeIframeAPIReady",function(){I&&I();E()});N(function(){for(var P=V("document"),Q=P.getElementsByTagName("script"),aa=Q.length,ta=0;ta<aa;ta++){var R=Q[ta].getAttribute("src");if(b(R,"iframe_api")||b(R,"player_api"))return}for(var L=P.getElementsByTagName("iframe"),U=L.length,ba=0;ba<U;ba++)if(!r&&c(L[ba],C.Sb)){S("https://www.youtube.com/iframe_api");
r=!0;break}})}}else N(t.vtp_gtmOnSuccess)}var n=["www.youtube.com","www.youtube-nocookie.com"],q={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},u,r=!1;(function(t){Y.__ytl=t;Y.__ytl.i="ytl";Y.__ytl.m=!0;Y.__ytl.priorityOverride=0})(function(t){t.vtp_triggerStartOption?m(t):Gk(function(){m(t)})})}();




Y.h.aev=["google"],function(){function a(r,t){var v=Yh(r,"gtm");if(v)return v[t]}function b(r,t,v,w){w||(w="element");var y=r+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(r,w);if(A&&(x=v(A),n[y]=x,q.push(y),35<q.length)){var z=q.shift();delete n[z]}}return x}function c(r,t,v){var w=a(r,u[t]);return void 0!==w?w:v}function d(r,t){if(!r)return!1;var v=e(yr());Va(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++){var x=t[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(z){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(r))return!1}else{var A=x;if(0!=A.length){if(0<=e(r).indexOf(A))return!1;w.push(e(A))}}}return!ps(r,w)}function e(r){m.test(r)||(r="http://"+r);return ch(eh(r),"HOST",!0)}function f(r,t,v){switch(r){case "SUBMIT_TEXT":return b(t,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+r,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",
v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return eg(r,"value");case "button":return fg(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var t=0,v=0;v<r.elements.length;v++)ir(r.elements[v])&&
t++;return t}}function l(r,t,v){var w=a(r,"interactedFormField");return w&&eg(w,t)||v}var m=/^https?:\/\//i,n={},q=[],u={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Y.__aev=r;Y.__aev.i="aev";Y.__aev.m=!0;Y.__aev.priorityOverride=
0})(function(r){var t=r.vtp_gtmEventId,v=r.vtp_defaultValue,w=r.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||v;case "TEXT":return b(t,w,fg)||v;case "URL":var x;a:{var A=String(a(t,"elementUrl")||v||""),z=eh(A),C=String(r.vtp_component||"URL");switch(C){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,r.vtp_affiliatedDomains);break a;default:x=ch(z,C,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(t,
w,v);else{var E=r.vtp_attribute,I=a(t,"element");D=I&&eg(I,E)||v||""}return D;case "MD":var P=r.vtp_mdValue,Q=b(t,"MD",rr);return P&&Q?ur(Q,P)||v:Q||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),t,v);default:var aa=c(t,w,v);Lr(aa,"aev",r.vtp_gtmEventId);return aa}})}();Y.h.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.i="gas";Y.__gas.m=!0;Y.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[qd.Sa]=null;c[qd.bh]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.h.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.i="remm";Y.__remm.m=!0;Y.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}Lr(f,"remm",a.vtp_gtmEventId);return f})}();



Y.h.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.i="paused";Y.__paused.m=!0;Y.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();

Y.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=M.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var n=h.getAttribute("data-gtmsrc");n&&(m.src=n,Yf(m,l));d.insertBefore(m,null);n||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(u){N(g)}}}var b=function(d,e,f){Gk(function(){var g=O.postscribe,h={done:e},l=M.createElement("div");l.style.display="none";l.style.visibility="hidden";M.body.appendChild(l);try{g(l,d,h)}catch(m){N(f)}})};var c=function(d){if(M.body){var e=d.vtp_gtmOnFailure,f=Mr(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.Xd,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(M.body,gg(g),h,e)()}else wr(function(){c(d)},200)};Y.__html=c;Y.__html.i="html";
Y.__html.m=!0;Y.__html.priorityOverride=0}();






Y.h.lcl=[],function(){function a(){var c=V("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Xf||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=hg(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=wo("lcl",h?"nv.mwt":"mwt",0),m;m=h?wo("lcl","nv.ids",[]):wo("lcl","ids",[]);if(m.length){var n=so(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var q=String(Kr(g,"rel")||""),u=!!Xa(q.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
u&&K(36);var r=V((Kr(g,"target")||"_self").substring(1)),t=!0;if(Cr(n,Xq(function(){var v;if(v=t&&r){var w;a:if(u){var y;try{y=new MouseEvent(f.type,{bubbles:!0})}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Xf=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(r.location.href=Kr(g,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Cr(n,function(){},l||2E3);return!0}}};cg(c,"click",e,!1);cg(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=Kr(d,"href"),g=f.indexOf("#"),h=Kr(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=Ar(f),m=Ar(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.i="lcl";Y.__lcl.m=!0;Y.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};vo("lcl","mwt",h,0);e||vo("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};vo("lcl","ids",l,[]);e||vo("lcl","nv.ids",l,[]);Hr("lcl")||(a(),Ir("lcl"));N(c.vtp_gtmOnSuccess)})}();
Y.h.evl=["google"],function(){function a(){var f=Number(Br("gtm.start"))||0;return xr().getTime()-f}function b(f,g,h,l){function m(){if(!Qg(f.target)){g.has(d.Dc)||g.set(d.Dc,""+a());g.has(d.Bd)||g.set(d.Bd,""+a());var q=0;g.has(d.Fc)&&(q=Number(g.get(d.Fc)));q+=100;g.set(d.Fc,""+q);if(q>=h){var u=so(f.target,"gtm.elementVisibility",[g.g]),r=Sg(f.target);u["gtm.visibleRatio"]=Math.round(1E3*r)/10;u["gtm.visibleTime"]=h;u["gtm.visibleFirstTime"]=Number(g.get(d.Bd));u["gtm.visibleLastTime"]=Number(g.get(d.Dc));
Cr(u);l()}}}if(!g.has(d.Kb)&&(0==h&&m(),!g.has(d.jb))){var n=V("self").setInterval(m,100);g.set(d.Kb,n)}}function c(f){f.has(d.Kb)&&(V("self").clearInterval(Number(f.get(d.Kb))),f.o(d.Kb))}var d={Kb:"polling-id-",Bd:"first-on-screen-",Dc:"recent-on-screen-",Fc:"total-visible-time-",jb:"has-fired-"},e=function(f,g){this.element=f;this.g=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.g)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.g)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.g,g)};e.prototype.o=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.g)};(function(f){Y.__evl=f;Y.__evl.i="evl";Y.__evl.m=!0;Y.__evl.priorityOverride=0})(function(f){function g(){var y=!1,x=null;if("CSS"===l){try{x=Mg(m)}catch(E){K(46)}y=!!x&&v.length!=x.length}else if("ID"===l){var A=M.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var z=0;z<v.length;z++){var C=
new e(v[z],r);c(C)}v=[];for(var D=0;D<x.length;D++)v.push(x[D]);0<=w&&Yg(w);0<v.length&&(w=Xg(h,v,[u]))}}function h(y){var x=new e(y.target,r);y.intersectionRatio>=u?x.has(d.jb)||b(y,x,q,"ONCE"===t?function(){for(var A=0;A<v.length;A++){var z=new e(v[A],r);z.set(d.jb,"1");c(z)}Yg(w);if(n&&Zo)for(var C=0;C<Zo.length;C++)Zo[C]===g&&Zo.splice(C,1)}:function(){x.set(d.jb,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===t&&x.has(d.jb)&&(x.o(d.jb),x.o(d.Fc)),x.o(d.Dc))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,u=(Number(f.vtp_onScreenRatio)||50)/100,r=f.vtp_uniqueTriggerId,t=f.vtp_firingFrequency,v=[],w=-1;g();n&&$o(g);N(f.vtp_gtmOnSuccess)})}();


var Zu={};Zu.macro=function(a){if(dr.Ed.hasOwnProperty(a))return dr.Ed[a]},Zu.onHtmlSuccess=dr.Nf(!0),Zu.onHtmlFailure=dr.Nf(!1);Zu.dataLayer=Uh;Zu.callback=function(a){Lh.hasOwnProperty(a)&&Ta(Lh[a])&&Lh[a]();delete Lh[a]};Zu.bootstrap=0;Zu._spx=!1;function $u(){O[pe.F]=Zu;rb(Mh,Y.h);Wd=Wd||dr;Xd=le}
function av(){mg.gtag_cs_api=!0;O=p.google_tag_manager=p.google_tag_manager||{};Km();if(O[pe.F]){var a=O.zones;a&&a.unregisterChild(pe.F);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pd.push(c[d]);
for(var e=b.tags||[],f=0;f<e.length;f++)Sd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Rd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);Qd.push(q)}Ud=Y;Vd=ls;var r=data.permissions||{},t=data.sandboxed_scripts,v=data.security_groups;kq();te=new se(r);if(void 0!==t)for(var w=["sandboxedScripts"],y=0;y<t.length;y++){var x=t[y].replace(/^_*/,"");Mh[x]=w}nq(v);$u();cr();Bk=!1;Ck=0;if("interactive"==
M.readyState&&!M.createEventObject||"complete"==M.readyState)Ek();else{cg(M,"DOMContentLoaded",Ek);cg(M,"readystatechange",Ek);if(M.createEventObject&&M.documentElement.doScroll){var A=!0;try{A=!p.frameElement}catch(I){}A&&Fk()}cg(p,"load",Ek)}up=!1;"complete"===M.readyState?wp():cg(p,"load",wp);a:{
if(!wl)break a;p.setInterval(xl,864E5);}var E=O;E.postscribe||(E.postscribe=p.postscribe||Xe);Jh=(new Date).getTime();}}
(function(a){if(!p["__TAGGY_INSTALLED"]){var b=!1;if(M.referrer){var c=eh(M.referrer);b="cct.google"===bh(c,"host")}if(!b){var d=gi("googTaggyReferrer");b=d.length&&d[0].length}b&&(p["__TAGGY_INSTALLED"]=!0,Zf("https://cct.google/taggy/agent.js"))}var f=function(){var m=p["google.tagmanager.debugui2.queue"];m||(m=[],p["google.tagmanager.debugui2.queue"]=m,Zf("https://www.googletagmanager.com/debug/bootstrap"));return m},g="x"===ch(p.location,"query",!1,void 0,"gtm_debug");if(!g&&M.referrer){var h=eh(M.referrer);g="tagassistant.google.com"===bh(h,"host")}if(!g){var l=gi("__TAG_ASSISTANT");g=l.length&&l[0].length}p.__TAG_ASSISTANT_API&&(g=!0);g&&Wf?f().push({messageType:"CONTAINER_STARTING",
data:{scriptSource:Wf,resume:function(){a()}}}):a()})(av);

})()
