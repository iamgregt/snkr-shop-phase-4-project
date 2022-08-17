class CreateShoes < ActiveRecord::Migration[6.1]
  def change
    create_table :shoes do |t|
      t.integer :model_num
      t.string :name
      t.integer :brand_id
      t.boolean :in_stock
      t.integer :price

      t.timestamps
    end
  end
end
