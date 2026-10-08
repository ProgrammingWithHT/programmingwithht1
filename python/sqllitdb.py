# import sqlite3
# conn = sqlite3.connect('students.sqlite')  #connect with database //students is database name
# cmd = conn.cursor()

# rows = cmd.fetchmany()
# if rows is None:
#     cmd.execute("""CREATE TABLE Ages(
#              name VARCHAR(128),
#              age INTEGER
#              )"""
#          )


# def value_add(fname, age):
#     cmd.execute("INSERT INTO Ages VALUES (:name, :age)", {'name':fname, 'age':age})


# cmd.execute("DELETE FROM Ages")
# person = [('Emaly', 29), ('Shazil', 33), ('Kash', 23), ('Kelsay', 33)]
# for item in person:
#     name, age = item
#     value_add(name, age)

# cmd.execute("SELECT hex(name || age) AS X FROM Ages ORDER BY X")
# a = cmd.fetchall()
# print(list(a[0])[0])

# conn.commit()
# conn.close()


# import sqlite3
# db = sqlite3.connect(':memory:')
# cursor = db.cursor()
# cursor.execute('''
#     CREATE TABLE Ages ( 
#   name VARCHAR(128), 
#   age INTEGER
# )''')

# cursor.execute('''DELETE FROM Ages''')

# cursor.execute('''INSERT INTO Ages (name, age) VALUES ('Mara', 28)''')
# cursor.execute('''INSERT INTO Ages (name, age) VALUES ('Otto', 33)''')
# cursor.execute('''INSERT INTO Ages (name, age) VALUES ('Fyn', 31)''')
# cursor.execute('''INSERT INTO Ages (name, age) VALUES ('Neshawn', 17)''')

# cursor.execute('''SELECT hex(name || age) AS X FROM Ages ORDER BY X''')

# user = cursor.fetchone()

# print(user[0])

# db.commit()
# db.close()


# import re
# import sqlite3


# conn = sqlite3.connect('emaildb.sqlite')
# cur = conn.cursor()

# cur.execute('''
# DROP TABLE IF EXISTS Counts''')

# cur.execute('''
# CREATE TABLE Counts (org TEXT, count INTEGER)''')

# fname = input('Enter file name: ')
# if ( len(fname) < 1 ) : fname = 'mbox.txt'
# fh = open(fname)
# for line in fh:
# 	if not line.startswith('From: ') : continue
# 	pieces = line.split()[1]
# 	org = pieces.split('@')[1]


# 	print(org)
# 	cur.execute('SELECT count FROM Counts WHERE org = ? ', (org, ))
# 	row = cur.fetchone()
# 	if row is None:
# 		cur.execute('''INSERT INTO Counts (org, count)
# 				VALUES ( ?, 1 )''', ( org, ) )
# 	else :
# 		cur.execute('UPDATE Counts SET count=count+1 WHERE org = ?',
# 			(org, ))

# conn.commit()


# sqlstr = 'SELECT org, count FROM Counts ORDER BY count DESC LIMIT 10'

# print
# print("Counts:")
# for row in cur.execute(sqlstr) :
#     print(str(row[0]), row[1])

# cur.close()

import xml.etree.ElementTree as ET
import sqlite3

conn = sqlite3.connect('trackdb.sqlite')
cur = conn.cursor()

#Make some fresh tables using executescript()
cur.executescript('''
    DROP TABLE IF EXISTS Artist;
    DROP TABLE IF EXISTS Album;
    DROP TABLE IF EXISTS Track;

    CREATE TABLE Artist (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	name TEXT UNIQUE
)

    CREATE TABLE Album (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	artist_id INTEGER,
	name TEXT UNIQUE
)

    CREATE TABLE Track (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	title TEXT,
	album_id INTEGER,
	genre_id INTEGER,
	len INTEGER,
	rating INTEGER, 
	count INTEGER
)

''')

fname = input('Enter file name:')
if(len(fname)<1): fname = 'Library.xml'

#<key>Track ID</key><integer>369</integer>
#<key>Name</key><string>Another One Bites The Dust</string>
#<key>Artist</key><string>Queen</string>

def lookup(d,key):
    found = False
    for child in d:
        if found : return child.text
        if child.tag == 'key' and child.text == key :
            found = True
    return None

stuff = ET.parse(fname)
all = stuff.findall('dict/dict/dict')
print('Dict count:',len(all))
for entry in all:
    if(lookup(entry,'Track Id') is None): continue

    name = lookup(entry,'Name')
    artist = lookup(entry,'Artist')
    album = lookup(entry,'Album')
    count = lookup(entry,'Play Count')
    rating = lookup(entry,'Rating')
    lenght = lookup(entry,'Total Time')

    if name is None or artist is None or album is None :
        continue

    print(name,artist,album,count,rating,lenght)



