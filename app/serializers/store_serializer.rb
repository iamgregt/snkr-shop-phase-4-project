class StoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :logo_url

  has_many :shoes
end
