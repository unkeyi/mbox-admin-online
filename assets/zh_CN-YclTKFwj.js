var de=Object.defineProperty,ue=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var s=(l,t,o)=>t in l?de(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o,n=(l,t)=>{for(var o in t||(t={}))ge.call(t,o)&&s(l,o,t[o]);if(c)for(var o of c(t))pe.call(t,o)&&s(l,o,t[o]);return l},a=(l,t)=>ue(l,me(t));import{g as i,d as be}from"./entry/index-CFS-oRkL.js";import{_ as d,N as Te}from"./antd-DYfcSfab.js";import"./vue-2VIvd4_n.js";const g={shortWeekDays:["日","一","二","三","四","五","六"],shortMonths:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},he={lang:g},xe=Object.freeze(Object.defineProperty({__proto__:null,default:he,lang:g},Symbol.toStringTag,{value:"Module"})),p="确认",b="关闭",T="取消",h="加载中...",x="保存",_="删除",f="重置",y="搜索",S="查询",M="请输入",k="请选择",v="刷新",$="返回",P="亮色主题",C="黑暗主题",_e={okText:p,closeText:b,cancelText:T,loadingText:h,saveText:x,delText:_,resetText:f,searchText:y,queryText:S,inputText:M,chooseText:k,redo:v,back:$,light:P,dark:C},fe=Object.freeze(Object.defineProperty({__proto__:null,back:$,cancelText:T,chooseText:k,closeText:b,dark:C,default:_e,delText:_,inputText:M,light:P,loadingText:h,okText:p,queryText:S,redo:v,resetText:f,saveText:x,searchText:y},Symbol.toStringTag,{value:"Module"})),w={searchNotData:"暂无搜索结果",toSearch:"确认",toNavigate:"切换"},j={normalText:"获取验证码",sendText:"{0}秒后重新获取"},D={selectImage:"选择图片",uploadSuccess:"上传成功",imageTooBig:"图片超限",modalTitle:"头像上传",okText:"确认并上传",btn_reset:"重置",btn_rotate_left:"逆时针旋转",btn_rotate_right:"顺时针旋转",btn_scale_x:"水平翻转",btn_scale_y:"垂直翻转",btn_zoom_in:"放大",btn_zoom_out:"缩小",preview:"预览"},F={loadingText:"加载中...",cancelText:"关闭",okText:"确认"},z={exportModalTitle:"导出数据",fileType:"文件类型",fileName:"文件名"},N={putAway:"收起",unfold:"展开",maxTip:"字符数应小于{0}位",apiSelectNotFound:"请等待数据加载完成..."},L={placeholder:"点击选择图标",search:"搜索图标",copy:"复制图标成功!"},A={search:"菜单搜索"},O={cancelText:"关闭",okText:"确认",close:"关闭",maximize:"最大化",restore:"还原"},E={settingDens:"密度",settingDensDefault:"默认",settingDensMiddle:"中等",settingDensSmall:"紧凑",settingColumn:"列设置",settingColumnShow:"列展示",settingIndexColumnShow:"序号列",settingSelectColumnShow:"勾选列",settingFixedLeft:"固定到左侧",settingFixedRight:"固定到右侧",settingFullScreen:"全屏",index:"序号",total:"共 {total} 条数据",selectionBarTips:"已选择{count}条记录",selectionBarClear:"清空",selectionBarEmpty:"未选中任何记录"},I={before:"前",after:"后",just:"刚刚",seconds:"秒",minutes:"分钟",hours:"小时",days:"天"},B={selectAll:"选择全部",unSelectAll:"取消选择",expandAll:"展开全部",unExpandAll:"折叠全部",checkStrictly:"层级关联",checkUnStrictly:"层级独立"},Y={save:"保存",upload:"上传",imgUpload:"图片上传",uploaded:"已上传",operating:"操作",del:"删除",download:"下载",saveWarn:"请等待文件上传后，保存!",saveError:"没有上传成功的文件，无法保存!",preview:"预览",choose:"选择文件",accept:"支持{0}格式",acceptUpload:"只能上传{0}格式文件",maxSize:"单个文件不超过{0}MB",maxSizeMultiple:"只能上传不超过{0}MB的文件!",maxNumber:"最多只能上传{0}个文件",legend:"略缩图",fileName:"文件名",fileSize:"文件大小",fileStatue:"状态",pending:"待上传",startUpload:"开始上传",uploadSuccess:"上传成功",uploadError:"上传失败",uploading:"上传中",uploadWait:"请等待文件上传结束后操作",reUploadFailed:"重新上传失败文件"},U={error:"验证失败！",time:"验证校验成功,耗时{time}秒！",redoTip:"点击图片可刷新",dragText:"请按住滑块拖动",successText:"验证通过"},ye={app:w,countdown:j,cropper:D,drawer:F,excel:z,form:N,icon:L,menu:A,modal:O,table:E,time:I,tree:B,upload:Y,verify:U},Se=Object.freeze(Object.defineProperty({__proto__:null,app:w,countdown:j,cropper:D,default:ye,drawer:F,excel:z,form:N,icon:L,menu:A,modal:O,table:E,time:I,tree:B,upload:Y,verify:U},Symbol.toStringTag,{value:"Module"})),R={onlinePreview:"在线预览",onlineDocument:"在线文档"},H={dropdownChangeApi:"切换API",dropdownItemDoc:"文档",dropdownItemLoginOut:"退出系统",tooltipErrorLog:"错误日志",tooltipLock:"锁定屏幕",tooltipNotify:"消息通知",tooltipEntryFull:"全屏",tooltipExitFull:"退出全屏",lockScreenPassword:"锁屏密码",lockScreen:"锁定屏幕",lockScreenBtn:"锁定",home:"首页"},q={reload:"重新加载",close:"关闭标签页",closeLeft:"关闭左侧标签页",closeRight:"关闭右侧标签页",closeOther:"关闭其它标签页",closeAll:"关闭全部标签页"},W={contentModeFull:"流式",contentModeFixed:"定宽",topMenuAlignLeft:"居左",topMenuAlignRight:"居中",topMenuAlignCenter:"居右",menuTriggerNone:"不显示",menuTriggerBottom:"底部",menuTriggerTop:"顶部",menuTypeSidebar:"左侧菜单模式",menuTypeMixSidebar:"左侧菜单混合模式",menuTypeMix:"顶部菜单混合模式",menuTypeTopMenu:"顶部菜单模式",on:"开",off:"关",minute:"分钟",operatingTitle:"操作成功",operatingContent:"复制成功,请到 src/settings/projectSetting.ts 中修改配置！",resetSuccess:"重置成功！",copyBtn:"拷贝",clearBtn:"清空缓存并返回登录页",drawerTitle:"项目配置",darkMode:"主题",navMode:"导航栏模式",interfaceFunction:"界面功能",interfaceDisplay:"界面显示",animation:"动画",splitMenu:"分割菜单",closeMixSidebarOnChange:"切换页面关闭菜单",sysTheme:"系统主题",headerTheme:"顶栏主题",sidebarTheme:"菜单主题",menuDrag:"侧边菜单拖拽",menuSearch:"菜单搜索",menuAccordion:"侧边菜单手风琴模式",menuCollapse:"折叠菜单",collapseMenuDisplayName:"折叠菜单显示名称",topMenuLayout:"顶部菜单布局",menuCollapseButton:"菜单折叠按钮",contentMode:"内容区域宽度",expandedMenuWidth:"菜单展开宽度",breadcrumb:"面包屑",breadcrumbIcon:"面包屑图标",tabs:"标签页",tabDetail:"标签详情页",tabsQuickBtn:"标签页快捷按钮",tabsRedoBtn:"标签页刷新按钮",tabsFoldBtn:"标签页折叠按钮",sidebar:"左侧菜单",header:"顶栏",footer:"页脚",fullContent:"全屏内容",grayMode:"灰色模式",colorWeak:"色弱模式",progress:"顶部进度条",switchLoading:"切换loading",switchAnimation:"切换动画",animationType:"动画类型",autoScreenLock:"自动锁屏",notAutoScreenLock:"不自动锁屏",fixedHeader:"固定header",fixedSideBar:"固定Sidebar",mixSidebarTrigger:"混合菜单触发方式",triggerHover:"悬停",triggerClick:"点击",mixSidebarFixed:"固定展开菜单",autoCollapseTabsInFold:"fold模式下自动收起标签页"},Me={footer:R,header:H,multipleTab:q,setting:W},ke=Object.freeze(Object.defineProperty({__proto__:null,default:Me,footer:R,header:H,multipleTab:q,setting:W},Symbol.toStringTag,{value:"Module"})),V="登录",Q="错误日志列表",ve={login:V,errorLogList:Q},$e=Object.freeze(Object.defineProperty({__proto__:null,default:ve,errorLogList:Q,login:V},Symbol.toStringTag,{value:"Module"})),G="Dashboard",J="关于",K="工作台",X="分析页",Pe={dashboard:G,about:J,workbench:K,analysis:X},Ce=Object.freeze(Object.defineProperty({__proto__:null,about:J,analysis:X,dashboard:G,default:Pe,workbench:K},Symbol.toStringTag,{value:"Module"})),Z={marking:"营销中心",goods:"商品管理",orders:"订单管理",net:"虚拟产品",real:"实物产品"},ee={title:"财务管理",withdraw:"提现管理",gold:"金豆管理",statement:"对账单"},te={title:"产品管理",mbox:"盲盒库存",goods:"商品库存"},oe={moduleName:"系统管理",account:"用户账号",vxeTableAccount:"账号管理(VxeTable)",account_detail:"账号详情",password:"修改密码",dept:"部门管理",menu:"菜单管理",role:"权限管理"},we={order:Z,financial:ee,product:te,system:oe},je=Object.freeze(Object.defineProperty({__proto__:null,default:we,financial:ee,order:Z,product:te,system:oe},Symbol.toStringTag,{value:"Module"})),le={operationSuccess:"操作成功",operationFailed:"操作失败",errorTip:"错误提示",successTip:"成功提示",errorMessage:"操作失败,系统异常!",timeoutMessage:"登录超时,请重新登录!",apiTimeoutMessage:"接口请求超时,请刷新页面重试!",apiRequestFailed:"请求出错，请稍候重试",networkException:"网络异常",networkExceptionMsg:"网络异常，请检查您的网络连接是否正常!",errMsg401:"用户没有权限（令牌、用户名、密码错误）!",errMsg403:"用户得到授权，但是访问是被禁止的。!",errMsg404:"网络请求错误,未找到该资源!",errMsg405:"网络请求错误,请求方法未允许!",errMsg408:"网络请求超时!",errMsg500:"服务器错误,请联系管理员!",errMsg501:"网络未实现!",errMsg502:"网络错误!",errMsg503:"服务不可用，服务器暂时过载或维护!",errMsg504:"网络超时!",errMsg505:"http版本不支持该请求!"},ne={logoutTip:"温馨提醒",logoutMessage:"是否确认退出系统?",menuLoading:"菜单加载中..."},ae={tableTitle:"错误日志列表",tableColumnType:"类型",tableColumnDate:"时间",tableColumnFile:"文件",tableColumnMsg:"错误信息",tableColumnStackMsg:"stack信息",tableActionDesc:"详情",modalTitle:"错误详情",fireVueError:"点击触发vue错误",fireResourceError:"点击触发资源加载错误",fireAjaxError:"点击触发ajax错误",enableMessage:"只在`/src/settings/projectSetting.ts` 内的useErrorHandle=true时生效."},re={backLogin:"返回登录",backHome:"返回首页",subTitle403:"抱歉，您无权访问此页面。",subTitle404:"抱歉，您访问的页面不存在。",subTitle500:"抱歉，服务器报告错误。",noDataTitle:"当前页无数据",networkErrorTitle:"网络错误",networkErrorSubTitle:"抱歉，您的网络连接已断开，请检查您的网络！"},ce={unlock:"点击解锁",alert:"锁屏密码错误",backToLogin:"返回登录",entry:"进入系统",placeholder:"请输入锁屏密码或者用户密码"},se={backSignIn:"返回",signInFormTitle:"登录",mobileSignInFormTitle:"手机登录",qrSignInFormTitle:"二维码登录",signUpFormTitle:"注册",forgetFormTitle:"重置密码",signInTitle:"开箱即用的中后台管理系统",signInDesc:"输入您的个人详细信息开始使用！",policy:"我同意xxx隐私政策",scanSign:'扫码后点击"确认"，即可完成登录',loginButton:"登录",registerButton:"注册",rememberMe:"记住我",forgetPassword:"忘记密码?",otherSignIn:"其他登录方式",loginSuccessTitle:"登录成功",loginSuccessDesc:"欢迎回来",accountPlaceholder:"请输入账号",passwordPlaceholder:"请输入密码",smsPlaceholder:"请输入验证码",mobilePlaceholder:"请输入手机号码",policyPlaceholder:"勾选后才能注册",diffPwd:"两次输入密码不一致",userName:"账号",password:"密码",confirmPassword:"确认密码",email:"邮箱",smsCode:"短信验证码",mobile:"手机号码"},De={api:le,app:ne,errorLog:ae,exception:re,lock:ce,login:se},Fe=Object.freeze(Object.defineProperty({__proto__:null,api:le,app:ne,default:De,errorLog:ae,exception:re,lock:ce,login:se},Symbol.toStringTag,{value:"Module"})),ze={locale:"zh_CN",today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",weekSelect:"选择周",clear:"清除",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",yearFormat:"YYYY年",dayFormat:"D日",dateFormat:"YYYY年M月D日",dateTimeFormat:"YYYY年M月D日 HH时mm分ss秒",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪"},ie={placeholder:"请选择时间",rangePlaceholder:["开始时间","结束时间"]},r={lang:d({placeholder:"请选择日期",yearPlaceholder:"请选择年份",quarterPlaceholder:"请选择季度",monthPlaceholder:"请选择月份",weekPlaceholder:"请选择周",rangePlaceholder:["开始日期","结束日期"],rangeYearPlaceholder:["开始年份","结束年份"],rangeMonthPlaceholder:["开始月份","结束月份"],rangeQuarterPlaceholder:["开始季度","结束季度"],rangeWeekPlaceholder:["开始周","结束周"]},ze),timePickerLocale:d({},ie)};r.lang.ok="确定";const e="${label}不是一个有效的${type}",u={locale:"zh-cn",Pagination:Te,DatePicker:r,TimePicker:ie,Calendar:r,global:{placeholder:"请选择"},Table:{filterTitle:"筛选",filterConfirm:"确定",filterReset:"重置",filterEmptyText:"无筛选项",filterCheckall:"全选",filterSearchPlaceholder:"在筛选项中搜索",selectAll:"全选当页",selectInvert:"反选当页",selectNone:"清空所有",selectionAll:"全选所有",sortTitle:"排序",expand:"展开行",collapse:"关闭行",triggerDesc:"点击降序",triggerAsc:"点击升序",cancelSort:"取消排序"},Tour:{Next:"下一步",Previous:"上一步",Finish:"结束导览"},Modal:{okText:"确定",cancelText:"取消",justOkText:"知道了"},Popconfirm:{cancelText:"取消",okText:"确定"},Transfer:{searchPlaceholder:"请输入搜索内容",itemUnit:"项",itemsUnit:"项",remove:"删除",selectCurrent:"全选当页",removeCurrent:"删除当页",selectAll:"全选所有",removeAll:"删除全部",selectInvert:"反选当页"},Upload:{uploading:"文件上传中",removeFile:"删除文件",uploadError:"上传错误",previewFile:"预览文件",downloadFile:"下载文件"},Empty:{description:"暂无数据"},Icon:{icon:"图标"},Text:{edit:"编辑",copy:"复制",copied:"复制成功",expand:"展开"},PageHeader:{back:"返回"},Form:{optional:"（可选）",defaultValidateMessages:{default:"字段验证错误${label}",required:"请输入${label}",enum:"${label}必须是其中一个[${enum}]",whitespace:"${label}不能为空字符",date:{format:"${label}日期格式无效",parse:"${label}不能转换为日期",invalid:"${label}是一个无效日期"},types:{string:e,method:e,array:e,object:e,number:e,date:e,boolean:e,integer:e,float:e,regexp:e,email:e,url:e,hex:e},string:{len:"${label}须为${len}个字符",min:"${label}最少${min}个字符",max:"${label}最多${max}个字符",range:"${label}须在${min}-${max}字符之间"},number:{len:"${label}必须等于${len}",min:"${label}最小值为${min}",max:"${label}最大值为${max}",range:"${label}须在${min}-${max}之间"},array:{len:"须为${len}个${label}",min:"最少${min}个${label}",max:"最多${max}个${label}",range:"${label}数量须在${min}-${max}之间"},pattern:{mismatch:"${label}与模式不匹配${pattern}"}}},Image:{preview:"预览"},QRCode:{expired:"二维码已过期",refresh:"点击刷新",scanned:"已扫描"}},m=Object.assign({"./zh-CN/antdLocale/DatePicker.json":xe,"./zh-CN/common.json":fe,"./zh-CN/component.json":Se,"./zh-CN/layout.json":ke,"./zh-CN/routes/basic.json":$e,"./zh-CN/routes/dashboard.json":Ce,"./zh-CN/routes/demo.json":je,"./zh-CN/sys.json":Fe}),Ee={message:a(n({},i(m,"zh-CN")),{antdLocale:a(n({},u),{DatePicker:be(u.DatePicker,i(m,"zh-CN").antdLocale.DatePicker)})})};export{Ee as default};