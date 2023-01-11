for i in range(1,31):
    f = open(f"Q{i}.js", "a")
    f.write("Now the file has more content!")
    f.close()