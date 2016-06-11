jQuery.extend(jQuery.validator.messages, {  
        required: "必选字段",  
  remote: "请修正该字段",  
  email: "请输入正确格式的电子邮件",  
  url: "请输入合法的网址",  
  date: "请输入合法的日期",  
  dateISO: "请输入合法的日期 (ISO).",  
  number: "请输入合法的数字",  
  digits: "只能输入整数",  
  creditcard: "请输入合法的信用卡号",  
  equalTo: "请再次输入相同的值",  
  accept: "请输入拥有合法后缀名的字符串",  
  maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"),  
  minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"),  
  rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),  
  range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),  
  max: jQuery.validator.format("请输入一个最大为 {0} 的值"),  
  min: jQuery.validator.format("请输入一个最小为 {0} 的值")  
});
jQuery.validator.addMethod("mobile", function(c, a) {
	var b = c.length;
	return this.optional(a)
			|| (b == 11 && /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(c))
}, "请正确填写您的手机号码");
//真实姓名验证
jQuery.validator.addMethod("realName", function(value, element) {
    return this.optional(element) || /^[\u4e00-\u9fa5]{2,30}$/.test(value);
}, "姓名只能为2-30个汉字");