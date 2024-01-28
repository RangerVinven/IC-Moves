import os
import shutil

files = os.listdir()
f = []
fo = []

for fi in files:
    if ".jpg" in fi:
        f.append(fi)
    else:
        fo.append(fi)

for i in range(len(fo)):
    shutil.move(f[i], fo[i]+"/5.jpg")
