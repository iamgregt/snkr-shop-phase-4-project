class AddLogoUrlToStores < ActiveRecord::Migration[6.1]
  def change
    add_column :stores, :logo_url, :string
  end
end
