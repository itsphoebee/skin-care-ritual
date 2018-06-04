class CreateSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :steps do |t|
      t.integer :ritual_id
      t.integer :item_id

      t.timestamps
    end
  end
end
