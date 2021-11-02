class EditBusinesses < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :website
    add_column :businesses, :website, :string
  end
end
