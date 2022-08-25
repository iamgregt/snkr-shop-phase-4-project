# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

brands = ["Jordan", "Nike", "Addidas", "Puma", "Yeezy", "New Balance"]

stores = [
    finish_line = {
    name: "Finish Line",
    logo_url: "https://media.finishline.com/i/finishline/FNLLogo_1200x630"
},

foot_locker = {
    name: "Foot Locker",
    logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Foot_Locker_logo.svg/1200px-Foot_Locker_logo.svg.png"
},

hibbett_sports = {
    name: "Hibbett Sports",
    logo_url: "https://www.freelogovectors.net/wp-content/uploads/2022/07/hibbett-logo-freelogovectors.net_.png"
}
]

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

stores.each do |s|
    Store.create(
        name: s[:name],
        address: Faker::Address.full_address,
        logo_url: s[:logo_url]

    )
end

# 5.times do
#     Store.create(
#         name: Faker::Company.name,
#         address: Faker::Address.full_address
#     )
# end

brands.each do |b|
    Brand.create(
        name: b,   
        image_url: Faker::Company.logo
    )
    end

def is_jordan (num)
    if num == 1
        Faker::Number.between(from: 1, to:23)
    else  
    nil
    end
end


20.times do
    brand = Faker::Number.between(from: 1, to: 6)

    Shoe.create(
        name: Faker::Barcode.ean(8),
        # size: Faker::Number.between(from: 4, to: 15),
        brand_id: brand,
        in_stock: true,
        price: Faker::Number.between(from: 60, to: 300),
        model_num: is_jordan(brand),
        store_id: Faker::Number.between(from: 1, to: 3)
    )
        end


puts "Done seeding, mane!"