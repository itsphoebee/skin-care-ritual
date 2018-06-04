class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :description, :price
  has_many :rituals
end
