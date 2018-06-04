class CreateRituals < ActiveRecord::Migration[5.1]
  def change
    create_table :rituals do |t|
      t.string :name
      t.text :description
      t.string :category

      t.timestamps
    end
  end
end
