//: Last edit 04/10/2018 - TvB
package com.cekeh.utility.data_type;

/**
 * Cekeh's Vector4 <float> data type
 * 04/10/2018
 * @author Thomas vanBommel (TvB)
 */
public class Vector4f {

	public final float x;
	public final float y;
	public final float z;
	public final float w;
	
	/**
	 * Create default Vector4f <float[4]> { 0.0f, 0.0f, 0.0f, 0.0f }
	 */
	public Vector4f() {
		x = 0.0f;
		y = 0.0f;
		z = 0.0f;
		w = 0.0f;
	}
	
	/**
	 * Create a custom Vector4f <float[4]>
	 * @param x <float[0]> fist in the array, x axis
	 * @param y <float[1]> second in the array, y axis
	 * @param z <float[2]> third in the array, z axis
	 * @param w <float[3]> fourth in the array, w axis
	 */
	public Vector4f(float x, float y, float z, float w) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}
	
	/**
	 * Create a custom Vector4f <float[4]>
	 * @param xyzw Data to be place in the <float[4]> array
	 * @throws Exception Incorrect array length
	 */
	public Vector4f(float[] xyzw) throws Exception {
		if(xyzw.length != 4)
			throw new Exception("Trying to create Vector4f with a length of: " + xyzw.length);
		
		x = xyzw[0];
		y = xyzw[1];
		z = xyzw[2];
		w = xyzw[3];
	}
	
	/**
	 * Get the data from the Vector4f <float[4]>
	 * @return Data from the <float[4]> array, in the format (x, y, z, w)
	 */
	public float[] getData() {
		return new float[] { x, y, z, w };
	}
}
