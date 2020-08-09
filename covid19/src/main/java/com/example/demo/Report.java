package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class Report {
	@RequestMapping("home")
	public ModelAndView home() {
		ModelAndView mv =new ModelAndView();
		mv.setViewName("covid19");
		return mv;
	}
	@RequestMapping("tamilnadu")
	public ModelAndView tamilnadu() {
		ModelAndView mtv =new ModelAndView();
		mtv.setViewName("tamilnadu");
		return mtv;
	}
}
