class Business < ApplicationRecord
    validates :name, :category, :address, :city, :state, :zip_code, :phone_number, :lat, :long, presence: true

    has_many_attached :photos
end