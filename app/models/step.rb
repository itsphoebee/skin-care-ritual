class Step < ApplicationRecord
  belongs_to :ritual
  belongs_to :item
end
