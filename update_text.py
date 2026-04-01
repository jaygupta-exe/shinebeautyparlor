import os
import re

replacements = {
    r"Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy\. Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore sed stet justo et dolor\.": "Experience ultimate relaxation and rejuvenation at Shine Beauty Parlour. We offer premium beauty services designed to enhance your natural glow and elevate your confidence.",
    
    r"Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc\. Nam dapibus interdum lacus, suscipit tempor odio viverra aliquam\. Etiam non ex ex\.": "At Shine Beauty Parlour, our mission is to bring out the best in you. With years of experience and a passion for beauty, our expert team uses top-quality products to provide personalized treatments that leave you feeling radiant and refreshed.",
    
    r"Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo et tempor eirmod magna dolore erat amet": "Indulge in our expert services tailored to your unique beauty needs. We guarantee a luxurious experience that leaves you looking stunning and feeling your absolute best.",
    
    r"Tempor erat elitr rebum at clita\. Diam dolor diam ipsum sit diam amet diam et eos\. Clita erat ipsum et lorem et sit\.": "Absolutely wonderful experience! The staff was incredibly professional and the service was exceptional. I always leave feeling beautiful and refreshed. Highly recommended!",
    
    r"Diam sed sed dolor stet amet eirmod": "Subscribe for the latest beauty tips and exclusive offers.",
    
    r">Your Site Name<": ">Shine Beauty Parlour<"
}

def clean_text(text):
    for pattern, replacement in replacements.items():
        # Replace spaces in the pattern with \s+ to match multiline wrapping
        regex_pattern = pattern.replace(' ', r'\s+')
        text = re.sub(regex_pattern, replacement, text)
    return text

directory = r"c:\Users\jaygu\Desktop\Salone"
count = 0

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = clean_text(content)
            
            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                count += 1
                print(f"Updated: {filepath}")

print(f"Total files updated: {count}")
