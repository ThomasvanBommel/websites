package loader;

import java.awt.color.ColorSpace;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;
import java.awt.image.DataBuffer;
import java.awt.image.DataBufferByte;
import java.awt.image.DataBufferUShort;
import java.awt.image.SampleModel;
import java.awt.image.WritableRaster;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.net.URI;
import java.nio.ByteBuffer;
import java.nio.ShortBuffer;

import javax.imageio.ImageIO;

import org.lwjgl.opengl.GL11;
import org.lwjgl.opengl.GL12;

public class ResourceLoader {

	//-Load text from a file, line by line
	public static String loadPlainText(String path) {
		String text = "";
		
		try {
			BufferedReader reader = new BufferedReader(new FileReader("src/resources/" + path));
			String line;
			
			while((line = reader.readLine()) != null) {
				text += line + "\n";
			}
			
			reader.close();
		} catch(Exception e){
			e.printStackTrace();
		}
		
		return text;
	}
	
	//-Load buffered image from a file
	public static BufferedImage loadBufferedImage(String path) {
		BufferedImage image = null;
		
		URI uri;
		
		try {
			uri = ResourceLoader.class.getResource("/resources/" + path).toURI();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
		try {
			image = ImageIO.read(new File(uri));
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
		return image;
	}
	
	//-Grab all the pixels from an image, returns 0-1 (float) RGBA
//	public static float[] getImageColors(BufferedImage image) {
//		short[] data = ((DataBufferUShort) image.getRaster().getDataBuffer()).getData();
//		float[] colors = new float[data.length];
//		
//		for(int i = 0; i < data.length; i++) {
//			colors[i] = data[i] / 255;
//			
//			if(data[i] < 0) {
//				colors[i] = 1;
//			}
//		}
//		
//		return colors;
//	}
	
	public static void cacheImageToGPU(BufferedImage image) {		
		DataBuffer image_buffer = image.getRaster().getDataBuffer();
		
		if(image_buffer.getDataType() != DataBuffer.TYPE_USHORT) {
			System.out.println("Could not load image, incorrect format.");
			return;
		}
		
		DataBufferUShort ushort_buffer = (DataBufferUShort) image_buffer;
		
		GL11.glTexImage2D(
				GL11.GL_TEXTURE_2D, 0,
				GL11.GL_RGBA,
				image.getWidth(),
				image.getHeight(), 0,
				GL11.GL_RGBA,
				GL11.GL_UNSIGNED_SHORT,
				ushort_buffer.getData()
		);
	}
	
	public static short[] getUShortBuffer(BufferedImage image) {
		return ((DataBufferUShort) image.getRaster().getDataBuffer()).getData();
	}
	
	public static ByteBuffer getUByteBuffer(BufferedImage image) {
		if(image == null)
			System.out.println("Image is null");
		byte[] pixels = ((DataBufferByte) image.getRaster().getDataBuffer()).getData();
		System.out.println(pixels.length);
		//for(int i = 0; i < pixels.length; i++)
			//System.out.println(pixels[i]);
				
		return ByteBuffer.wrap(pixels);
	}
}
