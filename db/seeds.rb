# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
    phone_number: "16467679050",
    lat: 40.72727,
    long: -73.98585,
    website: "http://www.oijinyc.com/"
)

b2 = Business.create(
    name: "MáLà Project",
    category: "Szechuan",
    address: "122 1st Ave",
    city: "New York",
    state: "NY",
    zip_code: "10009",
    phone_number: "12123538880",
    lat: 40.72713,
    long: -73.98542,
    website: "https://www.malaproject.nyc/"
)

b3 = Business.create(
    name: "J-Spec",
    category: "Japanese",
    address: "239 E 5th St",
    city: "New York",
    state: "NY",
    zip_code: "10003",
    phone_number: "12122870107",
    lat: 40.72699,
    long: -73.98922,
    website: "https://www.jspec-ny.com/"
)

b4 = Business.create(
    name: "Cha-An",
    category: "Japanese",
    address: "230 E 9th St",
    city: "New York",
    state: "NY",
    zip_code: "10003",
    phone_number: "12122288030",
    lat: 40.72947,
    long: -73.98813,
    website: "https://www.chaanteahouse.com/"
)

b5 = Business.create(
    name: "Madame Vo",
    category: "Vietnamese",
    address: "212 E 10th St",
    city: "New York",
    state: "NY",
    zip_code: "10003",
    phone_number: "19172612115",
    lat: 40.72925,
    long: -73.98612,
    website: "https://www.madamevo.com/"
)

b6 = Business.create(
    name: "JeJu Noodle Bar",
    category: "Korean",
    address: "679 Greenwich St",
    city: "New York",
    state: "NY",
    zip_code: "10014",
    phone_number: "16466660947",
    lat: 40.73304,
    long: -74.00734,
    website: "https://www.jejunoodlebar.com/"
)

b7 = Business.create(
    name: "Szechuan Mountain House",
    category: "Szechuan",
    address: "23 St Marks Pl",
    city: "New York",
    state: "NY",
    zip_code: "10003",
    phone_number: "19173883866",
    lat: 40.72911,
    long: -73.98858,
    website: "https://www.szechuanmountainhouse.com/"
)

b8 = Business.create(
    name: "Hirohisa",
    category: "Japanese",
    address: "73 Thompson St",
    city: "New York",
    state: "NY",
    zip_code: "10012",
    phone_number: "12129251613",
    lat: 40.724597,
    long: -74.003174,
    website: "https://www.hirohisa.nyc/"
)

b9 = Business.create(
    name: "Kang Ho Dong Baekjeong",
    category: "Korean",
    address: "1 E 32nd St",
    city: "New York",
    state: "NY",
    zip_code: "10016",
    phone_number: "12129669839",
    lat: 40.747173576622,
    long: -73.9852144232788,
    website: "https://www.baekjeongnyc.com/"
)

b10 = Business.create(
    name: "Cho Dang Gol Korean Restaurant",
    category: "Korean",
    address: "55 W 35th St",
    city: "New York",
    state: "NY",
    zip_code: "10001",
    phone_number: "12126958222",
    lat: 40.7502365112305,
    long: -73.986198425293,
    website: "https://chodanggolnyc.com/"
)