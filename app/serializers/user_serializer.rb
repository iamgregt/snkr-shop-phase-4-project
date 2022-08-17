class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :shoe_size, :balance, :favorite_brand, :age
end
