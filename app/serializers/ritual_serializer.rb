class RitualSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category
  has_many :items
end
