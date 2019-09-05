package time;

public class Time {
	
	//-How many nanoseconds are in a second, and how many milliseconds are in a second
	private final long SECOND_NS = 1000000000;
	private final long SECOND_MS = 1000000;
	
	//-Target FPS for our loop
	private final int TARGET_FPS;
	
	//-If true we will print the FPS and delta time
	private boolean debug;
	
	//-Current FPS
	private float fps = 0;
	
	//-Time it takes, frame to frame
	private double delta_time = 1;
	
	//-Keep track of what time the last frame was at, so we can calculate delta time
	private long last_frame = System.nanoTime();
	
	//-Keep tract of frames in the last second, so we can calculate the FPS
	private int frame_count = 0;
	private long frame_time = 0;
	
	//-Constructor, set the TARGET_FPS
	public Time(int TARGET_FPS, boolean debug) {
		this.TARGET_FPS = TARGET_FPS;
		this.debug = debug;
	}
	
	//-Start of the newest frame, set up our delta time, calculate our FPS
	public void update() {
		frame_count++;
		
		long now = System.nanoTime();
		
		delta_time = (now - last_frame) / ((double) SECOND_NS);
		frame_time += (now - last_frame);
		last_frame = now;
		
		if(frame_time >= SECOND_NS) {
			fps = frame_count * ((float) frame_time / SECOND_NS);
			
			if(debug)
				System.out.println(String.format("FPS( %1$.2f ) DELTA( %2$.5f )", fps, delta_time));
			
			frame_time = 0;
			frame_count = 0;
		}
	}
	
	//-Sleep for the correct amount of time to allow for us to reach our TARGET_FPS
	public void sleep() {
		long time = (last_frame - System.nanoTime() + (SECOND_NS / TARGET_FPS)) / SECOND_MS;
	
		if(time > 0) {
			try {
				Thread.sleep(time);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	//-Delta time getter
	public double getDeltaTime() {
		return delta_time;
	}
	
	//-Get the current FPS
	public float getFPS() {
		return fps;
	}
}
