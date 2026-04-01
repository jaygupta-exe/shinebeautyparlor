import os

directory = r"c:\Users\jaygu\Desktop\Salone"
count = 0

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if there's already an active favicon link
            if '<link rel="icon"' not in content and '<link href="img/favicon.ico" rel="icon">' not in content:
                # Add favicon link under the <!-- Favicon --> comment
                target = "<!-- Favicon -->\n"
                replacement = "<!-- Favicon -->\n    <link rel=\"icon\" href=\"./img/logo.png\">\n"
                
                new_content = content.replace(target, replacement)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    count += 1
                    print(f"Updated: {filepath}")

print(f"Total files updated: {count}")
