class AddPictureUrLtoBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :picture_url, :string
  end
end
