//: Last edit 04/08/2018 - TvB
package com.cekeh.game.time;

/**
 * Cekeh's Time object
 * Keeps the game loop at a steady FPS
 * 04/08/2018
 * @author Thomas vanBommel (TvB)
 */
public class Time {

	public static final long NANOSECONDS_PER_SECOND = 1000000000;
	public static final long MILISECONDS_PER_SECOND = 1000000;
	
	//FPS the program will calculate for
	private int target_fps;
	
	//Counters for calculating FPS
	private int frame_count = 0;
	private long frame_time = 0;
	
	//Time at the last frame
	private long last_frame = System.nanoTime();
	
	//What we're doing all this calculating for, delta time ((time between frames) / second)
	private double delta_time = 1;
	
	//Current FPS
	private float fps = 0;
	
	//Debug mode, will print the FPS every second
	private boolean debug = false;
	
	/**
	 * Time will help maintain a steady FPS
	 * @param target_fps The FPS the program will calculate for
	 */
	public Time(int target_fps) {
		this.target_fps = target_fps;
	}
	
	/**
	 * Calculate delta_time
	 * Print out debug messages
	 */
	public void update() {
		frame_count++;
		
		long now = System.nanoTime();
		
		delta_time = (now - last_frame) / ((double) NANOSECONDS_PER_SECOND);
		
		frame_time += (now - last_frame);
		last_frame = now;
		
		if(frame_time > NANOSECONDS_PER_SECOND) {
			fps = frame_count * ((float) frame_time / NANOSECONDS_PER_SECOND);
			
			if(debug)
				System.out.println("FPS(" + fps + ")");
			
			frame_time = 0;
			frame_count = 0;
		}
	}
	
	/**
	 * Sleep the thread for the appropriate amount of time based of off target_fps
	 * @throws Exception Unable to sleep the thread
	 */
	public void sleep() {
		long sleep_time = (last_frame - System.nanoTime() + (NANOSECONDS_PER_SECOND / target_fps)) / MILISECONDS_PER_SECOND;
	
		if(sleep_time > 0) {
			try {
				Thread.sleep(sleep_time);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	/**
	 * Set debug mode
	 * Will print out the FPS once every second
	 * @param debug Debug mode true=on false=off
	 */
	public void setDebug(boolean debug) {
		this.debug = debug;
	}
	
	/**
	 * Get the delta_time we've calculated
	 * ((time between frames) / second)
	 * @return delta_time
	 */
	public double getDeltaTime() {
		return delta_time;
	}
}
