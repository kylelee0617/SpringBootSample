package com.fg.web.controller.basic.basic;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fg.web.controller.BaseController;

@Controller
@RequestMapping("/page/basic/basic")
public class FE5P0501 extends BaseController {

	@RequestMapping("/custData")
	public String custData(Model model) {
		return "page/basic/basic/custData/FE5P0501";
	}
	
	
}
