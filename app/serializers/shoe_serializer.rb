class ShoeSerializer < ActiveModel::Serializer
  attributes :id, :model_num, :name, :brand_id, :in_stock, :price
end
