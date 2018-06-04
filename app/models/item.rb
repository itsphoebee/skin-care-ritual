class Item < ApplicationRecord
  has_many :steps
  has_many :rituals, :through => :steps
  validates :brand, :description, presence: true
  validates :price, presence: true, numericality: true
  validates :name, presence: true, uniqueness: {scope: :brand,
    message: "Product items under a brand should have unique names"}
end
