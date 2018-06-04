class Item < ApplicationRecord
  has_many :steps
  has_many :rituals, :through => :steps
  validates :name, :brand, :price, :description, presence: true
end
