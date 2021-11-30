class Review < ApplicationRecord
    validates :rating, presence: true, inclusion: { in: (1..5) } 
    validates :body, presence: true

    belongs_to :business
    belongs_to :author,
        class_name: :User

    def average_rating
        reviews.average(:rating)
    end
end