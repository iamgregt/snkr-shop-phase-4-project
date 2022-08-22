class StoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :logo_url
end
