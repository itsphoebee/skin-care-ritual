class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :description, :price, :image
  has_many :rituals
end
