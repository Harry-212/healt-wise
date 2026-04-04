import sys
from PIL import Image

def remove_white_bg(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        new_data = []
        for item in datas:
            # If the pixel is close to white, make it transparent
            if item[0] > 230 and item[1] > 230 and item[2] > 230:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print("Success")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

remove_white_bg(r"C:\Users\Arya\.gemini\antigravity\brain\debfe22c-fe56-42a2-898f-dfe7dd3d784a\media__1775276745467.png", r"C:\Healt Wise\healt-wise\public\logo-transparent.png")
