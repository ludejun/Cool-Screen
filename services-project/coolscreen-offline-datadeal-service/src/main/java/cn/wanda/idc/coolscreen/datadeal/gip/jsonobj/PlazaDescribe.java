/**
 * 
 */
package cn.wanda.idc.coolscreen.datadeal.gip.jsonobj;

import java.io.Serializable;

/**
 * @author henry
 *
 */
public class PlazaDescribe implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -3639799792389188181L;
	private String sex_f;
	private String sex_m;
	private String marry_y;
	private String marry_n;
	private String age_youth;
	private String age_middle;
	private String age_old;
	private String vl_hight;
	private String vl_middle;
	private String vl_low;

	/**
	 * 
	 */
	public PlazaDescribe(double sex_f, double sex_m, double marry_y, double marry_n, double age_youth,
			double age_middle, double age_old, double vl_hight, double vl_middle, double vl_low) {
		this.sex_f = String.format("%.2f", sex_f);
		this.sex_m = String.format("%.2f", sex_m);
		this.marry_y = String.format("%.2f", marry_y);
		this.marry_n = String.format("%.2f", marry_n);
		this.age_youth = String.format("%.2f", age_youth);
		this.age_middle = String.format("%.2f", age_middle);
		this.age_old = String.format("%.2f", age_old);
		this.vl_hight = String.format("%.2f", vl_hight);
		this.vl_middle = String.format("%.2f", vl_middle);
		this.vl_low = String.format("%.2f", vl_low);
	}

}
