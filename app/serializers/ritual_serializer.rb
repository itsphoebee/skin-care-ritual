class RitualSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :likes
  has_many :items
end
