# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Business.destroy_all

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