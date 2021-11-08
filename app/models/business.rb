class Business < ApplicationRecord
    validates :name, :category, :address, :city, :state, :zip_code, :phone_number, :lat, :long, presence: true

    has_many :reviews,
        foreign_key: :business_id
    
    has_many_attached :photos

    def average_rating
        reviews.average(:rating)
    end
end