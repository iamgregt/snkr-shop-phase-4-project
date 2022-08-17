class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.integer :shoe_size
      t.float :balance
      t.string :favorite_brand
      t.integer :age

      t.timestamps
    end
  end
end
