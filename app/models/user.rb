class User < ApplicationRecord
    has_secure_password
    has_many :shoes

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :balance, numericality: {greater_than_or_equal_to: 0 }
    validates :shoe_size, numericality: {greater_than: 3, less_than: 16}

end
