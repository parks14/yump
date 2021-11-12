# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
ApplicationRecord.connection.reset_pk_sequence!('users')
Business.delete_all
ApplicationRecord.connection.reset_pk_sequence!('businesses')
Review.delete_all
ApplicationRecord.connection.reset_pk_sequence!('reviews')

u1 = User.create(
    first_name: 'Demo',
    last_name: 'User',
    email: 'demouser@mail.com',
    password: 'demouser',
    zip_code: '11361'
)

u2 = User.create(
    first_name: 'Sohee',
    last_name: 'Park',
    email: 'soheep@mail.com',
    password: 'soheepark',
    zip_code: '11361'
)

u3 = User.create(
    first_name: 'Matt',
    last_name: 'Swedin',
    email: 'matt@mail.com',
    password: 'mattswedin',
    zip_code: '11211'
)

u4 = User.create(
    first_name: 'Subin',
    last_name: 'Cho',
    email: 'subin@mail.com',
    password: 'subincho',
    zip_code: '08003'
)

u5 = User.create(
    first_name: 'Suzanne',
    last_name: 'Li',
    email: 'suzanne@mail.com',
    password: 'suzanneli',
    zip_code: '11214'
)

u6 = User.create(
    first_name: 'Maddie',
    last_name: 'Wilson',
    email: 'maddie@mail.com',
    password: 'maddiewilson',
    zip_code: '10310'
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
oiji4 = open('https://yump-seeds.s3.amazonaws.com/oiji4.jpeg')
b1.photos.attach(io: oiji1, filename: 'oiji-1')
b1.photos.attach(io: oiji2, filename: 'oiji-2')
b1.photos.attach(io: oiji3, filename: 'oiji-3')
b1.photos.attach(io: oiji4, filename: 'oiji-4')

#Mala
mala1 = open('https://yump-seeds.s3.amazonaws.com/mala1.jpeg')
mala2 = open('https://yump-seeds.s3.amazonaws.com/mala2.jpeg')
mala3 = open('https://yump-seeds.s3.amazonaws.com/mala3.jpeg')
mala4 = open('https://yump-seeds.s3.amazonaws.com/mala4.jpeg')
b2.photos.attach(io: mala1, filename: 'mala-1')
b2.photos.attach(io: mala2, filename: 'mala-2')
b2.photos.attach(io: mala3, filename: 'mala-3')
b2.photos.attach(io: mala4, filename: 'mala-4')

#jspec
jspec1 = open('https://yump-seeds.s3.amazonaws.com/jspec1.jpeg')
jspec2 = open('https://yump-seeds.s3.amazonaws.com/jspec2.jpeg')
jspec3 = open('https://yump-seeds.s3.amazonaws.com/jspec3.jpeg')
jspec4 = open('https://yump-seeds.s3.amazonaws.com/jspec4.jpeg')
b3.photos.attach(io: jspec1, filename: 'jspec-1')
b3.photos.attach(io: jspec2, filename: 'jspec-2')
b3.photos.attach(io: jspec3, filename: 'jspec-3')
b3.photos.attach(io: jspec4, filename: 'jspec-4')

#cha-an
chaan1 = open('https://yump-seeds.s3.amazonaws.com/chaan1.jpeg')
chaan2 = open('https://yump-seeds.s3.amazonaws.com/chaan2.JPG')
chaan3 = open('https://yump-seeds.s3.amazonaws.com/chaan3.jpeg')
chaan4 = open('https://yump-seeds.s3.amazonaws.com/chaan4.jpeg')
b4.photos.attach(io: chaan1, filename: 'chaan-1')
b4.photos.attach(io: chaan2, filename: 'chaan-2')
b4.photos.attach(io: chaan3, filename: 'chaan-3')
b4.photos.attach(io: chaan4, filename: 'chaan-4')


#madame vo
madamevo1 = open('https://yump-seeds.s3.amazonaws.com/madamevo1.jpeg')
madamevo2 = open('https://yump-seeds.s3.amazonaws.com/madamevo2.jpeg')
madamevo3 = open('https://yump-seeds.s3.amazonaws.com/madamevo3.jpeg')
madamevo4 = open('https://yump-seeds.s3.amazonaws.com/madamevo4.jpeg')
b5.photos.attach(io: madamevo1, filename: 'madamevo-1')
b5.photos.attach(io: madamevo2, filename: 'madamevo-2')
b5.photos.attach(io: madamevo3, filename: 'madamevo-3')
b5.photos.attach(io: madamevo4, filename: 'madamevo-4')

#jeju
jeju1 = open('https://yump-seeds.s3.amazonaws.com/jeju1.jpeg')
jeju2 = open('https://yump-seeds.s3.amazonaws.com/jeju2.jpeg')
jeju3 = open('https://yump-seeds.s3.amazonaws.com/jeju3.jpeg')
jeju4 = open('https://yump-seeds.s3.amazonaws.com/jeju4.jpeg')
b6.photos.attach(io: jeju1, filename: 'jeju-1')
b6.photos.attach(io: jeju2, filename: 'jeju-2')
b6.photos.attach(io: jeju3, filename: 'jeju-3')
b6.photos.attach(io: jeju4, filename: 'jeju-4')

#mountain
mountain1 = open('https://yump-seeds.s3.amazonaws.com/mountain1.jpeg')
mountain2 = open('https://yump-seeds.s3.amazonaws.com/mountain2.jpeg')
mountain3 = open('https://yump-seeds.s3.amazonaws.com/mountain3.jpeg')
mountain4 = open('https://yump-seeds.s3.amazonaws.com/mountain4.jpeg')
b7.photos.attach(io: mountain1, filename: 'mountain-1')
b7.photos.attach(io: mountain2, filename: 'mountain-2')
b7.photos.attach(io: mountain3, filename: 'mountain-3')
b7.photos.attach(io: mountain4, filename: 'mountain-4')

#hirohisa
hirohisa1 = open('https://yump-seeds.s3.amazonaws.com/hirohisa1.jpeg')
hirohisa2 = open('https://yump-seeds.s3.amazonaws.com/hirohisa2.jpeg')
hirohisa3 = open('https://yump-seeds.s3.amazonaws.com/hirohisa3.jpeg')
hirohisa4 = open('https://yump-seeds.s3.amazonaws.com/hirohisa4.jpeg')
b8.photos.attach(io: hirohisa1, filename: 'hirohisa-1')
b8.photos.attach(io: hirohisa2, filename: 'hirohisa-2')
b8.photos.attach(io: hirohisa3, filename: 'hirohisa-3')
b8.photos.attach(io: hirohisa4, filename: 'hirohisa-4')

#baekjeong
baekjeong1 = open('https://yump-seeds.s3.amazonaws.com/baekjeong1.jpeg')
baekjeong2 = open('https://yump-seeds.s3.amazonaws.com/baekjeong2.jpeg')
baekjeong3 = open('https://yump-seeds.s3.amazonaws.com/baekjeong3.jpeg')
baekjeong4 = open('https://yump-seeds.s3.amazonaws.com/baekjeong4.jpeg')
b9.photos.attach(io: baekjeong1, filename: 'baekjeong-1')
b9.photos.attach(io: baekjeong2, filename: 'baekjeong-2')
b9.photos.attach(io: baekjeong3, filename: 'baekjeong-3')
b9.photos.attach(io: baekjeong4, filename: 'baekjeong-4')

#chodang
chodanggol1 = open('https://yump-seeds.s3.amazonaws.com/chodanggol1.jpeg')
chodanggol2 = open('https://yump-seeds.s3.amazonaws.com/chodanggol2.jpeg')
chodanggol3 = open('https://yump-seeds.s3.amazonaws.com/chodanggol3.jpeg')
chodanggol4 = open('https://yump-seeds.s3.amazonaws.com/chodanggol4.jpeg')
b10.photos.attach(io: chodanggol1, filename: 'chodanggol-1')
b10.photos.attach(io: chodanggol2, filename: 'chodanggol-2')
b10.photos.attach(io: chodanggol3, filename: 'chodanggol-3')
b10.photos.attach(io: chodanggol4, filename: 'chodanggol-4')

r1 = Review.create(
    author_id: u1.id,
    business_id: b1.id,
    body: "The food was very good, and the service was excellet!",
    rating: 5
)

r2 = Review.create(
    author_id: u2.id,
    business_id: b1.id,
    body: "Very good food, I will be going back",
    rating: 4
)

r3 = Review.create(
    author_id: u3.id,
    business_id: b2.id,
    body: "Food is good, I wished it was a bit brighter inside",
    rating: 4
)

r4 = Review.create(
    author_id: u4.id,
    business_id: b2.id,
    body: "I like that you get a whole list of ingredients you can choose from.",
    rating: 5
)

r5 = Review.create(
    author_id: u5.id,
    business_id: b3.id,
    body: "I wish they had more variety in their menu",
    rating: 3
)

r6 = Review.create(
    author_id: u1.id,
    business_id: b3.id,
    body: "Very good quality wagyu",
    rating: 4
)

r7 = Review.create(
    author_id: u2.id,
    business_id: b4.id,
    body: "Love the desserts here, so good!",
    rating: 5
)

r8 = Review.create(
    author_id: u3.id,
    business_id: b4.id,
    body: "I like their matcha green tea drinks",
    rating: 4
)

r9 = Review.create(
    author_id: u4.id,
    business_id: b5.id,
    body: "I think their pho a little too bland for my taste",
    rating: 3
)

r10 = Review.create(
    author_id: u5.id,
    business_id: b5.id,
    body: "It was just okay",
    rating: 4
)

r11 = Review.create(
    author_id: u1.id,
    business_id: b6.id,
    body: "I love their ssambap, something I always get!",
    rating: 5
)

r12 = Review.create(
    author_id: u2.id,
    business_id: b6.id,
    body: "Ironically, I did not enjoy their noodle dishes too much",
    rating: 4
)

r13 = Review.create(
    author_id: u3.id,
    business_id: b7.id,
    body: "I love Szechuan food, and theirs is amazing!",
    rating: 5
)

r14 = Review.create(
    author_id: u4.id,
    business_id: b7.id,
    body: "My favorite place to go to when I'm craving something spicy!",
    rating: 5
)

r15 = Review.create(
    author_id: u5.id,
    business_id: b8.id,
    body: "Tried their omakase, it was an enjoyable experience",
    rating: 4
)

r16 = Review.create(
    author_id: u1.id,
    business_id: b8.id,
    body: "I like uni, and their uni bowls were great!",
    rating: 5
)

r17 = Review.create(
    author_id: u2.id,
    business_id: b9.id,
    body: "Korean bbq cant go wrong.",
    rating: 5
)

r18 = Review.create(
    author_id: u3.id,
    business_id: b9.id,
    body: "The wait time gets too long over the weekends",
    rating: 4
)

r19 = Review.create(
    author_id: u4.id,
    business_id: b10.id,
    body: "Place to go when I'm craving spicy tofu soup",
    rating: 5
)

r20 = Review.create(
    author_id: u5.id,
    business_id: b10.id,
    body: "I love the atmosphere at this place!",
    rating: 5
)

r21 = Review.create(
    author_id: u6.id,
    business_id: b1.id,
    body: "Korean food was so good here!!!",
    rating: 5
)

r22 = Review.create(
    author_id: u6.id,
    business_id: b2.id,
    body: "I would recommend this place to others.",
    rating: 4
)

r23 = Review.create(
    author_id: u6.id,
    business_id: b3.id,
    body: "Quality of food was great, love the wagyu",
    rating: 5
)