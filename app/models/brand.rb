class Brand < ApplicationRecord
    validates :name, presence: true
    validates :image_url, presence: true

    has_many :shoes
    has_many :stores
end
