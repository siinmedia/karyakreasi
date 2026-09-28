"""
Generate a workshop-branded favicon (no third-party branding).

Design mirrors the site header logo: dark charcoal rounded square with a
lime "K/" mark, matching the site palette in src/styles.css.
"""

from PIL import Image, ImageDraw, ImageFont
import os

BG = (30, 30, 27, 255)          # charcoal
LIME = (168, 233, 58, 255)      # accent / lime
SIZE = 256
RADIUS = 56                     # rounded square corner radius


def find_font(size: int):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/usr/share/fonts/truetype/freefont/FreeSansBold.ttf",
        "/usr/share/fonts/TTF/DejaVuSans-Bold.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def build(size: int) -> Image.Image:
    scale = size / SIZE
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    draw.rounded_rectangle(
        [(0, 0), (size - 1, size - 1)],
        radius=max(2, int(RADIUS * scale)),
        fill=BG,
    )

    # "K/" displayed as K + slash, sized to sit comfortably inside the square.
    font = find_font(int(size * 0.60))
    text = "K/"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (size - tw) / 2 - bbox[0]
    y = (size - th) / 2 - bbox[1] - int(size * 0.02)
    draw.text((x, y), text, font=font, fill=LIME)

    return img


base = build(SIZE)
base.save("public/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
base.resize((180, 180), Image.LANCZOS).save("public/apple-touch-icon.png")
base.resize((192, 192), Image.LANCZOS).save("public/icon-192.png")
base.resize((512, 512), Image.LANCZOS).save("public/icon-512.png")
base.resize((256, 256), Image.LANCZOS).save("/tmp/fav-new.png")
print("favicon written")
