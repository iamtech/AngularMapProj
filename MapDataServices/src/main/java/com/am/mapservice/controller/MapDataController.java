package com.am.mapservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.am.mapservice.model.PointBean;
import com.am.mapservice.repository.LocationDao;

@CrossOrigin
@Controller
public class MapDataController {
	
	@Autowired
	LocationDao locationDao;
	
	@RequestMapping("/getdata")
	public @ResponseBody List<PointBean> getLocationData(){
		
		return locationDao.getLocations();
	}
	
	
	@RequestMapping("/getnextdata")
	public @ResponseBody PointBean getNextLocationData(){
		
		return locationDao.getNextLocation();
	}
}
