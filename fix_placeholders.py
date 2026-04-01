import os
import re

html_files = []
for root, dirs, files in os.walk(r"c:\Users\jaygu\Desktop\Salone"):
    for file in files:
        if file.endswith(".html"):
            html_files.append(os.path.join(root, file))

# We want to replace "Client Name" with actual names
names = ["Sarah Johnson", "Emily Davis", "Jessica Smith", "Amanda Brown"]
professions = ["Regular Client", "Beauty Blogger", "Fashion Model", "Makeup Artist"]

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace basic strings
    content = content.replace("123 Street, New York, USA", "123 Shine Street, NY 10001")
    content = content.replace("+012 345 67890", "+1 234 567 8900")
    content = content.replace("info@example.com", "contact@shinebeauty.com")
    content = content.replace("info@domain.com", "contact@shinebeauty.com")
    content = content.replace("+0123456789", "+1 234 567 8900")
    content = content.replace("+123456789", "+1 234 567 8900")

    # Replace Client Names cyclically
    # Using a simple sub function to cycle through names
    name_idx = 0
    def rep_name(match):
        global name_idx
        res = names[name_idx % len(names)]
        name_idx += 1
        return res
    content = re.sub(r"Client Name", rep_name, content)

    # Reset for professions to keep them aligned
    prof_idx = 0
    def rep_prof(match):
        global prof_idx
        res = professions[prof_idx % len(professions)]
        prof_idx += 1
        return res
    content = re.sub(r"Profession", rep_prof, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated remaining placeholders.")
