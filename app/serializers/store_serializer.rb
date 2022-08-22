class StoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :logo_url, :summary
  has_many :shoes
  def summary
    "Currently has #{self.object.shoes.count} shoes in stock"
  end


end
