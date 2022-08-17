# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

brands = ["Jordan", "Nike", "Addidas", "Puma", "Yeezy", "New Balance"]

50.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    username = "#{first_name}_#{last_name}".downcase
    shoe_size = Faker::Number.between(from: 4, to: 15)
    balance = 2000.00
    favorite_brand = brands.sample
    age = Faker::Number.between(from: 16, to: 45)

    User.create(
        username: username,
        first_name: first_name,
        last_name: last_name,
        shoe_size: shoe_size,
        balance: balance,
        favorite_brand: favorite_brand,
        age: age
    )

end

5.times do
    Store.create(
        name: Faker::Company.name,
        address: Faker::Address.full_address
    )
end

puts "Done seeding, mane!"