jQuery(document).ready(function($) {
	"use strict";
	$(formname).submit(function() {
		var f = $(this).find('.form-group'),
		ferror = false,
		emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
		f.children('input').each(function() {
			var i = $(this);
			var rule = i.attr('data-rule');
			if (rule !== undefined) {
				var ierror = false;
				var pos = rule.indexOf(':', 0);
				if (pos >= 0) {
					var exp = rule.substr(pos + 1, rule.length);
					rule = rule.substr(0, pos);
				} else {
					rule = rule.substr(pos + 1, rule.length);
				}
				switch (rule) {
					case 'required':
						if (i.val() === '') {
							ferror = ierror = true;
						}
						break;
					case 'minlen':
						if (i.val().length < parseInt(exp)) {
							ferror = ierror = true;
						}
						break;
					case 'email':
						if (!emailExp.test(i.val())) {
							ferror = ierror = true;
						}
						break;
					case 'checked':
						if (!i.attr('checked')) {
							ferror = ierror = true;
						}
						break;
					case 'regexp':
						exp = new RegExp(exp);
						if (!exp.test(i.val())) {
							ferror = ierror = true;
						}
						break;
				}
				i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
			}
		});
		f.children('textarea').each(function() {
			var i = $(this);
			var rule = i.attr('data-rule');
			if (rule !== undefined) {
				var ierror = false;
				var pos = rule.indexOf(':', 0);
				if (pos >= 0) {
					var exp = rule.substr(pos + 1, rule.length);
					rule = rule.substr(0, pos);
				} else {
					rule = rule.substr(pos + 1, rule.length);
				}
				switch (rule) {
					case 'required':
						if (i.val() === '') {
							ferror = ierror = true;
						}
						break;
					case 'minlen':
						if (i.val().length < parseInt(exp)) {
							ferror = ierror = true;
						}
						break;
				}
				i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
			}
		});
		if (ferror) {
			return false;
		} else {
			var str = $(this).serialize();
			$.ajax({
				type: "POST",
				data: str,
				url: submiturl,
				complete: function() {
					$("#sendmessage").addClass("show");
					$("#errormessage").removeClass("show");
					$('.contactForm').find("input, textarea").val("");
					if(goal) {
						_paq.push(['trackGoal', goal]);
					}
				}
			});
			return false;
		}
	});
});
