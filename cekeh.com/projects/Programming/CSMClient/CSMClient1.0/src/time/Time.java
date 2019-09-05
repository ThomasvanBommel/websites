package time;

public class Time {

	public static int TARGET_FPS = 60;
	public static float FPS = 0;
	public static double DELTA = 1;
	
	static long now;
	static long last_tick = System.nanoTime();
	static int fps_counter = 0;
	static long fps_time = 0;
	
	public static void timeUpdate(){
		now = System.nanoTime();
		DELTA = (now - last_tick) / ((double) 1000000000);
		fps_time += (now - last_tick);
		last_tick = now;
		
		fps_counter++;
		
		if(fps_time >= 1000000000) {
			FPS = fps_counter * ((float) fps_time / 1000000000);
			
			System.out.println(String.format("FPS: %.2f", FPS));
			
			fps_time = 0;
			fps_counter = 0;
		}
	}
	
	public static void timeSleep() {
		long sleep_time = (last_tick - System.nanoTime() + (1000000000 / TARGET_FPS)) / 1000000;
		
		if(sleep_time > 0) { 
			try { 
				Thread.sleep(sleep_time); 
			} catch (Exception e) { 
				e.printStackTrace(); 
			} 
		}
	}
}
