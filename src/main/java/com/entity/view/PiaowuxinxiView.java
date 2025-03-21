package com.entity.view;

import com.entity.PiaowuxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 票务信息
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-04-23 17:22:01
 */
@TableName("piaowuxinxi")
public class PiaowuxinxiView  extends PiaowuxinxiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public PiaowuxinxiView(){
	}
 
 	public PiaowuxinxiView(PiaowuxinxiEntity piaowuxinxiEntity){
 	try {
			BeanUtils.copyProperties(this, piaowuxinxiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
