class ReviewRequest < ApplicationRecord
  belongs_to :user
  has_many :source_files
end
