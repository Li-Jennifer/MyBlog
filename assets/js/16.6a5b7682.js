(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{334:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"编码解码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编码解码"}},[s._v("#")]),s._v(" 编码解码")]),s._v(" "),t("p",[s._v("字节->字符串：解码 decode\n字符串->字节：编码 encode")]),s._v(" "),t("h1",{attrs:{id:"get-post"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-post"}},[s._v("#")]),s._v(" get post")]),s._v(" "),t("h2",{attrs:{id:"_1-get-urllib-parse-quote-单个参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-get-urllib-parse-quote-单个参数"}},[s._v("#")]),s._v(" 1.get：urllib.parse.quote() 单个参数")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse\nurl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://www.baidu.com/s?wd='")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请求对象的定制为了解决反爬的第一种手段")]),s._v("\nheaders "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'User-Agent'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:103.0) Gecko/20100101 Firefox/103.0'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将周杰伦三个字变成unicode编码的格式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我们需要依赖于urllib.parse")]),s._v("\nname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("quote"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'周杰伦'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nurl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" name\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请求对象的定制")]),s._v("\nrequest "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("headers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 模拟浏览器向服务器发送请求")]),s._v("\nresponse "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urlopen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取响应的内容")]),s._v("\ncontent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("h2",{attrs:{id:"_2-get-urllib-parse-urlencode-多个参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-get-urllib-parse-urlencode-多个参数"}},[s._v("#")]),s._v(" 2.get: urllib.parse.urlencode() 多个参数")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse\nbase_url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://www.baidu.com/s?'")]),s._v("\n\ndata "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wd'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'周杰伦'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sex'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'男'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'location'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'中国台湾省'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nnew_data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urlencode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请求资源路径")]),s._v("\nurl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" base_url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" new_data\n\nheaders "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'User-Agent'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:103.0) Gecko/20100101 Firefox/103.0'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请求对象的定制")]),s._v("\nrequest "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("headers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 模拟浏览器向服务器发送请求")]),s._v("\nresponse "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urlopen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("h2",{attrs:{id:"_3-post"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-post"}},[s._v("#")]),s._v(" 3.post")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://fanyi.baidu.com/sug'")]),s._v("\nheaders "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'User-Agent'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:103.0) Gecko/20100101 Firefox/103.0'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \ndata "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kw'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'spider'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# post请求的参数 必须要进行编码")]),s._v("\ndata "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urlencode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# post的请求的参数 放在请求对象定制的参数data中")]),s._v("\nrequest "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("headers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 模拟浏览器向服务器发送请求")]),s._v("\nresponse "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urlopen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取响应的数据")]),s._v("\ncontent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 字符串--》json对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json\nobj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# post请求方式的参数 必须编码 data = urllib.parse.urlencode(data)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编码之后 必须调用encode方法 data = urllib.parse.urlencode(data).encode('utf-8')")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参数是放在请求对象定制的方法中 request = urllib.request.Request(url=url,data=data,headers=headers)")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("h2",{attrs:{id:"_4-ajax-post"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-ajax-post"}},[s._v("#")]),s._v(" 4. ajax post")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create_request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("page"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    base_url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://movie.douban.com/j/chart/top_list?type=5&interval_id=100%3A90&action=&'")]),s._v("\n    data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'start'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("page "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'limit'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urlencode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" base_url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" data\n    headers "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'User-Agent'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    request "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("headers "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" headers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" request\n\n  \n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_content")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    response "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urlopen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    content "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" content\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("down_load")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("page"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'douban_'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("page"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.json'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" fp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        fp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 程序的入口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    start_page "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("input")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入起始的页码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    end_page "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("input")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入结束的页面'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" page "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("start_page"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("end_page"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每一页都有自己的请求对象的定制")]),s._v("\n    request "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" create_request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("page"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取响应的数")]),s._v("\n    content "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" get_content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载")]),s._v("\n    down_load"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("page"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);