class Store < ApplicationRecord
    validates :name, presence: true
    validates :address, presence: true

    has_many :shoes
    has_many :users, through: :shoes
    has_many :brands, through: :shoes
end
