# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Business.delete_all

u1 = User.create(
    first_name: 'Demo',
    last_name: 'User',
    email: 'demouser@mail.com',
    password: 'demouser',
    zip_code: 11361
)

b1 = Business.create(
    name: "Oiji",
    category: "Korean",
    address: "119 1st Ave",
    city: "New York",
    state: "NY",
    zip_code: "10003",
    phone_number: "(646) 767-9050",
    lat: 40.72727,
    long: -73.98585,
    website: "http://www.oijinyc.com/",
    price: "$$$",
    hours: "5:00 PM - 10:00 PM"
)

b2 = Business.create(
    name: "MáLà Project",
    category: "Szechuan",
    address: "122 1st Ave",
    city: "New York",
    state: "NY",
    zip_code: "10009",
    phone_number: "(212) 353-8880",
    lat: 40.72713,
    long: -73.98542,
    website: "https://www.malaproject.nyc/",
    price: "$$",
    hours: "12:00 PM - 9:15 PM"
)

b3 = Business.create(
    name: "J-Spec",
    category: "Japanese",
    address: "239 E 5th St",
    city: "New York",
    state: "NY",
    zip_code: "10003",
    phone_number: "(212) 287-0107",
    lat: 40.72699,
    long: -73.98922,
    website: "https://www.jspec-ny.com/",
    price: "$$$",
    hours: "5:00 PM - 11:00 PM"
)

b4 = Business.create(
    name: "Cha-An",
    category: "Japanese",
    address: "230 E 9th St",
    city: "New York",
    state: "NY",
    zip_code: "10003",
    phone_number: "(212) 228-8030",
    lat: 40.72947,
    long: -73.98813,
    website: "https://www.chaanteahouse.com/",
    price: "$$",
    hours: "1:00 PM - 8:00 PM"
)

b5 = Business.create(
    name: "Madame Vo",
    category: "Vietnamese",
    address: "212 E 10th St",
    city: "New York",
    state: "NY",
    zip_code: "10003",
    phone_number: "(917) 261-2115",
    lat: 40.72925,
    long: -73.98612,
    website: "https://www.madamevo.com/",
    price: "$$",
    hours: "12:00 PM - 10:00 PM"
)

b6 = Business.create(
    name: "JeJu Noodle Bar",
    category: "Korean",
    address: "679 Greenwich St",
    city: "New York",
    state: "NY",
    zip_code: "10014",
    phone_number: "(646) 666-0947",
    lat: 40.73304,
    long: -74.00734,
    website: "https://www.jejunoodlebar.com/",
    price: "$$$",
    hours: "5:00 PM - 10:00 PM"
)

b7 = Business.create(
    name: "Szechuan Mountain House",
    category: "Szechuan",
    address: "23 St Marks Pl",
    city: "New York",
    state: "NY",
    zip_code: "10003",
    phone_number: "(917) 388-3866",
    lat: 40.72911,
    long: -73.98858,
    website: "https://www.szechuanmountainhouse.com/",
    price: "$$",
    hours: "11:30 AM - 10:30 PM"
)

b8 = Business.create(
    name: "Hirohisa",
    category: "Japanese",
    address: "73 Thompson St",
    city: "New York",
    state: "NY",
    zip_code: "10012",
    phone_number: "(212) 925-1613",
    lat: 40.724597,
    long: -74.003174,
    website: "https://www.hirohisa.nyc/",
    price: "$$$$",
    hours: "12:00 PM - 9:30 PM"
)

b9 = Business.create(
    name: "Kang Ho Dong Baekjeong",
    category: "Korean",
    address: "1 E 32nd St",
    city: "New York",
    state: "NY",
    zip_code: "10016",
    phone_number: "(212) 966-9839",
    lat: 40.747173576622,
    long: -73.9852144232788,
    website: "https://www.baekjeongnyc.com/",
    price: "$$$",
    hours: "12:30 PM - 11:00 PM"
)

b10 = Business.create(
    name: "Cho Dang Gol Korean Restaurant",
    category: "Korean",
    address: "55 W 35th St",
    city: "New York",
    state: "NY",
    zip_code: "10001",
    phone_number: "(212) 695-8222",
    lat: 40.7502365112305,
    long: -73.986198425293,
    website: "https://chodanggolnyc.com/",
    price: "$$",
    hours: "12:00 PM - 9:30 PM"
)

#Oiji
oiji1 = open('https://yump-seeds.s3.amazonaws.com/oiji1.jpeg')
oiji2 = open('https://yump-seeds.s3.amazonaws.com/oiji2.jpeg')
oiji3 = open('https://yump-seeds.s3.amazonaws.com/oiji3.jpeg')
b1.photos.attach(io: oiji1, filename: 'oiji-1')
b1.photos.attach(io: oiji2, filename: 'oiji-2')
b1.photos.attach(io: oiji3, filename: 'oiji-3')

#Mala
mala1 = open('https://yump-seeds.s3.amazonaws.com/mala1.jpeg')
mala2 = open('https://yump-seeds.s3.amazonaws.com/mala2.jpeg')
mala3 = open('https://yump-seeds.s3.amazonaws.com/mala3.jpeg')
b2.photos.attach(io: mala1, filename: 'mala-1')
b2.photos.attach(io: mala2, filename: 'mala-2')
b2.photos.attach(io: mala3, filename: 'mala-3')

#jspec
jspec1 = open('https://yump-seeds.s3.amazonaws.com/jspec1.jpeg')
jspec2 = open('https://yump-seeds.s3.amazonaws.com/jspec2.jpeg')
jspec3 = open('https://yump-seeds.s3.amazonaws.com/jspec3.jpeg')
b3.photos.attach(io: jspec1, filename: 'jspec-1')
b3.photos.attach(io: jspec2, filename: 'jspec-2')
b3.photos.attach(io: jspec3, filename: 'jspec-3')

#cha-an
chaan1 = open('https://yump-seeds.s3.amazonaws.com/chaan1.jpeg')
chaan2 = open('https://yump-seeds.s3.amazonaws.com/chaan2.JPG')
chaan3 = open('https://yump-seeds.s3.amazonaws.com/chaan3.jpeg')
b4.photos.attach(io: chaan1, filename: 'chaan-1')
b4.photos.attach(io: chaan2, filename: 'chaan-2')
b4.photos.attach(io: chaan3, filename: 'chaan-3')


#madame vo
madamevo1 = open('https://yump-seeds.s3.amazonaws.com/madamevo1.jpeg')
madamevo2 = open('https://yump-seeds.s3.amazonaws.com/madamevo2.jpeg')
madamevo3 = open('https://yump-seeds.s3.amazonaws.com/madamevo3.jpeg')
b5.photos.attach(io: madamevo1, filename: 'madamevo-1')
b5.photos.attach(io: madamevo2, filename: 'madamevo-2')
b5.photos.attach(io: madamevo3, filename: 'madamevo-3')

#jeju
jeju1 = open('https://yump-seeds.s3.amazonaws.com/jeju1.jpeg')
jeju2 = open('https://yump-seeds.s3.amazonaws.com/jeju2.jpeg')
jeju3 = open('https://yump-seeds.s3.amazonaws.com/jeju3.jpeg')
b6.photos.attach(io: jeju1, filename: 'jeju-1')
b6.photos.attach(io: jeju2, filename: 'jeju-2')
b6.photos.attach(io: jeju3, filename: 'jeju-3')

#mountain
mountain1 = open('https://yump-seeds.s3.amazonaws.com/mountain1.jpeg')
mountain2 = open('https://yump-seeds.s3.amazonaws.com/mountain2.jpeg')
mountain3 = open('https://yump-seeds.s3.amazonaws.com/mountain3.jpeg')
b7.photos.attach(io: mountain1, filename: 'mountain-1')
b7.photos.attach(io: mountain2, filename: 'mountain-2')
b7.photos.attach(io: mountain3, filename: 'mountain-3')

#hirohisa
hirohisa1 = open('https://yump-seeds.s3.amazonaws.com/hirohisa1.jpeg')
hirohisa2 = open('https://yump-seeds.s3.amazonaws.com/hirohisa2.jpeg')
hirohisa3 = open('https://yump-seeds.s3.amazonaws.com/hirohisa3.jpeg')
b8.photos.attach(io: hirohisa1, filename: 'hirohisa-1')
b8.photos.attach(io: hirohisa2, filename: 'hirohisa-2')
b8.photos.attach(io: hirohisa3, filename: 'hirohisa-3')

#baekjeong
baekjeong1 = open('https://yump-seeds.s3.amazonaws.com/baekjeong1.jpeg')
baekjeong2 = open('https://yump-seeds.s3.amazonaws.com/baekjeong2.jpeg')
baekjeong3 = open('https://yump-seeds.s3.amazonaws.com/baekjeong3.jpeg')
b9.photos.attach(io: baekjeong1, filename: 'baekjeong-1')
b9.photos.attach(io: baekjeong2, filename: 'baekjeong-2')
b9.photos.attach(io: baekjeong3, filename: 'baekjeong-3')

#chodang
chodanggol1 = open('https://yump-seeds.s3.amazonaws.com/chodanggol1.jpeg')
chodanggol2 = open('https://yump-seeds.s3.amazonaws.com/chodanggol2.jpeg')
chodanggol3 = open('https://yump-seeds.s3.amazonaws.com/chodanggol3.jpeg')
b10.photos.attach(io: chodanggol1, filename: 'chodanggol-1')
b10.photos.attach(io: chodanggol2, filename: 'chodanggol-2')
b10.photos.attach(io: chodanggol3, filename: 'chodanggol-3')