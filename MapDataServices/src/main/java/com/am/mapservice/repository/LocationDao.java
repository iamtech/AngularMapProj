package com.am.mapservice.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.am.mapservice.model.PointBean;

@Repository
public class LocationDao {
	
	static private int current=-1;
	private List<PointBean> locationList = new ArrayList<>();
	private List<PointBean> newLocationList = new ArrayList<>();
	
	public LocationDao(){
			
			PointBean tcb = new PointBean(28.575003, 77.393721);
			locationList.add(tcb);
			tcb = new PointBean(28.573637, 77.393834);
			locationList.add(tcb);
			
			// new data
			tcb = new PointBean(28.572183, 77.393964);
			newLocationList.add(tcb);
			tcb = new PointBean(28.572070, 77.393835);
			newLocationList.add(tcb);
			tcb = new PointBean(28.571938, 77.393503);
			newLocationList.add(tcb);
			tcb = new PointBean(28.571816, 77.390993);
			newLocationList.add(tcb);
			tcb = new PointBean(28.571599, 77.386927);
			newLocationList.add(tcb);
			tcb = new PointBean(28.571439, 77.384117);
			newLocationList.add(tcb);
			tcb = new PointBean(28.571192, 77.379109);
			newLocationList.add(tcb);
	}
	
	public List<PointBean> getLocations(){
		
		return locationList;
	}
	
	public PointBean getNextLocation(){
		current ++;
		if(current == newLocationList.size())
			current = 0;
		return newLocationList.get(current);
	}
}
