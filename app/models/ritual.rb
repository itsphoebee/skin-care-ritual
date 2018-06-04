class Ritual < ApplicationRecord
  has_many :steps
  has_many :items, :through => :steps
  validates :name, :description, :category, presence: true
end
