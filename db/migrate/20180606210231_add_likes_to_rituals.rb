class AddLikesToRituals < ActiveRecord::Migration[5.1]
  def change
    add_column :rituals, :likes, :integer, :default => 0
  end
end
