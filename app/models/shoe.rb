class Shoe < ApplicationRecord
    validates :name, presence: true
    # validates :size, numericality: {greater_than: 4, less_than: 16}
    validates :brand_id, presence: true
    validates :in_stock, presence: true
    validates :price, presence: true
    validates :price, numericality: {greater_than_or_equal_to: 1, less_than: 2001}

    has_many :stores
    belongs_to :brand

end
